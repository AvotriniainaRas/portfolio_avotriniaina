import { useI18n } from '../../i18n/useI18n'

/**
 * Premier élément focusable de la page : invisible, il apparaît au premier appui sur Tab.
 * Il permet aux utilisateurs du clavier et des lecteurs d'écran de sauter la navigation (WCAG 2.4.1).
 * On déplace le focus à la main plutôt que de suivre le lien #main, pour ne pas polluer l'URL.
 */
export function SkipLink() {
  const { t } = useI18n()

  return (
    <a
      href="#main"
      onClick={(event) => {
        event.preventDefault()
        document.getElementById('main')?.focus()
      }}
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:border-2 focus:border-primary focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-text"
    >
      {t.nav.skipToContent}
    </a>
  )
}
