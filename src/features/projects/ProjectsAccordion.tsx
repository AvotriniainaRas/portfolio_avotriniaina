import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from './types'

const EASE = [0.22, 1, 0.36, 1] as const

export function ProjectsAccordion({
  projects,
  defaultOpenIndex = 0,
}: {
  projects: Project[]
  defaultOpenIndex?: number | null
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

  return (
    <div className="flex flex-col gap-3">
      {projects.map((project, index) => {
        const isOpen = openIndex === index

        return (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: EASE }}
            className={`overflow-hidden rounded-2xl transition-colors ${
              isOpen ? 'bg-gray-900 dark:bg-black' : 'bg-gray-50 dark:bg-gray-900/40'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-4 sm:gap-6">
                <span
                  className={`text-sm font-semibold tabular-nums ${
                    isOpen ? 'text-gray-500' : 'text-gray-400 dark:text-gray-600'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <span
                  className={`text-lg font-bold tracking-tight sm:text-xl ${
                    isOpen ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {project.title}
                </span>
              </span>

              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                  isOpen
                    ? 'rotate-45 bg-accent text-white'
                    : 'bg-white text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-300'
                }`}
              >
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-7 sm:px-8">
                    <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                      {project.category}
                    </p>
                    <p className="mt-2 max-w-xl text-sm text-gray-300 sm:text-base">
                      {project.tagline}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-gray-700 px-3 py-1 text-xs font-medium text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/projets/${project.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent"
                    >
                      Voir le projet
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
