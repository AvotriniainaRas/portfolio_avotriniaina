import { motion } from 'framer-motion'
import { HeroBackground } from './HeroBackground'

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
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <HeroBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <motion.p
          variants={item}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-amber-500"
        >
          Développeur Fullstack — React · Spring Boot · Flutter
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          Je conçois des applications qui vont{' '}
          <span className="text-amber-500">du code au déploiement</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-lg text-base text-gray-600 dark:text-gray-400"
        >
          Étudiant en Licence Informatique à l'EMIT, je construis des applications web et
          mobiles fullstack — de l'architecture frontend à l'automatisation du
          déploiement.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-2">
          {STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-800 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projets"
            className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] dark:bg-white dark:text-gray-900"
          >
            Voir mes projets
          </a>

          <a
            href="/a-propos"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-500"
          >
            <a href="/a-propos">Me contacter</a>
          </a>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="h-9 w-5 rounded-full border border-gray-300 p-1 dark:border-gray-700"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
