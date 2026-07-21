import { motion } from 'framer-motion'
import { PROJECTS } from './data/projects'
import { ProjectsAccordion } from './ProjectsAccordion'
import { FinalCta } from '../../shared/components/FinalCta'

const EASE = [0.22, 1, 0.36, 1] as const

export function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-10 pb-20 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Mes projets</h1>
          <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">
            Des réalisations concrètes en environnement web fullstack, mobile et Cloud —
            conçues avec rigueur et le souci du détail
          </p>
        </motion.div>

        <ProjectsAccordion projects={PROJECTS} defaultOpenIndex={0} />
      </section>

      <FinalCta />
    </>
  )
}
