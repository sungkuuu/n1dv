/**
 * One deployment serves three domains — n1dv.io, quadrix.finance and
 * insights.nexusonecap.com — off the same app + research pipeline. We branch the
 * header wordmark / <title> on hostname so each domain reads as its own brand,
 * while the footer stays Nexus One everywhere (the parent company) and research
 * always ships under the Nexus One Research Desk.
 *
 *   quadrix.finance          → QUADRIX    (asset-management platform)
 *   n1dv.io                  → N1DV       (Deep Value active fund)
 *   *.nexusonecap.com        → NEXUS ONE  (company / Insight surface)
 *
 * Dev/preview (localhost, *.pages.dev) has no branded host, so it falls back to
 * n1dv and honours a ?brand=quadrix|n1dv|nexus override for eyeballing skins.
 */
export type BrandId = 'quadrix' | 'n1dv' | 'nexus';

export interface Brand {
  id: BrandId;
  /** Header wordmark, rendered in the Oxanium brand font. */
  wordmark: string;
  /** Letter-spacing tuned to the wordmark length. */
  tracking: string;
  /** Primary domain (for copy/reference). */
  domain: string;
  /** document.title on the home route. */
  homeTitle: string;
}

const BRANDS: Record<BrandId, Brand> = {
  quadrix: {
    id: 'quadrix',
    wordmark: 'QUADRIX',
    tracking: '0.22em',
    domain: 'quadrix.finance',
    homeTitle: 'Quadrix | Onchain Asset Management',
  },
  n1dv: {
    id: 'n1dv',
    wordmark: 'N1DV',
    tracking: '0.26em',
    domain: 'n1dv.io',
    homeTitle: 'N1DV | Deep Value Digital Asset Fund',
  },
  nexus: {
    id: 'nexus',
    wordmark: 'NEXUS ONE',
    tracking: '0.18em',
    domain: 'nexusonecap.com',
    homeTitle: 'Nexus One Research',
  },
};

export const BRAND_IDS = Object.keys(BRANDS) as BrandId[];

export function resolveBrand(
  hostname: string = typeof window !== 'undefined' ? window.location.hostname : '',
  search: string = typeof window !== 'undefined' ? window.location.search : ''
): Brand {
  const override = new URLSearchParams(search).get('brand');
  if (override && (override as BrandId) in BRANDS) return BRANDS[override as BrandId];

  const h = hostname.toLowerCase();
  if (h.includes('quadrix')) return BRANDS.quadrix;
  if (h.includes('nexusonecap')) return BRANDS.nexus;
  if (h.includes('n1dv')) return BRANDS.n1dv;
  return BRANDS.n1dv;
}
