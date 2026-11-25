import { useEffect, useRef, type RefObject } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

/** Éléments réellement atteignables : un élément en display:none n'a pas de offsetParent. */
function focusableIn(container: HTMLElement): HTMLElement[] {
  return [...container.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
    (el) => el.offsetParent !== null
  )
}

/**
 * Piège de focus pour un menu ou une boîte de dialogue ouverte (WCAG 2.1.2 et 2.4.3).
 *  - à l'ouverture : le focus va sur l'élément marqué data-autofocus (sinon le premier élément focusable) ;
 *  - Tab et Maj+Tab bouclent à l'intérieur du conteneur ;
 *  - Échap appelle `onEscape` ;
 *  - à la fermeture : le focus revient là où il était (le bouton qui a ouvert le menu).
 */
export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  active: boolean,
  onEscape: () => void
) {
  // On garde la dernière version de onEscape sans relancer l'effet à chaque rendu.
  const escapeRef = useRef(onEscape)
  useEffect(() => {
    escapeRef.current = onEscape
  })

  useEffect(() => {
    const container = containerRef.current
    if (!active || !container) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    const initial =
      container.querySelector<HTMLElement>('[data-autofocus]') ??
      focusableIn(container)[0]
    initial?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        escapeRef.current()
        return
      }
      if (event.key !== 'Tab' || !container) return

      const items = focusableIn(container)
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [active, containerRef])
}
