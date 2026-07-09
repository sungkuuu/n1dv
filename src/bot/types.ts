/**
 * Quadrix Universal Radar — 공통 타입
 * 모든 어댑터는 이 형태로 한 건을 반환합니다.
 */
export type RadarRow = {
  Protocol: string;
  'Target Asset': string;
  'Current APY (%)': string;
  'Source Type': 'On-chain' | 'Off-chain' | 'DefiLlama';
};

export type AdapterResult = RadarRow;

/** 어댑터 공통 시그니처 */
export type RadarAdapter = () => Promise<AdapterResult>;
