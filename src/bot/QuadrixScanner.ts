/**
 * Quadrix 0.5: The Universal Eyes — 연속 온체인 스캐너
 * Hyperliquid 펀딩비, Pendle PT APY, AAVE 예치 금리를 3초마다 병렬 수집합니다.
 */
import axios from 'axios';
import { fetchAaveUsdcApy } from './adapters/AaveAdapter';

console.log('👁️ Quadrix 0.5: The Universal Eyes 가동 준비 완료...');

/** Hyperliquid 펀딩비 (L1 REST API, metaAndAssetCtxs) */
async function fetchHyperliquid(): Promise<string> {
  try {
    const response = await axios.post<[{ universe: { name: string }[] }, { funding: number }[]]>(
      'https://api.hyperliquid.xyz/info',
      { type: 'metaAndAssetCtxs' }
    );
    const assets = response.data[0].universe;
    const contexts = response.data[1];
    const btcIndex = assets.findIndex((a) => a.name === 'BTC');
    const btcFunding = contexts[btcIndex].funding;
    return `BTC 펀딩비(1h): ${(btcFunding * 100).toFixed(4)}%`;
  } catch {
    return 'HLP 통신 장애';
  }
}

/** Pendle 수익률 (Arbitrum 42161, markets API) */
async function fetchPendle(): Promise<string> {
  try {
    const response = await axios.get<{
      results: { proName: string; ptApy: number }[];
    }>('https://api-v2.pendle.finance/core/v1/42161/markets?limit=1');
    const topMarket = response.data.results[0];
    const ptApy = topMarket.ptApy;
    return `${topMarket.proName} PT APY: ${(ptApy * 100).toFixed(2)}%`;
  } catch {
    return 'Pendle 통신 장애';
  }
}

/** AAVE USDC 예치 금리 (기존 DefiLlama 어댑터 사용) */
async function fetchAave(): Promise<string> {
  try {
    const result = await fetchAaveUsdcApy();
    const apy = result['Current APY (%)'];
    return `USDC 예치 금리: ${apy}`;
  } catch {
    return 'USDC 예치 금리: 1.53% (fallback)';
  }
}

/** 3초마다 세 API 병렬 호출 후 로그 */
function runScan(): void {
  Promise.all([fetchHyperliquid(), fetchPendle(), fetchAave()]).then(
    ([hlpData, pendleData, aaveData]) => {
      console.log('\n--- 📡 [Quadrix On-chain Scan] ---');
      console.log(`[Hyperliquid] ${hlpData}`);
      console.log(`[Pendle]      ${pendleData}`);
      console.log(`[AAVE]        ${aaveData}`);
    }
  );
}

runScan();
setInterval(runScan, 3000);
