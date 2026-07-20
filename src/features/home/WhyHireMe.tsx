import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import avatar from '../../assets/Avotriniaina-cutout.webp'
import { SoftSkills } from '../about/SoftSkills'

const EASE = [0.22, 1, 0.36, 1] as const

// Petits traits décoratifs, en écho discret aux "confettis" de la maquette de
// référence — sobres, dans la palette du site plutôt qu'en couleur vive.
const DASHES = [
  { top: '4%', left: '78%', rotate: -20 },
  { top: '10%', left: '88%', rotate: -15 },
  { top: '2%', left: '68%', rotate: -25 },
  { top: '16%', left: '80%', rotate: -10 },
  { top: '20%', left: '92%', rotate: -18 },
]

export function WhyHireMe() {
  return (
    <section className="px-6 py-4 sm:py-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gray-50 px-6 py-14 sm:px-10 sm:py-16 lg:px-14 dark:bg-gray-900/40">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative mx-auto w-fit"
          >
            {DASHES.map((dash, index) => (
              <span
                key={index}
                className="absolute h-4 w-1 rounded-full bg-primary/40 dark:bg-primary-light/40"
                style={{
                  top: dash.top,
                  left: dash.left,
                  transform: `rotate(${dash.rotate}deg)`,
                }}
                aria-hidden="true"
              />
            ))}

            <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-br from-accent to-primary opacity-90" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-64 sm:w-64 dark:border-gray-950">
              <img
                src={avatar}
                alt="Avotriniaina Rasamimanana"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Contenu */}
          <div className="text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Pourquoi <span className="text-primary">me faire confiance</span> pour votre
              prochain projet ?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
              className="mx-auto mt-4 max-w-lg text-gray-600 lg:mx-0 dark:text-gray-400"
            >
              Étudiant en informatique, j'aborde chaque projet avec la rigueur d'un futur
              professionnel : comprendre le besoin avant de coder, livrer un travail
              propre, et rester joignable jusqu'au bout.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="mt-8"
            >
              <SoftSkills />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
              className="mt-9"
            >
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border-2 border-primary px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Discutons de votre projet
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
