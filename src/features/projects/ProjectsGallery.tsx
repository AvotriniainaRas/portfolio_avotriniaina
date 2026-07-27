import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

export type Screenshot = {
  src: string
  alt: string
}

export function ProjectsGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [index, setIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const canGoPrev = index > 0
  const canGoNext = index < screenshots.length - 1

  const goPrev = () => canGoPrev && setIndex((i) => i - 1)
  const goNext = () => canGoNext && setIndex((i) => i + 1)

  // Fermer/naviguer au clavier quand la lightbox est ouverte
  useEffect(() => {
    if (!lightboxOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, index])

  if (screenshots.length === 0) return null

  const current = screenshots[index]

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: EASE }}
        className="relative mx-auto max-w-2xl"
      >
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 sm:aspect-video dark:border-gray-800 dark:bg-gray-900/40"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="h-full w-full object-contain"
            />
          </AnimatePresence>

          <span className="absolute inset-0 flex items-center justify-center bg-gray-900/0 transition-colors group-hover:bg-gray-900/10">
            <span className="flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-white text-gray-900 opacity-0 shadow-lg transition-all group-hover:scale-100 group-hover:opacity-100">
              <ZoomIn size={18} />
            </span>
          </span>
        </button>

        {/* Flèches — désactivées en butée, pas de boucle */}
        <button
          type="button"
          onClick={goPrev}
          disabled={!canGoPrev}
          aria-label="Capture précédente"
          className="absolute top-1/2 left-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-opacity disabled:pointer-events-none disabled:opacity-0 dark:bg-gray-900 dark:text-gray-200"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={!canGoNext}
          aria-label="Capture suivante"
          className="absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-opacity disabled:pointer-events-none disabled:opacity-0 dark:bg-gray-900 dark:text-gray-200"
        >
          <ChevronRight size={20} />
        </button>

        {/* Petits points de position — repère visuel discret, pas de texte */}
        <div className="mt-4 flex justify-center gap-1.5">
          {screenshots.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Aller à la capture ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-5 bg-primary' : 'w-1.5 bg-gray-300 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6"
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Fermer l'aperçu"
              className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X size={22} />
            </button>

            {canGoPrev && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  goPrev()
                }}
                aria-label="Capture précédente"
                className="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            {canGoNext && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  goNext()
                }}
                aria-label="Capture suivante"
                className="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <ChevronRight size={24} />
              </button>
            )}

            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
