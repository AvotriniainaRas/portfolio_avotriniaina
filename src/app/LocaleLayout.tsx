import { useEffect, useMemo } from 'react'
import { useMatches } from 'react-router-dom'
import { RootLayout } from './RootLayout'
import { Seo } from '../shared/components/Seo'
import type { Locale } from '../i18n/config'
import { DICTIONARIES } from '../i18n/dictionaries'
import { I18nContext, type I18nValue } from '../i18n/i18n-context'
import { buildPath } from '../i18n/routes'
import { useI18n, type RouteHandle } from '../i18n/useI18n'

/**
 * Pose la langue pour tout le sous-arbre : dictionnaire, générateur d'adresses,
 * attribut <html lang> et métadonnées SEO de la page affichée.
 * La langue vient de l'URL (/fr ou /en) : c'est la source de vérité, ce qui rend chaque
 * page partageable et indexable dans la bonne langue.
 */
export function LocaleLayout({ locale }: { locale: Locale }) {
  const value = useMemo<I18nValue>(
    () => ({
      locale,
      t: DICTIONARIES[locale],
      path: (key, params) => buildPath(key, locale, params),
    }),
    [locale]
  )

  // Lecteurs d'écran, correcteurs et moteurs de recherche se fient à <html lang>.
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <I18nContext.Provider value={value}>
      <RouteSeo />
      <RootLayout />
    </I18nContext.Provider>
  )
}

/**
 * Choisit les métadonnées d'après la clé de la route courante (déclarée dans `handle`).
 * Le détail d'un projet fournit ses propres métadonnées (titre du projet) : on s'efface.
 */
function RouteSeo() {
  const matches = useMatches()
  const handle = matches[matches.length - 1]?.handle as RouteHandle | undefined
  const key = handle?.routeKey
  const { t } = useI18n()

  if (!key || key === 'project' || key === 'dev') return null
  if (key === 'notFound') {
    return (
      <Seo
        title={t.seo.notFound.title}
        description={t.seo.notFound.description}
        noindex
      />
    )
  }
  return (
    <Seo title={t.seo[key].title} description={t.seo[key].description} page={{ key }} />
  )
}
