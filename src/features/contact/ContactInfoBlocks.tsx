import { motion } from 'framer-motion'
import { MapPin, MessageCircle } from 'lucide-react'
import { CONTACT_METHODS } from './data/contactMethods'

const EASE = [0.22, 1, 0.36, 1] as const

const email = CONTACT_METHODS.find((m) => m.label === 'E-mail')!.value
const phone = CONTACT_METHODS.find((m) => m.label.startsWith('Téléphone'))!.value

const INFO_BLOCKS = [
  {
    icon: MapPin,
    label: 'Basé à',
    lines: [
      'Fianarantsoa, Madagascar',
      'Disponible partout pour un stage (priorité Antananarivo), ou à distance',
    ],
  },
  {
    icon: MessageCircle,
    label: 'Me contacter directement',
    lines: [phone, email],
  },
]

export function ContactInfoBlocks() {
  return (
    <div className="mt-10 flex flex-col gap-6">
      {INFO_BLOCKS.map((block, index) => {
        const Icon = block.icon
        return (
          <motion.div
            key={block.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.08, ease: EASE }}
            className="flex items-start gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon size={18} />
            </span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{block.label}</p>
              {block.lines.map((line) => (
                <p key={line} className="text-sm text-gray-600 dark:text-gray-400">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
