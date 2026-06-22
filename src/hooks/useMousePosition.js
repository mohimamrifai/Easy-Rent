import { useEffect, useRef, useState } from 'react'

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const handleMove = (e) => {
      const rect = node.getBoundingClientRect()
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    node.addEventListener('mousemove', handleMove)
    return () => node.removeEventListener('mousemove', handleMove)
  }, [])

  return [ref, position]
}
