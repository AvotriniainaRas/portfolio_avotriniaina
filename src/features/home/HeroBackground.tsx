import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const spotlightX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const spotlightY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const bounds = containerRef.current?.getBoundingClientRect()
    if (!bounds) return
    mouseX.set(e.clientX - bounds.left)
    mouseY.set(e.clientY - bounds.top)
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Grille de points type "nœuds réseau" */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.35] dark:opacity-[0.25]">
        <defs>
          <pattern id="node-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" className="fill-gray-400 dark:fill-gray-600" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#node-grid)" />
      </svg>

      {/* Spotlight qui suit la souris, révèle la grille sous un halo ambre */}
      <motion.div
        className="pointer-events-none absolute h-[420px] w-[420px] rounded-full"
        style={{
          left: spotlightX,
          top: spotlightY,
          translateX: '-50%',
          translateY: '-50%',
          background:
            'radial-gradient(circle, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0.06) 40%, transparent 70%)',
        }}
      />

      {/* Fondu vers le fond en bas pour fusionner avec le reste de la page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent dark:from-gray-950" />
    </div>
  )
}
