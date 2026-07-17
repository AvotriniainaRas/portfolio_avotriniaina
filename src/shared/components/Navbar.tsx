import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useScrollDirection } from '../hooks/useScrollDirection'
import { ThemeToggle } from '../../features/theme/ThemeToggle'

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/projets', label: 'Projets' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const direction = useScrollDirection()

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={direction}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-md dark:border-gray-800/70 dark:bg-gray-950/80"
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <NavLink to="/" className="text-lg font-semibold tracking-tight">
          Avotriniaina<span className="text-amber-500">.</span>
        </NavLink>

        <ul className="hidden items-center gap-8 text-sm font-medium sm:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-amber-500 ${
                    isActive ? 'text-amber-500' : 'text-gray-600 dark:text-gray-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </motion.header>
  )
}
