# n1dv.io 콘텐츠 게시 가이드

> Weekly Brief · Deep Research · Quarterly Report 3가지 유형의 작성·게시 양식 정리.
> 배포: main 브랜치에 커밋되면 자동 재배포 (2~3분 후 n1dv.io 반영).
> 코드베이스 실물 기준으로 검증됨 (2026-07-08, "The DAT Unwind" 게시 시점).

---

## 공통 게시 구조 (파일 4개)

모든 리포트는 아래 4개 변경으로 게시된다.

| # | 파일 | 작업 |
|---|------|------|
| 1 | `public/content/insights/{slug}.md` | 마크다운 본문 업로드 |
| 2 | `src/pages/{ComponentName}.tsx` | 페이지 컴포넌트 (기존 템플릿 복사) |
| 3 | `src/App.tsx` | import 1줄 + `<Route>` 1줄 추가 |
| 4 | `src/data/reports.ts` | 카드 메타데이터 블록을 **배열 맨 위**에 추가 |

### slug / id / route 규칙

- **slug = id = route 경로를 반드시 통일** (kebab-case)
  - 예: `dat-unwind-forced-seller-2026` → `/insights/dat-unwind-forced-seller-2026`
  - ⚠️ 예외 이력: Q2 리포트는 md 파일명(`q2-2026-quarterly-report.md`)과 id(`q2-2026-digital-asset-market-quarterly-report`)가 다름. 동작에는 문제없으나 신규 게시는 통일할 것.
- route는 `/insights/{slug}` (복수형). 구버전 `/insight/` 라우트 10건이 남아 있으나 신규는 `/insights/` 통일.

### 마크다운 공통 규칙

- `~` → `\~` 로 이스케이프 (GFM 취소선 방지)
- 표는 GFM 문법 (`| col | col |`)
- 페이지 H1과 마크다운 H1 중복 금지 — 컴포넌트의 `stripDuplicateHeader()`로 제거하거나(Weekly/Deep Research), md에서 H1을 아예 빼는 방식(Quarterly)

---

## 1. WEEKLY BRIEF

### UI / 메타

| 항목 | 값 |
|------|-----|
| 배지 | `WEEKLY BRIEF` / `outline-blue` |
| 배지 테두리 | `border-blue-500` |
| Back 링크 | `text-blue-500` (hover `text-blue-400`) |
| author | `Nexus One Digital Asset Research` |
| readTime | 30–35 min read |

### 카드 (reports.ts)

```ts
{
  id: 'weekly-brief-june-15-2026',
  badge: { text: 'WEEKLY BRIEF', variant: 'outline-blue' },
  title: 'Nexus One Weekly Digital Asset Market Report - June 8 to June 15, 2026',
  description: '...약 2줄 요약...',
  date: '2026-06-15',          // YYYY-MM-DD
  category: 'WEEKLY BRIEF',
  summary: '...description과 동일 또는 유사...',
  readTime: '35 min read',
  author: 'Nexus One Digital Asset Research',
  content: '',
  link: '/insights/weekly-brief-june-15-2026'
}
```

### 마크다운 헤더

```md
# Nexus One Weekly Digital Asset Market Report — June 8 to June 15, 2026

**Published:** June 15, 2026 (Mon) · 09:00 KST · By Nexus One Digital Asset Research

> Figures that could not be verified... Source links are attached at the end of this report.
```

- 본문 `[src: ...]` 마커 제거 (May 25 이후 패턴)
- References 제목: `Attached: Source links are listed inline beside each footnote.`

### 본문 목차 (14섹션 고정)

1. Global Macro Trends
2. Weekly Key Macro News Summary
3. BTC/ETH Trends, Technical Analysis, and ETF Flows
4. L1/L2 Protocol Status
5. DeFi Trends
6. NFT Market Trends
7. RWA Trends
8. On-chain Activity Analysis
9. Sector Summary
10. On-chain Anomalies Within Top-200 by Market Cap
11. Projects of the Week — 3 Randomly Selected
12. Weekly Insight
13. Key Events Calendar — Next Week
14. Token Unlock Schedule

- Executive Summary는 `### 7 Key Takeaways` 형식
- Projects of the Week: ① ② ③ ④ 앞에 불릿(`-`) 없음, 항목 사이 빈 줄로 단락 구분

### 페이지 컴포넌트

- `WeeklyBriefJune15.tsx` 템플릿 복사
- `stripDuplicateHeader`: H1 + `**Published:**` 줄 제거
- 페이지 H1 = md H1과 동일 문구

---

## 2. DEEP RESEARCH

### UI / 메타

| 항목 | 값 |
|------|-----|
| 배지 | `DEEP RESEARCH` / `outline-green` |
| 배지 테두리 | `border-emerald-500` (텍스트 `text-emerald-400`) |
| Back 링크 | `text-emerald-500` (hover `text-emerald-400`) |
| author | `Nexus One Research Desk` |
| readTime | 20–40 min read |

### 카드 (reports.ts)

```ts
{
  id: 'dat-unwind-forced-seller-2026',
  badge: { text: 'DEEP RESEARCH', variant: 'outline-green' },
  title: 'The DAT Unwind: When the Marginal Buyer Becomes a Forced Seller',
  description: '...약 2줄, 카드 높이 맞게 짧게...',
  date: '2026-07-08',
  category: 'DEEP RESEARCH',
  summary: '...',
  readTime: '20 min read',
  author: 'Nexus One Research Desk',
  content: '',
  link: '/insights/dat-unwind-forced-seller-2026'
}
```

- description/summary 안의 작은따옴표(`'`)는 `\'`로 이스케이프 — reports.ts 문법 오류 방지

### 마크다운 헤더

```md
# {전체 제목}

**By Nexus One Research Desk • July 8, 2026 • 20 min read**

## TL;DR

- **핵심 포인트 1:** ...
- **핵심 포인트 2:** ...

---

## 1. Introduction: ...
## 2. ...
## N. Conclusion and Strategic Recommendations
```

- TL;DR 필수 (상단 bullet 5~7개)
- 번호 섹션(`## 1.`, `## 2.` …) 자유 구성 (통상 7~10개)
- 출처: References 섹션 또는 본문 인라인 (weekly와 달리 `[src]` 제거 규칙 없음 — 리포트마다 다름)

### 페이지 컴포넌트

- `DATUnwindForcedSeller2026.tsx` 또는 `BitcoinHalvingCycleDecline2026.tsx` 템플릿
- `stripDuplicateHeader`: H1 + byline 줄 제거
- 페이지 subtitle: `By Nexus One Research Desk • {date} • {readTime}`

---

## 3. QUARTERLY REPORT

### UI / 메타

| 항목 | 값 |
|------|-----|
| 배지 | `QUARTERLY REPORT` / `outline-indigo` |
| 배지 테두리 | `border-indigo-500` |
| Back 링크 | `text-indigo-400` |
| author | `Nexus One Digital Asset Research` |
| readTime | ~45 min read |

### 카드 (reports.ts)

```ts
{
  id: 'q2-2026-digital-asset-market-quarterly-report',
  badge: { text: 'QUARTERLY REPORT', variant: 'outline-indigo' },
  title: 'Q2 2026 Market Report: The Great Divergence & Liquidity\'s Verdict',
  description: '...2줄 요약...',
  date: '2026-07-03',
  category: 'QUARTERLY REPORT',
  summary: '...',
  readTime: '45 min read',
  author: 'Nexus One Digital Asset Research',
  content: '',
  link: '/insights/q2-2026-digital-asset-market-quarterly-report'
}
```

- 제목에 NEXUS ONE 넣지 않음 (Q2 패턴)
- subtitle에 Review period 포함

### 마크다운 (Q2 패턴 — 권장)

- **H1은 md에 넣지 않음** → 페이지 컴포넌트에서만 표시 (중복 방지)
- 본문은 blockquote부터 시작:

```md
> Unless otherwise noted, all comparisons are QoQ (vs Q1) and YoY (vs Q2 2025)...
> Citations use inline superscript numbers matched to the reference list at the end.

---

## Table of Contents
...
## 1. Executive Summary
...
## 13. References
```

- 인용: 위첨자 숫자 ¹ ² ³ + 말미 `## 13. References` 번호 목록
- 검증 불가 수치: `data unverified` 표기

### 본문 목차 (13섹션, Q2 기준)

1. Executive Summary
2. Global Macro Quarterly Review
3. Quarterly Macro Event Timeline
4. Crypto Market Quarterly Performance
5. ETF Flows: Quarterly Wrap
6. L1/L2 Protocol Quarterly Performance
7. DeFi Quarterly Trends
8. NFT Quarterly Trends
9. RWA Tokenization Quarterly Trends
10. Sector-by-Sector Quarterly Performance
11. On-chain Anomalies & Security Incidents
12. Next Quarter Outlook & Event Preview
13. References

### 페이지 컴포넌트

- `Q22026QuarterlyReport.tsx` 템플릿
- subtitle: `By Nexus One Digital Asset Research • {발행일} • Review period: {분기 시작} – {분기 끝}`
- 참고: Q1 리포트(`Q12026DigitalAssetMarketQuarterlyReport.tsx`)만 JSX 하드코딩 구버전. Q2부터 마크다운 fetch 패턴 사용.

---

## 3유형 비교

| | WEEKLY BRIEF | DEEP RESEARCH | QUARTERLY REPORT |
|---|---|---|---|
| 배지 색 | 파랑 | 초록(emerald) | 인디고 |
| author | Digital Asset Research | Research Desk | Digital Asset Research |
| md H1 | 있음 (페이지와 동일) | 있음 | **없음** (페이지만) |
| 상단 블록 | 7 Key Takeaways | TL;DR | Executive Summary |
| 출처 | Attached + URL 목록 | References | 위첨자 + References |
| `[src]` | 제거 | 리포트별 | 해당 없음 (superscript) |
| 섹션 수 | 14 (고정) | 자유 (7~10) | 13 (고정) |
| readTime | 30–35분 | 20–40분 | ~45분 |

> ⚠️ author 필드 과거 이력은 비일관적 (`Nexus One Research Desk` 41건 등). 위 표는 최근 확립된 규칙 — 신규 게시는 이 규칙을 따를 것.

---

## 게시 후 체크리스트

1. `npm run build` 통과
2. `/insights` 카드 맨 위 노출 + 날짜/배지 확인
3. Read Report → 본문·표 렌더링, 제목이 1개만 표시되는지
4. main 푸시 → 2–3분 후 n1dv.io/insights 확인

## 트러블슈팅

- **카드 안 보임** → reports.ts 배열 첫 항목인지 확인
- **Loading...에서 멈춤** → 마크다운 파일명이 컴포넌트의 fetch 경로와 일치하는지 확인
- **빌드 실패** → App.tsx / reports.ts 쉼표·따옴표 오류 확인 (99%)

## 참고

- GitHub 레포에서 `.` 키 → github.dev로 4개 파일 한 번에 편집·커밋 가능
- 현재 구조는 마크다운 + 개별 페이지 + 수동 라우트 패턴이라 파일 4개가 필요함
- 나중에 동적 라우팅으로 리팩터링하면 1단계+4단계만으로도 게시 가능
