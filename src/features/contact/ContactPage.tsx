import { motion } from 'framer-motion'
import { ContactForm } from './ContactForm'
import { ContactMethods } from './ContactMethods'

const EASE = [0.22, 1, 0.36, 1] as const

export function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mb-14 text-center"
      >
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Me contacter</h1>
        <p className="mx-auto mt-4 max-w-lg text-gray-600 dark:text-gray-400">
          Une question, une opportunité de stage, ou juste envie d'échanger sur un projet
          ? Choisissez le canal qui vous convient, ou écrivez-moi directement ci-dessous.
        </p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          <ContactMethods />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
