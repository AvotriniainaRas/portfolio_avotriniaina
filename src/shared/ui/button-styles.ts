import { cn } from './cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'md' | 'lg'

/*
 * Un bouton « éditorial » : angles légèrement arrondis (pas de pilule), bordure franche de 2 px.
 * La bordure est toujours présente (transparente pour « ghost ») : le bouton ne change donc pas de
 * taille entre ses états. Aucune animation d'échelle : seules les couleurs changent au survol.
 */
const BASE =
  'inline-flex items-center justify-center gap-2 rounded-md border-2 font-semibold whitespace-nowrap transition-colors duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-60'

const VARIANTS: Record<ButtonVariant, string> = {
  // Action principale : un seul par écran
  primary:
    'border-primary bg-primary text-white hover:border-primary-strong hover:bg-primary-strong',
  // Action secondaire : trait d'encre, qui s'inverse au survol
  secondary: 'border-text text-text hover:bg-text hover:text-surface',
  // Action discrète
  ghost: 'border-transparent text-text hover:bg-surface-sunken',
}

const SIZES: Record<ButtonSize, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-14 px-7 text-base',
}

/**
 * Classes d'un bouton, exposées à part pour pouvoir styler n'importe quel élément (lien, bouton) :
 *   <a className={buttonClasses({ variant: 'primary', size: 'lg' })}>...</a>
 */
export function buttonClasses({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
} = {}): string {
  return cn(BASE, VARIANTS[variant], SIZES[size], className)
}
