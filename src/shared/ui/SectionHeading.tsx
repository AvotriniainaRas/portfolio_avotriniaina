import type { ReactNode } from 'react'
import { cn } from './cn'

/**
 * Titre de section « éditorial » : un numéro en grand (le repère de lecture), un filet fin,
 * un libellé, puis le titre en Fraunces.
 * `as` fixe le niveau de titre réel (un seul h1 par page) sans changer l'apparence.
 */
export function SectionHeading({
  id,
  index,
  label,
  title,
  description,
  as: Tag = 'h2',
  align = 'left',
  wide = false,
}: {
  id?: string
  index?: string
  label?: string
  title: ReactNode
  description?: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  align?: 'left' | 'center'
  /** Pas de largeur maximale : le titre et la description ne passent à la ligne que s'ils n'ont vraiment plus de place. */
  wide?: boolean
}) {
  const centered = align === 'center'

  return (
    <header className={cn(!wide && 'max-w-3xl', centered && 'mx-auto text-center')}>
      {(index || label) && (
        <p
          className={cn(
            'mb-5 flex items-center gap-3 text-sm text-text-muted',
            centered && 'justify-center'
          )}
        >
          {index && (
            <span
              aria-hidden="true"
              className="font-display text-3xl leading-none font-medium text-primary-text tabular-nums"
            >
              {index}
            </span>
          )}
          {index && label && <span aria-hidden="true" className="h-px w-10 bg-line" />}
          {label && (
            <span className="font-display text-xl font-semibold text-text">{label}</span>
          )}
        </p>
      )}
      <Tag
        id={id}
        className="text-3xl leading-[1.12] font-semibold sm:text-4xl lg:text-5xl"
      >
        {title}
      </Tag>
      {description && (
        <p className={cn('mt-5 text-lg text-text-muted', !wide && 'max-w-2xl')}>
          {description}
        </p>
      )}
    </header>
  )
}
