import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

/**
 * Retourne `true` dès que la page a défilé au-delà de `threshold`.
 * Sert à donner à la navbar un style légèrement plus marqué une fois
 * qu'elle "colle" en haut de l'écran, sans jamais la masquer.
 */
export function useScrolled(threshold = 8) {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (current) => {
    setScrolled(current > threshold)
  })

  return scrolled
}
