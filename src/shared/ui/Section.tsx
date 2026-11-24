import type { ReactNode } from 'react'
import { Container } from './Container'
import { cn } from './cn'

/**
 * paper  : le papier de la page
 * sunken : une zone en retrait, pour rythmer le défilement
 * band   : bandeau d'encre bleutée, TOUJOURS sombre (même en thème clair).
 *          La classe « dark » appliquée localement fait basculer tous les jetons à l'intérieur :
 *          texte, filets, boutons et cartes restent lisibles sans écrire de « dark: » dans les enfants.
 */
export type SectionTone = 'paper' | 'sunken' | 'band'

const TONES: Record<SectionTone, string> = {
  paper: 'bg-surface text-text',
  sunken: 'bg-surface-sunken text-text',
  band: 'dark bg-band text-text',
}

export function Section({
  tone = 'paper',
  id,
  labelledBy,
  className,
  children,
}: {
  tone?: SectionTone
  id?: string
  /** id du titre de la section : les lecteurs d'écran annoncent la région par son titre. */
  labelledBy?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('py-16 sm:py-24', TONES[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  )
}
