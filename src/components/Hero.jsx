import { profile, techPills } from '../data/profile.js'
import resumeUrl from '../assets/resume-andhyka.pdf?url'
import profileImage from '../assets/andhyka-profile.png'

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero__inner container">
        <div className="hero__content">
          <div className="availability reveal-down">
            <span className="availability__dot" />
            OPEN TO ENTERPRISE BACKEND OPPORTUNITIES
          </div>

          <h1
            className="hero__title"
            aria-label="Enterprise Backend Engineer and Web Developer"
          >
            <span style={{ animationDelay: '0.5s' }}>
              Enterprise Backend Engineer
            </span>

            <span className="accent" style={{ animationDelay: '0.7s' }}>
              Building Reliable Transactional Systems & Modern Backend Architectures
            </span>
          </h1>

          <p className="hero__subtitle animate-fade-up delay-800">
            Experienced in enterprise transactional systems, RESTful API
            development, and backend application architecture using COBOL,
            IBM MAINFRAME, Spring Boot, and modern web technologies in production
            banking environments.
          </p>

          <div className="hero__trust animate-fade-up delay-850">
            Production Banking Systems • Transaction Processing • Enterprise APIs
          </div>

          <div className="hero__actions animate-fade-up delay-900">
            <a className="btn btn--primary" href="#projects">
              VIEW MY WORK <span aria-hidden="true">↓</span>
            </a>

            <a className="btn btn--ghost" href={resumeUrl} download>
              DOWNLOAD CV <span aria-hidden="true">-&gt;</span>
            </a>
          </div>

          <div
            className="tech-pills animate-fade-up delay-1000"
            aria-label="Core technologies"
          >
            {techPills.map((pill) => (
              <span key={pill}>{pill}</span>
            ))}
          </div>
        </div>

        <aside className="profile-card interactive" aria-label="Profile summary">
          <div className="profile-card__image-wrapper">
            <img
              src={profileImage}
              alt="Andhyka Hendra Kurniawan"
              className="profile-card__image"
            />
          </div>

          <div className="profile-card__content">
            <h2>{profile.name}</h2>

            <p className="mono accent">
              Backend Engineer • Banking Systems
            </p>

            <p className="profile-card__location">
              Pasuruan, East Java, Indonesia
            </p>

            <div className="profile-card__divider" />

            <div className="profile-card__stats">
              <div>
                <strong>4+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>5+</strong>
                <span>Production Projects</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Registered Works</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}