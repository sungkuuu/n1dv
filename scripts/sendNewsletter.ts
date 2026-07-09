/**
 * Newsletter sender — runs in CI after a push that touches reports.ts.
 *
 * Rules:
 *  - Only reports dated within the last RECENT_DAYS are candidates, so the
 *    48-report backlog is never mass-mailed on first run.
 *  - newsletter_sends (service-role only) dedupes: each report is emailed once.
 *  - Exits 0 quietly when secrets are missing or there is nothing to send,
 *    so the publish workflow never turns red for a non-error.
 *
 * Env: SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, NEWSLETTER_FROM (optional)
 */
import { createClient } from '@supabase/supabase-js';
import { reports } from '../src/data/reports';

const SITE = 'https://n1dv.io';
const SUPABASE_URL = 'https://mevrwtzquadthtbzqmdu.supabase.co';
const RECENT_DAYS = 3;
const FROM = process.env.NEWSLETTER_FROM || 'Nexus One Research <research@n1dv.io>';

const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const resendKey = process.env.RESEND_API_KEY;

function emailHtml(title: string, description: string, url: string, category: string): string {
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
      <p style="color:#9ca3af;font-size:12px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;margin:0 0 24px;">Nexus One Research</p>
      <p style="display:inline-block;border:1px solid #34d399;color:#34d399;border-radius:6px;padding:4px 12px;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin:0 0 16px;">${category}</p>
      <h1 style="color:#ffffff;font-size:26px;line-height:1.3;margin:0 0 16px;">${title}</h1>
      <p style="color:#94a3b8;font-size:15px;line-height:1.6;margin:0 0 28px;">${description}</p>
      <a href="${url}" style="display:inline-block;background:#f3f4f6;color:#111827;font-weight:bold;font-size:14px;padding:12px 28px;border-radius:8px;text-decoration:none;">Read the report →</a>
      <hr style="border:none;border-top:1px solid #1f2937;margin:40px 0 20px;" />
      <p style="color:#4b5563;font-size:12px;line-height:1.6;margin:0;">
        You are receiving this because you subscribed on n1dv.io.
        To unsubscribe, reply with "unsubscribe" or email
        <a href="mailto:partner@nexusonecap.com?subject=Unsubscribe" style="color:#6b7280;">partner@nexusonecap.com</a>.
        This email is for informational purposes only and is not investment advice.
      </p>
    </div>
  </body>
</html>`;
}

async function main(): Promise<void> {
  if (!serviceKey || !resendKey) {
    console.log('[newsletter] secrets not configured (SUPABASE_SERVICE_ROLE_KEY / RESEND_API_KEY) — skipping send.');
    return;
  }
  const supabase = createClient(SUPABASE_URL, serviceKey);

  const cutoff = new Date(Date.now() - RECENT_DAYS * 86_400_000).toISOString().slice(0, 10);
  const candidates = reports.filter((r) => r.link && r.date >= cutoff);
  if (candidates.length === 0) {
    console.log('[newsletter] no reports newer than', cutoff, '— nothing to send.');
    return;
  }

  const { data: sent, error: sentErr } = await supabase
    .from('newsletter_sends')
    .select('report_id')
    .in('report_id', candidates.map((r) => r.id));
  if (sentErr) throw new Error(`send-log read failed: ${sentErr.message}`);
  const sentIds = new Set((sent ?? []).map((s) => s.report_id));
  const fresh = candidates.filter((r) => !sentIds.has(r.id));
  if (fresh.length === 0) {
    console.log('[newsletter] all recent reports already sent.');
    return;
  }

  const { data: subs, error: subErr } = await supabase
    .from('newsletter_subscribers')
    .select('email');
  if (subErr) throw new Error(`subscriber read failed: ${subErr.message}`);
  const emails = (subs ?? []).map((s) => s.email);
  if (emails.length === 0) {
    console.log('[newsletter] 0 subscribers — marking reports as sent without emailing.');
  }

  for (const r of fresh) {
    const url = `${SITE}${r.link}`;
    const description = (r.description || r.summary || '').slice(0, 400);
    let delivered = 0;

    // Resend batch endpoint accepts up to 100 messages per call
    for (let i = 0; i < emails.length; i += 100) {
      const batch = emails.slice(i, i + 100).map((to) => ({
        from: FROM,
        to: [to],
        subject: `${r.badge?.text ?? r.category}: ${r.title}`,
        html: emailHtml(r.title, description, url, r.badge?.text ?? r.category),
      }));
      const res = await fetch('https://api.resend.com/emails/batch', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(batch),
      });
      if (!res.ok) throw new Error(`Resend HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
      delivered += batch.length;
    }

    const { error: logErr } = await supabase
      .from('newsletter_sends')
      .insert({ report_id: r.id, recipient_count: delivered });
    if (logErr) throw new Error(`send-log write failed: ${logErr.message}`);
    console.log(`[newsletter] "${r.title}" → ${delivered} recipients (logged).`);
  }
}

main().catch((e) => {
  console.error('[newsletter] FAILED:', e instanceof Error ? e.message : e);
  process.exit(1);
});
