import { useI18n } from '../../i18n/useI18n'
import { cn } from '../../shared/ui/cn'
import type { ShowcaseItem } from './data'
import { FallbackScreen } from './FallbackScreen'
import { BrowserFrame, PhoneFrame } from './Mockups'
import { getScreenshots, type Screenshot } from './screenshots'

function Shot({ shot, title }: { shot: Screenshot; title: string }) {
  const { t } = useI18n()
  return (
    <img
      src={shot.src}
      alt={t.showcase.screenshotAlt(title, shot.subject)}
      loading="lazy"
      decoding="async"
      draggable={false}
      className="h-full w-full object-cover object-top"
    />
  )
}

/**
 * Le visuel d'un projet, toujours dans un cadre 16:10 :
 *  - une capture « desktop » dans une fenêtre de navigateur, avec une capture « mobile » en téléphone par-dessus si elle existe ;
 *  - une ou deux captures « mobile » dans des téléphones ;
 *  - sinon, un visuel généré (fenêtre de navigateur ou téléphone selon le type de projet).
 */
export function ProjectVisual({
  item,
  className,
}: {
  item: ShowcaseItem
  className?: string
}) {
  const { locale, t } = useI18n()
  const title = item.title[locale]
  const shots = getScreenshots(item.slug)
  const desktop = shots.find((s) => s.kind === 'desktop')
  const mobiles = shots.filter((s) => s.kind === 'mobile')
  const fallbackLabel = t.showcase.fallbackAlt(title)

  let content
  if (desktop) {
    content = (
      <>
        <BrowserFrame
          className={cn(
            'absolute top-[8%]',
            mobiles.length ? 'left-[4%] w-[80%]' : 'left-1/2 w-[88%] -translate-x-1/2'
          )}
        >
          <Shot shot={desktop} title={title} />
        </BrowserFrame>
        {mobiles[0] && (
          <PhoneFrame className="absolute right-[4%] bottom-[6%] h-[72%]">
            <Shot shot={mobiles[0]} title={title} />
          </PhoneFrame>
        )}
      </>
    )
  } else if (mobiles.length) {
    const pair = mobiles.slice(0, 2)
    content = (
      <div className="absolute inset-0 flex items-center justify-center gap-[5%] py-[5%]">
        {pair.map((shot, i) => (
          <PhoneFrame
            key={shot.src}
            className={cn('h-full', pair.length > 1 && i === 0 && 'translate-y-[4%]')}
          >
            <Shot shot={shot} title={title} />
          </PhoneFrame>
        ))}
      </div>
    )
  } else if (item.kind === 'mobile') {
    content = (
      <div className="absolute inset-0 flex items-center justify-center py-[5%]">
        <PhoneFrame className="h-full">
          <FallbackScreen slug={item.slug} kind="mobile" label={fallbackLabel} />
        </PhoneFrame>
      </div>
    )
  } else {
    content = (
      <BrowserFrame className="absolute top-[8%] left-1/2 w-[88%] -translate-x-1/2">
        <FallbackScreen slug={item.slug} kind="web" label={fallbackLabel} />
      </BrowserFrame>
    )
  }

  return (
    <div
      className={cn(
        'relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface-sunken',
        className
      )}
    >
      {content}
    </div>
  )
}
