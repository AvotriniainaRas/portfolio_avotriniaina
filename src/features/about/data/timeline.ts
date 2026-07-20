import { GraduationCap, Award, Rocket, Code2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface TimelineEvent {
  period: string
  title: string
  description: string
  icon: LucideIcon
}

export const TIMELINE: TimelineEvent[] = [
  {
    period: '2020 – 2021',
    title: 'Baccalauréat série A',
    description: 'Lycée Espoir Ambohimanarivo Morarano Chrome.',
    icon: GraduationCap,
  },
  {
    period: '2021 – 2022',
    title: 'Baccalauréat série D',
    description: 'Lycée Privé Miotisoa Morarano Chrome.',
    icon: GraduationCap,
  },
  {
    period: 'Depuis 2022',
    title: 'Licence en Informatique — EMIT Fianarantsoa',
    description:
      "Formation en cours, avec une pratique intensive de projets concrets, du backend à l'interface.",
    icon: GraduationCap,
  },
  {
    period: 'En parallèle du cursus',
    title: 'Projets académiques, personnels et collaboratifs',
    description:
      'Aina Trans, BudgetWise, système de gestion scolaire, plateforme FBBM et plusieurs autres projets fullstack et mobiles menés en autonomie ou en équipe.',
    icon: Code2,
  },
  {
    period: 'Formation complémentaire',
    title: 'Attestation en DevOps — ODC Fianarantsoa',
    description:
      'Approfondissement des notions DevOps et Cloud, avec une première expérience pratique sur des projets intégrant Supabase.',
    icon: Award,
  },
  {
    period: "Aujourd'hui",
    title: 'Recherche de stage — 3 mois',
    description:
      "À la recherche d'une équipe professionnelle pour mettre ces compétences fullstack et cette curiosité DevOps au service de projets réels.",
    icon: Rocket,
  },
]
