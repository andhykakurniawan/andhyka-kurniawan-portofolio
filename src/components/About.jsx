import SectionHeader from './SectionHeader.jsx'
import { useIntersection } from '../hooks/useIntersection.js'

export default function About() {
  const [ref, visible] = useIntersection()

  return (
    <section
      ref={ref}
      className={`about section ${visible ? 'is-visible' : ''}`}
      id="about"
    >
      <div className="container">
        <SectionHeader
          eyebrow="— ABOUT —"
          title="Engineering Background"
        />

        <div className="about-grid">
          <div className="about-content">
            <p>
              Backend Engineer with 4+ years of experience building and
              maintaining enterprise-grade systems in banking and web
              environments.
            </p>

            <p>
              Experienced in transactional backend workflows using COBOL,
              IBM MAINFRAME, and modern REST API development using Spring Boot and
              PHP frameworks.
            </p>

            <p>
              Focused on backend reliability, operational consistency,
              relational database design, and scalable application
              architecture.
            </p>

            <div className="about-stats-row">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">YEARS EXP</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">PROJECTS</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">REGISTERED IP</span>
              </div>
            </div>
          </div>

          <div className="about-expertise">
            <div className="expertise-card highlight-card">
              <div className="card-badge">PRODUCTION BANKING</div>
              <h3>Enterprise & Core Banking</h3>
              <p>
                4+ years handling mission-critical transactional workflows at <strong>PT Indocyber Global Teknologi</strong> for <strong>Bank Negara Indonesia (BNI)</strong>. Operating under strict SLA constraints.
              </p>
              <div className="mini-tags">
                <span>COBOL</span>
                <span>IBM MAINFRAME</span>
                <span>VSAM</span>
              </div>
            </div>

            <div className="expertise-subgrid">
              <div className="expertise-card info-card">
                <span className="card-icon">🎓</span>
                <h4>Education</h4>
                <p>B.S. Information Systems</p>
                <span className="card-subtext">Universitas Atma Jaya Yogyakarta (GPA: 3.22)</span>
              </div>

              <div className="expertise-card info-card">
                <span className="card-icon">📜</span>
                <h4>Intellectual Property</h4>
                <p>3 Registered Works</p>
                <span className="card-subtext">DJKI Kementerian Hukum & HAM RI</span>
              </div>
            </div>

            <div className="expertise-card implementation-card">
              <h3>Modern Stack Implementation</h3>
              <p>
                Designing modular component layouts, secure state management, and thread-safe backend APIs.
              </p>
              <div className="mini-tags implementation">
                <span>React.js</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}