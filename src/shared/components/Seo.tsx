import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../../config/site'
import { LOCALES, OG_LOCALES, DEFAULT_LOCALE } from '../../i18n/config'
import { buildPath, type RouteKey, type RouteParams } from '../../i18n/routes'
import { useI18n } from '../../i18n/useI18n'

interface SeoProps {
  title: string
  description: string
  /** Page décrite : sert à calculer l'URL canonique et les versions dans les autres langues. */
  page?: { key: RouteKey; params?: RouteParams }
  /** Pour les pages à ne pas indexer (ex. 404). */
  noindex?: boolean
}

/**
 * Métadonnées SEO d'une page.
 *
 * React 19 « remonte » automatiquement <title>, <meta> et <link> rendus dans un composant
 * vers le <head> du document : pas besoin de bibliothèque comme react-helmet.
 * Quand la page change, ces balises sont remplacées par celles de la nouvelle page.
 */
export function Seo({ title, description, page, noindex = false }: SeoProps) {
  const { locale } = useI18n()
  const image = `${SITE_URL}${DEFAULT_OG_IMAGE}`
  const urlFor = (l: (typeof LOCALES)[number]) =>
    page ? `${SITE_URL}${buildPath(page.key, l, page.params)}` : undefined
  const canonical = urlFor(locale)

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex" />}

      {/* Une URL canonique unique par langue, et la déclaration croisée des traductions (hreflang). */}
      {canonical && <link rel="canonical" href={canonical} />}
      {page &&
        LOCALES.map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={urlFor(l)} />
        ))}
      {page && (
        <link rel="alternate" hrefLang="x-default" href={urlFor(DEFAULT_LOCALE)} />
      )}

      {/* Open Graph (aperçus LinkedIn, WhatsApp, Facebook...) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={OG_LOCALES[locale]} />
      {LOCALES.filter((l) => l !== locale).map((l) => (
        <meta key={l} property="og:locale:alternate" content={OG_LOCALES[l]} />
      ))}
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  )
}
