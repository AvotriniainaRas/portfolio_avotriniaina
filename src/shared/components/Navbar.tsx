import { NavLink } from 'react-router-dom'
import { useScrolled } from '../hooks/useScrolled'
import { ThemeToggle } from '../../features/theme/ThemeToggle'
import { Download } from 'lucide-react'

const CENTER_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/projets', label: 'Projets' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const scrolled = useScrolled()

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur-md transition-shadow duration-300 dark:bg-gray-950/80 ${
        scrolled ? 'border-gray-200 shadow-sm dark:border-gray-800' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        {/* Logo + nom, à gauche */}
        <NavLink to="/" className="flex items-center gap-2.5 justify-self-start">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
            AR
          </span>
          <span className="hidden text-base font-semibold tracking-tight sm:inline">
            Avotriniaina Ras
          </span>
        </NavLink>

        {/* Liens principaux, centrés — desktop uniquement */}
        <ul className="hidden items-center gap-8 justify-self-center text-sm font-medium lg:flex">
          {CENTER_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CV et thème — à droite */}
        <div className="flex items-center gap-4 justify-self-end sm:gap-5">
          <a
            href="/CV_RASAMIMANANA_Avotriniaina.pdf"
            download
            className="hidden items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] sm:inline-flex dark:bg-white dark:text-gray-900"
          >
            <Download size={16} strokeWidth={2} />
            Télécharger CV
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
