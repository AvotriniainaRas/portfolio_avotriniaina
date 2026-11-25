import { ArrowRight } from 'lucide-react'
import { LocalizedLink } from '../../i18n/LocalizedLink'
import { useI18n } from '../../i18n/useI18n'
import { Highlight } from '../../shared/ui/Highlight'
import { Section } from '../../shared/ui/Section'
import { SectionHeading } from '../../shared/ui/SectionHeading'
import { CoverflowCarousel } from './CoverflowCarousel'
import { SHOWCASE } from './data'

/** Section « Projets » de l'accueil : carrousel en éventail 3D, sur ordinateur comme sur mobile. */
export function ShowcaseSection() {
  const { t } = useI18n()

  return (
    <Section labelledBy="showcase-title">
      <SectionHeading
        id="showcase-title"
        index="01"
        label={t.showcase.label}
        wide
        title={
          <>
            {t.showcase.titleBefore}
            <Highlight>{t.showcase.titleHighlight}</Highlight>
          </>
        }
        description={t.showcase.description}
      />

      <div className="mt-12">
        <CoverflowCarousel items={SHOWCASE} />
      </div>

      <div className="mt-10 flex justify-center">
        <LocalizedLink
          to="projects"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-strong"
        >
          {t.showcase.viewAll}
          <ArrowRight size={16} aria-hidden="true" />
        </LocalizedLink>
      </div>
    </Section>
  )
}
