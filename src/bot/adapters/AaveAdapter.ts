/**
 * Aave V3 (Arbitrum) USDC Supply APY — DefiLlama Yields API
 */
import type { AdapterResult } from '../types';

const DEFILLAMA_YIELDS_URL = 'https://yields.llama.fi/pools';
const FALLBACK_APY = '3.45% (API Error)';

interface DefiLlamaPool {
  chain?: string;
  symbol?: string;
  project?: string;
  apy?: number;
  apyBase?: number;
}

interface DefiLlamaResponse {
  data?: DefiLlamaPool[];
}

export async function fetchAaveUsdcApy(): Promise<AdapterResult> {
  try {
    const res = await fetch(DEFILLAMA_YIELDS_URL);

    if (!res.ok) {
      throw new Error(`DefiLlama API HTTP ${res.status}`);
    }

    const json = (await res.json()) as DefiLlamaResponse;
    const pools: DefiLlamaPool[] = Array.isArray(json?.data) ? json.data : [];

    const pool = pools.find(
      (p) =>
        p.project === 'aave-v3' &&
        p.chain === 'Arbitrum' &&
        p.symbol === 'USDC'
    );

    const apyValue = pool?.apyBase ?? pool?.apy;
    if (apyValue != null && Number.isFinite(apyValue) && apyValue >= 0 && apyValue <= 100) {
      const apyStr = `${apyValue.toFixed(2)}%`;
      return {
        Protocol: 'Aave V3',
        'Target Asset': 'USDC',
        'Current APY (%)': apyStr,
        'Source Type': 'DefiLlama',
      };
    }

    throw new Error('Pool or APY not found');
  } catch (error) {
    console.error('[AaveAdapter Error]:', error);
    return {
      Protocol: 'Aave V3',
      'Target Asset': 'USDC',
      'Current APY (%)': FALLBACK_APY,
      'Source Type': 'DefiLlama',
    };
  }
}
