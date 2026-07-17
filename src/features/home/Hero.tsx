import { motion } from 'framer-motion'
import { HeroBackground } from './HeroBackground'
import { HeroPhoto } from './HeroPhoto'

const EASE = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const STACK = ['React TS', 'Spring Boot', 'NestJS', 'Flutter', 'Docker']

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center px-6">
      <HeroBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8"
      >
        {/* Colonne texte */}
        <div className="text-center lg:text-left">
          <motion.p
            variants={item}
            className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Avotriniaina Rasamimanana
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Je conçois des applications qui vont{' '}
            <span className="text-primary">du code</span> au{' '}
            <span className="text-accent">déploiement</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-lg text-base text-gray-600 dark:text-gray-400 lg:mx-0"
          >
            Étudiant en Licence Informatique à l'EMIT, je construis des applications web
            et mobiles fullstack — de l'architecture frontend à l'automatisation du
            déploiement.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex max-w-sm flex-wrap justify-center gap-x-2.5 gap-y-3 lg:mx-0 lg:justify-start"
          >
            {STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200 px-3.5 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-800 dark:text-gray-400"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a
              href="/projets"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
            >
              Voir mes projets
            </a>
            <a
              href="/contact"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-accent hover:text-accent dark:border-gray-700 dark:text-gray-300"
            >
              Me contacter
            </a>
          </motion.div>
        </div>

        {/* Colonne photo */}
        <motion.div variants={item} className="order-first lg:order-last">
          <HeroPhoto />
        </motion.div>
      </motion.div>
    </section>
  )
}
