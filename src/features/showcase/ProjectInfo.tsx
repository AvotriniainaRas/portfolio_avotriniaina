import { ArrowRight } from 'lucide-react'
import { LocalizedLink } from '../../i18n/LocalizedLink'
import { useI18n } from '../../i18n/useI18n'
import { Badge } from '../../shared/ui/Badge'
import type { ShowcaseItem } from './data'

/** Texte d'un projet : type, titre, phrase de résultat, technologies et lien vers l'étude de cas. */
export function ProjectInfo({
  item,
  centered = false,
  titleLevel: Title = 'h3',
}: {
  item: ShowcaseItem
  centered?: boolean
  titleLevel?: 'h3' | 'p'
}) {
  const { locale, t } = useI18n()

  return (
    <div className={centered ? 'text-center' : undefined}>
      <p className="text-sm font-medium text-text-muted">{item.type[locale]}</p>
      <Title className="mt-1 font-display text-2xl font-semibold sm:text-3xl">
        {item.title[locale]}
      </Title>
      <p className={`mt-3 max-w-xl text-text-muted ${centered ? 'mx-auto' : ''}`}>
        {item.result[locale]}
      </p>
      <ul
        className={`mt-4 flex flex-wrap gap-2 ${centered ? 'justify-center' : ''}`}
        aria-label="Stack"
      >
        {item.stack.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>
      <LocalizedLink
        to="project"
        params={{ slug: item.slug }}
        className="mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-semibold text-text transition-colors hover:bg-surface-sunken"
      >
        {t.showcase.caseStudy}
        <ArrowRight size={16} aria-hidden="true" />
      </LocalizedLink>
    </div>
  )
}
