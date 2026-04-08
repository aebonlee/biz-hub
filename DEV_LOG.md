# DEV_LOG - DreamIT Biz Hub

## 2026-04-09 AHP 사용가이드 + 연구 커뮤니티 페이지 추가

### 개요
AHP연구 플랫폼과 연구 커뮤니티의 전용 소개 페이지를 신규 생성하였다.
기존 `/courses` 카드 형태에서 벗어나 각각 독립 페이지(`/ahp-guide`, `/papers-community`)로 구성.

### 신규 페이지

| 페이지 | 경로 | 설명 |
|--------|------|------|
| AHP 사용가이드 | `/ahp-guide` | AHP 개념, 4단계 사용 흐름, 주요 기능, 활용 사례, CTA(ahp-basic.dreamitbiz.com) |
| 연구 커뮤니티 | `/papers-community` | 커뮤니티 소개, 주요 기능 4가지, 참여 대상, CTA(papers.dreamitbiz.com) |

### 수정 파일

| 파일 | 변경 내용 |
|------|-----------|
| `src/pages/AhpGuide.tsx` | **신규 생성** — AHP 사용 가이드 소개 페이지 |
| `src/pages/PapersCommunity.tsx` | **신규 생성** — 연구 커뮤니티 소개 페이지 |
| `src/layouts/PublicLayout.tsx` | lazy import 2개 + Route 2개 추가 (`/ahp-guide`, `/papers-community`) |
| `src/config/site.ts` | 경영기초 드롭다운에서 `/ahp` 제거, `/ahp-guide`·`/papers-community` 추가; footerLinks 동일 변경 |
| `src/utils/translations.ts` | ko/en nav 키 2개 추가 (`ahpGuide`, `papersCommunity`), `site.ahpGuide.*`·`site.papersCommunity.*` 번역 키 추가 |
| `DEV_LOG.md` | 본 항목 추가 |

### 페이지 공통 구조
- 기존 CSS 클래스 재사용: `page-header`, `edu-mission-grid`, `edu-values-grid`, `edu-value-card`, `cta-section`
- SEOHead, useAOS, useLanguage 훅 사용
- 한/영 다국어 지원, 다크모드 호환

---

## 2026-04-09 신규 학습 경로 3개 추가 (8개 → 11개)

### 개요
기존 8개 학습사이트에 연구방법론 관련 3개 신규 학습 경로 페이지를 추가하였다.
기존 "사회조사방법론(research)" 페이지는 그대로 유지하며, 하위 세부 방법론을 독립 페이지로 구성함.

### 신규 학습 경로

| # | ID | 한글명 | English | 경로 | 색상 | 아이콘 | 카테고리 |
|---|-----|--------|---------|------|------|--------|----------|
| 9 | quantitative | 양적연구방법 | Quantitative Methods | /quantitative | #1D4ED8 | fa-square-poll-vertical | fundamentals |
| 10 | qualitative-methods | 질적연구방법 | Qualitative Methods | /qualitative-methods | #7E22CE | fa-comments | fundamentals |
| 11 | ahp | AHP연구방법론 | AHP Methodology | /ahp | #B45309 | fa-layer-group | fundamentals |

### 수정 파일 (4개)

| 파일 | 변경 내용 |
|------|-----------|
| `src/config/site.ts` | learningSites에 3개 항목 추가, menuItems 경영기초 드롭다운에 3개 추가, footerLinks에 3개 추가, description 8→11 업데이트 |
| `src/layouts/PublicLayout.tsx` | 3개 lazy import 추가 (Quantitative, QualitativeMethods, Ahp), 3개 Route 추가 (/quantitative, /qualitative-methods, /ahp) |
| `src/pages/Home.tsx` | useCountUp(8, 1500) → useCountUp(11, 1500) 학습사이트 카운트 업데이트 |
| `src/utils/translations.ts` | ko/en 양쪽에 nav 키 3개 추가 (quantitative, qualitativeMethods, ahp), heroDesc·ctaBottomDesc 텍스트 8→11 업데이트 |

### 신규 파일 (3개)

| 파일 | 설명 | 섹션 구성 |
|------|------|-----------|
| `src/pages/quantitative/Quantitative.tsx` | 양적연구방법 학습 페이지 | 양적연구 개요 / 실험설계 / 설문조사방법 / 표본추출과 표본크기 / 양적자료분석 / 양적연구 논문작성 / 참고문헌 |
| `src/pages/qualitative-methods/QualitativeMethods.tsx` | 질적연구방법 학습 페이지 | 질적연구 개요 / 근거이론 / 현상학적 연구 / 사례연구 / 질적자료 수집과 분석 / 질적연구 신뢰성 확보 / 참고문헌 |
| `src/pages/ahp/Ahp.tsx` | AHP연구방법론 학습 페이지 | AHP 개요 / 계층구조 설계 / 쌍대비교와 척도 / 일관성 검증 / AHP 소프트웨어 활용 / AHP 논문작성 / 참고문헌 |

### 페이지 공통 구조
- SEOHead 컴포넌트로 SEO 메타태그 적용
- useAOS 훅으로 스크롤 애니메이션 (fade-up, delay 80ms 간격)
- useLanguage 훅으로 한/영 다국어 지원
- page-header 섹션 (아이콘 + 제목 + 설명, 테마색 borderBottom)
- learning-path-content 섹션 (카드 그리드, 테마색 borderLeft)
- SECTIONS 배열로 콘텐츠 데이터 관리 (id, icon, titleKo/En, contentKo/En)

### 빌드 검증
- `npm run build` → tsc + vite build 성공 (6.43s)
- 번들 출력: Quantitative-*.js (8.30 kB), QualitativeMethods-*.js (8.27 kB), Ahp-*.js (8.56 kB)

---

## 2026-03-25 점검
- npm audit: 취약점 0건
- 역할: 서브사이트 공통 템플릿 원본
- 기술 스택: React 19 + Vite 7 + Supabase + PortOne V1
