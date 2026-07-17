import { motion } from 'framer-motion'
import { PROJECTS } from './data/projects'
import { FeaturedProjectCard } from './FeaturedProjectCard'
import { ProjectCard } from './ProjectCard'

export function ProjectsPage() {
  const featured = PROJECTS.filter((p) => p.featured)
  const others = PROJECTS.filter((p) => !p.featured)

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Mes projets</h1>
        <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">
          Huit projets académiques, personnels et collaboratifs — du web fullstack au
          mobile, en passant par l'IoT.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((project) => (
          <FeaturedProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
