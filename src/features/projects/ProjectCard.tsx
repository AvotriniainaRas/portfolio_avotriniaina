import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Project } from './types'

const EASE = [0.22, 1, 0.36, 1] as const

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: EASE }}
      whileHover={{ y: -3 }}
      className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900/40"
    >
      <p className="text-xs font-medium uppercase tracking-wide text-accent">
        {project.category}
      </p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm text-gray-600 dark:text-gray-400">
        {project.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-gray-200 px-2.5 py-1 text-[11px] font-medium text-gray-500 dark:border-gray-800 dark:text-gray-500"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 3 && (
          <span className="rounded-full px-2.5 py-1 text-[11px] font-medium text-gray-400">
            +{project.stack.length - 3}
          </span>
        )}
      </div>

      <Link
        to={`/projets/${project.slug}`}
        className="mt-5 text-sm font-semibold text-primary hover:underline"
      >
        Détails →
      </Link>
    </motion.div>
  )
}
