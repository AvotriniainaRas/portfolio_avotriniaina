import { motion } from 'framer-motion'
import { SOFT_SKILLS } from './data/softSkills'

const EASE = [0.22, 1, 0.36, 1] as const

export function SoftSkills() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {SOFT_SKILLS.map((skill, index) => {
        const Icon = skill.icon
        return (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: EASE }}
            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 dark:border-gray-800 dark:bg-gray-900/30"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Icon size={16} strokeWidth={2} />
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {skill.label}
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}
