import { useState, useEffect } from 'react'
import { navItems } from '../data/navItems.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Efek pendeteksi scroll untuk memberikan background glassmorphism solid saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`nav-shell ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav container" aria-label="Primary navigation">
        <a className="nav__brand" href="#home" aria-label="Andhyka home">
          DIKA.K
        </a>

        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <div className={`nav__links ${open ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>

        {/* Upgrade micro-copy CTA biar kerasa lebih premium */}
        <a className="btn btn--outline nav__cta" href="#contact">
          GET IN TOUCH <span aria-hidden="true">-&gt;</span>
        </a>
      </nav>
    </header>
  )
}