/**
 * Enzyme Finance REST API client
 * Uses https://api.enzyme.finance and the /vaults/{id}/financials endpoint.
 * See enzyme-api.json (OpenAPI) for full schema.
 */

const ENZYME_API_BASE = 'https://api.enzyme.finance';

/** Single financial snapshot from GET /vaults/{id}/financials (values in wei as strings). */
export interface VaultFinancialsEntity {
  timestamp: number;
  chainId: number;
  vaultAddress: string;
  totalSupply: string;
  netShareValue: string;
  shareValueUpdatedTimestamp: number;
  sharePrice: string;
  blockNumber: string;
  netAssetValue: string;
}

/** Query params for financials time-series (all optional). */
export interface GetVaultFinancialsParams {
  /** Start timestamp (Unix, seconds). */
  start?: number;
  /** End timestamp (Unix, seconds). */
  end?: number;
  /** Sort order; default DESC (newest first). */
  order?: 'ASC' | 'DESC';
}

/** Result with latest TVL and share price (and full list if needed). */
export interface VaultFinancialsResult {
  /** Latest net asset value (TVL) in wei, as string. */
  netAssetValue: string;
  /** Latest share price (1-share value) in wei, as string. */
  sharePrice: string;
  /** Full time-series from the API (newest first when order=DESC). */
  financials: VaultFinancialsEntity[];
}

/**
 * Fetches vault financials from Enzyme REST API: GET /vaults/{id}/financials.
 * Returns TVL (netAssetValue) and share price (sharePrice) for the vault.
 *
 * @param vaultId - Enzyme vault id (API database id, e.g. "cmfe23du2000d2hnmtusq6z2l"), not the on-chain address.
 * @param params - Optional start, end, order (default DESC so first item is latest).
 * @param baseUrl - Override API base (default https://api.enzyme.finance).
 * @returns Latest netAssetValue and sharePrice plus the full financials array.
 */
export async function getVaultFinancials(
  vaultId: string,
  params?: GetVaultFinancialsParams,
  baseUrl: string = ENZYME_API_BASE
): Promise<VaultFinancialsResult> {
  const url = new URL(`/vaults/${encodeURIComponent(vaultId)}/financials`, baseUrl);

  if (params?.start != null) url.searchParams.set('start', String(params.start));
  if (params?.end != null) url.searchParams.set('end', String(params.end));
  if (params?.order) url.searchParams.set('order', params.order);

  const res = await fetch(url.toString(), {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Enzyme API /vaults/${vaultId}/financials failed: ${res.status} ${text}`);
  }

  const financials = (await res.json()) as VaultFinancialsEntity[];

  if (!Array.isArray(financials) || financials.length === 0) {
    return {
      netAssetValue: '0',
      sharePrice: '0',
      financials: [],
    };
  }

  const latest = financials[0]!;
  return {
    netAssetValue: latest.netAssetValue ?? '0',
    sharePrice: latest.sharePrice ?? '0',
    financials,
  };
}
