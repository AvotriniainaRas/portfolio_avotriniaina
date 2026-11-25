/**
 * Visuel généré pour un projet sans capture : une interface schématique, jamais deux fois la même
 * (les barres et les lignes varient selon l'identifiant du projet).
 * C'est volontairement une illustration, pas une fausse capture : elle ne montre aucun texte ni aucun chiffre.
 */

/** Petit générateur pseudo-aléatoire reproductible : même identifiant, même dessin. */
function seeded(seed: string) {
  let h = 1779033703 ^ seed.length
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    h ^= h >>> 16
    return (h >>> 0) / 4294967296
  }
}

export function FallbackScreen({
  slug,
  kind,
  label,
}: {
  slug: string
  kind: 'web' | 'mobile'
  label: string
}) {
  const rand = seeded(slug)

  if (kind === 'mobile') {
    const widths = [0, 1, 2].map(() => 30 + rand() * 30)
    return (
      <svg
        viewBox="0 0 90 190"
        role="img"
        aria-label={label}
        className="block h-full w-full"
      >
        <rect width="90" height="190" className="fill-surface" />
        <rect width="90" height="38" className="fill-primary" />
        <rect x="8" y="16" width="34" height="5" rx="2.5" className="fill-white/90" />
        <rect x="8" y="25" width="22" height="3" rx="1.5" className="fill-white/50" />
        {widths.map((w, i) => (
          <g key={i} transform={`translate(0 ${46 + i * 36})`}>
            <rect x="7" width="76" height="30" rx="5" className="fill-surface-sunken" />
            <circle cx="21" cy="15" r="7" className="fill-primary/25" />
            <rect x="34" y="9" width={w} height="4" rx="2" className="fill-text/60" />
            <rect
              x="34"
              y="17"
              width={w * 0.6}
              height="3"
              rx="1.5"
              className="fill-text-muted/40"
            />
          </g>
        ))}
        <rect y="168" width="90" height="22" className="fill-surface-sunken" />
        {[0, 1, 2, 3].map((i) => (
          <circle
            key={i}
            cx={15 + i * 20}
            cy="179"
            r="3.2"
            className={i === 0 ? 'fill-primary' : 'fill-text-muted/40'}
          />
        ))}
      </svg>
    )
  }

  const bars = Array.from({ length: 8 }, () => 8 + rand() * 30)
  const highest = bars.indexOf(Math.max(...bars))
  const rows = 4 + Math.floor(rand() * 2)

  return (
    <svg
      viewBox="0 0 160 100"
      role="img"
      aria-label={label}
      className="block h-full w-full"
    >
      <rect width="160" height="100" className="fill-surface" />
      <rect width="28" height="100" className="fill-surface-sunken" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x="6"
          y={14 + i * 10}
          width="16"
          height="3"
          rx="1.5"
          className={i === 0 ? 'fill-primary' : 'fill-text-muted/30'}
        />
      ))}
      <rect x="34" y="6" width="56" height="5" rx="2.5" className="fill-text/60" />
      <circle cx="150" cy="8.5" r="3.5" className="fill-primary/30" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${34 + i * 41} 18)`}>
          <rect width="37" height="20" rx="3" className="fill-surface-sunken" />
          <rect
            x="5"
            y="5"
            width="14"
            height="3"
            rx="1.5"
            className="fill-text-muted/40"
          />
          <rect x="5" y="11" width="22" height="5" rx="2" className="fill-primary" />
        </g>
      ))}
      <rect x="34" y="44" width="76" height="50" rx="3" className="fill-surface-sunken" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={40 + i * 8.6}
          y={88 - h}
          width="5.4"
          height={h}
          rx="1.2"
          className={i === highest ? 'fill-primary' : 'fill-primary/35'}
        />
      ))}
      <rect
        x="114"
        y="44"
        width="43"
        height="50"
        rx="3"
        className="fill-surface-sunken"
      />
      {Array.from({ length: rows }, (_, i) => (
        <g key={i} transform={`translate(0 ${51 + i * 8.6})`}>
          <circle cx="120" cy="2.5" r="2" className="fill-accent/60" />
          <rect
            x="125"
            width={22 + rand() * 10}
            height="3"
            rx="1.5"
            className="fill-text-muted/35"
          />
        </g>
      ))}
    </svg>
  )
}
