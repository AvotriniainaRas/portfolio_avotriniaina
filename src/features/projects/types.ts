export interface Project {
  slug: string
  title: string
  tagline: string
  category: string
  featured: boolean
  stack: string[]
  objective: string
  architecture: string
  features: string[]
  technicalHighlights: string[]
  links?: { github?: string; demo?: string }
}
