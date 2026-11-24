import type { ElementType, ReactNode } from 'react'
import { cn } from './cn'

/** Carte posée sur le papier : fond légèrement plus clair, filet fin, angles peu arrondis. */
export function Card({
  as: Tag = 'div',
  className,
  children,
}: {
  as?: ElementType
  className?: string
  children: ReactNode
}) {
  return (
    <Tag className={cn('rounded-lg border border-line bg-surface-raised p-6', className)}>
      {children}
    </Tag>
  )
}
