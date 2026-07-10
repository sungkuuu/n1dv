# Quadrix / N1DV / Nexus One — multi-domain architecture

**One codebase, one Cloudflare Pages deployment, three domains.** The app branches
on `window.location.hostname` to present each domain as its own brand while sharing
the same research pipeline, performance model, and components.

| hostname | brand (header) | identity | home framing | nav | wallet |
|---|---|---|---|---|---|
| `quadrix.finance` | QUADRIX | asset-management **platform** | "Asset Management Platform" | full | yes |
| `n1dv.io` | N1DV | Deep Value active **fund** | "Deep Value Active Vault" | full | yes |
| `insights.nexusonecap.com` | NEXUS ONE | company **Insight/research** surface | redirects to `/insights` | Insights, Letter | no |

- **Footer = Nexus One wordmark on every domain** (parent company).
- Research is a single source (`src/data/reports.ts` + pipeline), syndicated to all
  three, always credited to the **Nexus One Research Desk**.
- The agency-built `nexusonecap.com` company site stays untouched; `insights.` is a
  separate subdomain served by this deployment.

## Where the brand logic lives

- **`src/lib/brand.ts`** — `resolveBrand(hostname, search)` → `{ id, wordmark, tracking,
  homeTitle, nav, showUserActions, landing }`. Add a domain here.
- **`src/lib/homeContent.ts`** — per-brand home copy (`HOME_COPY[brandId]`): hero title/
  subtitle, CTAs, funds-section heading/intro, pillars heading.
- **`src/components/Layout.tsx`** — reads the brand for header wordmark, data-driven nav
  (`NAV_ITEMS` × `brand.nav`), user-action gating, footer wordmark, home `<title>`, and
  the research-surface landing redirect.
- **`src/pages/Home.tsx`** — renders `HOME_COPY[resolveBrand().id]`. Performance /
  Featured Insights / Trusted Infrastructure sections are shared (identical everywhere).

## Previewing a brand locally

hostname doesn't vary on localhost/`*.pages.dev`, so use the override:

```
/?brand=quadrix   /?brand=n1dv   /?brand=nexus
```

Default fallback (no branded host, no override) = **n1dv**.

## Build / deploy

- `npm run typecheck` then `npm run build` (build runs `scripts/generateSeo.ts` →
  per-report pre-rendered HTML + sitemap/rss/robots, and `scripts/generateOgImages.ts`).
- Push to `main` → Cloudflare Pages auto-deploys. `SITE` in the SEO + newsletter scripts
  is `https://quadrix.finance`.
- Newsletter/OG credentials live in GitHub Actions secrets, not in the sandbox.

## Status (2026-07)

Done: hostname-aware branding, footer→Nexus One, nexus surface scoped to research,
home copy diverged (n1dv fund vs quadrix platform).

Pending:
- Connect `insights.nexusonecap.com` DNS (CNAME in Gabia) + add custom domain in
  Cloudflare Pages.
- Light re-theme of the Insight surface to match nexusonecap.com's light/minimal look —
  deferred until the agency source (exact fonts/colors) is available; or fold Insight into
  `nexusonecap.com/insight` (same domain) if that source is clean/portable.
- Newsletter sender is still `research@n1dv.io` (only n1dv.io verified in Resend); verify
  `quadrix.finance` in Resend before switching.
- `n1dv.io` → `quadrix.finance` 301 redirect once Quadrix is the settled primary.
- Legal: fund operation not yet licensed → keep N1DV philosophy separate from
  nexusonecap.com for now; present all returns as Simulated / Seed Stage.
