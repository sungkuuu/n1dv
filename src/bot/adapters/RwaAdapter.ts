/**
 * RWA — Ondo Finance USDY APY, DefiLlama Yields API
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

export async function fetchRwaApy(): Promise<AdapterResult> {
  try {
    const res = await fetch(DEFILLAMA_YIELDS_URL);
    if (!res.ok) throw new Error(`DefiLlama API HTTP ${res.status}`);

    const json = (await res.json()) as DefiLlamaResponse;
    const pools: DefiLlamaPool[] = Array.isArray(json?.data) ? json.data : [];

    const pool = pools.find(
      (p) =>
        (p.project === 'ondo-finance' || p.project === 'ondo' || p.project === 'ondo-yield-assets') &&
        (p.symbol === 'USDY' || p.symbol?.toUpperCase() === 'USDY')
    );

    const apyValue = pool?.apyBase ?? pool?.apy;
    if (apyValue != null && Number.isFinite(apyValue) && apyValue >= 0 && apyValue <= 100) {
      return {
        Protocol: 'Rwa (Maker/Ondo)',
        'Target Asset': 'USDY',
        'Current APY (%)': `${apyValue.toFixed(2)}%`,
        'Source Type': 'Off-chain',
      };
    }
    throw new Error('USDY pool or APY not found');
  } catch (error) {
    console.error('[RwaAdapter Error]:', error);
    return {
      Protocol: 'Rwa (Maker/Ondo)',
      'Target Asset': 'USDY',
      'Current APY (%)': FALLBACK_APY,
      'Source Type': 'Off-chain',
    };
  }
}
