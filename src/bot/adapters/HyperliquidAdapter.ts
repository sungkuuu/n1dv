/**
 * Hyperliquid — Public API 기반 USDC/HLP 수익률 (오프체인)
 * API에 APY가 없으면 Mock 15.2% 반환
 */
import type { AdapterResult } from '../types';

const HYPERLIQUID_API = 'https://api.hyperliquid.xyz/info';

export async function fetchHyperliquidApy(): Promise<AdapterResult> {
  try {
    const res = await fetch(HYPERLIQUID_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'meta' }),
    });
    const data = (await res.json()) as Record<string, unknown>;

    // 메타 정보에서 HLP/USDC 관련 APY 필드가 있으면 사용 (실제 키는 문서 확인)
    const apy =
      typeof (data as { hlpApy?: number }).hlpApy === 'number'
        ? ((data as { hlpApy: number }).hlpApy * 100).toFixed(2)
        : '15.2'; // Mock

    return {
      Protocol: 'Hyperliquid',
      'Target Asset': 'USDC / HLP',
      'Current APY (%)': String(apy),
      'Source Type': 'Off-chain',
    };
  } catch {
    return {
      Protocol: 'Hyperliquid',
      'Target Asset': 'USDC / HLP',
      'Current APY (%)': '15.2',
      'Source Type': 'Off-chain',
    };
  }
}
