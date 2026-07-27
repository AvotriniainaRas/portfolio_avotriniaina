export type Badge = {
  label: string
  variant: 'solid' | 'outline'
  rotate: number
  floatDelay: number
}

export const BADGES: Badge[] = [
  { label: 'React TS', variant: 'solid', rotate: -3, floatDelay: 0 },
  { label: 'Angular', variant: 'outline', rotate: 3, floatDelay: 0.6 },
  { label: 'Spring Boot', variant: 'outline', rotate: 2, floatDelay: 0.5 },
  { label: 'NestJS', variant: 'solid', rotate: -2, floatDelay: 1 },
  { label: 'Flutter', variant: 'outline', rotate: 3, floatDelay: 0.3 },
  { label: 'Docker', variant: 'solid', rotate: -4, floatDelay: 0.8 },
  { label: 'CI/CD', variant: 'outline', rotate: 4, floatDelay: 0.9 },
  { label: 'Kubernetes', variant: 'outline', rotate: 2, floatDelay: 1.3 },
  { label: 'Linux', variant: 'solid', rotate: -2, floatDelay: 0.2 },
]

export const BADGE_LABELS = BADGES.map((badge) => badge.label)
