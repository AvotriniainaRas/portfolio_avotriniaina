import { motion } from 'framer-motion'
import { LocalizedLink } from '../../i18n/LocalizedLink'
import { useI18n } from '../../i18n/useI18n'
import { ArrowLeft } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

export function NotFoundPage() {
  const { t } = useI18n()

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <p className="text-sm font-semibold tracking-widest text-primary uppercase">
          {t.notFound.code}
        </p>
        <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
          {t.notFound.title}
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-gray-600 dark:text-gray-400">
          {t.notFound.text}
        </p>

        <LocalizedLink
          to="home"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-gray-900 px-6 text-sm font-semibold text-white transition-transform hover:scale-[1.03] dark:bg-white dark:text-gray-900"
        >
          <ArrowLeft size={16} />
          {t.notFound.back}
        </LocalizedLink>
      </motion.div>
    </section>
  )
}
