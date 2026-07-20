import type { BrandId } from './brand';

/**
 * Per-surface home copy. n1dv.io reads as the N1DV Deep Value *vault*.
 * nexus never renders Home (it redirects to /insights) — it just falls back
 * to the n1dv copy.
 */
export interface HomeCopy {
  /** Hero headline, split across two lines. */
  heroTitle: [string, string];
  heroSubtitle: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
  vaultsHeading: string;
  vaultsIntro: string;
  pillarsHeading: string;
}

const N1DV_COPY: HomeCopy = {
  heroTitle: ['The Onchain', 'Deep Value Active Vault'],
  heroSubtitle:
    'The Anchor of Your Crypto Portfolio. We engineer defensive alpha through Deep Value execution.',
  primaryCta: { label: 'Enter Vault', to: '/dashboard' },
  secondaryCta: { label: 'View Track Record', to: '/performance' },
  vaultsHeading: 'Our Vaults',
  vaultsIntro:
    'Institutional-grade onchain capital deployment vehicles tailored for every market cycle.',
  pillarsHeading: 'Strategic Pillars',
};

export const HOME_COPY: Record<BrandId, HomeCopy> = {
  n1dv: N1DV_COPY,
  nexus: N1DV_COPY,
};
