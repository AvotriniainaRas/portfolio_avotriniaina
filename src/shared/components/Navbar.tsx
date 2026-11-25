import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { LocalizedNavLink } from '../../i18n/LocalizedLink'
import { useI18n } from '../../i18n/useI18n'
import type { RouteKey } from '../../i18n/routes'
import { ThemeToggle } from '../../features/theme/ThemeToggle'
import { useFocusTrap } from '../hooks/useFocusTrap'
import { useScrolled } from '../hooks/useScrolled'
import { cn } from '../ui/cn'
import { CvMenu } from './CvMenu'
import { SlideLabel } from './SlideLabel'
import { LanguageSwitcher } from './LanguageSwitcher'

const EASE = [0.22, 1, 0.36, 1] as const

/** Clés des pages du menu ; les libellés viennent du dictionnaire (t.nav.<clé>). */
const LINKS = [
  'home',
  'projects',
  'about',
  'contact',
] as const satisfies readonly RouteKey[]

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <LocalizedNavLink
      to="home"
      onClick={onClick}
      aria-label="Avotriniaina Ras"
      className="flex items-center gap-3"
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-text text-sm font-bold text-surface"
      >
        AR
      </span>
      <span className="hidden text-base font-semibold tracking-tight sm:inline">
        Avotriniaina Ras
      </span>
    </LocalizedNavLink>
  )
}

export function Navbar() {
  const { t } = useI18n()
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  const closeMenu = () => setMenuOpen(false)

  // Piège de focus, Échap et retour du focus sur le bouton burger
  useFocusTrap(panelRef, menuOpen, closeMenu)

  // Le fond ne défile pas, et reste inaccessible aux lecteurs d'écran, tant que le menu est ouvert.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const main = document.getElementById('main')
    const footer = document.querySelector('footer')
    for (const el of [main, footer]) {
      if (!el) continue
      if (menuOpen) el.setAttribute('inert', '')
      else el.removeAttribute('inert')
    }
    return () => {
      document.body.style.overflow = ''
      main?.removeAttribute('inert')
      footer?.removeAttribute('inert')
    }
  }, [menuOpen])

  // Si on repasse en affichage large avec le menu ouvert, on le referme.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const onChange = () => query.matches && setMenuOpen(false)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b bg-surface/90 backdrop-blur-md transition-colors duration-300',
        scrolled ? 'border-line' : 'border-transparent'
      )}
    >
      <nav
        aria-label={t.nav.mainNavigation}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6"
      >
        <Logo onClick={closeMenu} />

        {/* Liens principaux : affichage large */}
        <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {LINKS.map((key) => (
            <li key={key}>
              <LocalizedNavLink
                to={key}
                className={({ isActive }) =>
                  cn(
                    // Soulignement épais sous la page courante : l'état ne repose pas que sur la couleur
                    'border-b-2 py-1 transition-colors hover:text-primary-text',
                    isActive
                      ? 'border-primary-text text-primary-text'
                      : 'border-transparent'
                  )
                }
              >
                {t.nav[key]}
              </LocalizedNavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:block">
            <CvMenu />
          </div>
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-md text-text transition-colors hover:bg-surface-sunken lg:hidden"
          >
            {menuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.mobileMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            // absolute et non fixed : le backdrop-filter du header deviendrait le référentiel d'un enfant fixed
            className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-surface lg:hidden"
          >
            <div className="mx-auto flex min-h-full max-w-6xl flex-col px-6 py-6">
              <ul className="flex flex-col">
                {LINKS.map((key, index) => (
                  <li key={key} className="border-b border-line">
                    <LocalizedNavLink
                      to={key}
                      onClick={closeMenu}
                      data-autofocus={index === 0 ? '' : undefined}
                      className={({ isActive }) =>
                        cn(
                          'group flex items-center justify-between py-4 text-base font-medium',
                          isActive ? 'text-primary-text' : 'text-text'
                        )
                      }
                    >
                      <SlideLabel>{t.nav[key]}</SlideLabel>
                      <span
                        aria-hidden="true"
                        className="text-sm text-text-muted tabular-nums"
                      >
                        0{index + 1}
                      </span>
                    </LocalizedNavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-6">
                <CvMenu variant="inline" />
                <LocalizedNavLink
                  to="contact"
                  onClick={closeMenu}
                  className="inline-flex h-11 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-strong"
                >
                  {t.nav.cta}
                </LocalizedNavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
