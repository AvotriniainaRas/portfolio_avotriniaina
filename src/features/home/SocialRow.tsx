import { motion } from 'framer-motion'
import { SOCIAL_LINKS } from '../../shared/data/socialLinks'

const EASE = [0.22, 1, 0.36, 1] as const

export function SocialRow() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
      className="mx-auto mt-6 max-w-[15rem] border-t border-gray-200 pt-5 text-center lg:mx-0 lg:text-left dark:border-gray-800"
    >
      <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
        Me suivre sur
      </p>
      <div className="mt-3 flex justify-center gap-2.5 lg:justify-start">
        {SOCIAL_LINKS.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-primary hover:text-primary dark:border-gray-800 dark:text-gray-400"
            >
              <Icon size={15} />
            </a>
          )
        })}
      </div>
    </motion.div>
  )
}
