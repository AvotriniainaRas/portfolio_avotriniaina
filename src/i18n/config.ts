/**
 * Configuration des langues du site.
 *
 * Ce fichier est volontairement « pur » (aucun import de React ni de Vite) :
 * il est aussi utilisé côté Node, par le plugin qui génère le sitemap.
 */
export const LOCALES = ['fr', 'en'] as const

export type Locale = (typeof LOCALES)[number]

/** Le français reste la langue par défaut du site. */
export const DEFAULT_LOCALE: Locale = 'fr'

export const LOCALE_STORAGE_KEY = 'locale'

export const LOCALE_NAMES: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
}

/** Valeur de la balise Open Graph og:locale pour chaque langue. */
export const OG_LOCALES: Record<Locale, string> = {
  fr: 'fr_FR',
  en: 'en_US',
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}

/**
 * Lit la langue mémorisée. Le try/catch protège des navigateurs où localStorage
 * est indisponible (navigation privée stricte, stockage bloqué).
 */
export function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    return isLocale(stored) ? stored : DEFAULT_LOCALE
  } catch {
    return DEFAULT_LOCALE
  }
}

export function storeLocale(locale: Locale): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    /* Mémorisation impossible : sans gravité, la langue vient de l'URL. */
  }
}
