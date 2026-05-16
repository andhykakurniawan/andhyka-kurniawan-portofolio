import { useState } from 'react'
import SectionHeader from './SectionHeader.jsx'
import { profile } from '../data/profile.js' // Tetap mempertahankan import data utama lo

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Integrasi simulasi transmit data form
    setTimeout(() => {
      alert('Message transmitted successfully!')
      setFormState({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section className="contact section section--surface" id="contact">
      <div className="contact-grid container">

        {/* Sisi Kiri: Industrial Labeling Info Panel */}
        <div className="contact-info">
          <SectionHeader
            eyebrow="— CONNECTION —"
            title={'Let’s Build\nSomething.'}
          />
          <p className="contact-description">
            Ready to collaborate on mission-critical enterprise systems, robust API development, or full-stack operational frameworks? Let's talk.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-label">DIRECT EMAIL</span>
              <a href={`mailto:${profile.email}`} className="detail-value">
                {profile.email}
              </a>
            </div>

            <div className="detail-item">
              <span className="detail-label">LOCATION</span>
              <span className="detail-value">{profile.location}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">NETWORKS</span>
              <div className="detail-links">
                <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/andhyka-kurniawan" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sisi Rangan: Clean Minimalist Message Form */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                required
                placeholder="Your name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                placeholder="your@email.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                rows="5"
                placeholder="Inquire about backend development roles, project specifications, or technical discussions..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
              <span aria-hidden="true" style={{ marginLeft: '0.5rem' }}>-&gt;</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}