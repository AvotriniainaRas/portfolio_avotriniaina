import { motion } from 'framer-motion'
import { LocalizedLink } from '../../i18n/LocalizedLink'
import { useI18n } from '../../i18n/useI18n'
import type { RouteKey } from '../../i18n/routes'
import { SOCIAL_LINKS } from '../data/socialLinks'

const EASE = [0.22, 1, 0.36, 1] as const

const NAV_LINKS = [
  'home',
  'projects',
  'about',
  'contact',
] as const satisfies readonly RouteKey[]

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="dark border-t border-gray-900 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mx-auto max-w-5xl px-6 py-14"
      >
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Identité */}
          <div className="text-center sm:text-left">
            <LocalizedLink to="home" className="inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-900">
                AR
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                Avotriniaina Ras
              </span>
            </LocalizedLink>
            <p className="mt-3 max-w-xs text-sm text-gray-400">{t.footer.tagline}</p>
          </div>

          {/* Navigation secondaire */}
          <nav className="flex flex-col items-center gap-2.5 text-sm sm:items-start">
            {NAV_LINKS.map((key) => (
              <LocalizedLink
                key={key}
                to={key}
                className="text-gray-400 transition-colors hover:text-white"
              >
                {t.nav[key]}
              </LocalizedLink>
            ))}
          </nav>

          {/* Réseaux */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-colors hover:border-accent hover:text-accent-text"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          {t.footer.rights(year)}
        </div>
      </motion.div>
    </footer>
  )
}
