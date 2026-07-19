import { motion } from 'framer-motion'
import { Code2, Smartphone, Cloud, Server } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

const CATEGORY_ICONS = [Code2, Smartphone, Server, Cloud]

export function StatBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.65, ease: EASE }}
      className="mx-auto mt-6 max-w-[14rem] border-t border-gray-200 pt-5 text-center lg:mx-0 lg:text-left dark:border-gray-800"
    >
      <div className="flex -space-x-2.5 justify-center lg:justify-start">
        {CATEGORY_ICONS.map((Icon, index) => (
          <span
            key={index}
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-gray-600 dark:border-gray-950 dark:bg-gray-800 dark:text-gray-300"
            style={{ zIndex: CATEGORY_ICONS.length - index }}
          >
            <Icon size={15} />
          </span>
        ))}
      </div>

      <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
        10<span className="text-primary">+</span>
      </p>
      <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
        Projets réalisés — web, mobile, DevOps &amp; Cloud
      </p>
    </motion.div>
  )
}
