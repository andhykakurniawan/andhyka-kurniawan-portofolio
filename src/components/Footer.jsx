import { navItems } from '../data/navItems.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <a href="#home" className="footer__brand">
          Andhyka Hendra Kurniawan
        </a>
        <div className="footer__links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label.replace('_ME', '').replace('_', ' ')}
            </a>
          ))}
        </div>
        <p>© 2025 Andhyka Hendra Kurniawan</p>
      </div>
    </footer>
  )
}
