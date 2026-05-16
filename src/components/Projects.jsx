import SectionHeader from './SectionHeader.jsx'
import { projects } from '../data/project.js'

export default function Projects() {
  return (
    <section className="projects section section--surface section--grid" id="projects">
      <div className="container">
        <SectionHeader eyebrow="- 03 / PROJECTS" title="Selected Work" />

        <div className="project-list">
          {projects.map((project, index) => (
            <article
              className="project-row interactive reveal-card"
              style={{ transitionDelay: `${index * 100}ms` }}
              key={project.title}
            >
              <span className="project-row__number">{project.number}</span>
              <div className="project-row__content">
                <div className="project-row__title">
                  <h3>{project.title}</h3>
                  <span aria-hidden="true">-&gt;</span>
                </div>
                <p className="project-row__subtitle">{project.subtitle}</p>
                <p>{project.body}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-row__foot">
                  <span>{project.period}</span>
                  {project.registration && <span>{project.registration}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
