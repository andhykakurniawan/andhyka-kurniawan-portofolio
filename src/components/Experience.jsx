import SectionHeader from './SectionHeader.jsx'
import { experiences } from '../data/experience.js'

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
              key={`${item.period}-${item.title}`}
            >
              <div className="timeline__dot" />
              <div className="timeline__card">
                <div className="timeline__period">{item.period}</div>
                <div className="timeline__title-row">
                  <h3>{item.title}</h3>
                  {item.badge && <span className="rare-badge">{item.badge}</span>}
                </div>
                <p className="timeline__company">{item.company}</p>
                <p>{item.body}</p>
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
