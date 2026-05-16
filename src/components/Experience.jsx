import SectionHeader from './SectionHeader.jsx'
import { experiences } from '../data/experience.js' // Pastikan path data lo sudah benar

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <SectionHeader eyebrow="— 04 / EXPERIENCE" title="My Journey" />

        <div className="timeline">
          {experiences.map((item, index) => (
            <article
              className={`timeline__entry interactive reveal-card ${index % 2 ? 'is-right' : 'is-left'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              key={`${item.period}-${item.role}`} // Mengganti item.title menjadi item.role untuk key
            >
              <div className="timeline__dot" />
              <div className="timeline__card">
                <div className="timeline__period">{item.period}</div>
                
                <div className="timeline__title-row">
                  {/* Menggunakan item.role sesuai objek baru */}
                  <h3>{item.role}</h3>
                  {item.badge && <span className="rare-badge">{item.badge}</span>}
                </div>

                {/* Menampilkan Company & Client (jika ada, seperti BNI) */}
                <p className="timeline__company">
                  {item.company} 
                  {item.client && <span className="timeline__client"> — Client: {item.client}</span>}
                </p>

                {/* Menggunakan item.overview untuk ringkasan singkat */}
                <p className="timeline__overview">{item.overview}</p>

                {/* Mengubah ringkasan paragraf tunggal (body) menjadi list pencapaian (achievements) */}
                {item.achievements && (
                  <ul className="timeline__achievements-list">
                    {item.achievements.map((achievement, actIndex) => (
                      <li key={actIndex}>{achievement}</li>
                    ))}
                  </ul>
                )}

                <div className="tag-list">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                {item.impact && <p className="timeline__impact">Key impact: {item.impact}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}