import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Download } from 'lucide-react'
import { CV_FILES } from '../../config/cv'
import { LOCALES, type Locale } from '../../i18n/config'
import { useI18n } from '../../i18n/useI18n'
import { cn } from '../ui/cn'

/**
 * Choix du CV : français ou anglais.
 *  - 'popover' : un bouton qui déplie les deux choix (barre de navigation) ;
 *  - 'inline'  : les deux téléchargements côte à côte (menu mobile, page À propos).
 * La langue du site passe en premier, mais les deux choix restent toujours disponibles.
 */
export function CvMenu({ variant = 'popover' }: { variant?: 'popover' | 'inline' }) {
  const { locale, t } = useI18n()
  const ordered: Locale[] = [locale, ...LOCALES.filter((l) => l !== locale)]

  if (variant === 'inline') {
    return (
      <div role="group" aria-label={t.cv.groupLabel} className="grid grid-cols-2 gap-2">
        {ordered.map((l) => (
          <a
            key={l}
            href={CV_FILES[l]}
            download
            lang={l}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-line px-3 text-sm font-medium whitespace-nowrap text-text transition-colors hover:bg-surface-sunken"
          >
            <Download size={16} aria-hidden="true" className="shrink-0" />
            {t.cv.options[l]}
          </a>
        ))}
      </div>
    )
  }

  return <CvPopover ordered={ordered} />
}

function CvPopover({ ordered }: { ordered: Locale[] }) {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  // Fermeture au clic ailleurs et sur Échap (le focus revient alors sur le bouton).
  useEffect(() => {
    if (!open) return

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div
      ref={rootRef}
      className="relative"
      // Fermeture quand le focus clavier quitte complètement le composant
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 items-center gap-2 rounded-full bg-text px-4 text-sm font-medium whitespace-nowrap text-surface transition-opacity hover:opacity-85"
      >
        <Download size={16} aria-hidden="true" />
        {t.nav.downloadCv}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={cn('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div
          id={panelId}
          role="group"
          aria-label={t.cv.groupLabel}
          className="absolute top-full right-0 z-10 mt-2 w-64 rounded-lg border border-line bg-surface-raised p-1.5 shadow-print"
        >
          {ordered.map((l) => (
            <a
              key={l}
              href={CV_FILES[l]}
              download
              lang={l}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-surface-sunken"
            >
              <span>
                <span className="block font-semibold">{t.cv.options[l]}</span>
                <span className="block text-xs text-text-muted">{t.cv.format}</span>
              </span>
              <Download size={16} aria-hidden="true" className="text-primary-text" />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
