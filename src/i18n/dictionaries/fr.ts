/**
 * Dictionnaire français : c'est la LANGUE DE RÉFÉRENCE.
 * Le type `Dictionary` est déduit de ce fichier, et `en.ts` doit le respecter
 * clé pour clé : une traduction oubliée est une erreur de compilation, pas un bug en production.
 */
export const fr = {
  nav: {
    home: 'Accueil',
    projects: 'Projets',
    about: 'À propos',
    contact: 'Contact',
    downloadCv: 'Télécharger CV',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    mobileMenu: 'Menu de navigation',
    mainNavigation: 'Navigation principale',
    skipToContent: 'Aller au contenu',
    cta: 'Discutons de votre projet',
  },
  cv: {
    groupLabel: 'Choisir la langue du CV',
    // Chaque libellé est écrit dans SA langue : on choisit le CV sans avoir à comprendre le site.
    options: { fr: 'CV en français', en: 'CV in English' },
    format: 'PDF',
  },
  language: {
    groupLabel: 'Langue du site',
    switchTo: (name: string) => `Passer le site en ${name}`,
  },
  theme: {
    toLight: 'Activer le thème clair',
    toDark: 'Activer le thème sombre',
  },
  footer: {
    tagline: 'Développeur Fullstack & DevOps Junior',
    availability: 'Disponible pour de nouvelles missions',
    navTitle: 'Navigation',
    cvTitle: 'Télécharger mon CV',
    contactTitle: 'Me joindre',
    rights: (year: number) =>
      `© ${year} Avotriniaina Rasamimanana. Tous droits réservés.`,
  },
  showcase: {
    label: 'Projets',
    titleBefore: 'Des projets conçus pour de ',
    titleHighlight: 'vrais besoins',
    description:
      'Applications web et mobiles réalisées pour des usages concrets : transport, école, événementiel, finances personnelles.',
    carouselLabel: 'Carrousel des projets',
    carouselRole: 'carrousel',
    slideRole: 'diapositive',
    slideLabel: (n: number, total: number) => `${n} sur ${total}`,
    status: (n: number, total: number, title: string) =>
      `Projet ${n} sur ${total} : ${title}`,
    previous: 'Projet précédent',
    next: 'Projet suivant',
    goTo: (title: string) => `Afficher le projet ${title}`,
    caseStudy: "Voir l'étude de cas",
    viewAll: 'Voir tous les projets',
    fallbackAlt: (title: string) =>
      `Illustration générée de l'interface du projet ${title}`,
    screenshotAlt: (title: string, subject: string) => `${title} : ${subject}`,
  },
  notFound: {
    code: 'Erreur 404',
    title: 'Page introuvable',
    text: "La page que vous cherchez n'existe pas, ou a peut-être changé d'adresse.",
    back: "Retour à l'accueil",
  },
  seo: {
    home: {
      title: 'Avotriniaina Ras — Développeur Fullstack freelance (Madagascar)',
      description:
        'Développeur fullstack freelance : applications web et mobiles sur mesure (React, Spring Boot, NestJS, Flutter), déploiement Docker et CI/CD. Disponible pour vos missions, à Madagascar ou à distance.',
    },
    projects: {
      title: 'Projets et études de cas — Avotriniaina Ras',
      description:
        'Applications fullstack et mobiles réalisées : gestion de transport, gestion scolaire, événementiel, Flutter. Architecture, stack et fonctionnalités détaillées pour chaque projet.',
    },
    about: {
      title: 'À propos — Avotriniaina Ras',
      description:
        "Parcours, compétences et méthode de travail d'Avotriniaina Rasamimanana, développeur fullstack basé à Madagascar.",
    },
    contact: {
      title: 'Discutons de votre projet — Avotriniaina Ras',
      description:
        'Décrivez votre projet, votre besoin et votre budget : je vous réponds rapidement. Contact par e-mail ou WhatsApp.',
    },
    notFound: {
      title: 'Page introuvable — Avotriniaina Ras',
      description: "Cette page n'existe pas.",
    },
  },
}

export type Dictionary = typeof fr
