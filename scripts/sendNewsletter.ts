/**
 * Newsletter sender — runs in CI after a push that touches reports.ts.
 *
 * Rules:
 *  - Only the single newest report (top of reports.ts) is ever a candidate, so
 *    the backlog is never mass-mailed. Order-based, not date-based, because the
 *    CI runner's wall clock is unreliable against the reports' publish dates.
 *  - newsletter_sends (service-role only) dedupes: each report is emailed once.
 *  - Exits 0 quietly when secrets are missing or there is nothing to send,
 *    so the publish workflow never turns red for a non-error.
 *
 * Env: SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, NEWSLETTER_FROM (optional)
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@supabase/supabase-js';
import { reports } from '../src/data/reports';

const SITE = 'https://quadrix.finance';
const SUPABASE_URL = 'https://mevrwtzquadthtbzqmdu.supabase.co';
const FROM = process.env.NEWSLETTER_FROM || 'Nexus One Research <research@n1dv.io>';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const resendKey = process.env.RESEND_API_KEY;

// Category accent, matching the site badge tones (green / sky / violet),
// dark enough to read on a white email background.
const BADGE: Record<string, { color: string; bg: string }> = {
  'DEEP RESEARCH': { color: '#059669', bg: '#ECFDF5' },
  'WEEKLY BRIEF': { color: '#0284C7', bg: '#F0F9FF' },
  'QUARTERLY REPORT': { color: '#7C3AED', bg: '#F5F3FF' },
};

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Escape, keep **bold** as <strong>, strip footnote superscripts, trim to one sentence / ~180 chars. */
function cleanHighlight(raw: string): string {
  let t = raw
    .replace(/^[•\-*]\s+/, '')
    .replace(/^\d+\.\s+/, '') // strip leading "1. " so we can renumber uniformly
    .replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  // first sentence if the item is long
  const dot = t.search(/\.\s/);
  if (dot > 60 && dot < t.length - 1) t = t.slice(0, dot + 1);
  if (t.length > 200) t = t.slice(0, 197).trimEnd() + '…';
  return escapeHtml(t).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

/**
 * Pull 3-4 highlight lines from the report's markdown TL;DR / Key Takeaways /
 * Executive Summary section. Handles the three report shapes: bullet lists
 * (deep research), bold numbered headlines (weekly), and prose (quarterly).
 */
export function extractHighlights(id: string): string[] {
  const path = join(ROOT, 'public/content/insights', `${id}.md`);
  if (!existsSync(path)) return [];
  const lines = readFileSync(path, 'utf8').split('\n');
  const start = lines.findIndex((l) =>
    /^#{1,4}\s.*(tl;?dr|key takeaways|executive summary)/i.test(l)
  );
  if (start < 0) return [];

  const bullets: string[] = [];
  const boldHeads: string[] = [];
  const paras: string[] = [];
  for (let i = start + 1; i < lines.length; i++) {
    const l = lines[i].trim();
    if (/^#{1,4}\s/.test(l) && (bullets.length || boldHeads.length || paras.length)) break;
    if (/^#{1,4}\s/.test(l) || l === '' || l === '---') continue;
    if (/^[•\-*]\s+/.test(l)) bullets.push(l);
    else if (/^\*\*.+\*\*/.test(l)) boldHeads.push(l.match(/^\*\*(.+?)\*\*/)![1]);
    else if (l.length > 40) paras.push(l);
    if (bullets.length >= 4 || boldHeads.length >= 4 || paras.length >= 3) break;
  }
  const chosen = bullets.length >= 2 ? bullets : boldHeads.length >= 2 ? boldHeads : paras;
  return chosen.slice(0, 4).map(cleanHighlight).filter(Boolean);
}

export function emailHtml(
  title: string,
  description: string,
  url: string,
  category: string,
  highlights: string[] = []
): string {
  const badge = BADGE[category] ?? BADGE['DEEP RESEARCH'];
  const accent = badge.color;
  const highlightHtml = highlights.length
    ? highlights
        .map(
          (h) =>
            `<p style="color:#374151;font-size:14px;line-height:1.6;margin:0 0 16px;"><span style="color:#9ca3af;font-weight:bold;">&bull;</span>&nbsp; ${h}</p>`
        )
        .join('')
    : '';
  // Light theme: email clients (Gmail etc.) can't be trusted to honor a dark
  // background, and would leave light text unreadable. color-scheme:light also
  // stops dark-mode clients from auto-inverting the palette.
  return `<!DOCTYPE html>
<html>
  <head>
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
  </head>
  <body style="margin:0;padding:0;background:#f4f4f5;color-scheme:light;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;padding:40px 32px;">
      <p style="display:inline-block;background:${badge.bg};border:1px solid ${accent};color:${accent};border-radius:6px;padding:4px 12px;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin:0 0 20px;">${category}</p>
      <h1 style="color:#111827;font-size:26px;line-height:1.3;margin:0 0 16px;">${title}</h1>
      <p style="color:#4b5563;font-size:15px;line-height:1.6;margin:0 0 24px;">${description}</p>
      ${highlightHtml}
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:32px;">
        <tr>
          <td align="left" style="vertical-align:middle;">
            <a href="${url}" style="display:inline-block;background:#111827;color:#ffffff;font-weight:bold;font-size:14px;padding:13px 30px;border-radius:8px;text-decoration:none;">Read the full report &rarr;</a>
          </td>
          <td align="right" style="vertical-align:bottom;">
            <span style="font-family:'Oxanium',Arial,sans-serif;font-size:14px;font-weight:600;letter-spacing:4px;color:#9ca3af;">QUADRIX</span>
          </td>
        </tr>
      </table>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0 20px;" />
      <p style="color:#9ca3af;font-size:12px;line-height:1.6;margin:0;">
        You are receiving this because you subscribed on quadrix.finance.
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

  // Only the single latest report (top of reports.ts) is ever a candidate.
  // Order-based, not date-based: the CI runner's wall clock can't be trusted
  // against the reports' dates, so "newest = array top" is the reliable signal
  // and the backlog can never be mass-mailed.
  const latest = reports.find((r) => r.link);
  if (!latest) {
    console.log('[newsletter] no linkable reports — nothing to send.');
    return;
  }

  const { data: sent, error: sentErr } = await supabase
    .from('newsletter_sends')
    .select('report_id')
    .eq('report_id', latest.id);
  if (sentErr) throw new Error(`send-log read failed: ${sentErr.message}`);
  if (sent && sent.length > 0) {
    console.log(`[newsletter] latest report "${latest.id}" already sent — nothing to do.`);
    return;
  }

  const { data: subs, error: subErr } = await supabase
    .from('newsletter_subscribers')
    .select('email');
  if (subErr) throw new Error(`subscriber read failed: ${subErr.message}`);
  const emails = (subs ?? []).map((s) => s.email);

  const url = `${SITE}${latest.link}`;
  const description = (latest.description || latest.summary || '').slice(0, 400);
  const category = latest.badge?.text ?? latest.category;
  const highlights = extractHighlights(latest.id);
  let delivered = 0;

  // Resend allows 2 requests/sec and up to 100 messages per batch call.
  // Space batches out and retry once on 429.
  for (let i = 0; i < emails.length; i += 100) {
    const batch = emails.slice(i, i + 100).map((to) => ({
      from: FROM,
      to: [to],
      subject: `${category}: ${latest.title}`,
      html: emailHtml(latest.title, description, url, category, highlights),
    }));
    let attempt = 0;
    for (;;) {
      const res = await fetch('https://api.resend.com/emails/batch', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(batch),
      });
      if (res.ok) break;
      if (res.status === 429 && attempt < 3) {
        attempt++;
        await new Promise((r) => setTimeout(r, 1000 * attempt));
        continue;
      }
      throw new Error(`Resend HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
    }
    delivered += batch.length;
    await new Promise((r) => setTimeout(r, 600)); // stay under 2 req/s
  }

  const { error: logErr } = await supabase
    .from('newsletter_sends')
    .insert({ report_id: latest.id, recipient_count: delivered });
  if (logErr) throw new Error(`send-log write failed: ${logErr.message}`);
  console.log(`[newsletter] "${latest.title}" → ${delivered} recipient(s) (logged).`);
}

main().catch((e) => {
  console.error('[newsletter] FAILED:', e instanceof Error ? e.message : e);
  process.exit(1);
});
