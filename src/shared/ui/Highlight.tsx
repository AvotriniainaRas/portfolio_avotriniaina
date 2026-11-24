import type { ReactNode } from 'react'

/**
 * Mot clé d'un titre, souligné au « marqueur » bleu (classe .marker dans index.css).
 * C'est la signature typographique du site : le mot reste en Fraunces droit, sans italique ni changement de
 * couleur, et le surlignage se coupe proprement quand le titre passe sur deux lignes.
 */
export function Highlight({ children }: { children: ReactNode }) {
  return <span className="marker">{children}</span>
}
