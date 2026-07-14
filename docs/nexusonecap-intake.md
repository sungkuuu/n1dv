# nexusonecap.com — maintenance intake plan

**Goal:** bring the agency-built `nexusonecap.com` company site in-house so we can
maintain it ourselves and (optionally) fold the Insight/research surface into it.

Status: **handover response received (2026-07-14) — it's a Webflow site, no code
repo.** The agency (contact: ㄱ김지완) answered all six questions (below). The premise
we planned around — "source arrives as a Git repo / zip" — does **not** hold: the site
was built and is hosted entirely on **Webflow**, so there is no source codebase to
receive. That changes the integration options (see revised paths below).

Related: `docs/quadrix-architecture.md` (the three-domain deployment) lists the
Insight re-theme + `nexusonecap.com/insight` fold as *deferred until this source is
available*. There is no portable source, so that fold now means **rebuild**, not merge.

---

## What we requested (and why)

1. **Full source code** — original repo/Git history or a zip, **not** the built output.
2. **Tech stack** — framework / CMS / page-builder.
3. **Content management model** — is there a CMS admin, or is copy hardcoded?
4. **Build & deploy** — local run → deploy, end to end.
5. **Assets & licenses + `.env`** — fonts, images, and any config/secrets.
6. **Current hosting + domain/DNS** — where it's served and how DNS points at it.

## Handover response (2026-07-14) — as answered by the agency

| # | Item | Answer | What it means for us |
|---|------|--------|----------------------|
| 1 | Source | **No Git repo.** Site was built, reviewed, and hosted entirely in **Webflow.** | Nothing to clone. "Source" = the Webflow project itself. To own it we take over the Webflow workspace, or rebuild. |
| 2 | Stack | 3-tier; **CMS is Webflow's** built-in CMS. | No framework/repo of our own to inherit. Locked to Webflow's visual builder + CMS. |
| 3 | Content model | Content managed in **Webflow CMS** (same as #2). | Copy lives in Webflow CMS collections, not in code/markdown. No portable export handed over. |
| 4 | Build/deploy | No separate build. Changes are **published instantly from within Webflow.** | No CI, no build step. Editing = logging into Webflow. |
| 5 | Assets/licenses | Fonts under **Open Font License (OFL)**; no other proprietary assets held. | License-clean and portable. Fonts are reusable; nothing else to license-check. ✅ |
| 6 | Hosting | Webflow hosting, running on **AWS** (Webflow-managed). | We don't hold the infra; it's Webflow's managed hosting. |
| 6-1 | DNS | **A record only → `198.202.211.1`.** | Single A record at apex. See DNS notes below — verify this before any cutover. |

**Bottom line:** there is no codebase, no build, no CMS export to receive — it's a
fully Webflow-hosted, Webflow-CMS site. Bringing maintenance "in-house" therefore
means one of the two revised paths below, not importing source.

### Vendor, cost & renewal deadline (from Webflow invoice, seen 2026-07-14)

- **Agency = ADALL Inc.** (`adall.co.kr`, contact Kim Jiwan / 김지완). The Webflow
  subscription is billed to **ADALL's own workspace + card** — so while the site stays on
  Webflow, hosting *and* billing sit with the agency, not us.
- **Plan:** Webflow **CMS Hosting, $276 / year**, Site ID `nexus-one`.
- **Renewal: 2026-07-29** (term Jul 29 2025 → Jul 29 2026). That's a natural forcing
  function — migrating off Webflow and cancelling before renewal saves the next $276/yr and
  cuts the agency-billing dependency.
- Confirms the plan is a paid Site tier → **Export Code is available** (rebuild input #1 below).

**Post-migration cost:** on our **Cloudflare Pages** deployment, a static/small site like
this hosts on the **free tier (~$0/yr)**. So Path 2 doesn't just remove the agency-billing
dependency — it takes hosting from **$276/yr → ~$0** (only domain renewal remains). Paying
recurring hosting is normal; paying it *through the agency's account/card* is the part we're
ending.

**Timing options:** (a) sprint to migrate before **Jul 29** and cancel; or (b) let it renew
once (or have ADALL not renew) and migrate at a calmer pace within the year. Decide once we
have the Export ZIP and can gauge the rebuild size.

> **DNS sanity check:** Webflow's own published hosting A records are typically
> `75.2.70.75` and `99.83.190.102` (two records) plus a `www` CNAME to
> `proxy-ssl.webflow.com`. A single custom A record at `198.202.211.1` doesn't match
> that pattern — confirm what it actually resolves to (and whether `www` works) before
> planning any cutover, so we don't cut over against a stale/partial record.

## Two integration paths (revised for the Webflow reality)

Since there's no repo to import, "fold the clean source into our app" is off the table.
The real choice is **keep Webflow** or **rebuild**.

**Path 1 — stay on Webflow, take over the account.**
- Get the agency to **transfer the Webflow project/workspace** (or invite us as owner)
  and move billing to us. Maintenance = editing in Webflow, publishing instantly.
- Our Cloudflare deployment keeps serving `insights.nexusonecap.com` (research) separately.
- Pros: zero rebuild, content stays live. Cons: ongoing Webflow subscription, two systems
  (Webflow site + our React app), can't fold Insight into the same domain cleanly.
- **Must obtain:** Webflow workspace ownership + billing transfer, and the domain/DNS
  controls. Without account transfer we can't actually maintain it — a code handover
  doesn't exist.

**Path 2 — rebuild `nexusonecap.com` in our codebase, drop Webflow.**
- Recreate the (small, static) company site as pages in this Vite/React app on Cloudflare
  Pages, then optionally serve Insight at `nexusonecap.com/insight` (one domain, kills the
  separate `insights.` subdomain).
- Content is only a handful of company pages + CMS entries — re-authoring is feasible since
  there's no export to migrate anyway. Fonts are OFL, so reusable.
- Pros: one stack, one deploy, no Webflow bill, full control, matches the architecture doc's
  "fold into `nexusonecap.com/insight`" goal. Cons: upfront rebuild effort; need to capture
  the current copy/layout from the live Webflow site first.

**Decision (working, 2026-07-14): Path 2 — rebuild, drop Webflow.** Reasoning: the site is
small and static, we already run a Vite/React app on Cloudflare, and Path 1 (account
transfer) would keep an ongoing Webflow bill + a second system and can't fold Insight into
one domain. Also, we don't want the agency's whole Webflow **workspace** (it holds their
other clients' sites); a single-site transfer is possible but buys us little vs. rebuilding.

### We are NOT rebuilding blind — "no Git repo" ≠ "no exportable code"

Webflow can hand us the finished site as real files. The rebuild inputs:

1. **Webflow "Export Code" ZIP** (Designer → Export Code) — the built, static
   **HTML + CSS + JS + all image assets**, exactly as published. This is the primary
   source of truth; ask the agency (or do it ourselves with Designer access) to produce it.
2. **CMS collections → CSV export** (Webflow CMS lets you export each collection). Covers
   any dynamic content (e.g. blog/insight entries) that isn't in the static HTML.
3. **Fonts** — OFL (per agency), so we self-host them by name; no license blocker.
4. **Live site as reference** — `nexusonecap.com` is public; capture copy/layout/colors
   directly (browser "Save Page As", or the Wayback Machine as backup). NOTE: this
   sandbox's egress policy blocks `nexusonecap.com`, so live capture must be done from an
   open network (a normal browser), not from here.

With the Export ZIP in hand, Path 2 is mostly mechanical: port the exported static pages
into our app as routes (or re-author as React components matching the exported markup/CSS),
wire the nav/footer to our brand system, and serve Insight at `nexusonecap.com/insight`.

## DNS / cutover notes

- Current: **A record only → `198.202.211.1`** (per agency). Confirm this resolves to the
  live Webflow site and check whether `www` works (see the DNS sanity-check note above).
- Registrar is **Gabia** (same as the pending `insights.nexusonecap.com` CNAME).
- Before any change: record the current live A/CNAME/**MX** so we can roll back and so email
  keeps flowing (never touch MX during a web cutover).
- Path 1 (stay on Webflow): DNS likely stays pointed at Webflow — just re-point to Webflow's
  standard hosting A records (`75.2.70.75`, `99.83.190.102`) + `www` CNAME if the current
  single A is non-standard.
- Path 2 (rebuild on Cloudflare): point apex + `www` at Cloudflare Pages; the pending
  `insights.nexusonecap.com` CNAME becomes redundant (Insight moves to `/insight`).

## Legal / brand guardrails (from architecture doc — keep intact)

- Fund operation not yet licensed → **N1DV fund philosophy stays separate** from
  `nexusonecap.com`; the company site is company/research, not fund marketing.
- All returns presented as **Simulated / Seed Stage** wherever research is syndicated.
- Confirm font & image licenses transfer to us (item 5) before republishing.

## Next actions (Path 2 — rebuild)

> ⏰ **Webflow renews 2026-07-29 (~2 weeks out).** Get the Export ZIP now so we can decide
> sprint-before-renewal vs. let-it-ride-one-year with real information.

1. **Ask the agency for two artifacts** (both are one-click in Webflow, no Git needed):
   - **Export Code ZIP** — Webflow Designer → Export Code → the static HTML/CSS/JS + assets.
   - **CMS CSV export** — one CSV per CMS collection, for any dynamic content.
   (Do NOT ask for their Webflow account/workspace — only these exports.)
2. Confirm the **OFL font names** in use so we can self-host them.
3. From an open network (not this sandbox), capture the live `nexusonecap.com` as a visual
   reference (pages, sections, colors) in case the export needs cleanup.
4. Port the export into this app as routes/components; wire nav + footer to our brand system;
   serve Insight at `nexusonecap.com/insight`.
5. Verify current DNS (`198.202.211.1`, and whether `www` resolves), then plan the cutover:
   point apex + `www` at Cloudflare Pages, keep **MX** untouched.

> **Blocked from this sandbox:** egress policy denies `nexusonecap.com`, so the live-site
> capture (step 3) and any DNS lookups must be done from an open network / normal browser.
