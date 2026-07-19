import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import { ContactForm } from './ContactForm'

const EASE = [0.22, 1, 0.36, 1] as const

export function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Me contacter</h1>
        <p className="mx-auto mt-4 max-w-lg text-gray-600 dark:text-gray-400">
          Une question, une opportunité de stage, ou juste envie d'échanger sur un projet
          ? Écrivez-moi.
        </p>
      </motion.div>

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        <a
          href="mailto:avotriniainaras2@gmail.com"
          className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-primary hover:text-primary dark:border-gray-800 dark:text-gray-400"
        >
          <Mail size={16} />
          avotriniainaras2@gmail.com
        </a>
        <a
          href="https://wa.me/261380999336"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-accent hover:text-accent dark:border-gray-800 dark:text-gray-400"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
      >
        <ContactForm />
      </motion.div>
    </section>
  )
}
