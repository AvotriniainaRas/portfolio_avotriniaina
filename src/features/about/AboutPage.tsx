import { motion } from 'framer-motion'
import { SKILL_CATEGORIES } from './data/skills'
import { SkillCategoryCard } from './SkillCategoryCard'
import { Timeline } from './Timeline'
import { SoftSkills } from './SoftSkills'

const EASE = [0.22, 1, 0.36, 1] as const

const LANGUAGES = [
  { label: 'Malagasy', level: 'Langue maternelle' },
  { label: 'Français', level: 'Courant' },
  { label: 'Anglais', level: 'Intermédiaire' },
]

export function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mb-16 text-center"
      >
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">À propos</h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-600 dark:text-gray-400">
          Étudiant en 3ème année de Licence en informatique à l'EMIT, développeur
          fullstack avec une solide pratique de projets concrets — du backend à
          l'interface — et des notions DevOps/Cloud.
        </p>
      </motion.div>

      {/* Compétences techniques */}
      <div className="mb-20">
        <h2 className="mb-6 text-xl font-bold tracking-tight">Compétences techniques</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>

      {/* Savoir-être */}
      <div className="mb-20">
        <h2 className="mb-6 text-xl font-bold tracking-tight">Savoir-être</h2>
        <SoftSkills />
      </div>

      {/* Parcours */}
      <div className="mb-20">
        <h2 className="mb-8 text-xl font-bold tracking-tight">Mon parcours</h2>
        <Timeline />
      </div>

      {/* Langues */}
      <div>
        <h2 className="mb-6 text-xl font-bold tracking-tight">Langues</h2>
        <div className="flex flex-wrap gap-4">
          {LANGUAGES.map((lang) => (
            <div
              key={lang.label}
              className="rounded-xl border border-gray-200 px-5 py-3 dark:border-gray-800"
            >
              <p className="font-semibold">{lang.label}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{lang.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
