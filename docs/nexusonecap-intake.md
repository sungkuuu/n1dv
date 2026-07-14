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

**Decision:** _TBD._ Recommendation — if the company site is genuinely small and rarely
edited, **Path 2** (rebuild) gives the cleanest end state and drops a vendor. If the
marketing team wants to keep editing visually in Webflow, **Path 1** (account transfer).
Either way, **first secure control**: Webflow account access (Path 1) or a full capture of
the live site's pages/copy/assets (Path 2).

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

## Next actions (updated — Webflow, no repo)

1. **Decide Path 1 vs Path 2** (account transfer vs rebuild) — note the decision + reason here.
2. Ask the agency for what actually enables in-house maintenance:
   - Path 1: **transfer the Webflow project/workspace** to us + move billing; hand over
     Gabia DNS access.
   - Path 2: a **full capture of the live site** — all page copy, section layout, and image
     assets (or Webflow's static HTML/CSS/JS export) so we can re-author in our app.
3. Verify the live DNS (`198.202.211.1`) and whether `www` resolves, before planning cutover.
4. Confirm the OFL fonts in use (names) so we can self-host them if we rebuild (Path 2).
