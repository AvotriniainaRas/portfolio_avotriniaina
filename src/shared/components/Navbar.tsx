import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LocalizedNavLink } from '../../i18n/LocalizedLink'
import { useI18n } from '../../i18n/useI18n'
import type { RouteKey } from '../../i18n/routes'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useScrolled } from '../hooks/useScrolled'
import { ThemeToggle } from '../../features/theme/ThemeToggle'
import { Download, Menu, X } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

/** Clés des pages du menu ; les libellés viennent du dictionnaire (t.nav.<clé>). */
const CENTER_LINKS = [
  'home',
  'projects',
  'about',
  'contact',
] as const satisfies readonly RouteKey[]

export function Navbar() {
  const { t } = useI18n()
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  // Empêche le scroll du fond quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur-md transition-shadow duration-300 dark:bg-gray-950/80 ${
        scrolled ? 'border-gray-200 shadow-sm dark:border-gray-800' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        {/* Logo + nom, à gauche */}
        <LocalizedNavLink
          to="home"
          className="flex items-center gap-2.5 justify-self-start"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white dark:bg-white dark:text-gray-900">
            AR
          </span>
          <span className="hidden text-base font-semibold tracking-tight sm:inline">
            Avotriniaina Ras
          </span>
        </LocalizedNavLink>

        {/* Liens principaux, centrés — desktop uniquement */}
        <ul className="hidden items-center gap-8 justify-self-center text-sm font-medium lg:flex">
          {CENTER_LINKS.map((key) => (
            <li key={key}>
              <LocalizedNavLink
                to={key}
                className={({ isActive }) =>
                  `transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300'
                  }`
                }
              >
                {t.nav[key]}
              </LocalizedNavLink>
            </li>
          ))}
        </ul>

        {/* CV, thème et burger — à droite */}
        <div className="flex items-center gap-3 justify-self-end sm:gap-5">
          <a
            href="/CV_RASAMIMANANA_Avotriniaina.pdf"
            download
            className="hidden items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] sm:inline-flex dark:bg-white dark:text-gray-900"
          >
            <Download size={16} strokeWidth={2} />
            {t.nav.downloadCv}
          </a>
          <LanguageSwitcher />
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-gray-100 lg:hidden dark:text-gray-300 dark:hover:bg-gray-900"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Panneau mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden border-t border-gray-200 bg-white lg:hidden dark:border-gray-800 dark:bg-gray-950"
          >
            <ul className="flex flex-col px-6 py-4 text-base font-medium">
              {CENTER_LINKS.map((key) => (
                <li key={key}>
                  <LocalizedNavLink
                    to={key}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 transition-colors hover:text-primary ${
                        isActive ? 'text-primary' : 'text-gray-700 dark:text-gray-300'
                      }`
                    }
                  >
                    {t.nav[key]}
                  </LocalizedNavLink>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-100 px-6 py-4 dark:border-gray-900">
              <a
                href="/CV_RASAMIMANANA_Avotriniaina.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-3 text-sm font-medium text-white dark:bg-white dark:text-gray-900"
              >
                <Download size={16} strokeWidth={2} />
                {t.nav.downloadCv}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
