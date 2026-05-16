import { navItems } from '../data/navItems.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        {/* Sisi Kiri: Copyright & Open Source dijadikan satu kalimat ringkas */}
        <div className="footer__left">
          <p>© 2026 Andhyka Hendra Kurniawan.</p>
          <p className="footer__credits">
            Crafted with React. Open sourced on <a href="https://github.com/andhyka-kurniawan/andhyka-kurniawan-portofolio" target="_blank" rel="noreferrer">GitHub</a>.
          </p>
        </div>
        
        {/* Sisi Kanan: Menu Navigasi Horizontal Pendek */}
        <div className="footer__links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label.replace('_ME', '').replace('_', ' ')}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}