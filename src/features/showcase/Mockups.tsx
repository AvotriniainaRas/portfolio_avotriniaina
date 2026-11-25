import type { ReactNode } from 'react'
import { cn } from '../../shared/ui/cn'

/** Fenêtre de navigateur : barre du haut avec trois points, puis l'écran en 16:10. */
export function BrowserFrame({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-line bg-surface-raised shadow-print',
        className
      )}
    >
      <div
        aria-hidden="true"
        className="flex h-5 items-center gap-1.5 border-b border-line bg-surface-sunken px-2.5"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-text-muted/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-text-muted/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-text-muted/40" />
        <span className="ml-2 h-2.5 w-1/2 rounded-full bg-text-muted/15" />
      </div>
      <div className="aspect-[16/10] overflow-hidden bg-surface">{children}</div>
    </div>
  )
}

/**
 * Téléphone : le boîtier reste sombre dans les deux thèmes (c'est un objet, pas une surface du site).
 * La taille se règle depuis l'extérieur (hauteur en %), la largeur suit le ratio.
 */
export function PhoneFrame({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'aspect-[9/19] rounded-[1.4rem] border-[5px] border-[#14120f] bg-[#14120f] shadow-print',
        className
      )}
    >
      {/* L'écran est le repère de position de l'encoche : le boîtier lui-même reste libre d'être absolute ou non */}
      <div className="relative h-full w-full overflow-hidden rounded-[1rem] bg-surface">
        {children}
        <span
          aria-hidden="true"
          className="absolute top-1 left-1/2 z-10 h-1 w-1/4 -translate-x-1/2 rounded-full bg-[#14120f]"
        />
      </div>
    </div>
  )
}
