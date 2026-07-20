import { motion } from 'framer-motion'
import { ContactForm } from './ContactForm'
import { ContactInfoBlocks } from './ContactInfoBlocks'
import { ContactMethods } from './ContactMethods'

const EASE = [0.22, 1, 0.36, 1] as const

export function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-10 pb-20 sm:pt-12">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-10">
        {/* Colonne gauche : badge, titre, infos */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
            <span className="h-px w-6 bg-gray-400" aria-hidden="true" />
            Me contacter
          </p>

          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Discutons de votre projet
          </h1>

          <p className="mt-5 max-w-md text-gray-600 dark:text-gray-400">
            Une question, une opportunité de stage, ou juste envie d'échanger sur un
            projet ? Choisissez le canal qui vous convient, ou écrivez-moi directement.
          </p>

          <ContactInfoBlocks />
          <ContactMethods />
        </motion.div>

        {/* Colonne droite : formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
