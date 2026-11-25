import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useI18n } from '../../i18n/useI18n'
import { useElementWidth } from '../../shared/hooks/useElementWidth'
import { cn } from '../../shared/ui/cn'
import type { ShowcaseItem } from './data'
import { ProjectInfo } from './ProjectInfo'
import { ProjectVisual } from './ProjectVisual'

const EASE = [0.22, 1, 0.36, 1] as const
const SWIPE_THRESHOLD = 50

/** Écart circulaire entre une carte et la carte active, ramené dans [-n/2, n/2]. */
function offsetOf(index: number, active: number, total: number) {
  const half = Math.floor(total / 2)
  return ((((index - active + half) % total) + total) % total) - half
}

const arrowButton =
  'flex h-11 w-11 items-center justify-center rounded-full border border-line text-text transition-colors hover:bg-surface-sunken'

/**
 * Carrousel « éventail » en 3D : la carte active est au centre, les autres s'inclinent de chaque côté.
 * Navigation : flèches, points, touches ← →, glissement au doigt ou à la souris, clic sur une carte voisine.
 * Pas de défilement automatique : on ne bouge pas sous les yeux de quelqu'un qui lit.
 */
export function CoverflowCarousel({ items }: { items: ShowcaseItem[] }) {
  const { locale, t } = useI18n()
  const stageRef = useRef<HTMLDivElement>(null)
  const stageWidth = useElementWidth(stageRef, 1000)
  const [active, setActive] = useState(0)
  const total = items.length
  const pointerStart = useRef<number | null>(null)
  const swiped = useRef(false)

  const go = (direction: 1 | -1) => setActive((i) => (i + direction + total) % total)

  // La carte s'adapte à la place disponible : large sur téléphone (les voisines dépassent à peine),
  // plus étroite sur ordinateur pour laisser de la place à l'éventail.
  const compact = stageWidth < 640
  const cardWidth = Math.round(Math.min(520, stageWidth * (compact ? 0.82 : 0.55)))
  const cardHeight = Math.round((cardWidth * 10) / 16)
  const step = cardWidth * (compact ? 0.72 : 0.62)

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(-1)
    }
  }

  function onPointerDown(event: PointerEvent) {
    pointerStart.current = event.clientX
    swiped.current = false
  }

  function onPointerUp(event: PointerEvent) {
    if (pointerStart.current === null) return
    const delta = event.clientX - pointerStart.current
    pointerStart.current = null
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      swiped.current = true
      go(delta < 0 ? 1 : -1)
    }
  }

  const current = items[active]

  return (
    <div
      role="region"
      aria-roledescription={t.showcase.carouselRole}
      aria-label={t.showcase.carouselLabel}
    >
      <div
        ref={stageRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (pointerStart.current = null)}
        className="relative mx-auto cursor-grab overflow-x-clip rounded-2xl [perspective:1600px] select-none focus-visible:outline-offset-4 active:cursor-grabbing"
        style={{ touchAction: 'pan-y', height: Math.round(cardHeight * 1.18) }}
      >
        {items.map((item, index) => {
          const offset = offsetOf(index, active, total)
          const distance = Math.abs(offset)
          const isActive = offset === 0

          return (
            <motion.div
              key={item.slug}
              role="group"
              aria-roledescription={t.showcase.slideRole}
              aria-label={t.showcase.slideLabel(index + 1, total)}
              aria-hidden={!isActive}
              onClick={() => {
                if (!isActive && !swiped.current) setActive(index)
              }}
              initial={false}
              animate={{
                x: Math.sign(offset) * step * (distance === 2 ? 1.62 : 1),
                z: -distance * 140,
                rotateY: -Math.sign(offset) * (distance === 0 ? 0 : 38),
                scale: 1 - distance * 0.06,
                opacity: isActive ? 1 : distance === 1 ? 0.8 : 0.3,
              }}
              transition={{ duration: 0.6, ease: EASE }}
              style={{
                width: cardWidth,
                zIndex: 10 - distance,
                marginLeft: -cardWidth / 2,
                marginTop: -cardHeight / 2,
              }}
              className={cn(
                'absolute top-1/2 left-1/2 [transform-style:preserve-3d]',
                !isActive && 'cursor-pointer'
              )}
            >
              <ProjectVisual item={item} className="shadow-print" />
            </motion.div>
          )
        })}
      </div>

      {/* Annonce vocale du projet affiché, pour les lecteurs d'écran */}
      <p aria-live="polite" className="sr-only">
        {t.showcase.status(active + 1, total, current.title[locale])}
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={t.showcase.previous}
          className={arrowButton}
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <div className="flex items-center">
          {items.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setActive(index)}
              aria-label={t.showcase.goTo(item.title[locale])}
              aria-current={index === active}
              className="flex h-6 w-6 items-center justify-center"
            >
              <span
                aria-hidden="true"
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  index === active ? 'w-6 bg-primary-text' : 'w-2 bg-line'
                )}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={t.showcase.next}
          className={arrowButton}
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="mx-auto mt-10 min-h-64 max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <ProjectInfo item={current} centered titleLevel="h3" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
