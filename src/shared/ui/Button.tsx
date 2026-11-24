import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import type { LinkProps } from 'react-router-dom'
import { LocalizedLink } from '../../i18n/LocalizedLink'
import type { RouteKey, RouteParams } from '../../i18n/routes'
import { buttonClasses, type ButtonSize, type ButtonVariant } from './button-styles'

interface StyleProps {
  variant?: ButtonVariant
  size?: ButtonSize
}

/** Vrai <button> : pour une action (envoyer, ouvrir, fermer). */
export function Button({
  variant,
  size,
  className,
  type = 'button',
  ...rest
}: StyleProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, className })}
      {...rest}
    />
  )
}

/** Lien vers une page du site (langue gérée automatiquement) : pour une navigation. */
export function ButtonLink({
  to,
  params,
  variant,
  size,
  className,
  ...rest
}: StyleProps & { to: RouteKey; params?: RouteParams } & Omit<LinkProps, 'to'>) {
  return (
    <LocalizedLink
      to={to}
      params={params}
      className={buttonClasses({ variant, size, className })}
      {...rest}
    />
  )
}

/** Lien externe, mailto: ou téléchargement (CV). */
export function ButtonAnchor({
  variant,
  size,
  className,
  ...rest
}: StyleProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={buttonClasses({ variant, size, className })} {...rest} />
}
