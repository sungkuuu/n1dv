/**
 * Ethena — sUSDe(스테이킹된 USDe) APY, DefiLlama Yields API
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
}

interface DefiLlamaResponse {
  data?: DefiLlamaPool[];
}

export async function fetchEthenaApy(): Promise<AdapterResult> {
  try {
    const res = await fetch(DEFILLAMA_YIELDS_URL);
    if (!res.ok) throw new Error(`DefiLlama API HTTP ${res.status}`);

    const json = (await res.json()) as DefiLlamaResponse;
    const pools: DefiLlamaPool[] = Array.isArray(json?.data) ? json.data : [];

    const pool = pools.find(
      (p) =>
        (p.project === 'ethena' || p.project === 'ethena-labs' || p.project === 'ethena-usde') &&
        (p.symbol === 'sUSDe' || p.symbol?.toUpperCase() === 'SUSDE')
    );

    const apyValue = pool?.apyBase ?? pool?.apy;
    if (apyValue != null && Number.isFinite(apyValue) && apyValue >= 0 && apyValue <= 100) {
      return {
        Protocol: 'Ethena',
        'Target Asset': 'sUSDe',
        'Current APY (%)': `${apyValue.toFixed(2)}%`,
        'Source Type': 'Off-chain',
      };
    }
    throw new Error('sUSDe pool or APY not found');
  } catch (error) {
    console.error('[EthenaAdapter Error]:', error);
    return {
      Protocol: 'Ethena',
      'Target Asset': 'sUSDe',
      'Current APY (%)': FALLBACK_APY,
      'Source Type': 'Off-chain',
    };
  }
}
