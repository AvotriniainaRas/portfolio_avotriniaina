import { resolveSiteUrl } from './siteUrl'

/**
 * Configuration centrale du site.
 *
 * SITE_URL est la SEULE source de vérité pour l'adresse publique du site.
 * Elle sert aux URLs canoniques, aux balises hreflang, à Open Graph et au sitemap.
 * Le jour où un domaine personnalisé est acheté, on définit simplement VITE_SITE_URL
 * (ou on change DEFAULT_SITE_URL dans siteUrl.ts) : rien d'autre à modifier.
 */
export const SITE_URL = resolveSiteUrl(import.meta.env.VITE_SITE_URL)

export const SITE_NAME = 'Avotriniaina Ras'

/** Image de partage par défaut (Open Graph / Twitter), chemin relatif à SITE_URL. */
export const DEFAULT_OG_IMAGE = '/og-image.png'
