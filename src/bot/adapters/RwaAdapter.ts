/**
 * RWA (Maker / Ondo 등) — 스텁 (추후 연동)
 */
import type { AdapterResult } from '../types';

export async function fetchRwaApy(): Promise<AdapterResult> {
  await Promise.resolve();
  return {
    Protocol: 'Rwa (Maker/Ondo)',
    'Target Asset': 'RWA',
    'Current APY (%)': '8.5 (Mock)',
    'Source Type': 'On-chain',
  };
}
