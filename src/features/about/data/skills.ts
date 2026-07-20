import {
  Layout,
  Server,
  Smartphone,
  Database,
  Cloud,
  Layers,
  Network,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface SkillCategory {
  name: string
  icon: LucideIcon
  skills: string[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: Layout,
    skills: [
      'React',
      'Angular 17+',
      'TypeScript',
      'JavaScript',
      'Vite',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: ['Spring Boot', 'NestJS', 'Node.js', 'API REST', 'Laravel', 'JWT'],
  },
  {
    name: 'Mobile',
    icon: Smartphone,
    skills: ['Flutter', 'Dart', 'React Native'],
  },
  {
    name: 'Base de données',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Prisma'],
  },
  {
    name: 'DevOps & Cloud',
    icon: Cloud,
    skills: ['Git', 'GitHub', 'GitLab', 'Docker', 'CI/CD', 'Supabase', 'Cloudflare'],
  },
  {
    name: 'Architecture & Méthodes',
    icon: Layers,
    skills: ['Clean Architecture', 'MVC', 'Principes SOLID', 'Microservices'],
  },
  {
    name: 'Notion en Réseaux informatiques',
    icon: Network,
    skills: [
      'Routage (OSPF, EIGRP, RIP)',
      'VLANs',
      'Administration réseau',
      'Packet Tracer',
    ],
  },
]
