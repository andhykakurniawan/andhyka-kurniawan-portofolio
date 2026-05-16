import { useIntersection } from '../hooks/useIntersection.js'

export default function SectionHeader({ eyebrow, title, className = '' }) {
  const [ref, visible] = useIntersection()

  return (
    <div ref={ref} className={`section-header ${visible ? 'is-visible' : ''} ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}
