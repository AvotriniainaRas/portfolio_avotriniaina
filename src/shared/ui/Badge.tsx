import type { ReactNode } from 'react'
import { cn } from './cn'

/**
 * Petite étiquette (technologie, catégorie). La forme en capsule est réservée à ces petits éléments :
 * les boutons, eux, gardent des angles marqués.
 * `signal` : pastille verte pour un état positif (« Disponible »). Le sens est porté par le texte, pas par la seule couleur.
 */
export function Badge({
  signal = false,
  className,
  children,
}: {
  signal?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs font-medium',
        signal ? 'text-accent-text' : 'text-text-muted',
        className
      )}
    >
      {signal && (
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
      )}
      {children}
    </span>
  )
}
