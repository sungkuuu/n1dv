# nexusonecap.com — maintenance intake plan

**Goal:** bring the agency-built `nexusonecap.com` company site in-house so we can
maintain it ourselves and (optionally) fold the Insight/research surface into it.

Status: **awaiting handover.** The agency (contact: ㄱ김지완) is packaging the source
via their developer. This doc is the receiving end — it maps the six items we
requested to what we verify/decide the moment the package lands, so integration
isn't blocked on re-asking.

Related: `docs/quadrix-architecture.md` (the three-domain deployment) lists the
Insight re-theme + `nexusonecap.com/insight` fold as *deferred until this source is
available*. This is that source.

---

## What we requested (and why)

1. **Full source code** — original repo/Git history or a zip, **not** the built output.
2. **Tech stack** — framework / CMS / page-builder.
3. **Content management model** — is there a CMS admin, or is copy hardcoded?
4. **Build & deploy** — local run → deploy, end to end.
5. **Assets & licenses + `.env`** — fonts, images, and any config/secrets.
6. **Current hosting + domain/DNS** — where it's served and how DNS points at it.

## On-receipt checklist — verify before we touch anything

| # | Item | Verify on receipt | Blocks integration if missing |
|---|------|-------------------|-------------------------------|
| 1 | Source | Repo/zip opens; is it the *source* (not `dist/`/minified build)? Git history present? | Yes — can't maintain a build artifact |
| 2 | Stack | Identify: framework (Next/Vite/plain HTML?), CMS (WordPress/Webflow/Framer/none?), page-builder | Determines path A vs B below |
| 3 | Content | Where does copy live — CMS DB export, markdown, or hardcoded JSX/HTML? | Yes if CMS — need the export too, not just code |
| 4 | Build/deploy | Reproduce locally: install → dev → build. Note exact commands + node version | Yes — must build clean before we redeploy |
| 5 | Assets/licenses | Fonts licensed for our use? Stock images licensed? `.env` keys received **separately/securely** (never in the zip)? | Legal risk on fonts/images |
| 6 | Hosting/DNS | Current host (Cafe24/Gabia/Vercel/etc.), domain registrar (Gabia per our setup), current A/CNAME records | Yes — needed to cut over DNS |

> **Secrets:** `.env` values (API keys, DB creds) must arrive over a secure channel,
> not in the shared zip or chat. If they land in the zip, treat them as compromised
> and rotate.

## Two integration paths — decide once stack is known (item 2/3)

**Path A — keep it as its own site, we just take over hosting.**
- The agency site stays a separate codebase; we host + maintain it.
- Our deployment keeps serving `insights.nexusonecap.com` (research subdomain) alongside.
- Pick this if the stack is heavy/CMS-bound (WordPress, Webflow export, etc.) or not
  cleanly portable.

**Path B — fold Insight into `nexusonecap.com/insight` (one domain).**
- If the agency source is clean static/portable (plain HTML or a Vite/Next app we can
  read), merge our research surface under `nexusonecap.com/insight` and drop the separate
  `insights.` subdomain.
- Pick this if the source is small, static, and license-clean. Simpler DNS, one brand
  surface.

**Decision criteria:** portability of the stack (item 2), whether content is
CMS-locked vs hardcoded (item 3), and font/image license portability (item 5).

## DNS / cutover notes (independent of source — can prep now)

- Registrar is **Gabia** (same as the pending `insights.nexusonecap.com` CNAME).
- Before cutover: record the *current* live A/CNAME/MX so we can roll back.
- If Path B: `nexusonecap.com` apex + `www` point at Cloudflare Pages; keep MX (email)
  untouched.
- If Path A: point at wherever we host the agency site; still keep MX untouched.
- The pending `insights.nexusonecap.com` CNAME → Cloudflare Pages is only needed if we
  stay on Path A. Path B makes it redundant.

## Legal / brand guardrails (from architecture doc — keep intact)

- Fund operation not yet licensed → **N1DV fund philosophy stays separate** from
  `nexusonecap.com`; the company site is company/research, not fund marketing.
- All returns presented as **Simulated / Seed Stage** wherever research is syndicated.
- Confirm font & image licenses transfer to us (item 5) before republishing.

## Next actions once the package lands

1. Run the on-receipt checklist above; flag any missing item back to the agency in one message.
2. Reproduce the build locally (item 4); pin node version + commands here.
3. Choose Path A or B and note the decision + reason in this file.
4. Record current DNS, then plan the cutover window.
