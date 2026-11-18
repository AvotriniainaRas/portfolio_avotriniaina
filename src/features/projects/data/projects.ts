import type { Project } from '../types'

export const PROJECTS: Project[] = [
  {
    slug: 'aina-trans',
    title: 'Aina Trans',
    tagline:
      'Application web fullstack de réservation en ligne et de gestion opérationnelle pour une coopérative de transport, avec suivi des sièges en temps réel',
    category: 'Application web fullstack',
    featured: true,
    stack: ['React TS', 'Spring Boot', 'PostgreSQL', 'JWT', 'WebSocket'],
    objective:
      "Centraliser la gestion opérationnelle d'une coopérative de transport — trajets, véhicules, chauffeurs et lignes — tout en ouvrant la réservation aux voyageurs en ligne et en donnant aux agents une solution de réservation au guichet intégrée à la même plateforme.",
    architecture:
      'API REST Spring Boot sécurisée par JWT, consommée par un frontend React TypeScript. Un canal WebSocket (STOMP) diffuse en temps réel les mises à jour de sièges, tandis qu’une contrainte UNIQUE PostgreSQL empêche toute double réservation au niveau base de données.',
    features: [
      'Plan de sièges interactif, mis à jour en temps réel via WebSocket',
      'Réservation en ligne (voyageur) et au guichet (agent), avec confirmation automatique par e-mail',
      "Tableau de bord et notifications temps réel pour l'administrateur",
      'Gestion CRUD complète (véhicules, lignes, trajets, chauffeurs) avec génération automatique des sièges',
      'Feuille de route imprimable A4 et authentification par rôles (voyageur / administrateur)',
    ],
    technicalHighlights: [
      'Double protection contre les doublons de réservation : vérification applicative + contrainte UNIQUE PostgreSQL',
      'WebSocket STOMP avec un topic par trajet, pour synchroniser les sièges entre plusieurs utilisateurs',
      'Séparation stricte DTO / Entité, et contexte React global pour des notifications persistantes',
      "Génération automatique des sièges à la création d'un véhicule, export PDF optimisé pour un rendu A4 fidèle",
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
      "Plateforme collaborative de gestion des emplois du temps et des salles pour l'université EMIT, bâtie en microservices",
    category: 'Application web — projet collaboratif',
    featured: false,
    stack: ['ASP.NET', 'React TS', 'Microservices'],
    objective:
      "Organiser la planification des classes, matières, séances et salles au sein de l'établissement, avec une gestion sécurisée des rôles utilisateurs — un projet mené en équipe, avec un backend réparti entre plusieurs membres.",
    architecture:
      'Backend découpé en 4 microservices ASP.NET indépendants — une première expérience en architecture microservices — chacun exposant sa propre API sécurisée par JWT. Un frontend unique en React TypeScript consomme ces services, avec une séparation claire des responsabilités entre pages, services et composants.',
    features: [
      'Gestion des classes, matières, séances et salles',
      "Gestion des utilisateurs et des modifications d'emploi du temps",
      'Authentification JWT',
      "Pages de dashboard et d'administration dédiées",
    ],
    technicalHighlights: [
      'Première mise en pratique concrète des microservices : découpage du backend en 4 services indépendants',
      'Travail en équipe sur un backend distribué, avec répartition des responsabilités entre membres',
      'Sécurisation des accès via JWT sur chaque service',
      'Frontend typé de bout en bout avec React TS, consommant plusieurs API indépendantes',
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
    title: "Gestion d'événements & contrôle d'accès FBBM",
    tagline:
      "Plateforme web réelle de numérisation d'événements : inscriptions, paiements, génération de tickets et badges, et gestion fine des accès",
    category: 'Stage & projet collaboratif réel — FBBM',
    featured: false,
    stack: ['React TS', 'FastAPI', 'PostgreSQL', 'API REST'],
    objective:
      "Numériser et centraliser l'organisation complète des événements de la communauté FBBM — de la gestion des membres et des inscriptions jusqu'aux paiements, à l'émission des tickets/badges et au contrôle des accès — en remplaçant les processus manuels par un outil fiable et traçable.",
    architecture:
      'Backend API REST développé avec FastAPI et interface web moderne en React TypeScript. Modèle de contrôle d’accès à deux niveaux (rôles globaux d’administration et rôles spécifiques par événement), accompagné d’un journal d’audit (audit log) pour tracer les opérations sensibles.',
    features: [
      'Gestion des membres, des comptes utilisateurs et des profils d’accès',
      'Création, paramétrage et suivi des événements',
      'Gestion des inscriptions, des paiements et génération automatique de tickets et badges',
      'Contrôle des rôles à deux niveaux (administration globale vs gestionnaire d’événement)',
      'Suivi des validations d’entrée et journalisation (audit log) des actions sensibles',
    ],
    technicalHighlights: [
      'Projet réel en production/terrain avec de vrais utilisateurs et enjeux opérationnels (paiements, accès, traçabilité)',
      'Architecture de permissions granulaires à deux niveaux (global / par événement) pour sécuriser les opérations',
      'Mise en place d’un audit log assurant la transparence et la traçabilité des actions critiques',
      'Travail collaboratif et déploiement en conditions réelles dans le cadre du stage chez FBBM',
    ],
  },
  {
    slug: 'fbbm-checking-mobile',
    title: 'Application mobile de checking FBBM',
    tagline:
      "Application mobile Flutter dédiée au scan de tickets et badges, au contrôle d'accès et au suivi des présences sur le terrain",
    category: 'Application mobile — écosystème FBBM',
    featured: false,
    stack: ['Flutter', 'Dart', 'API REST'],
    objective:
      'Offrir aux équipes organisatrices sur le terrain un outil mobile rapide, intuitif et fiable pour vérifier la validité des tickets et badges, contrôler les entrées et suivre les présences en temps réel lors des événements FBBM.',
    architecture:
      'Application mobile cross-platform développée avec Flutter et connectée aux services backend de la plateforme événementielle FBBM, conçue pour limiter les temps d’attente à l’entrée et garantir une lecture claire des statuts de validation.',
    features: [
      'Vérification rapide des tickets et badges à l’entrée des événements',
      'Contrôle des accès et détection immédiate des billets déjà utilisés ou invalides',
      'Suivi en temps réel des présences et de l’affluence par événement',
      'Interface mobile épurée et réactive adaptée aux contraintes du terrain',
    ],
    technicalHighlights: [
      'Intégration directe avec la plateforme web FBBM pour une synchronisation cohérente des données d’accès',
      'Optimisation du parcours de scan et de validation pour fluidifier l’accueil du public',
      'Conception orientée fiabilité et rapidité d’exécution en conditions opérationnelles réelles',
    ],
  },
]
