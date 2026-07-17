import { motion } from 'framer-motion'
import avatar from '../../assets/Avotriniaina.png'

export function HeroPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-fit"
    >
      {/* Anneau dégradé bleu -> vert */}
      <div className="absolute inset-0 -m-3 rounded-full bg-gradient-to-tr from-primary via-primary-light to-accent opacity-70 blur-[2px]" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-gray-950 sm:h-64 sm:w-64"
      >
        <img
          src={avatar}
          alt="Avotriniaina Rasamimanana"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Badge flottante */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center whitespace-nowrap rounded-2xl border border-gray-200 bg-white/90 px-5 py-2.5 shadow-md backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/90"
      >
        <span className="text-sm font-bold text-gray-900 dark:text-white">
          Avotriniaina RASAMIMANANA
        </span>
        <span className="text-xs font-medium text-primary">
          Développeur Fullstack · DevOps & Cloud
        </span>
      </motion.div>
    </motion.div>
  )
}
