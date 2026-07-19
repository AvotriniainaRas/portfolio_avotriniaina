import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Award, Rocket } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

// Sous-ensemble du parcours complet (features/about/data/timeline.ts) — les
// 3 jalons les plus parlants pour une lecture rapide sur l'accueil.
const MILESTONES = [
  {
    period: 'Depuis 2022',
    title: 'Licence en Informatique — EMIT Fianarantsoa',
    icon: GraduationCap,
  },
  {
    period: 'Formation complémentaire',
    title: 'Attestation en DevOps — ODC Fianarantsoa',
    icon: Award,
  },
  {
    period: "Aujourd'hui",
    title: 'Recherche de stage — 3 mois',
    icon: Rocket,
  },
]

export function AboutPreview() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center lg:text-left"
        >
          <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
            <span className="h-px w-6 bg-gray-400" aria-hidden="true" />À propos de moi
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Étudiant en informatique,{' '}
            <span className="text-accent">en route vers le DevOps &amp; Cloud</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-gray-600 lg:mx-0 dark:text-gray-400">
            En 3ème année de Licence à l'EMIT, je développe des applications fullstack —
            du backend à l'interface — et j'approfondis mes notions de déploiement et
            d'infrastructure au fil de mes projets.
          </p>
          <Link
            to="/a-propos"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent"
          >
            En savoir plus sur mon parcours
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>

        {/* Mini timeline */}
        <div className="relative mx-auto max-w-sm lg:mx-0">
          <div
            className="absolute top-2 bottom-2 left-5 w-px bg-gray-200 dark:bg-gray-800"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-8">
            {MILESTONES.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
                  className="relative flex items-start gap-4"
                >
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-primary text-white shadow-sm dark:border-gray-950">
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                      {milestone.period}
                    </p>
                    <p className="mt-0.5 font-semibold text-gray-900 dark:text-white">
                      {milestone.title}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
