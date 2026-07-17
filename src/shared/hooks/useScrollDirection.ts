import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'

export type ScrollDirection = 'up' | 'down'

export function useScrollDirection(threshold = 10) {
  const { scrollY } = useScroll()
  const [direction, setDirection] = useState<ScrollDirection>('up')
  const lastY = useRef(0)

  useMotionValueEvent(scrollY, 'change', (current) => {
    const diff = current - lastY.current

    // Toujours visible tout en haut de page
    if (current < threshold) {
      setDirection('up')
      lastY.current = current
      return
    }

    // Ignore les micro-scrolls (trackpad, rebond mobile)
    if (Math.abs(diff) < threshold) return

    setDirection(diff > 0 ? 'down' : 'up')
    lastY.current = current
  })

  return direction
}
