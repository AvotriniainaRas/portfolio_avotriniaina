import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { LocaleLayout } from './LocaleLayout'
import { LegacyRedirect, RootRedirect } from './redirects'
import { HomePage } from '../features/home/HomePage'
import { ProjectsPage } from '../features/projects/ProjectsPage'
import { ProjectDetailPage } from '../features/projects/ProjectDetailPage'
import { AboutPage } from '../features/about/AboutPage'
import { ContactPage } from '../features/contact/ContactPage'
import { NotFoundPage } from '../shared/components/NotFoundPage'
import { LOCALES, type Locale } from '../i18n/config'
import { ROUTE_PATHS, type RouteKey } from '../i18n/routes'

/** Les pages du site : une clé (voir i18n/routes.ts) et le composant qui l'affiche. */
const PAGES: { key: RouteKey; element: React.ReactNode }[] = [
  { key: 'home', element: <HomePage /> },
  { key: 'projects', element: <ProjectsPage /> },
  { key: 'project', element: <ProjectDetailPage /> },
  { key: 'about', element: <AboutPage /> },
  { key: 'contact', element: <ContactPage /> },
]

/**
 * Les mêmes pages, déclinées pour une langue.
 * `handle.routeKey` permet au sélecteur de langue et au SEO de savoir quelle page est affichée.
 */
function pagesFor(locale: Locale): RouteObject[] {
  const pages: RouteObject[] = PAGES.map(({ key, element }) => {
    const path = ROUTE_PATHS[key][locale]
    return path === ''
      ? { index: true, element, handle: { routeKey: key } }
      : { path, element, handle: { routeKey: key } }
  })
  pages.push({ path: '*', element: <NotFoundPage />, handle: { routeKey: 'notFound' } })
  return pages
}

export const router = createBrowserRouter([
  { path: '/', element: <RootRedirect /> },

  // /fr/... et /en/... : une arborescence complète par langue
  ...LOCALES.map((locale) => ({
    path: `/${locale}`,
    element: <LocaleLayout locale={locale} />,
    children: pagesFor(locale),
  })),

  // Anciennes adresses françaises sans préfixe : redirigées vers /fr/...
  { path: '/projets', element: <LegacyRedirect /> },
  { path: '/projets/:slug', element: <LegacyRedirect /> },
  { path: '/a-propos', element: <LegacyRedirect /> },
  { path: '/contact', element: <LegacyRedirect /> },

  // Toute autre adresse : page 404 (affichée en français par défaut)
  {
    path: '*',
    element: <LocaleLayout locale="fr" />,
    children: [
      { path: '*', element: <NotFoundPage />, handle: { routeKey: 'notFound' } },
    ],
  },
])
