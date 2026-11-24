import type { ReactNode } from 'react'
import { cn } from './cn'

/** Largeur de lecture commune à toutes les sections : le contenu s'aligne d'une section à l'autre. */
export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn('mx-auto w-full max-w-6xl px-6', className)}>{children}</div>
}
