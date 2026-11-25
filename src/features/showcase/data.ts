import type { Locale } from '../../i18n/config'
import { PROJECTS } from '../projects/data/projects'

type Localized = Record<Locale, string>

export interface ShowcaseItem {
  slug: string
  /** Sert à choisir le visuel généré quand il n'y a pas encore de capture. */
  kind: 'web' | 'mobile'
  title: Localized
  type: Localized
  /** Une phrase qui dit ce que le projet apporte, pas la technologie utilisée. */
  result: Localized
  stack: string[]
}

const stackOf = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug)?.stack.slice(0, 4) ?? []

/** Les projets du carrousel d'accueil, dans l'ordre d'affichage. */
export const SHOWCASE: ShowcaseItem[] = [
  {
    slug: 'aina-trans',
    kind: 'web',
    title: { fr: 'Aina Trans', en: 'Aina Trans' },
    type: { fr: 'Application web fullstack', en: 'Fullstack web application' },
    result: {
      fr: 'Réservation en ligne et suivi des sièges en temps réel pour une coopérative de transport.',
      en: 'Online booking and real-time seat tracking for a transport cooperative.',
    },
    stack: stackOf('aina-trans'),
  },
  {
    slug: 'systeme-gestion-scolaire',
    kind: 'web',
    title: { fr: 'Système de gestion scolaire', en: 'School management system' },
    type: { fr: 'Application web fullstack', en: 'Fullstack web application' },
    result: {
      fr: 'Élèves, notes, présences et bulletins réunis dans un seul outil pour un lycée malgache.',
      en: 'Students, grades, attendance and report cards in a single tool for a Malagasy high school.',
    },
    stack: stackOf('systeme-gestion-scolaire'),
  },
  {
    slug: 'fbbm-evenements',
    kind: 'web',
    title: {
      fr: 'Événements et contrôle d’accès FBBM',
      en: 'FBBM events and access control',
    },
    type: { fr: 'Application web fullstack', en: 'Fullstack web application' },
    result: {
      fr: "Gestion des événements et contrôle d'accès des participants pour l'organisation FBBM.",
      en: 'Event management and attendee access control for the FBBM organization.',
    },
    stack: stackOf('fbbm-evenements'),
  },
  {
    slug: 'fbbm-checking-mobile',
    kind: 'mobile',
    title: { fr: 'Application mobile de checking FBBM', en: 'FBBM check-in mobile app' },
    type: { fr: 'Application mobile Flutter', en: 'Flutter mobile app' },
    result: {
      fr: "Pointage des participants sur le terrain, relié au système d'événements FBBM.",
      en: 'On-site attendee check-in, connected to the FBBM events system.',
    },
    stack: stackOf('fbbm-checking-mobile'),
  },
  {
    slug: 'budgetwise',
    kind: 'mobile',
    title: { fr: 'BudgetWise', en: 'BudgetWise' },
    type: { fr: 'Application mobile Flutter', en: 'Flutter mobile app' },
    result: {
      fr: 'Suivi du budget personnel dans une application mobile qui fonctionne sans connexion.',
      en: 'Personal budget tracking in a mobile app that works offline.',
    },
    stack: stackOf('budgetwise'),
  },
]
