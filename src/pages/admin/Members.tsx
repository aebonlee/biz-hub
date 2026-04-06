import { useState, useEffect, useCallback, type ReactElement } from 'react';
import { getAllMembers, updateMemberStatus } from '../../utils/adminApi';

const LIMIT = 20;

const statusLabel: Record<string, string> = {
  active: '비활성', suspended: '정지', banned: '차단', deleted: '탈퇴',
};

const Members = (): ReactElement => {
  const [members, setMembers] = useState<Record<string, unknown>[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);

  const [modal, setModal] = useState<{ userId: string; currentStatus: string } | null>(null);
  const [newStatus, setNewStatus] = useState('active');
  const [reason, setReason] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    const res = await getAllMembers({ page, limit: LIMIT, search });
    setMembers(res.data);
    setTotal(res.total);
    setLoading(false);
  }, [page, search]);

  useEffect(() => { load(); }, [load]);

  const totalPages = Math.ceil(total / LIMIT);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  };

  const openModal = (member: Record<string, unknown>) => {
    setModal({ userId: member.id as string, currentStatus: (member.account_status as string) || 'active' });
    setNewStatus((member.account_status as string) || 'active');
    setReason((member.status_reason as string) || '');
  };

  const handleStatusUpdate = async () => {
    if (!modal) return;
    try {
      await updateMemberStatus(modal.userId, newStatus, reason);
      setModal(null);
      load();
    } catch (err) {
      alert('상태 변경 실패: ' + (err as Error).message);
    }
  };

  const formatDate = (d: unknown) => d ? new Date(d as string).toLocaleDateString('ko-KR') : '-';

  return (
    <>
      <div className="admin-page-header">
        <h1>회원 관리</h1>
        <p>전체 회원을 조회하고 상태를 관리합니다</p>
      </div>

      <div className="admin-table-card">
        <div className="admin-table-header">
          <h2>회원 목록 ({total}명)</h2>
          <div className="admin-table-actions">
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                className="admin-search-input"
                placeholder="이름 또는 이메일 검색..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button type="submit" className="admin-btn admin-btn-sm admin-btn-primary">검색</button>
            </form>
          </div>
        </div>

        {loading ? (
          <div className="admin-loading"><div className="loading-spinner"></div></div>
        ) : members.length === 0 ? (
          <div className="admin-empty">
            <i className="fa-solid fa-users"></i>
            <p>회원이 없습니다.</p>
          </div>
        ) : (
          <>
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>가입일</th>
                    <th>최근 로그인</th>
                    <th>상태</th>
                    <th>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((m) => (
                    <tr key={m.id as string}>
                      <td>{(m.display_name as string) || '-'}</td>
                      <td>{(m.email as string) || '-'}</td>
                      <td>{formatDate(m.created_at)}</td>
                      <td>{formatDate(m.last_sign_in_at)}</td>
                      <td>
                        <span className={`admin-badge ${(m.account_status as string) || 'active'}`}>
                          {statusLabel[(m.account_status as string)] || '비활성'}
                        </span>
                      </td>
                      <td>
                        <button
                          className="admin-btn admin-btn-sm admin-btn-secondary"
                          onClick={() => openModal(m)}
                        >
                          기간종료
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="admin-pagination">
                <button disabled={page <= 1} onClick={() => setPage(page - 1)}>‹</button>
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((p) => Math.abs(p - page) <= 2 || p === 1 || p === totalPages)
                  .map((p, i, arr) => (
                    <span key={p}>
                      {i > 0 && arr[i - 1] !== p - 1 && <span style={{ padding: '0 4px' }}>…</span>}
                      <button
                        className={page === p ? 'active' : ''}
                        onClick={() => setPage(p)}
                      >
                        {p}
                      </button>
                    </span>
                  ))}
                <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>›</button>
              </div>
            )}
          </>
        )}
      </div>

      {modal && (
        <div className="admin-modal-overlay" onClick={() => setModal(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <h3>회원 기간종료</h3>
            <div className="admin-form">
              <div className="admin-form-group">
                <label>상태</label>
                <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                  <option value="active">비활성</option>
                  <option value="suspended">정지</option>
                  <option value="banned">차단</option>
                </select>
              </div>
              <div className="admin-form-group">
                <label>사유</label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="상태 변경 사유를 입력하세요"
                />
              </div>
            </div>
            <div className="admin-modal-actions">
              <button className="admin-btn admin-btn-secondary" onClick={() => setModal(null)}>
                취소
              </button>
              <button className="admin-btn admin-btn-primary" onClick={handleStatusUpdate}>
                변경
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Members;
