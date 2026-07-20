# N1DV / Nexus One — multi-domain architecture

**One codebase, one Cloudflare Pages deployment, two domains.** The app branches
on `window.location.hostname` to present each domain as its own brand while sharing
the same research pipeline, performance model, and components.

| hostname | brand (header) | identity | home framing | nav | wallet |
|---|---|---|---|---|---|
| `n1dv.io` | N1DV | Deep Value active **vault** | "Deep Value Active Vault" | full | yes |
| `insights.nexusonecap.com` | NEXUS ONE | company **Insight/research** surface | redirects to `/insights` | Insights, Letter | no |

- **Footer = Nexus One wordmark on every domain** (parent company).
- Research is a single source (`src/data/reports.ts` + pipeline), syndicated to
  every surface, always credited to the **Nexus One Research Desk**.
- The agency-built `nexusonecap.com` company site stays untouched; `insights.` is a
  separate subdomain served by this deployment.

## 2026-07-20: Quadrix moved out

`quadrix.finance` was a third brand on this deployment (asset-management
*platform* framing). On 2026-07-20 the domain was detached from the `n1dv`
Pages project and now points at the standalone Quadrix site
(`~/Desktop/quadrix`, github `sungkuuu/quadrix`). The `quadrix` brand entry,
its home copy, and the hostname branch were removed from this repo. Outbound
links from n1dv surfaces to the new Quadrix site are intentional and stay.

The `nexus` brand's domain (`insights.nexusonecap.com`) was also detached the
same day, but its code is kept for now pending an owner decision (possible
reuse).

## Where the brand logic lives

- **`src/lib/brand.ts`** — `resolveBrand(hostname, search)` → `{ id, wordmark, tracking,
  homeTitle, nav, showUserActions, landing }`. Add a domain here.
- **`src/lib/homeContent.ts`** — per-brand home copy (`HOME_COPY[brandId]`): hero title/
  subtitle, CTAs, vaults-section heading/intro, pillars heading.
- **`src/components/Layout.tsx`** — reads the brand for header wordmark, data-driven nav
  (`NAV_ITEMS` × `brand.nav`), user-action gating, footer wordmark, home `<title>`, and
  the research-surface landing redirect.
- **`src/pages/Home.tsx`** — renders `HOME_COPY[resolveBrand().id]`. Performance /
  Featured Insights / Trusted Infrastructure sections are shared (identical everywhere).

## Previewing a brand locally

hostname doesn't vary on localhost/`*.pages.dev`, so use the override:

```
/?brand=n1dv   /?brand=nexus
```

Default fallback (no branded host, no override) = **n1dv**.

## Build / deploy

- `npm run typecheck` then `npm run build` (build runs `scripts/generateSeo.ts` →
  per-report pre-rendered HTML + sitemap/rss/robots, and `scripts/generateOgImages.ts`).
- Push to `main` → Cloudflare Pages auto-deploys. `SITE` in the SEO + newsletter scripts
  is `https://n1dv.io`.
- Newsletter/OG credentials live in GitHub Actions secrets, not in the sandbox.

## Status (2026-07)

Done: hostname-aware branding, footer→Nexus One, nexus surface scoped to research,
quadrix brand retired from this repo (2026-07-20, see above).

Pending:
- Owner decision on removing the `nexus` brand code now that
  `insights.nexusonecap.com` is detached.
- Legal: fund operation not yet licensed → keep N1DV philosophy separate from
  nexusonecap.com for now; present all returns as Simulated / Seed Stage.
