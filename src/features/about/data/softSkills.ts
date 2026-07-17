import { Target, Compass, Zap, MessageCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface SoftSkill {
  label: string
  icon: LucideIcon
}

export const SOFT_SKILLS: SoftSkill[] = [
  { label: 'Rigueur et sens du détail', icon: Target },
  { label: "Autonomie et sens de l'organisation", icon: Compass },
  { label: "Capacité d'apprentissage rapide", icon: Zap },
  { label: 'Communication claire', icon: MessageCircle },
]
