import { useMemo, useState } from 'react'
import './App.css'

const initialStudents = [
  { id: 'STU-2024-001', name: 'Olivia Rhye', email: 'olivia.rhye@school.edu', grade: 'Grade 10', initials: 'OR', color: 'lavender' },
  { id: 'STU-2024-002', name: 'Phoenix Baker', email: 'phoenix.baker@school.edu', grade: 'Grade 9', initials: 'PB', color: 'peach' },
  { id: 'STU-2024-003', name: 'Lana Steiner', email: 'lana.steiner@school.edu', grade: 'Grade 11', initials: 'LS', color: 'mint' },
  { id: 'STU-2024-004', name: 'Demi Wilkinson', email: 'demi.wilkinson@school.edu', grade: 'Grade 10', initials: 'DW', color: 'blue' },
  { id: 'STU-2024-005', name: 'Candice Wu', email: 'candice.wu@school.edu', grade: 'Grade 12', initials: 'CW', color: 'rose' },
  { id: 'STU-2024-006', name: 'Natali Craig', email: 'natali.craig@school.edu', grade: 'Grade 9', initials: 'NC', color: 'yellow' },
]

function App() {
  const [students, setStudents] = useState(initialStudents)
  const [search, setSearch] = useState('')

  const visibleStudents = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return students
    return students.filter(({ id, name, email, grade }) =>
      `${id} ${name} ${email} ${grade}`.toLowerCase().includes(query),
    )
  }, [search, students])

  function deleteStudent(studentId) {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== studentId),
    )
  }

  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Main navigation">
        <a className="brand" href="#" aria-label="Northstar home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M16 3.5 19.2 12.8 28.5 16l-9.3 3.2L16 28.5l-3.2-9.3L3.5 16l9.3-3.2L16 3.5Z" fill="currentColor" />
              <circle cx="16" cy="16" r="3" fill="white" />
            </svg>
          </span>
          <span>northstar<span className="brand-period">.</span></span>
        </a>

        <div className="school-switcher">
          <div className="school-avatar">N</div>
          <div className="school-copy">
            <span className="eyebrow">SCHOOL</span>
            <strong>Northstar Academy</strong>
          </div>
          <svg className="chevron" viewBox="0 0 20 20" aria-hidden="true">
            <path d="m6 8 4 4 4-4" />
          </svg>
        </div>

        <nav className="navigation">
          <span className="nav-label">MENU</span>
          <a className="nav-item" href="#overview">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" /></svg>
            Overview
          </a>
          <a className="nav-item active" href="#students" aria-current="page">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" /><circle cx="10" cy="7.5" r="3.5" /><path d="M16 4.2a3.5 3.5 0 0 1 0 6.6M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35" /></svg>
            Students
            <span className="nav-count">{students.length}</span>
          </a>
          <a className="nav-item" href="#classes">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-5 9 5-9 5-9-5Z" /><path d="M7 11.2v5.1c2.9 2.4 7.1 2.4 10 0v-5.1M21 9v6" /></svg>
            Classes
          </a>
          <a className="nav-item" href="#calendar">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="15" rx="2" /><path d="M7.5 3.5v4M16.5 3.5v4M3.5 10h17" /></svg>
            Calendar
          </a>
        </nav>

        <div className="sidebar-bottom">
          <a className="nav-item" href="#settings">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.1.9-1.2 2.1-1.4-.5a7.9 7.9 0 0 1-1.4.8l-.2 1.5h-2.4l-.2-1.5a7.9 7.9 0 0 1-1.4-.8l-1.4.5-1.2-2.1 1.1-.9a7.6 7.6 0 0 1 0-1.6l-1.1-.9 1.2-2.1 1.4.5a7.9 7.9 0 0 1 1.4-.8l.2-1.5h2.4l.2 1.5a7.9 7.9 0 0 1 1.4.8l1.4-.5 1.2 2.1-1.1.9a7.6 7.6 0 0 1 0 1.6Z" /></svg>
            Settings
          </a>
          <div className="profile">
            <div className="profile-avatar">JD</div>
            <div className="profile-copy">
              <strong>Jamie Davis</strong>
              <span>School admin</span>
            </div>
            <button className="more-button" type="button" aria-label="Account options">•••</button>
          </div>
        </div>
      </aside>

      <section className="main-panel" id="students">
        <header className="topbar">
          <div className="breadcrumb"><span>School</span><span className="breadcrumb-slash">/</span><strong>Students</strong></div>
          <div className="topbar-actions">
            <span className="school-year">2024–2025 <span>School year</span></span>
            <button className="icon-button notification-button" type="button" aria-label="Notifications">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg>
              <span className="notification-dot" />
            </button>
          </div>
        </header>

        <div className="content">
          <div className="page-heading">
            <div>
              <div className="heading-kicker"><span className="kicker-line" /> ACADEMIC YEAR 2024–2025</div>
              <h1>Students</h1>
              <p className="page-description">Manage your students and keep their information up to date.</p>
            </div>
          </div>

          <div className="stats-grid">
            <article className="stat-card">
              <div className="stat-topline"><span>Total students</span><span className="stat-icon students-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" /><circle cx="10" cy="7.5" r="3.5" /><path d="M16 4.2a3.5 3.5 0 0 1 0 6.6M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35" /></svg></span></div>
              <div className="stat-value">{students.length}<span className="stat-unit">students</span></div>
              <div className="stat-note"><span className="stat-dot" /> Currently enrolled</div>
            </article>
            <article className="stat-card">
              <div className="stat-topline"><span>Grade levels</span><span className="stat-icon grades-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-5 9 5-9 5-9-5Z" /><path d="M7 11.2v5.1c2.9 2.4 7.1 2.4 10 0v-5.1" /></svg></span></div>
              <div className="stat-value">4<span className="stat-unit">grades</span></div>
              <div className="stat-note">Grade 9 through Grade 12</div>
            </article>
            <article className="stat-card">
              <div className="stat-topline"><span>School year</span><span className="stat-icon year-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="15" rx="2" /><path d="M7.5 3.5v4M16.5 3.5v4M3.5 10h17" /></svg></span></div>
              <div className="stat-value year-value">2024<span className="year-divider">/</span>25</div>
              <div className="stat-note"><span className="year-status">In progress</span> · Ends June 2025</div>
            </article>
          </div>

          <section className="roster-card" aria-labelledby="roster-title">
            <div className="roster-header">
              <div className="roster-title-wrap">
                <h2 id="roster-title">All students</h2>
                <span className="student-total">{students.length}</span>
              </div>
              <label className="search-box">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></svg>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search students..."
                  aria-label="Search students"
                />
              </label>
            </div>

            <div className="table-scroll">
              <table className="student-table">
                <thead>
                  <tr>
                    <th scope="col">STUDENT</th>
                    <th scope="col">STUDENT ID</th>
                    <th scope="col">GRADE</th>
                    <th scope="col">STATUS</th>
                    <th scope="col"><span className="visually-hidden">Actions</span></th>
                  </tr>
                </thead>
                <tbody aria-live="polite">
                  {visibleStudents.map((student) => (
                    <tr key={student.id}>
                      <td>
                        <div className="student-cell">
                          <div className={`student-avatar ${student.color}`} aria-hidden="true">{student.initials}</div>
                          <div className="student-copy">
                            <strong>{student.name}</strong>
                            <span>{student.email}</span>
                          </div>
                        </div>
                      </td>
                      <td><span className="student-id">{student.id}</span></td>
                      <td><span className="grade-label">{student.grade}</span></td>
                      <td><span className="status-label"><span />Active</span></td>
                      <td className="action-cell">
                        <button
                          className="delete-button"
                          type="button"
                          onClick={() => deleteStudent(student.id)}
                          aria-label={`Delete ${student.name}`}
                        >
                          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 5.5h13M8 5.5V3.8h4v1.7m3.2 0-.7 10.7H5.5L4.8 5.5m3.1 3v4.7m4.2-4.7v4.7" /></svg>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {visibleStudents.length === 0 && (
                    <tr>
                      <td className="empty-state" colSpan="5">
                        <span className="empty-icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></svg>
                        </span>
                        <strong>{students.length === 0 ? 'No students yet' : 'No students found'}</strong>
                        <span>{students.length === 0 ? 'Your student list is empty.' : 'Try adjusting your search and try again.'}</span>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="roster-footer">
              <span>Showing <strong>{visibleStudents.length}</strong> of <strong>{students.length}</strong> students</span>
              <div className="pagination">
                <button type="button" disabled aria-label="Previous page">← <span>Previous</span></button>
                <button type="button" disabled aria-label="Next page"><span>Next</span> →</button>
              </div>
            </div>
          </section>
          <footer className="page-footer"><span>© 2025 Northstar Academy</span><span>Made for brighter futures <span className="footer-star">✳</span></span></footer>
        </div>
      </section>
    </main>
  )
}

export default App
