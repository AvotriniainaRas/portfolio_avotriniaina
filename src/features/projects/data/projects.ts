import type { Project } from '../types'

export const PROJECTS: Project[] = [
  {
    slug: 'aina-trans',
    title: 'Aina Trans',
    tagline:
      'Plateforme de gestion de coopérative de transport, de la réservation en ligne au suivi des trajets',
    category: 'Application web fullstack',
    featured: true,
    stack: ['React', 'Spring Boot', 'PostgreSQL'],
    objective:
      "Centraliser la gestion opérationnelle d'une coopérative de transport — trajets, véhicules, chauffeurs et lignes — tout en ouvrant la réservation aux voyageurs en ligne.",
    architecture:
      'Architecture en couches côté backend (Spring Boot) exposant une API REST consommée par un frontend React. PostgreSQL sert de source de vérité pour les données opérationnelles sensibles (sièges, réservations, trajets).',
    features: [
      'Réservation en ligne avec sélection visuelle des sièges en temps réel',
      'Confirmation automatique par e-mail après réservation',
      'Distinction entre réservations WEB (en ligne) et LOCAL (guichet)',
      'Gestion complète des trajets, véhicules, chauffeurs et lignes',
      'Gestion des voyageurs avec CIN et sexe pour la conformité des manifestes',
    ],
    technicalHighlights: [
      "Modélisation d'un système de réservation à contraintes fortes (un siège ne peut être réservé deux fois)",
      'Séparation claire entre logique métier (services Spring Boot) et présentation (composants React)',
      "Envoi d'e-mails transactionnels automatisés",
    ],
  },
  {
    slug: 'systeme-gestion-scolaire',
    title: 'Système de gestion scolaire',
    tagline: 'Plateforme complète de gestion scolaire pensée pour un lycée malgache',
    category: 'Application web fullstack — projet personnel',
    featured: true,
    stack: ['Angular 17+', 'NestJS', 'Prisma', 'PostgreSQL 17', 'JWT', 'PDFKit'],
    objective:
      "Concevoir un système de gestion scolaire moderne et fiable pour un lycée : élèves, enseignants, présences, notes, bulletins et scolarité, dans une logique de remplacement d'outils vieillissants.",
    architecture:
      'Stack 100% TypeScript : Angular 17+ côté frontend, NestJS côté backend avec Prisma ORM sur PostgreSQL 17. Authentification JWT via Passport.js. Génération de documents (bulletins) via PDFKit.',
    features: [
      'Espace Administrateur : Gestion globale du système (élèves, enseignants, classes, frais de scolarité, emplois du temps et configurations).',
      'Espace Enseignant : Saisie des notes, suivi des absences/présences au quotidien et évaluation des élèves.',
      'Portail Parents : Consultation en temps réel du suivi scolaire (notes, bulletins téléchargables, retards et absences de leurs enfants).',
    ],
    technicalHighlights: [
      'Architecture 100% TypeScript de bout en bout, typage partagé entre couches',
      'ORM Prisma pour des requêtes typées et des migrations versionnées',
      'Génération de PDF côté serveur pour les bulletins scolaires',
      'Projet mené en autonomie complète, de la conception à la mise en œuvre',
    ],
  },
  {
    slug: 'budgetwise',
    title: 'BudgetWise',
    tagline:
      'Application mobile de gestion financière personnelle, fonctionnelle hors ligne',
    category: 'Application mobile Flutter',
    featured: false,
    stack: ['Flutter', 'Hive', 'Riverpod'],
    objective:
      "Permettre un suivi simple et fiable des revenus, dépenses et objectifs d'épargne, sans dépendre d'une connexion internet.",
    architecture:
      "Base de données locale (Hive) pour un fonctionnement 100% hors ligne, gestion d'état avec Riverpod pour une architecture prévisible et testable.",
    features: [
      'Suivi des revenus et dépenses catégorisés',
      "Statistiques graphiques de l'évolution financière",
      "Gestion d'objectifs d'épargne avec suivi de progression",
      'Export des données en CSV et PDF',
    ],
    technicalHighlights: [
      'Fonctionnement offline-first avec persistance locale',
      'Génération de rapports PDF côté client',
      'State management structuré avec Riverpod pour limiter les rebuilds inutiles',
    ],
  },
  {
    slug: 'iot-detection-presence',
    title: 'Système IoT de détection de présence',
    tagline:
      'Système distribué combinant smartphone, serveur C++ et Arduino pour la détection de présence',
    category: 'IoT / systèmes distribués',
    featured: false,
    stack: ['React Native', 'Google ML Kit', 'C++', 'Arduino'],
    objective:
      "Détecter la présence humaine en combinant reconnaissance visuelle mobile et traitement temps réel, jusqu'à l'activation physique d'un actionneur.",
    architecture:
      'Trois composants interconnectés : une application React Native intégrant Google ML Kit, un serveur C++ qui reçoit les résultats via HTTP/WiFi et filtre les faux positifs, et un Arduino piloté en série qui active une LED selon le résultat.',
    features: [
      "Détection de présence via Google ML Kit intégré dans l'application mobile",
      'Transmission des résultats via HTTP sur réseau WiFi',
      'Filtrage des faux positifs côté serveur C++',
      "Commande d'un Arduino (simulé) en communication série",
      "Activation d'une LED selon le résultat final",
    ],
    technicalHighlights: [
      'Interconnexion de trois technologies hétérogènes (mobile, serveur natif, microcontrôleur)',
      'Logique de filtrage temps réel pour fiabiliser une détection bruitée',
      'Communication série bas niveau entre serveur et microcontrôleur',
    ],
  },
  {
    slug: 'emit-emplois-du-temps',
    title: "Gestion d'emplois du temps EMIT",
    tagline:
      "Plateforme de gestion des emplois du temps et des salles pour l'université EMIT",
    category: 'Application web',
    featured: false,
    stack: ['ASP.NET', 'React TS'],
    objective:
      "Organiser la planification des classes, matières, séances et salles au sein de l'établissement, avec une gestion sécurisée des rôles utilisateurs.",
    architecture:
      'Backend ASP.NET exposant une API sécurisée par JWT, frontend React TypeScript avec séparation claire des responsabilités entre pages, services et composants.',
    features: [
      'Gestion des classes, matières, séances et salles',
      "Gestion des utilisateurs et des modifications d'emploi du temps",
      'Authentification JWT',
      "Pages de dashboard et d'administration dédiées",
    ],
    technicalHighlights: [
      'Architecture propre avec séparation des responsabilités entre couches',
      'Sécurisation des accès via JWT',
      'Frontend typé de bout en bout avec React TS',
    ],
  },
  {
    slug: 'mini-moodle',
    title: 'Mini_Moodle',
    tagline:
      'Plateforme académique inspirée de Moodle, avec gestion des cours et des rendus',
    category: 'Application web fullstack',
    featured: false,
    stack: ['Spring Boot', 'React TS', 'PostgreSQL'],
    objective:
      "Reproduire les fonctionnalités essentielles d'une plateforme d'apprentissage en ligne : cours, ressources, devoirs et corrections, avec une gestion des rôles fine.",
    architecture:
      'Backend Spring Boot exposant une API REST, frontend React + TypeScript, PostgreSQL pour la persistance. Trois rôles distincts (ADMIN, ENSEIGNANT, ÉTUDIANT) avec permissions différenciées.',
    features: [
      'Gestion des cours et des ressources pédagogiques',
      'Dépôt de devoirs et rendus par les étudiants',
      'Corrections et attribution de notes par les enseignants',
      'Système de rôles ADMIN / ENSEIGNANT / ÉTUDIANT',
    ],
    technicalHighlights: [
      "Modélisation d'un système de permissions par rôle",
      'Flux complet devoir → rendu → correction → note',
      'API REST structurée consommée par un frontend typé',
    ],
  },
  {
    slug: 'fbbm-evenements',
    title: "Gestion d'événements FBBM",
    tagline:
      "Plateforme réelle et collaborative de gestion d'événements avec inscriptions, paiements et badges",
    category: 'Projet collaboratif réel',
    featured: false,
    stack: ['Web', 'Mobile'],
    objective:
      "Gérer de bout en bout les événements d'une communauté : inscriptions, paiements, tickets, badges et validation terrain, avec une gestion fine des rôles.",
    architecture:
      'Gestion des utilisateurs et rôles à deux niveaux : rôles globaux (administration générale) et rôles par événement (organisateurs spécifiques), avec audit log pour la traçabilité.',
    features: [
      'Gestion des membres et des utilisateurs',
      'Création et gestion des événements',
      'Inscriptions, paiements, génération de tickets et badges',
      'Validation terrain des accès',
      'Audit log des actions sensibles',
      'Rôles globaux et rôles spécifiques par événement',
    ],
    technicalHighlights: [
      'Projet collaboratif réel avec des utilisateurs finaux, pas un exercice académique',
      'Modèle de permissions à deux niveaux (global / par événement)',
      'Traçabilité des actions via audit log',
      'Complexité métier réelle : gestion de paiements et de validations terrain',
    ],
  },
  {
    slug: 'fbbm-checking-mobile',
    title: 'Application mobile de contrôle FBBM',
    tagline:
      'Application mobile de checking des tickets, badges et présences sur le terrain',
    category: 'Application mobile — module complémentaire',
    featured: false,
    stack: ['Flutter'],
    objective:
      'Fournir aux équipes terrain un outil rapide de validation des accès lors des événements gérés par la plateforme FBBM.',
    architecture:
      "Application Flutter dédiée, connectée au système de gestion d'événements FBBM, pensée pour une utilisation rapide en conditions réelles.",
    features: [
      'Interface de validation rapide des tickets et badges',
      'Suivi des présences en temps réel',
      'Expérience mobile optimisée pour les opérations terrain',
    ],
    technicalHighlights: [
      "Conçue comme extension mobile d'un système existant plutôt qu'une app isolée",
      "Priorité donnée à la rapidité d'usage en conditions réelles",
    ],
  },
]
