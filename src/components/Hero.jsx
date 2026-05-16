import { profile, techPills } from '../data/profile.js'
import resumeUrl from '../assets/resume-andhyka.pdf?url'

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero__inner container">
        <div className="hero__content">
          <div className="availability reveal-down">
            <span className="availability__dot" />
            OPEN TO WORK
          </div>

          <h1 className="hero__title" aria-label="Backend Engineer and Web Developer">
            {['Backend', 'Engineer &'].map((word, index) => (
              <span key={word} style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                {word}
              </span>
            ))}
            <span className="accent" style={{ animationDelay: '0.7s' }}>
              Web Developer.
            </span>
          </h1>

          <p className="hero__subtitle animate-fade-up delay-800">
            Building enterprise-grade backend systems, modern REST APIs, and full-stack web
            applications. 4+ years in production banking environments.
          </p>

          <div className="hero__actions animate-fade-up delay-900">
            <a className="btn btn--primary" href="#projects">
              VIEW MY WORK <span aria-hidden="true">↓</span>
            </a>
            <a className="btn btn--ghost" href={resumeUrl} download>
              DOWNLOAD CV <span aria-hidden="true">-&gt;</span>
            </a>
          </div>

          <div className="tech-pills animate-fade-up delay-1000" aria-label="Core technologies">
            {techPills.map((pill) => (
              <span key={pill}>{pill}</span>
            ))}
          </div>
        </div>

        <aside className="profile-card interactive" aria-label="Profile summary">
          <div className="profile-card__avatar">AHK</div>
          <h2>{profile.name}</h2>
          <p className="mono accent">{profile.shortRole}</p>
          <p className="profile-card__location">Pasuruan, East Java</p>
          <div className="profile-card__divider" />
          <div className="profile-card__stats">
            <div>
              <strong>4+</strong>
              <span>Years Exp</span>
            </div>
            <div>
              <strong>5+</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Registered IP</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
