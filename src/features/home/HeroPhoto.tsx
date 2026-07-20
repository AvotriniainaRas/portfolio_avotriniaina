import { motion } from 'framer-motion'
import avatar from '../../assets/Avotriniaina-cutout.webp'

export function HeroPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-fit"
    >
      {/* Portrait — fond détouré, plus de forme bleue derrière */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative mx-auto h-60 w-60 overflow-hidden rounded-full border-4 border-white shadow-2xl dark:border-gray-800 sm:h-72 sm:w-72"
      >
        <img
          src={avatar}
          alt="Avotriniaina Rasamimanana"
          className="h-full w-full object-cover object-top"
        />
      </motion.div>

      {/* CTA — gros boutons bien visibles, sous la photo, hauteur commune pour un alignement propre */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="/projets"
          className="flex h-14 items-center gap-2.5 rounded-full bg-gray-900 py-1 pr-1.5 pl-7 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.03] dark:bg-white dark:text-gray-900"
        >
          Voir mes projets
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white">
            →
          </span>
        </a>
        <a
          href="/contact"
          className="flex h-14 items-center rounded-full border-2 border-gray-300 px-7 text-base font-semibold text-gray-800 transition-colors hover:border-primary hover:text-primary dark:border-gray-700 dark:text-gray-200"
        >
          Me contacter
        </a>
      </motion.div>
    </motion.div>
  )
}
