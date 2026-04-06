# 쿠폰 시스템 구현 (ai-hub + biz-hub 동시 적용)

## 개요
- **일자**: 2026-04-07
- **목적**: 강의 수강생에게 1개월 무료 이용권 쿠폰 제공
- **적용 사이트**: ai-hub, biz-hub (동일 구조)

## 핵심 정책
- 강의당 1개 공유 코드 발행 → 수강생 전원이 같은 코드 입력
- 이용 기간: 강의일 기준 +30일 (등록 시점 무관, 모두 동일 만료일)
- 코드 형식: `{SITE}-{YYYYMMDD}-{RANDOM4}` (예: `BIZ-20260407-K3M7`)

## Supabase 테이블

### biz_coupons
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | uuid (PK) | 자동 생성 |
| code | text UNIQUE | 쿠폰 코드 |
| label | text | 메모 (강의명 등) |
| lecture_date | date | 강의일 |
| expires_at | date | 만료일 (강의일+30) |
| is_active | boolean | 활성 여부 |
| created_by | uuid (FK) | 생성 관리자 |
| created_at | timestamptz | 생성 시각 |

### biz_coupon_uses
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | uuid (PK) | 자동 생성 |
| coupon_id | uuid (FK) | 쿠폰 참조 |
| user_id | uuid (FK) | 사용자 참조 |
| redeemed_at | timestamptz | 등록 시각 |
| UNIQUE(coupon_id, user_id) | | 중복 등록 방지 |

### RLS 정책
- coupons: SELECT 전체 허용, INSERT/UPDATE 관리자만
- coupon_uses: SELECT 본인+관리자, INSERT 로그인 사용자 본인

## 구현 파일

### biz-hub 신규 파일 (6개)
1. `src/utils/couponApi.ts` — API 함수 6개
   - `generateCouponCode()`: 코드 자동 생성
   - `createCoupon()`: 관리자 쿠폰 발행
   - `listCoupons()`: 관리자 목록 (사용수 포함)
   - `toggleCouponActive()`: 활성/비활성 토글
   - `redeemCoupon()`: 사용자 쿠폰 등록 (만료/중복/비활성 체크)
   - `getMyActiveCoupons()`: 사용자 내 쿠폰 조회

2. `src/components/AdminGuard.tsx` — 관리자 인증 가드
3. `src/styles/admin.css` — 관리자 UI 스타일
4. `src/layouts/AdminLayout.tsx` — 관리자 레이아웃 (사이드바+라우트)
5. `src/pages/admin/CouponAdmin.tsx` — 쿠폰 관리 페이지
   - 통계 카드 4개 (전체/활성/만료/총사용)
   - 쿠폰 생성 폼 (메모+강의일 → 코드 자동생성+미리보기)
   - 쿠폰 테이블 (코드복사, 상태뱃지, 활성토글)

### biz-hub 수정 파일 (3개)
1. `src/types/index.ts` — Coupon, CouponUse, CouponWithStats, MyCoupon 인터페이스 추가
2. `src/App.tsx` — `/admin/*` 라우트 추가 (lazy import)
3. `src/pages/MyPage.tsx` — 쿠폰 등록 섹션 추가
   - 쿠폰 코드 입력 + 등록 버튼
   - 내 쿠폰 목록 (코드, 메모, 이용기간, D-day/만료 뱃지)

## 관리자 접근
- URL: `/admin/coupons`
- 권한: ADMIN_EMAILS 목록에 등록된 이메일로 로그인 필요

## 사용자 흐름
1. 강의 수강 → 관리자가 쿠폰 코드 공유
2. 사용자 로그인 → 마이페이지 → 쿠폰 코드 입력 → 등록
3. 이용기간 내 서비스 이용 가능

## SQL 스크립트
- `D:\dreamit-web\Dev_md\coupon-system-sql.sql` (ah_ + biz_ 공통)
