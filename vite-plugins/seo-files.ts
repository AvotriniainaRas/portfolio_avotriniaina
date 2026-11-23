import type { Plugin } from 'vite'
import { LOCALES, DEFAULT_LOCALE } from '../src/i18n/config'
import { buildPath, type RouteKey } from '../src/i18n/routes'
import { PROJECTS } from '../src/features/projects/data/projects'

/**
 * Génère sitemap.xml et robots.txt au moment du build.
 *
 * Pourquoi un plugin plutôt que des fichiers écrits à la main dans public/ ?
 * Parce que ces fichiers contiennent l'adresse publique du site (SITE_URL) et la liste des pages
 * et des projets : les générer évite qu'ils deviennent faux quand on ajoute un projet ou
 * quand on change de domaine.
 */
export function seoFiles(siteUrl: string): Plugin {
  const staticPages: RouteKey[] = ['home', 'projects', 'about', 'contact']

  /** Une entrée <url> par langue, chacune listant toutes ses traductions (hreflang). */
  function entries(key: RouteKey, params: Record<string, string> = {}) {
    const alternates = LOCALES.map(
      (l) =>
        `    <xhtml:link rel="alternate" hreflang="${l}" href="${siteUrl}${buildPath(key, l, params)}"/>`
    )
    alternates.push(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${buildPath(key, DEFAULT_LOCALE, params)}"/>`
    )
    return LOCALES.map(
      (l) =>
        `  <url>\n    <loc>${siteUrl}${buildPath(key, l, params)}</loc>\n${alternates.join('\n')}\n  </url>`
    )
  }

  return {
    name: 'seo-files',
    apply: 'build',
    generateBundle() {
      const urls = [
        ...staticPages.flatMap((key) => entries(key)),
        ...PROJECTS.flatMap((p) => entries('project', { slug: p.slug })),
      ]

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`
      const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`

      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })
    },
  }
}
