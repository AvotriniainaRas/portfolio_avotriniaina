import { cn } from './cn'

/**
 * Photo présentée comme un « tirage » : cadre papier, ombre douce, légende, légère inclinaison.
 * L'inclinaison est statique (aucune animation) ; elle se redresse au survol seulement quand le
 * système n'a pas demandé de mouvement réduit (la règle globale neutralise la transition sinon).
 * Les mêmes tirages servent de cadre aux captures des projets : c'est ce qui donne l'unité visuelle.
 */
export function PhotoPrint({
  src,
  alt,
  caption,
  tilt = 'none',
  className,
  imgClassName,
}: {
  src: string
  alt: string
  caption?: string
  tilt?: 'left' | 'right' | 'none'
  className?: string
  imgClassName?: string
}) {
  return (
    <figure
      className={cn(
        'inline-block border border-line bg-surface-raised p-3 pb-4 shadow-print transition-transform duration-300',
        tilt === 'left' && '-rotate-2 hover:rotate-0',
        tilt === 'right' && 'rotate-2 hover:rotate-0',
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn('block w-full bg-surface-sunken object-cover', imgClassName)}
      />
      {caption && (
        <figcaption className="mt-3 font-display text-sm text-text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
