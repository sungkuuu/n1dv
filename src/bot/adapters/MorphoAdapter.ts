/**
 * Morpho — 스텁 (추후 온체인 연동)
 */
import type { AdapterResult } from '../types';

export async function fetchMorphoApy(): Promise<AdapterResult> {
  await Promise.resolve();
  return {
    Protocol: 'Morpho',
    'Target Asset': 'USDC',
    'Current APY (%)': '8.5 (Mock)',
    'Source Type': 'On-chain',
  };
}
