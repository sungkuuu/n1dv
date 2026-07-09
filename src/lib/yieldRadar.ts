/**
 * Quadrix Yield Radar — browser-side data layer for /radar.
 * One DefiLlama yields call covers five protocols; Pendle has its own API.
 * Rows whose data can't be verified are omitted (never mocked).
 */

export interface YieldRow {
  protocol: string;
  asset: string;
  category: string;
  chain: string;
  apy: number;
  apy30d: number | null;
  tvlUsd: number;
  sourceUrl: string;
}

interface LlamaPool {
  chain?: string;
  project?: string;
  symbol?: string;
  apy?: number;
  apyBase?: number;
  apyMean30d?: number;
  tvlUsd?: number;
}

interface PendleMarket {
  liquidity?: { usd?: number };
  impliedApy?: number;
  pt?: { proName?: string };
  proName?: string;
}

const LLAMA_URL = 'https://yields.llama.fi/pools';
const PENDLE_URL = 'https://api-v2.pendle.finance/core/v1/42161/markets?limit=50';

const isSaneApy = (v: unknown): v is number =>
  typeof v === 'number' && Number.isFinite(v) && v >= 0 && v <= 100;

function rowFromPool(
  pool: LlamaPool | undefined,
  meta: { protocol: string; asset: string; category: string; sourceUrl: string }
): YieldRow | null {
  const apy = pool?.apyBase ?? pool?.apy;
  if (!pool || !isSaneApy(apy)) return null;
  return {
    ...meta,
    chain: pool.chain ?? '—',
    apy,
    apy30d: isSaneApy(pool.apyMean30d) ? pool.apyMean30d : null,
    tvlUsd: pool.tvlUsd ?? 0,
  };
}

async function fetchLlamaRows(): Promise<YieldRow[]> {
  const res = await fetch(LLAMA_URL);
  if (!res.ok) throw new Error(`DefiLlama HTTP ${res.status}`);
  const pools: LlamaPool[] = (await res.json())?.data ?? [];
  const upper = (s?: string) => (s ?? '').toUpperCase();

  const morphoTop = pools
    .filter((p) => (p.project ?? '').includes('morpho') && upper(p.symbol).endsWith('USDC'))
    .sort((a, b) => (b.tvlUsd ?? 0) - (a.tvlUsd ?? 0))[0];

  const candidates = [
    rowFromPool(
      pools.find((p) => p.project === 'aave-v3' && p.chain === 'Arbitrum' && p.symbol === 'USDC'),
      { protocol: 'Aave V3', asset: 'USDC', category: 'Lending', sourceUrl: 'https://app.aave.com' }
    ),
    rowFromPool(morphoTop, {
      protocol: 'Morpho',
      asset: morphoTop?.symbol ?? 'USDC',
      category: 'Lending',
      sourceUrl: 'https://app.morpho.org',
    }),
    rowFromPool(
      pools.find(
        (p) => p.project === 'sky-lending' && p.chain === 'Ethereum' && upper(p.symbol) === 'SUSDS'
      ),
      { protocol: 'Sky (Maker)', asset: 'sUSDS', category: 'Savings Rate', sourceUrl: 'https://sky.money' }
    ),
    rowFromPool(
      pools.find((p) => (p.project ?? '').startsWith('ethena') && upper(p.symbol) === 'SUSDE'),
      { protocol: 'Ethena', asset: 'sUSDe', category: 'Synthetic Dollar', sourceUrl: 'https://ethena.fi' }
    ),
    rowFromPool(
      pools.find((p) => (p.project ?? '').startsWith('ondo') && upper(p.symbol) === 'USDY'),
      { protocol: 'Ondo', asset: 'USDY', category: 'RWA / T-Bills', sourceUrl: 'https://ondo.finance' }
    ),
  ];
  return candidates.filter((r): r is YieldRow => r !== null);
}

async function fetchPendleRow(): Promise<YieldRow | null> {
  const res = await fetch(PENDLE_URL);
  if (!res.ok) throw new Error(`Pendle HTTP ${res.status}`);
  const markets: PendleMarket[] = (await res.json())?.results ?? [];
  const top = [...markets].sort(
    (a, b) => (b.liquidity?.usd ?? 0) - (a.liquidity?.usd ?? 0)
  )[0];
  const implied = top?.impliedApy;
  if (!top || implied == null || !Number.isFinite(implied) || implied < 0 || implied > 10) {
    return null;
  }
  return {
    protocol: 'Pendle',
    asset: top.pt?.proName ?? top.proName ?? 'PT',
    category: 'Fixed Yield',
    chain: 'Arbitrum',
    apy: implied * 100,
    apy30d: null,
    tvlUsd: top.liquidity?.usd ?? 0,
    sourceUrl: 'https://app.pendle.finance',
  };
}

/** Fetches all radar rows, sorted by APY desc. Sources that fail are skipped. */
export async function fetchYieldRadar(): Promise<YieldRow[]> {
  const [llama, pendle] = await Promise.allSettled([fetchLlamaRows(), fetchPendleRow()]);
  const rows: YieldRow[] = [
    ...(llama.status === 'fulfilled' ? llama.value : []),
    ...(pendle.status === 'fulfilled' && pendle.value ? [pendle.value] : []),
  ];
  if (rows.length === 0) throw new Error('All yield sources failed');
  return rows.sort((a, b) => b.apy - a.apy);
}

export function formatTvl(usd: number): string {
  if (usd >= 1e9) return `$${(usd / 1e9).toFixed(2)}B`;
  if (usd >= 1e6) return `$${(usd / 1e6).toFixed(0)}M`;
  return `$${Math.round(usd / 1e3)}K`;
}
