import { createContext } from 'react'
import type { Locale } from './config'
import type { Dictionary } from './dictionaries'
import type { RouteKey, RouteParams } from './routes'

export interface I18nValue {
  locale: Locale
  /** Textes de l'interface dans la langue courante : t.nav.home */
  t: Dictionary
  /** Adresse d'une page dans la langue courante : path('projects') -> /fr/projets */
  path: (key: RouteKey, params?: RouteParams) => string
}

export const I18nContext = createContext<I18nValue | null>(null)
