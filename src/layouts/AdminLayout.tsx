import { lazy, Suspense, useState, type ReactElement } from 'react';
import { Routes, Route, NavLink, Link, Navigate } from 'react-router-dom';
import AdminGuard from '../components/AdminGuard';
import '../styles/admin.css';

const CouponAdmin = lazy(() => import('../pages/admin/CouponAdmin'));

const Loading = (): ReactElement => (
  <div className="admin-loading">
    <div className="loading-spinner"></div>
  </div>
);

const AdminLayout = (): ReactElement => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AdminGuard>
      <div className="admin-layout">
        <button
          className="admin-mobile-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="admin-sidebar-header">
            <h2>Admin</h2>
            <p>DreamIT Biz Hub</p>
          </div>

          <nav className="admin-sidebar-nav">
            <NavLink
              to="/admin/coupons"
              className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <i className="fa-solid fa-ticket"></i>
              쿠폰 관리
            </NavLink>
          </nav>

          <div className="admin-sidebar-footer">
            <Link to="/" className="admin-back-link">
              <i className="fa-solid fa-arrow-left"></i>
              사이트로 돌아가기
            </Link>
          </div>
        </aside>

        <main className="admin-main">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route index element={<Navigate to="/admin/coupons" replace />} />
              <Route path="coupons" element={<CouponAdmin />} />
              <Route path="*" element={<Navigate to="/admin/coupons" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </AdminGuard>
  );
};

export default AdminLayout;
