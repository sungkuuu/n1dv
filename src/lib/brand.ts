/**
 * One deployment serves three domains — n1dv.io, quadrix.finance and
 * insights.nexusonecap.com — off the same app + research pipeline. We branch the
 * header wordmark / <title> on hostname so each domain reads as its own brand,
 * while the footer stays Nexus One everywhere (the parent company) and research
 * always ships under the Nexus One Research Desk.
 *
 *   quadrix.finance          → QUADRIX    (asset-management platform)
 *   n1dv.io                  → N1DV       (Deep Value active vault)
 *   *.nexusonecap.com        → NEXUS ONE  (company / Insight surface)
 *
 * Dev/preview (localhost, *.pages.dev) has no branded host, so it falls back to
 * n1dv and honours a ?brand=quadrix|n1dv|nexus override for eyeballing skins.
 */
export type BrandId = 'quadrix' | 'n1dv' | 'nexus';

/** Nav destinations, keyed; each surface picks which ones it shows. */
export type NavKey = 'letter' | 'vaults' | 'performance' | 'insights' | 'radar' | 'dashboard';

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
  /** Nav items shown for this surface, in order. */
  nav: NavKey[];
  /** Referral + Connect Wallet actions (platform/vault only). */
  showUserActions: boolean;
  /** Where '/' redirects for this surface (undefined = show Home). */
  landing?: string;
  /**
   * 'light' themes the surface to match the corporate nexusonecap.com look
   * (white bg, Poppins, dark text) via the html.theme-light override layer in
   * index.css. Everything else stays the default dark.
   */
  theme: 'dark' | 'light';
  /** Header logo image; rendered instead of the text wordmark when set. */
  logoSrc?: string;
  /** External URL the header logo links to (e.g. the corporate home). */
  homeHref?: string;
}

const FULL_NAV: NavKey[] = ['letter', 'vaults', 'performance', 'insights', 'radar', 'dashboard'];

const BRANDS: Record<BrandId, Brand> = {
  quadrix: {
    id: 'quadrix',
    wordmark: 'QUADRIX',
    tracking: '0.22em',
    domain: 'quadrix.finance',
    homeTitle: 'Quadrix | Onchain Asset Management',
    nav: FULL_NAV,
    showUserActions: true,
    theme: 'dark',
  },
  n1dv: {
    id: 'n1dv',
    wordmark: 'NEXUS ONE',
    tracking: '0.26em',
    domain: 'n1dv.io',
    homeTitle: 'N1DV | Deep Value Digital Asset Vault',
    nav: FULL_NAV,
    showUserActions: true,
    theme: 'dark',
    // Vault site carries the parent-company mark (white, for the dark theme).
    logoSrc: '/nexus-one-wordmark.png',
  },
  nexus: {
    id: 'nexus',
    wordmark: 'NEXUS ONE',
    tracking: '0.18em',
    domain: 'nexusonecap.com',
    homeTitle: 'Nexus One Research',
    // Company / Insight surface: research only — no platform or wallet.
    nav: ['insights', 'letter'],
    showUserActions: false,
    landing: '/insights',
    // Match the corporate site's light/minimal look (Poppins, white, #333).
    theme: 'light',
    // Use the real corporate wordmark; the logo links back to the company home
    // so this surface reads as a section of nexusonecap.com, not a separate app.
    logoSrc: '/nexus-one-wordmark-dark.png',
    homeHref: 'https://www.nexusonecap.com',
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
