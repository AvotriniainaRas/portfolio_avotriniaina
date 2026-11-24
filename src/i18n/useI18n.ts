import { useContext } from 'react'
import { useLocation, useMatches } from 'react-router-dom'
import { I18nContext, type I18nValue } from './i18n-context'
import type { Locale } from './config'
import { buildPath, type RouteKey, type RouteParams } from './routes'

export function useI18n(): I18nValue {
  const value = useContext(I18nContext)
  if (!value) throw new Error('useI18n doit être utilisé dans un LocaleLayout')
  return value
}

/** Clé de route attachée (via `handle`) à la page actuellement affichée. */
export interface RouteHandle {
  routeKey?: RouteKey | 'notFound' | 'dev'
}

/**
 * Adresse de la page courante dans une AUTRE langue.
 * On retrouve la clé de la page grâce à `handle` et ses paramètres (ex. le slug d'un projet)
 * grâce à la dernière route correspondante, puis on reconstruit l'URL pour la langue cible.
 * Pour une page 404, on renvoie simplement vers l'accueil de la langue cible.
 */
export function useAlternatePath(target: Locale): string {
  const matches = useMatches()
  const { search, hash } = useLocation()
  const last = matches[matches.length - 1]
  const routeKey = (last?.handle as RouteHandle | undefined)?.routeKey

  if (!routeKey || routeKey === 'notFound' || routeKey === 'dev')
    return buildPath('home', target)

  const params = (last?.params ?? {}) as RouteParams
  return `${buildPath(routeKey, target, params)}${search}${hash}`
}
