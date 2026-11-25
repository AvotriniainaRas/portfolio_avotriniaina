/**
 * Les captures d'écran se déposent dans src/assets/screenshots/<slug>/ et sont détectées toutes seules :
 * aucune ligne de code à ajouter.
 *
 *   <slug>/<desktop|mobile>-<numéro>-<sujet>.png
 *   ex. aina-trans/desktop-01-tableau-de-bord.png
 *
 * - desktop / mobile : décide de la maquette (fenêtre de navigateur ou téléphone) ;
 * - le numéro fixe l'ordre, le 01 sert de couverture ;
 * - le sujet (mots séparés par des tirets) devient le texte alternatif de l'image.
 */
export type ScreenshotKind = 'desktop' | 'mobile'

export interface Screenshot {
  kind: ScreenshotKind
  order: number
  /** « tableau-de-bord » devient « tableau de bord » */
  subject: string
  src: string
}

const FILES = import.meta.glob('../../assets/screenshots/*/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const PATTERN = /screenshots\/([^/]+)\/(desktop|mobile)-(\d+)-(.+)\.(?:png|jpe?g|webp)$/

const BY_SLUG = new Map<string, Screenshot[]>()

for (const [path, src] of Object.entries(FILES)) {
  const match = PATTERN.exec(path)
  if (!match) {
    // Un fichier mal nommé est signalé en développement plutôt qu'ignoré en silence.
    if (import.meta.env.DEV) console.warn(`[captures] nom non reconnu, ignoré : ${path}`)
    continue
  }
  const [, slug, kind, order, subject] = match
  const list = BY_SLUG.get(slug) ?? []
  list.push({
    kind: kind as ScreenshotKind,
    order: Number(order),
    subject: subject.replace(/-/g, ' '),
    src,
  })
  BY_SLUG.set(slug, list)
}

for (const list of BY_SLUG.values()) list.sort((a, b) => a.order - b.order)

export function getScreenshots(slug: string): Screenshot[] {
  return BY_SLUG.get(slug) ?? []
}
