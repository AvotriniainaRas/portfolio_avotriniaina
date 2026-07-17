import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import { PROJECTS } from './data/projects'

const EASE = [0.22, 1, 0.36, 1] as const

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = PROJECTS.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/projets" replace />

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="mx-auto max-w-3xl px-6 py-20"
    >
      <Link to="/projets" className="text-sm font-medium text-primary hover:underline">
        ← Retour aux projets
      </Link>

      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-accent">
        {project.category}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{project.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-800 dark:text-gray-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-12 space-y-10">
        <div>
          <h2 className="text-lg font-semibold text-primary">Objectif métier</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{project.objective}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary">Architecture</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{project.architecture}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary">
            Fonctionnalités principales
          </h2>
          <ul className="mt-2 space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2 text-gray-700 dark:text-gray-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary">Apports techniques</h2>
          <ul className="mt-2 space-y-2">
            {project.technicalHighlights.map((h) => (
              <li key={h} className="flex gap-2 text-gray-700 dark:text-gray-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}
