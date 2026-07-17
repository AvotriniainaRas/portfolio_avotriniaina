import { motion } from 'framer-motion'
import { TIMELINE } from './data/timeline'

const EASE = [0.22, 1, 0.36, 1] as const

export function Timeline() {
  return (
    <div className="relative">
      {/* Ligne verticale */}
      <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-6" />

      <ul className="space-y-10">
        {TIMELINE.map((event, index) => {
          const Icon = event.icon
          return (
            <motion.li
              key={event.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
              className="relative flex gap-5 pl-0 sm:gap-6"
            >
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-sm dark:bg-gray-950 sm:h-12 sm:w-12">
                <Icon size={18} strokeWidth={2} />
              </span>

              <div className="pt-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {event.period}
                </p>
                <h3 className="mt-1 font-semibold tracking-tight">{event.title}</h3>
                <p className="mt-1.5 max-w-xl text-sm text-gray-600 dark:text-gray-400">
                  {event.description}
                </p>
              </div>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}
