import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { CONTACT_METHODS } from './data/contactMethods'

const EASE = [0.22, 1, 0.36, 1] as const

export function ContactMethods() {
  return (
    <div className="flex flex-col gap-3">
      {CONTACT_METHODS.map((method, index) => {
        const Icon = method.icon
        return (
          <motion.a
            key={method.label}
            href={method.href}
            target={method.external ? '_blank' : undefined}
            rel={method.external ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: EASE }}
            className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 transition-colors hover:border-primary dark:border-gray-800 dark:bg-gray-900/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon size={18} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                {method.label}
              </span>
              <span className="block truncate font-medium text-gray-900 dark:text-white">
                {method.value}
              </span>
            </span>
            <ArrowUpRight
              size={16}
              className="shrink-0 text-gray-300 transition-colors group-hover:text-primary dark:text-gray-700"
            />
          </motion.a>
        )
      })}
    </div>
  )
}
