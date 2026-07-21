import { motion } from 'framer-motion'

type Badge = {
  label: string
  variant: 'solid' | 'outline'
  rotate: number
  floatDelay: number
}

const BADGES: Badge[] = [
  { label: 'React TS', variant: 'solid', rotate: -3, floatDelay: 0 },
  { label: 'Spring Boot', variant: 'outline', rotate: 2, floatDelay: 0.5 },
  { label: 'NestJS', variant: 'outline', rotate: -2, floatDelay: 1 },
  { label: 'Flutter', variant: 'solid', rotate: 3, floatDelay: 0.3 },
  { label: 'Docker', variant: 'outline', rotate: -4, floatDelay: 0.8 },
  { label: 'Kubernetes', variant: 'outline', rotate: 2, floatDelay: 1.3 },
  { label: 'Linux', variant: 'solid', rotate: -2, floatDelay: 0.2 },
  { label: 'CI/CD', variant: 'outline', rotate: 4, floatDelay: 0.9 },
]

export function BadgesCluster() {
  return (
    <div className="mx-auto flex max-w-[15rem] flex-wrap justify-center gap-2.5 lg:mr-0 lg:ml-auto lg:justify-end">
      {BADGES.map((badge, index) => (
        <motion.span
          key={badge.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.7 + index * 0.07 },
            scale: { duration: 0.5, delay: 0.7 + index * 0.07 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: badge.floatDelay,
            },
          }}
          style={{ rotate: badge.rotate }}
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shadow-sm ${
            badge.variant === 'solid'
              ? 'bg-primary text-white'
              : 'border border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200'
          }`}
        >
          {badge.label}
        </motion.span>
      ))}
    </div>
  )
}
