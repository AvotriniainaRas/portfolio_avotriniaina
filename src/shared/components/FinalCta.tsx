import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SOCIAL_LINKS } from '../data/socialLinks'

const EASE = [0.22, 1, 0.36, 1] as const

export function FinalCta() {
  return (
    <section className="bg-gray-950 px-6 py-20 sm:py-24 dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-accent uppercase">
          Disponible pour un stage ou une mission freelance
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Un projet en tête ? Discutons-en.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-gray-400">
          Stage, mission freelance, ou simplement une idée à explorer ensemble — je suis à
          un message près.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex h-14 items-center gap-2.5 rounded-full bg-accent py-1 pr-1.5 pl-7 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
          >
            Me contacter
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
              →
            </span>
          </Link>
          <a
            href="mailto:avotriniainaras2@gmail.com"
            className="text-sm font-medium text-gray-300 hover:text-white"
          >
            avotriniainaras2@gmail.com
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
