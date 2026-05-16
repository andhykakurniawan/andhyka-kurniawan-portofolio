import SectionHeader from './SectionHeader.jsx'
import { skillBars, skillGroups } from '../data/skills.js'
import { useIntersection } from '../hooks/useIntersection.js'

export default function Skills() {
  const [ref, visible] = useIntersection()

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <SectionHeader eyebrow="— 02 / TECHNICAL SKILLS" title="My Tech Stack" />

        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article
              className={`skill-card interactive skill-card--${group.accent} reveal-card`}
              style={{ transitionDelay: `${index * 80}ms` }}
              key={group.title}
            >
              <div className="skill-card__head">
                <span className="skill-card__icon">{group.icon}</span>
                {group.badge && <span className="rare-badge">{group.badge}</span>}
              </div>
              <h3>{group.title}</h3>
              {group.caption && <p className="skill-card__caption">{group.caption}</p>}
              <div className="tag-list">
                {group.skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div ref={ref} className={`skill-bars ${visible ? 'is-visible' : ''}`}>
          {skillBars.map((skill) => (
            <div className="skill-bar" key={skill.label}>
              <div className="skill-bar__meta">
                <span>{skill.label}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="skill-bar__track">
                <span style={{ width: visible ? `${skill.value}%` : '0%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
