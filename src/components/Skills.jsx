import SectionHeader from './SectionHeader.jsx'
import { skillBars, skillGroups } from '../data/skills.js'
import { useIntersection } from '../hooks/useIntersection.js'

export default function Skills() {
  const [ref, visible] = useIntersection()

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <SectionHeader eyebrow="— SKILLS —" title="Technical Capabilities" />

        <div className="skills-grid">
          <div className="skills-card premium-tier">
            <div className="skills-card-header">
              <span className="tier-badge">RARE CORE SYSTEM</span>
              <h3>Enterprise & Mainframe</h3>
            </div>
            <p>Operating high-availability banking infrastructure under strict production SLA environments.</p>
            <div className="skills-tags">
              <span>COBOL</span>
              <span>IBM Mainframe</span>
              <span>VSAM</span>
              <span>Credit Card Processing</span>
              <span>Incident Handling</span>
            </div>
          </div>

          <div className="skills-card">
            <h3>Core Backend & API</h3>
            <p>Building secure, scalable, and thread-safe systems using modern service-repository architectures.</p>
            <div className="skills-tags">
              <span>Java (Spring Boot)</span>
              <span>PHP (CodeIgniter 3 & 4)</span>
              <span>RESTful API Design</span>
              <span>JWT Authentication</span>
            </div>
          </div>

          <div className="skills-card">
            <h3>Databases & Storage</h3>
            <p>Designing structured relational schemas and optimizing transactional data synchronization.</p>
            <div className="skills-tags">
              <span>MySQL</span>
              <span>IBM MAINFRAME</span>
              <span>PostgreSQL</span>
              <span>Relational Schema Design</span>
            </div>
          </div>

          <div className="skills-card">
            <h3>Frontend Engineering</h3>
            <p>Crafting role-specific administrative dashboard layouts and interactive real-time state interfaces.</p>
            <div className="skills-tags">
              <span>React.js</span>
              <span>Vite</span>
              <span>Tailwind CSS</span>
              <span>JavaScript (ES6+)</span>
              <span>Responsive UI Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
