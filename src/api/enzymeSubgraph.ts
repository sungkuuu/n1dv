/**
 * Enzyme Finance Subgraph API
 * Fetches vault GAV (TVL), share price (NAV), and portfolio from Enzyme Subgraph (GraphQL).
 * Base network: set VITE_ENZYME_VAULT_BALANCES_SUBGRAPH_URL and VITE_ENZYME_VAULT_SHARES_SUBGRAPH_URL
 * (or use a single combined endpoint if your deployment supports both schemas).
 */

export const ENZYME_VAULT_ADDRESS =
  (import.meta.env?.VITE_ENZYME_VAULT_ADDRESS as string) || 'YOUR_ENZYME_VAULT_ADDRESS';

/** Base subgraph URL for vault-balances (and optionally vault-shares if same host). */
const DEFAULT_VAULT_BALANCES_ENDPOINT =
  (import.meta.env?.VITE_ENZYME_VAULT_BALANCES_SUBGRAPH_URL as string) || '';
const DEFAULT_VAULT_SHARES_ENDPOINT =
  (import.meta.env?.VITE_ENZYME_VAULT_SHARES_SUBGRAPH_URL as string) || '';

// ---------------------------------------------------------------------------
// Subgraph response types (vault-balances)
// ---------------------------------------------------------------------------

export interface EnzymeAsset {
  id: string;
  decimals: number;
}

export interface EnzymeBalance {
  asset: EnzymeAsset;
  balance: string;
  tracked: boolean;
}

export interface EnzymeVaultBalances {
  vault?: {
    id: string;
    balances: EnzymeBalance[];
  } | null;
}

// ---------------------------------------------------------------------------
// Subgraph response types (vault-shares)
// ---------------------------------------------------------------------------

export interface EnzymeVaultShares {
  vault?: {
    id: string;
    supply: string;
  } | null;
}

// ---------------------------------------------------------------------------
// Mapped UI types (same shape as existing Home/Portfolio)
// ---------------------------------------------------------------------------

export interface PortfolioToken {
  name: string;
  symbol: string;
  balance: string;
  decimals: number;
  address: string;
  color: string;
  price?: number;
  value?: number;
  percentage?: number;
}

export interface EnzymeVaultData {
  gav: number;
  sharePrice: number;
  shareSupply: string;
  portfolio: PortfolioToken[];
}

// Known Base token metadata for symbol/name/color when asset-universe is not used (keys lowercase for lookup)
const BASE_TOKEN_METADATA: Record<
  string,
  { name: string; symbol: string; color: string; geckoId?: string }
> = {
  '0x50c5725949a6f0c72d6c4a6e901b58adbdf083a2': {
    name: 'Tether USD',
    symbol: 'USDT',
    color: '#26A17B',
    geckoId: 'tether',
  },
  '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913': {
    name: 'USD Coin',
    symbol: 'USDC',
    color: '#2775CA',
    geckoId: 'usd-coin',
  },
  '0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf': {
    name: 'Coinbase Wrapped BTC',
    symbol: 'cbBTC',
    color: '#F7931A',
    geckoId: 'bitcoin',
  },
  '0x4200000000000000000000000000000000000006': {
    name: 'Wrapped Ether',
    symbol: 'WETH',
    color: '#627EEA',
    geckoId: 'ethereum',
  },
  '0x940181a94a35a4569e4529a3cdfb74e38fd98631': {
    name: 'Aerodrome',
    symbol: 'AERO',
    color: '#00D4FF',
    geckoId: 'aerodrome-finance',
  },
};

function getTokenMeta(address: string): { name: string; symbol: string; color: string; geckoId?: string } {
  const key = address.toLowerCase();
  return (
    BASE_TOKEN_METADATA[key] || {
      name: `Token ${address.slice(0, 8)}`,
      symbol: address.slice(0, 6).toUpperCase(),
      color: '#6B7280',
    }
  );
}

// ---------------------------------------------------------------------------
// GraphQL queries
// ---------------------------------------------------------------------------

const VAULT_BALANCES_QUERY = `
  query VaultBalances($vaultId: ID!) {
    vault(id: $vaultId) {
      id
      balances(where: { tracked: true }) {
        asset {
          id
          decimals
        }
        balance
        tracked
      }
    }
  }
`;

const VAULT_SHARES_QUERY = `
  query VaultShares($vaultId: ID!) {
    vault(id: $vaultId) {
      id
      supply
    }
  }
`;

// ---------------------------------------------------------------------------
// Fetch helpers
// ---------------------------------------------------------------------------

async function graphqlFetch<T>(
  endpoint: string,
  query: string,
  variables: Record<string, string>
): Promise<T> {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) {
    throw new Error(`Enzyme Subgraph HTTP ${res.status}: ${await res.text()}`);
  }
  const json = (await res.json()) as { data?: T; errors?: Array<{ message: string }> };
  if (json.errors?.length) {
    throw new Error(`Enzyme Subgraph: ${json.errors.map((e) => e.message).join(', ')}`);
  }
  return json.data as T;
}

/** Fetch USD prices for a list of CoinGecko ids (optional, for GAV). */
async function fetchPrices(geckoIds: string[]): Promise<Record<string, number>> {
  if (geckoIds.length === 0) return {};
  const ids = [...new Set(geckoIds)].filter(Boolean).join(',');
  const res = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
  );
  if (!res.ok) return {};
  const data = (await res.json()) as Record<string, { usd?: number }>;
  const out: Record<string, number> = {};
  for (const [id, v] of Object.entries(data)) {
    if (typeof v?.usd === 'number') out[id] = v.usd;
  }
  return out;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Fetch vault balances from Enzyme vault-balances subgraph.
 * Returns portfolio items with balance and decimals; price/value can be filled by caller or fetchEnzymeVaultData.
 * If endpoint is not set, returns [] so the app can still render (no live data).
 */
export async function fetchVaultBalances(
  vaultAddress: string,
  balancesEndpoint?: string
): Promise<EnzymeBalance[]> {
  const endpoint = balancesEndpoint || DEFAULT_VAULT_BALANCES_ENDPOINT;
  if (!endpoint) {
    return [];
  }
  const vaultId = vaultAddress.toLowerCase();
  const data = await graphqlFetch<EnzymeVaultBalances>(endpoint, VAULT_BALANCES_QUERY, {
    vaultId,
  });
  const balances = data?.vault?.balances ?? [];
  return balances;
}

/**
 * Fetch vault total share supply from Enzyme vault-shares subgraph.
 * Used to compute sharePrice = GAV / supply.
 */
export async function fetchVaultShares(
  vaultAddress: string,
  sharesEndpoint?: string
): Promise<string> {
  const endpoint = sharesEndpoint || DEFAULT_VAULT_SHARES_ENDPOINT;
  if (!endpoint) {
    return '0';
  }
  const vaultId = vaultAddress.toLowerCase();
  const data = await graphqlFetch<EnzymeVaultShares>(endpoint, VAULT_SHARES_QUERY, {
    vaultId,
  });
  const supply = data?.vault?.supply ?? '0';
  return supply;
}

/**
 * Fetch full vault data: GAV (TVL), share price (NAV), and portfolio.
 * Uses vault-balances + vault-shares + CoinGecko for USD prices.
 * Maps to the same shape as existing UI (PortfolioToken with value, percentage).
 */
export async function fetchEnzymeVaultData(
  vaultAddress: string = ENZYME_VAULT_ADDRESS,
  options?: {
    balancesEndpoint?: string;
    sharesEndpoint?: string;
  }
): Promise<EnzymeVaultData> {
  const [balances, supply] = await Promise.all([
    fetchVaultBalances(vaultAddress, options?.balancesEndpoint),
    fetchVaultShares(vaultAddress, options?.sharesEndpoint),
  ]);

  if (balances.length === 0) {
    return {
      gav: 0,
      sharePrice: 0,
      shareSupply: supply,
      portfolio: [],
    };
  }

  const geckoIds = balances
    .map((b) => getTokenMeta(b.asset.id).geckoId)
    .filter((id): id is string => Boolean(id));
  const prices = await fetchPrices(geckoIds);

  const portfolio: PortfolioToken[] = balances.map((b) => {
    const meta = getTokenMeta(b.asset.id);
    const balanceRaw = b.balance;
    const decimals = b.asset.decimals ?? 18;
    const balanceNumRaw = parseFloat(balanceRaw) || 0;
    // Subgraph balance is typically in asset smallest units; convert to human-readable
    const balanceNum = balanceNumRaw / Math.pow(10, decimals);
    const balanceFormatted = balanceNum.toFixed(decimals > 8 ? 8 : 4);
    const price = meta.geckoId ? prices[meta.geckoId] ?? 0 : 0;
    const value = price ? balanceNum * price : 0;

    return {
      name: meta.name,
      symbol: meta.symbol,
      balance: balanceFormatted,
      decimals,
      address: b.asset.id,
      color: meta.color,
      price,
      value,
    };
  });

  const gav = portfolio.reduce((sum, t) => sum + (t.value ?? 0), 0);
  const supplyNum = parseFloat(supply) || 0;
  const sharePrice = supplyNum > 0 ? gav / supplyNum : 0;

  const portfolioWithPct = portfolio.map((t) => ({
    ...t,
    percentage: gav > 0 ? ((t.value ?? 0) / gav) * 100 : 0,
  }));

  return {
    gav,
    sharePrice,
    shareSupply: supply,
    portfolio: portfolioWithPct,
  };
}
