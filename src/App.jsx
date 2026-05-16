import Navbar from './components/Navbar.jsx'
import HeroCanvas from './components/HeroCanvas.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useMousePosition } from './hooks/useMousePosition.js'

export default function App() {
  const { x, y, active } = useMousePosition()

  return (
    <>
      <HeroCanvas />
      <div
        className={`cursor ${active ? 'cursor--active' : ''}`}
        style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
