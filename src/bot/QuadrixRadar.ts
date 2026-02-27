/**
 * Quadrix Universal Radar — 관제탑
 * 모든 어댑터를 병렬로 호출하고 결과를 테이블로 출력합니다.
 */
import type { AdapterResult, RadarAdapter } from './types';
import { fetchAaveUsdcApy } from './adapters/AaveAdapter';
import { fetchHyperliquidApy } from './adapters/HyperliquidAdapter';
import { fetchMorphoApy } from './adapters/MorphoAdapter';
import { fetchPendleApy } from './adapters/PendleAdapter';
import { fetchEthenaApy } from './adapters/EthenaAdapter';
import { fetchRwaApy } from './adapters/RwaAdapter';

const ADAPTERS: RadarAdapter[] = [
  fetchAaveUsdcApy,
  fetchHyperliquidApy,
  fetchMorphoApy,
  fetchPendleApy,
  fetchEthenaApy,
  fetchRwaApy,
];

async function run(): Promise<void> {
  console.log('\n  [Quadrix Universal Radar]  \n');
  const results = await Promise.all(ADAPTERS.map((fn) => fn()));
  const rows = results.map((r: AdapterResult) => ({
    Protocol: r.Protocol,
    'Target Asset': r['Target Asset'],
    'Current APY (%)': r['Current APY (%)'],
    'Source Type': r['Source Type'],
  }));
  console.table(rows);
  console.log('');
}

run().catch((err) => {
  console.error('[Quadrix Radar] Error:', err);
  process.exit(1);
});
