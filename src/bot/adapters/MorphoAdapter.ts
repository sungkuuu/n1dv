/**
 * Morpho — USDC 예치 APY, DefiLlama Yields API (morpho-v1 대표 풀)
 */
import type { AdapterResult } from '../types';

const DEFILLAMA_YIELDS_URL = 'https://yields.llama.fi/pools';
const FALLBACK_APY = '— (API Error)';

interface DefiLlamaPool {
  chain?: string;
  symbol?: string;
  project?: string;
  apy?: number;
  apyBase?: number;
  tvlUsd?: number;
}

interface DefiLlamaResponse {
  data?: DefiLlamaPool[];
}

export async function fetchMorphoApy(): Promise<AdapterResult> {
  try {
    const res = await fetch(DEFILLAMA_YIELDS_URL);
    if (!res.ok) throw new Error(`DefiLlama API HTTP ${res.status}`);

    const json = (await res.json()) as DefiLlamaResponse;
    const pools: DefiLlamaPool[] = Array.isArray(json?.data) ? json.data : [];

    const morphoPools = pools.filter(
      (p) =>
        (p.project === 'morpho-v1' || (p.project ?? '').toLowerCase().includes('morpho')) &&
        ((p.symbol ?? '').toUpperCase() === 'USDC' ||
          (p.symbol ?? '').toUpperCase().endsWith('USDC'))
    );

    const sorted = [...morphoPools].sort(
      (a, b) => (b.tvlUsd ?? 0) - (a.tvlUsd ?? 0)
    );
    const pool = sorted[0];
    if (!pool) throw new Error('Morpho USDC pool not found');

    const apyValue = pool.apyBase ?? pool.apy;
    if (apyValue != null && Number.isFinite(apyValue) && apyValue >= 0 && apyValue <= 100) {
      return {
        Protocol: 'Morpho',
        'Target Asset': 'USDC',
        'Current APY (%)': `${apyValue.toFixed(2)}%`,
        'Source Type': 'Off-chain',
      };
    }
    return {
      Protocol: 'Morpho',
      'Target Asset': 'USDC',
      'Current APY (%)': '0.00%',
      'Source Type': 'Off-chain',
    };
  } catch (error) {
    console.error('[MorphoAdapter Error]:', error);
    return {
      Protocol: 'Morpho',
      'Target Asset': 'USDC',
      'Current APY (%)': FALLBACK_APY,
      'Source Type': 'Off-chain',
    };
  }
}
