import { useEffect, useState, type RefObject } from 'react'

/** Largeur (en px) d'un élément, mise à jour quand il est redimensionné. `initial` sert avant la première mesure. */
export function useElementWidth(
  ref: RefObject<HTMLElement | null>,
  initial: number
): number {
  const [width, setWidth] = useState(initial)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width))
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref])

  return width
}
