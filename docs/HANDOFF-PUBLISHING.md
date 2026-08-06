# 리서치 발행 인수인계 (2026-08-06 기준)

새 세션에서 리포트를 발행하거나 두 사이트를 고칠 때 **이 문서를 먼저 읽을 것.**
nexusonecap.com 사이트 자체의 규칙은 `~/Desktop/nexusonecap/docs/HANDOFF.md`에 따로 있다.

## 리포 위치 (헷갈리기 쉬움)

| 별칭 | 실제 경로 | 정체 |
|---|---|---|
| n1dv | `~/Desktop/넥서스원/project 4` | n1dv.io. React SPA. **콘텐츠 원본이 여기 있다** |
| nexusonecap | `~/Desktop/nexusonecap` | nexusonecap.com. Webflow 정적 익스포트 + Cloudflare Worker |

세션 cwd가 `~/Desktop/project 4`로 잡히는 경우가 있는데 **그건 빈 껍데기다.** 항상 위 실제 경로로 `cd` 할 것.

## 리포트 발행 파이프라인 (한 소스 → 두 사이트)

```bash
cd "~/Desktop/넥서스원/project 4"
# 1. 마크다운 작성
#    public/content/insights/{slug}.md
# 2. src/data/reports.ts 배열 맨 위에 엔트리 추가 (최신이 위)
npm run build                              # tsc + vite + SEO/OG/sitemap/RSS 자동 생성
npx tsx scripts/exportWebflowView.ts       # → out/webflow-view/export.json
cp out/webflow-view/export.json ~/Desktop/nexusonecap/data/reports.json
cd ~/Desktop/nexusonecap
rm -rf insights && node scripts/buildView.mjs   # insights.html + insights/*.html 재생성
# 3. 두 리포 각각 커밋 & 푸시 (푸시하면 자동 배포)
```

Node 22 필요: `PATH="$HOME/.nvm/versions/node/v22.23.1/bin:$PATH"`

배포 반영은 1~3분. nexusonecap이 먼저, n1dv가 조금 늦게 뜬다 (빌드가 있어서).
**주의:** `curl`로 확인할 때 nexusonecap은 `.html` URL을 클린 URL로 **307 리다이렉트**하므로 `-L` 필수.

## 마크다운 하우스 규격

기존 리포트를 반드시 열어보고 맞출 것 — 에디션마다 미묘하게 다르지만 뼈대는 고정이다.

```markdown
# 제목

**Nexus One Research**
August 6, 2026 (event dates: ...)

---

## TL;DR

• **라벨:** 본문...

• **라벨:** 본문...

---

## 1. 섹션
...

---

*This material is for informational purposes only...*
```

- **TL;DR이 반드시 최상단** — nexusonecap의 `buildView.mjs`가 `<h2>TL;DR...</h2>`부터 다음 `<hr>`까지를 회색 요약 카드(`.report-tldr`)로 감싼다. 이 형식을 벗어나면 카드가 안 만들어진다.
- **위클리 브리프**는 추가로 `## Table of Contents` + 14개 고정 섹션 + 번호 매긴 References(`Attached: Source links...` 안내문 뒤) 형식. 최신 예: `weekly-brief-jul-31-2026.md`
- **딥리서치**는 목차 없이 TL;DR → 번호 섹션 → 이탤릭 면책조항. 최신 예: `hyperliquid-oracle-ten-days-2026.md`
- 슬러그: 위클리는 `weekly-brief-{mon}-{dd}-{yyyy}` (3글자 월 약어), 딥리서치는 주제 기반

## reports.ts 엔트리

```ts
{
  id: '{slug}',                       // 파일명과 반드시 일치
  badge: { text: 'DEEP RESEARCH', variant: 'outline-green' },   // WEEKLY BRIEF → outline-blue
  title: '...',
  description: '...',                 // summary와 동일 문자열로 둘 다 채움
  date: '2026-08-06',
  category: 'DEEP RESEARCH',
  summary: '...',
  readTime: '14 min read',
  author: 'Nexus One Research Desk',  // 위클리는 'Nexus One Digital Asset Research'
  content: '',
  link: '/insights/{slug}'
}
```

- **작은따옴표는 `\'`로 이스케이프** (안 하면 TS 문자열이 깨진다 — 실제로 당함)
- **summary는 300자 이내.** 인사이트 카드는 `line-clamp-6`으로 잘리지만, 길면 카드 비율이 어색해진다. 중앙값 172자.

## 뉴스레터 — 가장 조심할 부분

`.github/workflows/newsletter.yml`이 **`src/data/reports.ts`가 바뀐 채로 main에 푸시되면 자동 발동**한다.

- 발송 대상은 `reports.ts` **배열 맨 위의 리포트 1건**뿐 (날짜 아님, 배열 순서 기준)
- `newsletter_sends` 테이블에 `report_id`가 이미 있으면 **스킵**한다
- 따라서 **이미 발행한 리포트의 내용을 고칠 때는 id/slug를 절대 바꾸지 말 것** → 메일 재발송 안 됨
- 반대로 id를 바꾸면 새 리포트로 인식해 **메일이 나간다**

발송 여부 확인:
```bash
gh run view --repo sungkuuu/n1dv $(gh run list --repo sungkuuu/n1dv --workflow "Newsletter" --limit 1 --json databaseId -q '.[0].databaseId') --log | grep -E "already sent|recipient"
```

### 사이트별 라우팅 (2026-08-06 구축)

구독자는 **가입한 사이트로 링크가 간다.** `source` 컬럼에 `host + pathname`이 저장되고(`nexusonecap.com/insights/...` vs `n1dv.io/insights/...`), `sendNewsletter.ts`가 host로 그룹을 나눠 사이트별로 한 번씩 보낸다. host 없는 옛 행은 n1dv로 폴백(그게 사실이라 맞음).

- 발신 표시명은 브랜드 중립(`Nexus One Research`), 주소는 아직 `research@n1dv.io` 하나뿐
- **남은 작업:** Resend에 nexusonecap.com 도메인 인증 → GitHub repo variables에 `NEWSLETTER_FROM_NEXUSONECAP` = `Nexus One Research <research@nexusonecap.com>` 추가하면 자동 전환. 변수 없으면 인증된 n1dv 주소로 안전 폴백

## Supabase

프로젝트 **"n1dv mail"** (`mevrwtzquadthtbzqmdu`). 테이블 2개: `newsletter_subscribers`, `newsletter_sends`.

- RLS: 익명은 **INSERT만** 가능(구독 폼). 읽기는 service role 필요 — GitHub secret `SUPABASE_SERVICE_ROLE_KEY`에 있고 로컬엔 없다. 조회가 필요하면 Supabase MCP를 쓸 것
- **무료 티어 일시정지 주의:** 2026-07-19에 정지돼 두 사이트 구독 폼이 며칠 죽어 있었다. 익명 읽기 핑은 "활동"으로 안 쳐준다는 게 밝혀져서, keep-alive를 **service role 쓰기(insert+delete) 핑, 2일 주기**로 바꿔둠 (`.github/workflows/supabase-keepalive.yml`)

## 이미지 넣기 (2026-08-06 구축)

```markdown
![대체텍스트](/content/insights/img/파일명.png)

*캡션은 바로 뒤 이탤릭 한 줄*
```

- 파일을 **양쪽 리포에 같은 URL 경로로** 넣어야 한다:
  - n1dv: `public/content/insights/img/`
  - nexusonecap: `content/insights/img/`
- 절대 경로(`/content/...`)라 상세 페이지 깊이와 무관하게 동작한다
- 웹용으로 1600px 리사이즈 권장: `sips -Z 1600 원본.png --out 대상.png`
- 스타일은 양쪽에 이미 있음 (n1dv는 `InsightPage.tsx`의 `[&_img]`, nexusonecap은 `.rich-text-block.report img`)

## 최근 결정 사항 (되돌리지 말 것)

- **포지셔닝**: 벤처(2018~) + 리퀴드 운용 **병행**. 회사 홈에서 N1DV(펀드)는 언급하지 않음. 공식 주소는 송파 올림픽로
- **카피 톤**: 실적 자랑·숫자 과시 금지. 건조하게, 증거는 링크로 (리포트 46편 같은 카운팅 금지)
- **Insights URL**: `/insights` (구 `/view`는 worker가 301). 리포트 상세는 `/insights/{slug}`
- **타이포**: 리포트/리스트 제목은 EB Garamond 세리프, 본문 헤딩은 Poppins 700. 폰은 본문 15px
- **폰트 성능**: 전부 latin 서브셋 + preload + 메트릭 매칭 폴백. 새 폰트를 추가하면 같은 처리를 할 것
- 홈 히어로 크기(데스크톱 4.6vw)는 서브타이틀 "based"의 d에 맞춘 값 — 카피가 바뀌면 다시 맞춰야 함

## 검증 습관

- CSS를 고치면 **전 HTML의 `?v=` 캐시버스팅 필수** (nexusonecap HANDOFF 철칙 1)
- 로컬 확인: `.claude/launch.json`의 `n1dv-dev`(5173), `nexusonecap-static`(5310)
- 브라우저 미리보기 패널이 긴 리포트에서 **빈 화면으로 캡처되는 버그**가 있다. 실제 문제 아님 — JS로 계산된 스타일/로드 상태를 측정해 검증하고, 스크린샷은 리로드 후 재시도
- 배포 후엔 curl로 라이브 확인 (n1dv는 SPA라 페이지 200이 증거가 안 됨 → `/content/insights/{slug}.md`를 확인할 것)
