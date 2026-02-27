/**
 * Ethena — 스텁 (추후 연동)
 */
import type { AdapterResult } from '../types';

export async function fetchEthenaApy(): Promise<AdapterResult> {
  await Promise.resolve();
  return {
    Protocol: 'Ethena',
    'Target Asset': 'USDe',
    'Current APY (%)': '8.5 (Mock)',
    'Source Type': 'Off-chain',
  };
}
