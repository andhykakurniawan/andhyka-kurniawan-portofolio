import SectionHeader from './SectionHeader.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <section className="contact section section--surface" id="contact">
      <div className="contact__inner container">
        <div>
          <SectionHeader eyebrow="— 05 / CONTACT" title={'Let’s Build\nSomething.'} />
          <p className="contact__lead">
            Ready to collaborate on backend systems, API development, or full-stack web projects?
            Let's talk.
          </p>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>Mail: {profile.email}</a>
            <a href={`tel:${profile.phone}`}>Phone: {profile.phone}</a>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer">
              LinkedIn: {profile.linkedin}
            </a>
            <span>Location: {profile.location}</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            <span>Name</span>
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" placeholder="your@email.com" />
          </label>
          <label>
            <span>Message</span>
            <textarea rows="6" placeholder="Tell me about your project..." />
          </label>
          <button className="btn btn--primary" type="submit">
            SEND MESSAGE <span aria-hidden="true">-&gt;</span>
          </button>
        </form>
      </div>
    </section>
  )
}
