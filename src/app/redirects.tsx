import { Navigate, useLocation } from 'react-router-dom'
import { readStoredLocale } from '../i18n/config'

/** « / » : on envoie vers la langue mémorisée, sinon vers le français (langue par défaut). */
export function RootRedirect() {
  const { search, hash } = useLocation()
  return <Navigate to={`/${readStoredLocale()}${search}${hash}`} replace />
}

/**
 * Anciennes adresses sans préfixe de langue (/projets, /contact...).
 * Elles existent déjà dans des liens partagés, dans le CV, sur LinkedIn : on les conserve
 * en redirigeant vers leur équivalent français plutôt que de les casser.
 */
export function LegacyRedirect() {
  const { pathname, search, hash } = useLocation()
  return <Navigate to={`/fr${pathname}${search}${hash}`} replace />
}
