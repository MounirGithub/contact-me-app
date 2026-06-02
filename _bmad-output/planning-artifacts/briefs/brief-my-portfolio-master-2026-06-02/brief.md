---
title: "Portfolio Mounir B — Refonte Technique & UX"
status: draft
created: 2026-06-02
updated: 2026-06-02
---

# Product Brief : Portfolio Mounir B

## Résumé Exécutif

Ce portfolio est le vitrine professionnelle de Mounir B, ingénieur logiciel fullstack spécialisé IA, migration et automatisation. Le site existe et est déployé (Vercel), avec un thème immersif sky-to-ocean déjà en place.

L'objectif de cette itération est triple : **poser une base technique propre et maintenable** (migration Vite, CSS Modules, architecture composants), **corriger les problèmes d'affichage mobile et apporter une UX fluide digne des portfolios premium** (smooth scroll Lenis, animations Framer Motion), puis **enrichir le contenu** pour servir trois audiences — recruteurs, pairs techniques et prospects freelance.

## Le Problème

Le portfolio actuel souffre de :

- **Dette technique** — Create React App (non maintenu), un CSS monolithique de 1800+ lignes, pas de séparation par composant, dépendances inutilisées (bootstrap, react-multi-carousel, etc.)
- **Bugs mobile** — Sur Samsung S24 Ultra : loader qui déborde, TypeAnimation qui provoque un layout shift permanent, scroll saccadé, absence d'indicateur de défilement
- **UX en deçà des standards** — Pas de smooth scroll, transitions abruptes, scroll qui « bouge tout seul ». Les portfolios de référence (caoenergy) offrent un mouvement naturel et profond que le site n'atteint pas
- **Contenu limité** — Section Projects désactivée, pas de blog, pas de case studies, pas de certifications visibles

## La Solution

### Phase 1 — Refactoring technique

Migration vers une architecture propre et maintenable :

- **Vite** remplace CRA — build instantané, HMR, écosystème actif
- **CSS Modules** (`.module.css` par composant) — scoping natif, un fichier = un composant
- **Structure dossiers** — `src/components/ComponentName/index.jsx` + `ComponentName.module.css`
- **Nettoyage des dépendances** — suppression de bootstrap, react-multi-carousel, animate.css et autres librairies non utilisées
- **Fichiers courts** — aucun composant > 150 lignes, aucun fichier CSS > 200 lignes

### Phase 2 — Correction mobile & UX premium

- **Loader** — contenu responsive, pas de débordement sur grands écrans mobiles
- **TypeAnimation** — hauteur fixe réservée (pas de layout shift)
- **Smooth scroll** — intégration Lenis pour un défilement naturel et fluide
- **Animations d'entrée** — Framer Motion pour les apparitions de sections (remplace IntersectionObserver bricolé)
- **Scroll indicator** — indicateur subtil en bas du Hero pour inviter à descendre
- **Thème conservé** — palette sky-to-ocean, waves, ambient background inchangés

### Phase 3 — Contenu

- Réactiver la section **Projects** avec de vrais projets et images
- Ajouter une section **Certifications**
- Créer une page ou section **Blog / Articles**
- Ajouter des **Case studies** pour les projets clés
- Page dédiée à un **domaine d'expertise** (IA + migration)

## Ce qui rend ce projet différent

Ce n'est pas une refonte visuelle — le design est là. C'est une **refonte d'ingénierie** pour transformer un prototype fonctionnel en un produit professionnel : performant, maintenable, mobile-first, et prêt à grandir avec du contenu.

## À qui ça sert

- **Recruteurs / RH tech** — veulent un signal clair de compétence et de sérieux en 30 secondes
- **Pairs techniques / CTO** — veulent voir la qualité du code, les choix techniques, la profondeur
- **Prospects freelance** — veulent une preuve de capacité end-to-end et un moyen de contact

## Critères de succès

| Critère | Mesure |
|---------|--------|
| Mobile sans bug | 0 overflow, 0 layout shift sur S24 Ultra et iPhone 15 |
| Performance | Lighthouse mobile > 90 |
| Smooth scroll | 60fps constant au scroll sur mobile |
| Maintenabilité | Aucun fichier > 200 lignes, 0 CSS global hors variables |
| Contenu | Projects visible avec 3+ projets documentés |
| Temps de build | < 5s (Vite vs ~30s CRA) |

## Périmètre

### Dans le scope (v1)

- Migration CRA → Vite
- Restructuration composants + CSS Modules
- Fix bugs mobile (loader, typewriter, scroll)
- Intégration Lenis + Framer Motion
- Scroll indicator
- Réactivation Projects
- Nettoyage dépendances

### Hors scope (futur)

- Blog complet avec CMS
- Case studies détaillées
- Page domaine dédiée
- Certifications
- Internationalisation (FR/EN)
- Analytics avancés

## Vision

Un portfolio qui fonctionne comme une **application d'ingénieur** — rapide, fluide, sans compromis technique — tout en racontant une histoire professionnelle convaincante. À terme : un hub de contenu technique (blog, études de cas) qui positionne Mounir comme référence sur l'intersection IA × développement fullstack × migration.
