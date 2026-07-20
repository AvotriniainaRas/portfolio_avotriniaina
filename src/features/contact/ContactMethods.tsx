import { motion } from 'framer-motion'
import { CONTACT_METHODS } from './data/contactMethods'

const EASE = [0.22, 1, 0.36, 1] as const

// E-mail et téléphone sont déjà mis en avant dans ContactInfoBlocks —
// ici, juste les canaux complémentaires.
const OTHER_CHANNELS = CONTACT_METHODS.filter(
  (m) => m.label === 'LinkedIn' || m.label === 'GitHub' || m.label === 'Facebook'
)

export function ContactMethods() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
      className="mt-10"
    >
      <p className="mb-3 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
        Aussi disponible sur
      </p>
      <div className="flex flex-wrap gap-2.5">
        {OTHER_CHANNELS.map((method) => {
          const Icon = method.icon
          return (
            <a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary hover:text-primary dark:border-gray-800 dark:bg-gray-900/40 dark:text-gray-300"
            >
              <Icon size={15} />
              {method.label}
            </a>
          )
        })}
      </div>
    </motion.div>
  )
}
