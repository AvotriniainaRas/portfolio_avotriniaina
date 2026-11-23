/**
 * Résolution de l'adresse publique du site.
 * Fichier « pur » (sans import.meta) pour être partagé entre le code du navigateur
 * (src/config/site.ts) et le plugin Vite qui s'exécute dans Node.
 */
export const DEFAULT_SITE_URL = 'https://avotriniainaras-portfolio.onrender.com'

export function resolveSiteUrl(raw: string | undefined): string {
  return (raw || DEFAULT_SITE_URL).replace(/\/+$/, '')
}
