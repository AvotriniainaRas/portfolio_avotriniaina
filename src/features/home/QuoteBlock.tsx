import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

export function QuoteBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
      className="mx-auto max-w-[14rem] text-center lg:mx-0 lg:text-left"
    >
      <Quote size={24} className="mx-auto text-accent lg:mx-0" strokeWidth={2.2} />
      <p className="mt-3 text-sm text-gray-600 italic dark:text-gray-400">
        Etudiant en Informatique, Je conçois construis des applications web et mobiles
        fullstack - de l'architecture à l'automatisation de deploiement.
      </p>
    </motion.div>
  )
}
