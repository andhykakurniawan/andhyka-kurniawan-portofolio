import SectionHeader from './SectionHeader.jsx'
import { useIntersection } from '../hooks/useIntersection.js'

const infoBlocks = [
  {
    label: 'Education',
    lines: ['Information Systems', 'Atma Jaya Yogyakarta', 'GPA: 3.22 / 4.00'],
  },
  {
    label: 'Current Role',
    lines: ['Backend Developer', 'PT Indocyber (BNI)', 'Jan 2022 - Dec 2025'],
  },
  {
    label: 'IP Registrations',
    lines: ['3 Registered Works', 'DKI Indonesia'],
  },
  {
    label: 'Languages',
    lines: ['Bahasa Indonesia', 'English (Proficient)'],
  },
]

export default function About() {
  const [ref, visible] = useIntersection()

  return (
    <section className="about section section--surface" id="about">
      <div className="about__inner container">
        <div>
          <SectionHeader eyebrow="— ABOUT ME -" title="Who I Am" />
          <div className={`about__copy reveal-block ${visible ? 'is-visible' : ''}`} ref={ref}>
            <p>
              I'm a backend engineer with <strong>4+ years</strong> building and maintaining
              enterprise-grade systems in production banking environments at PT Indocyber Global
              Teknologi, serving <strong>Bank Negara Indonesia</strong> (BNI).
            </p>
            <p>
              My core strength is bridging legacy mainframe systems — COBOL, IBM MAINFRAME, VSAM — with
              modern API-based backends built in Java Spring Boot and PHP CodeIgniter. I ship
              reliable, maintainable code.
            </p>
            <p>
              I've also taught backend development as an Assistant Lecturer at Universitas Atma
              Jaya Yogyakarta, mentoring <strong>50+ students</strong> in web development and
              system architecture.
            </p>
          </div>
        </div>

        <aside className="info-panel interactive">
          <p className="info-panel__title">QUICK INFO</p>
          {infoBlocks.map((block) => (
            <div className="info-panel__item" key={block.label}>
              <h3>{block.label}</h3>
              {block.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
        </aside>
      </div>
    </section>
  )
}
