import { useState } from 'react'
import { navItems } from '../data/navItems.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-shell">
      <nav className="nav container" aria-label="Primary navigation">
        <a className="nav__brand" href="#home" aria-label="Andhyka home">
          DIKA
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

        <a className="btn btn--outline nav__cta" href="#contact">
          HIRE ME <span aria-hidden="true">-&gt;</span>
        </a>
      </nav>
    </header>
  )
}
