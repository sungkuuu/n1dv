import type { BrandId } from './brand';

/**
 * Per-surface home copy. n1dv.io reads as the N1DV Deep Value *fund*;
 * quadrix.finance reads as the asset-management *platform* the fund lives on.
 * They share the same sections (performance, funds, insights) but frame them
 * differently. nexus never renders Home (it redirects to /insights) — it just
 * falls back to the n1dv copy.
 */
export interface HomeCopy {
  /** Hero headline, split across two lines. */
  heroTitle: [string, string];
  heroSubtitle: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
  fundsHeading: string;
  fundsIntro: string;
  pillarsHeading: string;
}

const N1DV_COPY: HomeCopy = {
  heroTitle: ['The Onchain', 'Deep Value Active Vault'],
  heroSubtitle:
    'The Anchor of Your Crypto Portfolio. We engineer defensive alpha through Deep Value execution.',
  primaryCta: { label: 'Enter Vault', to: '/dashboard' },
  secondaryCta: { label: 'View Track Record', to: '/performance' },
  fundsHeading: 'Our Vaults',
  fundsIntro:
    'Institutional-grade onchain capital deployment vehicles tailored for every market cycle.',
  pillarsHeading: 'Strategic Pillars',
};

export const HOME_COPY: Record<BrandId, HomeCopy> = {
  n1dv: N1DV_COPY,
  nexus: N1DV_COPY,
  quadrix: {
    heroTitle: ['The Onchain', 'Asset Management Platform'],
    heroSubtitle:
      'Institutional-grade, actively-managed digital asset funds — transparent onchain performance and self-custodied access.',
    primaryCta: { label: 'Explore Funds', to: '/vaults' },
    secondaryCta: { label: 'View Performance', to: '/performance' },
    fundsHeading: 'Funds on Quadrix',
    fundsIntro:
      'Actively-managed onchain funds, each with a transparent, simulated track record and performance-only fees.',
    pillarsHeading: 'Investment Principles',
  },
};
