import { motion } from 'framer-motion'
import { HeroBackground } from './HeroBackground'
import { HeroPhoto } from './HeroPhoto'
import { QuoteBlock } from './QuoteBlock'
import { StatBlock } from './StatBlock'
import { BadgesCluster } from './BadgesCluster'
import { SocialRow } from './SocialRow'

const EASE = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const STACK = ['React TS', 'Spring Boot', 'NestJS', 'Flutter', 'Docker', 'AWS']

export function Hero() {
  return (
    <section className="relative px-6 pt-6 pb-16 sm:pt-8 sm:pb-20">
      <HeroBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-6xl"
      >
        {/* Accroche centrée */}
        <div className="text-center">
          <motion.p
            variants={item}
            className="mb-3 inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400"
          >
            <span className="h-px w-6 bg-gray-400" aria-hidden="true" />
            Bonjour !
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Je suis <span className="text-primary">Avotriniaina</span>{' '}
            <span className="text-accent">Ras</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-md text-lg text-gray-600 dark:text-gray-400"
          >
            Développeur web &amp; mobile
          </motion.p>

          {/* Rangée compacte — mobile/tablette uniquement, les colonnes latérales prennent le relais à partir de lg */}
          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap justify-center gap-2 lg:hidden"
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
        </div>

        {/* Citation/stat — photo — badges/réseaux */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.78fr_1fr_0.78fr] lg:gap-6">
          <div className="order-2 flex flex-col items-center lg:order-1 lg:items-start">
            <QuoteBlock />
            <StatBlock />
          </div>

          <motion.div variants={item} className="order-1 lg:order-2">
            <HeroPhoto />
          </motion.div>

          <div className="order-3 hidden flex-col items-start lg:flex">
            <BadgesCluster />
            <SocialRow />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
