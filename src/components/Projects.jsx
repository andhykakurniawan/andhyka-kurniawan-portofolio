import { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader.jsx'
import { projects } from '../data/project.js'

const detailGroups = [
  ['Engineering', 'engineering'],
  ['Challenges', 'challenges'],
  ['Architecture', 'architecture'],
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (!selectedProject) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('modal-open')

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('modal-open')
    }
  }, [selectedProject])

  return (
    <>
      <section className="projects section section--surface section--grid" id="projects">
        <div className="container">
          <SectionHeader eyebrow="- PROJECTS -" title="Project Experience" />

          <div className="project-list">
            {projects.map((project, index) => (
              <button
                type="button"
                className="project-row interactive reveal-card"
                style={{ transitionDelay: `${index * 100}ms` }}
                key={project.title}
                onClick={() => setSelectedProject(project)}
                aria-label={`View details for ${project.title}`}
              >
                <span className="project-row__number">{project.number}</span>
                <div className="project-row__content">
                  <div className="project-row__title">
                    <h3>{project.title}</h3>
                    <span aria-hidden="true">-&gt;</span>
                  </div>
                  <p className="project-row__subtitle">
                    {project.category || project.subtitle}
                  </p>
                  <p>{project.overview || project.body}</p>
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
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div className="project-modal__panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="project-modal__close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              x
            </button>

            <div className="project-modal__header">
              <span className="project-modal__number">{selectedProject.number}</span>
              <div>
                <p className="project-modal__category">{selectedProject.category}</p>
                <h3 id="project-modal-title">{selectedProject.title}</h3>
                <p>{selectedProject.overview}</p>
              </div>
            </div>

            <div className="project-modal__meta">
              <span>{selectedProject.period}</span>
              {selectedProject.registration && <span>{selectedProject.registration}</span>}
            </div>

            <div className="tag-list project-modal__tags">
              {selectedProject.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-modal__grid">
              {detailGroups.map(([label, key]) => (
                <section className="project-modal__section" key={key}>
                  <h4>{label}</h4>
                  <ul>
                    {selectedProject[key].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="project-modal__result">
              <h4>Result</h4>
              <p>{selectedProject.result}</p>
            </div>
            {selectedProject.Git && (
              <div className="project-modal__git">
                <h4>GitHub Repository</h4>
                <a href={selectedProject.Git} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
