import type { Dictionary } from './fr'

/** Dictionnaire anglais : le type `Dictionary` force à traduire TOUTES les clés du français. */
export const en: Dictionary = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    downloadCv: 'Download CV',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mobileMenu: 'Navigation menu',
    mainNavigation: 'Main navigation',
    skipToContent: 'Skip to content',
    cta: "Let's talk about your project",
  },
  cv: {
    groupLabel: 'Choose the CV language',
    options: { fr: 'CV en français', en: 'CV in English' },
    format: 'PDF',
  },
  language: {
    groupLabel: 'Site language',
    switchTo: (name: string) => `Switch the site to ${name}`,
  },
  theme: {
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
  },
  footer: {
    tagline: 'Fullstack & DevOps Junior Developer',
    availability: 'Available for new projects',
    navTitle: 'Navigation',
    cvTitle: 'Download my CV',
    contactTitle: 'Get in touch',
    rights: (year: number) => `© ${year} Avotriniaina Rasamimanana. All rights reserved.`,
  },
  showcase: {
    label: 'Projects',
    titleBefore: 'Projects built for ',
    titleHighlight: 'real needs',
    description:
      'Web and mobile applications made for concrete uses: transport, schools, events, personal finance.',
    carouselLabel: 'Projects carousel',
    carouselRole: 'carousel',
    slideRole: 'slide',
    slideLabel: (n: number, total: number) => `${n} of ${total}`,
    status: (n: number, total: number, title: string) =>
      `Project ${n} of ${total}: ${title}`,
    previous: 'Previous project',
    next: 'Next project',
    goTo: (title: string) => `Show the ${title} project`,
    caseStudy: 'View the case study',
    viewAll: 'See all projects',
    fallbackAlt: (title: string) => `Generated illustration of the ${title} interface`,
    screenshotAlt: (title: string, subject: string) => `${title}: ${subject}`,
  },
  notFound: {
    code: 'Error 404',
    title: 'Page not found',
    text: 'The page you are looking for does not exist, or may have moved.',
    back: 'Back to home',
  },
  seo: {
    home: {
      title: 'Avotriniaina Ras — Freelance Fullstack Developer (Madagascar)',
      description:
        'Freelance fullstack developer building custom web and mobile apps (React, Spring Boot, NestJS, Flutter), with Docker and CI/CD deployment. Available for missions in Madagascar or remotely.',
    },
    projects: {
      title: 'Projects and case studies — Avotriniaina Ras',
      description:
        'Fullstack and mobile applications I built: transport management, school management, event operations, Flutter. Architecture, stack and features detailed for each project.',
    },
    about: {
      title: 'About — Avotriniaina Ras',
      description:
        'Background, skills and way of working of Avotriniaina Rasamimanana, a fullstack developer based in Madagascar.',
    },
    contact: {
      title: "Let's talk about your project — Avotriniaina Ras",
      description:
        'Describe your project, your needs and your budget: I reply quickly. Reach me by email or WhatsApp.',
    },
    notFound: {
      title: 'Page not found — Avotriniaina Ras',
      description: 'This page does not exist.',
    },
  },
}
