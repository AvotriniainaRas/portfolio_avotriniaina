import { motion } from 'framer-motion'
import { useTheme } from './useTheme'

const RAY_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315]
const EASE = [0.22, 1, 0.36, 1] as const

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activer le thème clair' : 'Activer le thème sombre'}
      className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <motion.svg
        viewBox="0 0 24 24"
        width={22}
        height={22}
        animate={{ rotate: isDark ? 40 : 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <defs>
          <mask id="moon-mask">
            <rect x="0" y="0" width="24" height="24" fill="white" />
            <motion.circle
              r="9"
              fill="black"
              animate={{ cx: isDark ? 8 : 24, cy: 4 }}
              transition={{ duration: 0.5, ease: EASE }}
            />
          </mask>
        </defs>

        <motion.circle
          cx="12"
          cy="12"
          className="fill-amber-500 dark:fill-slate-200"
          mask="url(#moon-mask)"
          animate={{ r: isDark ? 6.5 : 5 }}
          transition={{ duration: 0.5, ease: EASE }}
        />

        {RAY_ANGLES.map((angle) => (
          <motion.line
            key={angle}
            x1="12"
            y1="3.5"
            x2="12"
            y2="1.5"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="stroke-amber-500"
            transform={`rotate(${angle} 12 12)`}
            style={{ transformOrigin: '12px 12px' }}
            animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.4 : 1 }}
            transition={{ duration: 0.35, ease: EASE }}
          />
        ))}
      </motion.svg>
    </button>
  )
}
