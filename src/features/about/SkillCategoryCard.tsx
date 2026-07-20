import { motion } from 'framer-motion'
import type { SkillCategory } from './data/skills'

const EASE = [0.22, 1, 0.36, 1] as const

export function SkillCategoryCard({
  category,
  index,
}: {
  category: SkillCategory
  index: number
}) {
  const Icon = category.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900/40"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="h-9 w-1 rounded-full bg-accent" aria-hidden="true" />
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon size={20} strokeWidth={2} />
        </span>
      </div>

      <h3 className="mb-3 font-semibold tracking-tight">{category.name}</h3>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-800 dark:text-gray-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
