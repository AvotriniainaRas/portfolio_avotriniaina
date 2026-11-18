import { GraduationCap, Award, Briefcase, Rocket, Code2 } from 'lucide-react'
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
    period: '2023 – 2026',
    title: 'Licence en Informatique — EMIT Fianarantsoa',
    description:
      'Diplôme obtenu avec une solide pratique sur plus de 10 projets concrets, du développement backend aux interfaces modernes.',
    icon: GraduationCap,
  },
  {
    period: 'Juin – Août 2025',
    title: 'Stagiaire Développeur — Eray Digital',
    description:
      'Développement d’un système de gestion scolaire multi-rôles (Admin, Professeur, Parents) avec Angular 17+, NestJS, PostgreSQL, JWT et génération de PDF.',
    icon: Briefcase,
  },
  {
    period: 'Formations complémentaires',
    title: 'Attestations DevOps & IA Générative — Orange Digital Center',
    description:
      'Attestation en DevOps (ODC Fianarantsoa — CI/CD, conteneurisation) et attestation en Prompt Engineering & IA Générative (ODC Antananarivo).',
    icon: Award,
  },
  {
    period: 'Juillet – Octobre 2026',
    title: 'Stagiaire Développeur & DevOps — FBBM',
    description:
      'Numérisation de la gestion événementielle (inscriptions, paiements, tickets/badges) et application mobile de contrôle d’accès avec FastAPI, React TS et Flutter.',
    icon: Briefcase,
  },
  {
    period: 'En parallèle du cursus',
    title: 'Projets académiques et personnels',
    description:
      'Conception d’applications fullstack et mobiles (Aina_Trans, Budget_Wise) intégrant le Cloud, Docker et les bonnes pratiques d’architecture.',
    icon: Code2,
  },
  {
    period: 'Depuis 2026',
    title: 'Master 1 en Informatique — EMIT Fianarantsoa',
    description:
      'Poursuite des études en Master 1, approfondissement en architecture logicielle, DevOps et réseaux informatiques.',
    icon: GraduationCap,
  },
  {
    period: "Aujourd'hui",
    title: 'Développeur Fullstack & DevOps Junior — À l’écoute d’opportunités',
    description:
      'Disponible pour un stage ou un poste junior en développement web fullstack, mobile ou DevOps (en présentiel ou en remote).',
    icon: Rocket,
  },
]
