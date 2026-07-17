import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Project } from './types'

const EASE = [0.22, 1, 0.36, 1] as const

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: EASE }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800"
    >
      <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        Projet phare
      </span>

      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h3>
      <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        {project.category}
      </p>
      <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-400">{project.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <Link
        to={`/projets/${project.slug}`}
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1"
      >
        Voir le projet en détail
        <span aria-hidden="true">→</span>
      </Link>
    </motion.div>
  )
}
