import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
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
    <section className="mx-auto max-w-4xl px-6 pt-10 pb-20 sm:pt-12">
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
        <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
          <span className="h-px w-6 bg-gray-400" aria-hidden="true" />
          Compétences
        </p>
        <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
          Une stack <span className="text-primary">complète</span>, du frontend au
          déploiement
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>

      {/* Savoir-être */}
      <div className="mb-20">
        <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
          <span className="h-px w-6 bg-gray-400" aria-hidden="true" />
          Savoir-être
        </p>
        <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
          Ce qui fait la <span className="text-accent">différence</span>, au-delà du code
        </h2>
        <SoftSkills />
      </div>

      {/* Parcours */}
      <div className="mb-20">
        <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
          <span className="h-px w-6 bg-gray-400" aria-hidden="true" />
          Parcours
        </p>
        <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
          De la formation à la <span className="text-primary">pratique</span>
        </h2>
        <Timeline />
      </div>

      {/* Langues */}
      <div className="mb-20">
        <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
          <span className="h-px w-6 bg-gray-400" aria-hidden="true" />
          Langues
        </p>
        <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
          De quoi <span className="text-accent">échanger</span> sans barrière
        </h2>
        <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
          {LANGUAGES.map((lang) => (
            <div key={lang.label} className="flex items-center justify-between py-3.5">
              <p className="font-semibold text-gray-900 dark:text-white">{lang.label}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{lang.level}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA de clôture */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: EASE }}
        className="rounded-3xl bg-gray-950 px-8 py-14 text-center dark:bg-black"
      >
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Envie d'en savoir plus{' '}
          <span className="text-accent">ou de garder mon profil sous la main</span> ?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-gray-400">
          Téléchargez mon CV pour retrouver mon parcours et mes compétences en un coup
          d'œil.
        </p>
        <a
          href="/CV_RASAMIMANANA_Avotriniaina.pdf"
          download
          className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
        >
          <Download size={16} strokeWidth={2} />
          Télécharger mon CV
        </a>
      </motion.div>
    </section>
  )
}
