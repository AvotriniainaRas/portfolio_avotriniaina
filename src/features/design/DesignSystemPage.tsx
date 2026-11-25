import { useEffect, useState } from 'react'
import { CV_FILES } from '../../config/cv'
import avatar from '../../assets/Avotriniaina-cutout.webp'
import { useTheme } from '../theme/useTheme'
import { Badge } from '../../shared/ui/Badge'
import { Button, ButtonAnchor, ButtonLink } from '../../shared/ui/Button'
import { Card } from '../../shared/ui/Card'
import { Highlight } from '../../shared/ui/Highlight'
import { PhotoPrint } from '../../shared/ui/PhotoPrint'
import { Section } from '../../shared/ui/Section'
import { SectionHeading } from '../../shared/ui/SectionHeading'

/* ---------- Mesure de contraste (WCAG) sur les VRAIES valeurs des jetons ---------- */

function readVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

function luminance(hex: string): number {
  const channel = (i: number) => {
    const v = parseInt(hex.slice(1 + i * 2, 3 + i * 2), 16) / 255
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * channel(0) + 0.7152 * channel(1) + 0.0722 * channel(2)
}

function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

const PAIRS: { label: string; fg: string; bg: string }[] = [
  { label: 'Texte sur papier', fg: '--color-text', bg: '--color-surface' },
  { label: 'Texte atténué sur papier', fg: '--color-text-muted', bg: '--color-surface' },
  {
    label: 'Texte atténué sur zone en retrait',
    fg: '--color-text-muted',
    bg: '--color-surface-sunken',
  },
  { label: 'Lien bleu sur papier', fg: '--color-primary-text', bg: '--color-surface' },
  {
    label: 'Lien bleu sur zone en retrait',
    fg: '--color-primary-text',
    bg: '--color-surface-sunken',
  },
  { label: 'Blanc sur bouton bleu', fg: '#ffffff', bg: '--color-primary' },
  {
    label: 'Blanc sur bouton bleu (survol)',
    fg: '#ffffff',
    bg: '--color-primary-strong',
  },
  { label: 'Vert (texte) sur papier', fg: '--color-accent-text', bg: '--color-surface' },
  { label: 'Blanc sur vert plein', fg: '#ffffff', bg: '--color-accent' },
]

const SWATCHES = [
  ['surface', 'Papier (fond)'],
  ['surface-raised', 'Carte'],
  ['surface-sunken', 'Zone en retrait'],
  ['text', 'Encre'],
  ['text-muted', 'Encre atténuée'],
  ['line', 'Filet'],
  ['primary', 'Bleu (remplissage)'],
  ['primary-text', 'Bleu (texte)'],
  ['accent', 'Vert (signal)'],
  ['band', 'Bandeau'],
] as const

function ContrastTable() {
  const { theme } = useTheme()
  const [rows, setRows] = useState<{ label: string; ratio: number }[]>([])

  // Les jetons changent avec le thème : on relit leurs valeurs une fois la classe « dark » appliquée.
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const value = (token: string) => (token.startsWith('--') ? readVar(token) : token)
      setRows(
        PAIRS.map((p) => ({ label: p.label, ratio: contrast(value(p.fg), value(p.bg)) }))
      )
    })
    return () => cancelAnimationFrame(id)
  }, [theme])

  return (
    <table className="mt-8 w-full max-w-2xl text-left text-sm">
      <caption className="sr-only">Rapports de contraste des couples de couleurs</caption>
      <thead className="text-text-muted">
        <tr className="border-b border-line">
          <th className="py-2 font-medium">Couple</th>
          <th className="py-2 font-medium">Rapport</th>
          <th className="py-2 font-medium">WCAG AA</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.label} className="border-b border-line">
            <td className="py-2">{r.label}</td>
            <td className="py-2 tabular-nums">{r.ratio.toFixed(1)} : 1</td>
            <td className="py-2">
              <Badge signal={r.ratio >= 4.5}>
                {r.ratio >= 4.5 ? 'Conforme' : 'Insuffisant'}
              </Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function DesignSystemPage() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          index="00"
          label="Design system"
          title={
            <>
              L'identité du site, <Highlight>pièce par pièce</Highlight>
            </>
          }
          description="Page visible uniquement en développement. Basculez le thème clair / sombre en haut à droite : chaque jeton change de valeur, aucun composant n'est réécrit."
        />
      </Section>

      <Section tone="sunken" labelledBy="ds-colors">
        <SectionHeading
          id="ds-colors"
          index="01"
          label="Couleurs"
          title={
            <>
              Un papier, une encre, <Highlight>un seul bleu</Highlight>
            </>
          }
        />
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {SWATCHES.map(([token, label]) => (
            <li key={token}>
              <div
                className="h-20 rounded-md border border-line"
                style={{ backgroundColor: `var(--color-${token})` }}
              />
              <p className="mt-2 text-sm font-medium">{label}</p>
              <p className="text-xs text-text-muted">--color-{token}</p>
            </li>
          ))}
        </ul>
        <ContrastTable />
      </Section>

      <Section labelledBy="ds-type">
        <SectionHeading
          id="ds-type"
          index="02"
          label="Typographie"
          title={
            <>
              Fraunces pour les titres, <Highlight>Inter</Highlight> pour lire
            </>
          }
        />
        <div className="mt-12 space-y-8">
          <p className="font-display text-5xl leading-[1.08] font-semibold sm:text-6xl">
            Je conçois des applications qui tiennent la route.
          </p>
          <h3 className="text-3xl font-semibold">Titre de section en trois mots</h3>
          <p className="max-w-2xl text-lg text-text-muted">
            Corps de texte en Inter : des phrases courtes, un interligne généreux, et un
            contraste qui reste confortable en pleine lumière comme dans une pièce sombre.
          </p>
          <p className="max-w-2xl text-text-muted">
            Texte courant, 16 px. Les caractères français (é, è, à, ç, œ,
            «&nbsp;guillemets&nbsp;») sont tous couverts par le sous-ensemble latin
            chargé.
          </p>
          <p className="font-display text-3xl tabular-nums">01 02 03 04 05 06 07 08 09</p>
        </div>
      </Section>

      <Section tone="sunken" labelledBy="ds-buttons">
        <SectionHeading
          id="ds-buttons"
          index="03"
          label="Boutons"
          title={
            <>
              Angles marqués, <Highlight>pas de pilules</Highlight>
            </>
          }
        />
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ButtonLink to="contact" size="lg">
            Discutons de votre projet
          </ButtonLink>
          <ButtonLink to="projects" variant="secondary" size="lg">
            Voir les projets
          </ButtonLink>
          <ButtonAnchor href={CV_FILES.fr} download variant="ghost" size="lg">
            Télécharger le CV
          </ButtonAnchor>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button>Envoyer</Button>
          <Button variant="secondary">Annuler</Button>
          <Button disabled>Envoi en cours</Button>
        </div>
      </Section>

      <Section labelledBy="ds-cards">
        <SectionHeading
          id="ds-cards"
          index="04"
          label="Cartes et étiquettes"
          title={
            <>
              Des surfaces calmes, <Highlight>un filet fin</Highlight>
            </>
          }
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <p className="font-display text-xl font-semibold">
              Applications web sur mesure
            </p>
            <p className="mt-2 text-text-muted">
              De la maquette à la mise en ligne : interface, API et base de données.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>React TS</Badge>
              <Badge>Spring Boot</Badge>
              <Badge>PostgreSQL</Badge>
            </div>
          </Card>
          <Card>
            <Badge signal>Disponible pour de nouvelles missions</Badge>
            <p className="mt-4 text-text-muted">
              Le vert reste réservé aux petits signaux d'état. Le sens est porté par le
              texte, jamais par la couleur seule.
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="sunken" labelledBy="ds-prints">
        <SectionHeading
          id="ds-prints"
          index="05"
          label="Tirages"
          title={
            <>
              Vos photos, <Highlight>posées comme des tirages</Highlight>
            </>
          }
        />
        <div className="mt-12 flex flex-wrap items-start gap-10">
          <PhotoPrint
            src={avatar}
            alt="Portrait d'Avotriniaina"
            caption="Fianarantsoa, 2026"
            tilt="left"
            className="w-56"
            imgClassName="aspect-[4/5] object-top"
          />
          <PhotoPrint
            src={avatar}
            alt="Portrait d'Avotriniaina"
            caption="Sans inclinaison"
            className="w-56"
            imgClassName="aspect-[4/5] object-top"
          />
        </div>
      </Section>

      <Section tone="band" labelledBy="ds-band">
        <SectionHeading
          id="ds-band"
          index="06"
          label="Bandeau"
          title={
            <>
              Un bandeau toujours sombre, <Highlight>même en thème clair</Highlight>
            </>
          }
          description="Les boutons, le texte et les filets s'adaptent seuls : la section pose simplement un contexte sombre."
        />
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink to="contact" size="lg">
            Discutons de votre projet
          </ButtonLink>
          <ButtonLink to="projects" variant="secondary" size="lg">
            Voir les projets
          </ButtonLink>
        </div>
      </Section>

      <Section labelledBy="ds-motion">
        <SectionHeading
          id="ds-motion"
          index="07"
          label="Mouvement"
          title={
            <>
              Sobre par défaut, <Highlight>coupé sur demande</Highlight>
            </>
          }
          description="Si votre système demande « réduire les animations », les transitions CSS, le défilement des technologies et les animations Framer Motion sont neutralisés."
        />
      </Section>
    </>
  )
}
