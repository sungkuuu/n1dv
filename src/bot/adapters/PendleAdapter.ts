/**
 * Pendle — Arbitrum(42161) Pendle v2 API, TVL 최상위 풀의 PT APY
 */
import type { AdapterResult } from '../types';

const PENDLE_MARKETS_URL = 'https://api-v2.pendle.finance/core/v1/42161/markets?limit=50';
const FALLBACK_APY = '— (API Error)';

interface PendleMarket {
  liquidity?: { usd?: number };
  impliedApy?: number;
  pt?: { proName?: string };
  proName?: string;
}

interface PendleResponse {
  results?: PendleMarket[];
}

export async function fetchPendleApy(): Promise<AdapterResult> {
  try {
    const res = await fetch(PENDLE_MARKETS_URL);
    if (!res.ok) throw new Error(`Pendle API HTTP ${res.status}`);

    const json = (await res.json()) as PendleResponse;
    const markets: PendleMarket[] = Array.isArray(json?.results) ? json.results : [];

    const sorted = [...markets].sort((a, b) => {
      const tvlA = a.liquidity?.usd ?? 0;
      const tvlB = b.liquidity?.usd ?? 0;
      return tvlB - tvlA;
    });
    const top = sorted[0];
    if (!top) throw new Error('No markets');

    const impliedApy = top.impliedApy;
    if (impliedApy == null || !Number.isFinite(impliedApy) || impliedApy < 0 || impliedApy > 10) {
      throw new Error('Invalid impliedApy');
    }
    const apyPct = impliedApy * 100;
    const apyStr = `${apyPct.toFixed(2)}%`;
    const targetAsset = top.pt?.proName ?? top.proName ?? 'PT';

    return {
      Protocol: 'Pendle',
      'Target Asset': targetAsset,
      'Current APY (%)': apyStr,
      'Source Type': 'On-chain',
    };
  } catch (error) {
    console.error('[PendleAdapter Error]:', error);
    return {
      Protocol: 'Pendle',
      'Target Asset': 'USDC',
      'Current APY (%)': FALLBACK_APY,
      'Source Type': 'On-chain',
    };
  }
}
