import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Layers,
  CheckCircle2,
  Zap,
  ExternalLink,
} from 'lucide-react'
import { GithubIcon } from '../../shared/icons/BrandIcons'
import { PROJECTS } from './data/projects'

const EASE = [0.22, 1, 0.36, 1] as const

const SECTIONS = [
  { key: 'objective', icon: Target, title: 'Objectif métier' },
  { key: 'architecture', icon: Layers, title: 'Architecture' },
  { key: 'features', icon: CheckCircle2, title: 'Fonctionnalités principales' },
  { key: 'technicalHighlights', icon: Zap, title: 'Apports techniques' },
] as const

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const index = PROJECTS.findIndex((p) => p.slug === slug)
  const project = PROJECTS[index]

  if (!project) return <Navigate to="/projets" replace />

  const previous = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length]
  const next = PROJECTS[(index + 1) % PROJECTS.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {/* Bandeau de couverture décoratif */}
      <div className="relative overflow-hidden bg-gray-950 px-6 py-16 sm:py-20 dark:bg-black">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/projets"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white"
          >
            <ArrowLeft size={15} />
            Retour aux projets
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-gray-700 px-3 py-1 text-xs font-semibold text-accent uppercase">
              {project.category}
            </span>
            {project.featured && (
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white uppercase">
                Projet phare
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-xl text-gray-400">{project.tagline}</p>

          {project.links && (project.links.github || project.links.demo) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white"
                >
                  <GithubIcon size={16} />
                  Voir le code
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-gray-700 px-5 py-2.5 text-sm font-semibold text-white hover:border-gray-500"
                >
                  <ExternalLink size={16} />
                  Voir la démo
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-800 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 space-y-10">
          {SECTIONS.map(({ key, icon: Icon, title }) => {
            const content = project[key]

            return (
              <div key={key}>
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon size={17} strokeWidth={2} />
                  </span>
                  <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
                </div>

                {Array.isArray(content) ? (
                  <ul className="ml-1 space-y-2">
                    {content.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="ml-1 text-gray-700 dark:text-gray-300">{content}</p>
                )}
              </div>
            )
          })}
        </div>

        {/* Navigation précédent / suivant */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-3">
          <Link
            to={`/projets/${previous.slug}`}
            className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-gray-300 px-6 text-sm font-semibold text-gray-800 transition-colors hover:border-primary hover:text-primary dark:border-gray-700 dark:text-gray-200"
          >
            <ArrowLeft size={15} />
            {previous.title}
          </Link>

          <Link
            to={`/projets/${next.slug}`}
            className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-gray-300 px-6 text-sm font-semibold text-gray-800 transition-colors hover:border-primary hover:text-primary dark:border-gray-700 dark:text-gray-200"
          >
            {next.title}
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-10 rounded-2xl bg-gray-950 px-6 py-10 text-center dark:bg-black">
          <p className="font-semibold text-white">
            Une question sur ce projet, ou une idée similaire en tête ?
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex h-12 items-center gap-2 rounded-full bg-accent py-1 pr-1.5 pl-6 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
          >
            Me contacter
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
              <ArrowRight size={15} />
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
