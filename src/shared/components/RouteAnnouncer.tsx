import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Dans une application à page unique, le navigateur n'annonce pas les changements de page.
 * Cette zone « polie » lit le titre de la nouvelle page aux lecteurs d'écran, sans déplacer le focus
 * (déplacer le focus gênerait quelqu'un qui bascule la langue ou le thème au clavier).
 */
export function RouteAnnouncer() {
  const { pathname } = useLocation()
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Petit délai : le titre est mis à jour par la nouvelle page après ce rendu.
    const id = window.setTimeout(() => setMessage(document.title), 150)
    return () => window.clearTimeout(id)
  }, [pathname])

  return (
    <div role="status" aria-live="polite" className="sr-only">
      {message}
    </div>
  )
}
