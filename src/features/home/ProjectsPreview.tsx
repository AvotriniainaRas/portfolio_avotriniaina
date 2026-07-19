import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../projects/data/projects'
import { ProjectsAccordion } from '../projects/ProjectsAccordion'

const EASE = [0.22, 1, 0.36, 1] as const

// 4 projets choisis pour leur diversité : web fullstack, projet personnel,
// plateforme académique, projet collaboratif réel.
const PREVIEW_SLUGS = [
  'aina-trans',
  'systeme-gestion-scolaire',
  'mini-moodle',
  'fbbm-evenements',
]

const previewProjects = PREVIEW_SLUGS.map((slug) =>
  PROJECTS.find((p) => p.slug === slug)!
)

export function ProjectsPreview() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10 text-center sm:mb-12 sm:text-left"
        >
          <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
            <span className="h-px w-6 bg-gray-400" aria-hidden="true" />
            Mes projets
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Quelques réalisations récentes
          </h2>
          <p className="mx-auto mt-3 max-w text-gray-600 sm:mx-0 dark:text-gray-400">
            Un aperçu de mes projets académiques, personnels et collaboratifs.
          </p>
        </motion.div>

        <ProjectsAccordion projects={previewProjects} defaultOpenIndex={0} />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          className="mt-10 flex justify-center sm:justify-start"
        >
          <Link
            to="/projets"
            className="inline-flex h-14 items-center gap-2.5 rounded-full bg-gray-900 py-1 pr-1.5 pl-7 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.03] dark:bg-white dark:text-gray-900"
          >
            Voir tous les projets
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
