import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SOCIAL_LINKS } from '../data/socialLinks'

const EASE = [0.22, 1, 0.36, 1] as const

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/projets', label: 'Projets' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-900 bg-black">
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
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-900">
                AR
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                Avotriniaina Ras
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-gray-400">
              Développeur Fullstack · DevOps & Cloud — Étudiant à l'EMIT Fianarantsoa.
            </p>
          </div>

          {/* Navigation secondaire */}
          <nav className="flex flex-col items-center gap-2.5 text-sm sm:items-start">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          © {year} Avotriniaina Rasamimanana. Tous droits réservés.
        </div>
      </motion.div>
    </footer>
  )
}
