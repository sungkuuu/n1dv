# Enzyme Finance Subgraph 설정 (Base 네트워크)

n1dv 대시보드는 **Enzyme Finance**의 Subgraph(GraphQL)를 사용해 볼트의 TVL(GAV), NAV(Share Price), 포트폴리오(보유 자산 목록)를 가져옵니다.

## 1. 환경 변수

프로젝트 루트의 `.env`에 다음을 설정하세요. `.env.example`을 복사해 사용할 수 있습니다.

| 변수 | 필수 | 설명 |
|------|------|------|
| `VITE_ENZYME_VAULT_ADDRESS` | 예 | Enzyme 볼트 컨트랙트 주소 (예: Base 메인넷) |
| `VITE_ENZYME_VAULT_BALANCES_SUBGRAPH_URL` | 예 | **Vault Balances** Subgraph GraphQL 엔드포인트 (TVL, 포트폴리오) |
| `VITE_ENZYME_VAULT_SHARES_SUBGRAPH_URL` | 아니오 | **Vault Shares** Subgraph 엔드포인트 (NAV/Share Price 계산용) |
| `VITE_VAULT_APP_URL` | 아니오 | "Enter Vault" / "Invest Now" 버튼 링크 (기본: BaseScan 볼트 주소) |

## 2. Base 네트워크 Subgraph 엔드포인트

Enzyme 공식 Subgraph는 현재 **Ethereum**, **Polygon**, **Arbitrum**용으로 배포되어 있습니다.  
**Base**용 공식 호스팅은 없으므로, 다음 중 하나가 필요합니다.

### 옵션 A: The Graph Network에 Base용 Subgraph 배포

1. [enzymefinance/subgraphs](https://github.com/enzymefinance/subgraphs) 저장소의 **vault-balances** / **vault-shares** 스키마와 매핑을 Base 체인에 맞게 수정합니다.
2. [The Graph Studio](https://thegraph.com/studio/)에서 새 Subgraph를 생성하고 Base 네트워크를 선택한 뒤 배포합니다.
3. 배포 후 **Query URL**을 복사해 `.env`에 넣습니다.

예시 (일반적인 The Graph Gateway 형식):

```bash
# Subgraph ID 방식 (최신 버전 쿼리)
VITE_ENZYME_VAULT_BALANCES_SUBGRAPH_URL=https://gateway.thegraph.com/api/<YOUR_API_KEY>/subgraphs/id/<SUBGRAPH_ID>
VITE_ENZYME_VAULT_SHARES_SUBGRAPH_URL=https://gateway.thegraph.com/api/<YOUR_API_KEY>/subgraphs/id/<SUBGRAPH_ID>
```

### 옵션 B: 기존 네트워크 엔드포인트 참고 (Ethereum / Arbitrum)

Base용 Subgraph를 아직 쓰지 않는 경우, 동일한 스키마로 배포된 **Ethereum** 또는 **Arbitrum** 엔드포인트를 참고할 수 있습니다.

- **Ethereum Vault Balances**:  
  `https://gateway.thegraph.com/api/<API_KEY>/subgraphs/id/HwR7jTExHWNvQetTxRYEMQ5hywHyUkierAYvnGS7pBUS`
- **Ethereum Vault Shares**:  
  `https://gateway.thegraph.com/api/<API_KEY>/subgraphs/id/6p2L2gQ4Hw4Dh2kxZFDJbcqtbv44vrJbrBEh3EjS7qVo`

API 키는 [The Graph Studio](https://thegraph.com/studio/)에서 발급할 수 있습니다.

## 3. 데이터 매핑 요약

| UI / 기존 용어 | Enzyme Subgraph 필드 | 비고 |
|----------------|----------------------|------|
| TVL (Total Value Locked) | **gav** (Gross Asset Value) | `vault-balances`의 balances + 가격으로 합산 |
| NAV / Share Price | **sharePrice** | `gav / vault.supply` (vault-shares의 `supply`) |
| Portfolio (자산 목록) | **vault.balances[]** | `asset.id`, `asset.decimals`, `balance`, (선택) `tracked` |

`src/api/enzymeSubgraph.ts`에서 위 필드로 쿼리한 뒤, 기존 UI 타입(`PortfolioToken`, `totalTVL`)에 맞게 변환합니다.

## 4. 제거된 항목 (Velvet 관련)

- Velvet Capital API/SDK 호출 제거됨 (기존에는 viem으로 직접 `balanceOf`를 읽던 로직 사용).
- "Enter Vault" / "Verify Onchain" 등 모든 **dapp.velvet.capital** 링크는 `VITE_VAULT_APP_URL`(또는 BaseScan)로 대체됨.
- 문구: "Velvet SDK" → "Enzyme protocol"로 변경됨 (N1DVModal, Thesis 등).

## 5. 의존성 제거 제안

데이터 소스가 **Enzyme Subgraph + fetch + CoinGecko**만 사용하므로, 더 이상 **viem**을 사용하지 않습니다.  
원하면 `package.json`에서 `viem`을 제거할 수 있습니다.

```bash
npm uninstall viem
```

다른 모듈에서 viem을 쓰지 않는지 검색한 뒤 제거하세요.
