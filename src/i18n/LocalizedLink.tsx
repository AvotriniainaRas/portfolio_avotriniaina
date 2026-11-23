import { Link, NavLink, type LinkProps, type NavLinkProps } from 'react-router-dom'
import { useI18n } from './useI18n'
import type { RouteKey, RouteParams } from './routes'

/**
 * Liens internes « conscients de la langue » : on donne la CLÉ de la page,
 * pas une adresse écrite en dur. <LocalizedLink to="projects" /> mène à /fr/projets
 * en français et à /en/projects en anglais, sans qu'aucun composant ne connaisse le préfixe.
 */
type Target = { to: RouteKey; params?: RouteParams }

export function LocalizedLink({ to, params, ...rest }: Target & Omit<LinkProps, 'to'>) {
  const { path } = useI18n()
  return <Link to={path(to, params)} {...rest} />
}

export function LocalizedNavLink({
  to,
  params,
  end,
  ...rest
}: Target & Omit<NavLinkProps, 'to'>) {
  const { path } = useI18n()
  // L'accueil (/fr) est le préfixe de toutes les autres pages : il doit correspondre exactement.
  return <NavLink to={path(to, params)} end={to === 'home' ? true : end} {...rest} />
}
