import type { Locale } from './config'

/**
 * Table des routes : une même page a une adresse différente selon la langue
 * (/fr/projets  <->  /en/projects). Des URLs dans la langue du lecteur sont
 * meilleures pour le référencement et pour la confiance d'un client.
 *
 * La « clé » (home, projects, ...) est l'identité stable d'une page.
 * Elle permet de retrouver la page équivalente dans l'autre langue.
 */
export const ROUTE_PATHS = {
  home: { fr: '', en: '' },
  projects: { fr: 'projets', en: 'projects' },
  project: { fr: 'projets/:slug', en: 'projects/:slug' },
  about: { fr: 'a-propos', en: 'about' },
  contact: { fr: 'contact', en: 'contact' },
} as const satisfies Record<string, Record<Locale, string>>

export type RouteKey = keyof typeof ROUTE_PATHS

export type RouteParams = Record<string, string>

/** Construit l'adresse complète d'une page : buildPath('project', 'en', { slug: 'x' }) -> /en/projects/x */
export function buildPath(
  key: RouteKey,
  locale: Locale,
  params: RouteParams = {}
): string {
  const pattern: string = ROUTE_PATHS[key][locale]
  const resolved = pattern.replace(/:(\w+)/g, (_, name: string) =>
    encodeURIComponent(params[name] ?? '')
  )
  return resolved ? `/${locale}/${resolved}` : `/${locale}`
}
