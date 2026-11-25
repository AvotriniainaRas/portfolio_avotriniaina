import type { ReactNode } from 'react'
import { ChevronsRight } from 'lucide-react'

/**
 * Contenu d'un lien animé : au repos, le libellé est décalé vers la gauche et les chevrons sont cachés ;
 * au survol (ou au focus clavier), les chevrons apparaissent et le libellé glisse à sa place en se soulignant.
 * Le lien parent doit porter la classe `group`.
 */
export function SlideLabel({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center">
      <ChevronsRight
        size={16}
        aria-hidden="true"
        className="w-5 shrink-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
      />
      <span className="-ml-5 transition-[margin] duration-500 group-hover:ml-0 group-hover:underline group-focus-visible:ml-0 group-focus-visible:underline">
        {children}
      </span>
    </span>
  )
}
