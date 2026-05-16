import { useEffect, useState } from 'react'

export function useMousePosition() {
  const [mouse, setMouse] = useState({ x: -40, y: -40, active: false })

  useEffect(() => {
    const handleMove = (event) => {
      const interactive = event.target.closest('a, button, input, textarea, .interactive')
      setMouse({ x: event.clientX - 6, y: event.clientY - 6, active: Boolean(interactive) })
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return mouse
}
