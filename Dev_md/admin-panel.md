# 관리자 패널 구축 (biz-hub)

## 개요
- **일자**: 2026-04-07
- **목적**: biz-hub에 관리자 전용 패널 최초 구축
- **참조**: ai-hub AdminLayout 패턴 복제

## 구조

### 라우팅
```
/admin          → /admin/coupons 리다이렉트
/admin/coupons  → CouponAdmin 페이지
/admin/*        → /admin/coupons 리다이렉트
```

### 파일 구성
| 파일 | 역할 |
|------|------|
| `src/layouts/AdminLayout.tsx` | 사이드바 + 라우트 컨테이너 |
| `src/components/AdminGuard.tsx` | 관리자 인증 체크 (isAdmin) |
| `src/styles/admin.css` | 관리자 UI 전체 스타일 |
| `src/App.tsx` | `/admin/*` 라우트 등록 |

### 인증 방식
- `AuthContext.tsx`의 `isAdmin` 플래그 사용
- `config/admin.ts`의 `ADMIN_EMAILS` 배열로 관리자 판별
- `AdminGuard` 컴포넌트로 비관리자 접근 차단 (/ 로 리다이렉트)

### 사이드바 메뉴
- 쿠폰 관리 (`fa-solid fa-ticket`)
- 사이트로 돌아가기 링크

### 스타일 클래스 (admin.css)
- `.admin-layout`, `.admin-sidebar`, `.admin-main`
- `.admin-stat-card`, `.admin-stat-icon` (blue/green/purple/orange)
- `.admin-table-card`, `.admin-table`, `.admin-table-wrap`
- `.admin-badge` (active/pending/cancelled/suspended/deleted)
- `.admin-btn` (primary/secondary/danger/sm)
- `.admin-form`, `.admin-form-group`, `.admin-form-row`
- `.admin-modal-overlay`, `.admin-modal`
- `.admin-pagination`
- 반응형: 768px 이하 사이드바 슬라이드

## 확장 가이드
향후 관리 기능 추가 시:
1. `src/pages/admin/` 에 새 페이지 생성
2. `AdminLayout.tsx`에 lazy import + Route + NavLink 추가
