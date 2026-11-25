import { useSyncExternalStore } from 'react'

/**
 * Vrai tant que la media query correspond (ex. '(min-width: 768px)').
 * `serverValue` sert au pré-rendu et à la première peinture avant que le navigateur ne réponde.
 */
export function useMediaQuery(query: string, serverValue = false): boolean {
  return useSyncExternalStore(
    (notify) => {
      const list = window.matchMedia(query)
      list.addEventListener('change', notify)
      return () => list.removeEventListener('change', notify)
    },
    () => window.matchMedia(query).matches,
    () => serverValue
  )
}
