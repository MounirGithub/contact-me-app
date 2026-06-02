---
title: "Portfolio Mounir B — Refonte Technique & UX"
status: draft
created: 2026-06-02
updated: 2026-06-02
---

# PRD : Portfolio Mounir B — Refonte Technique & UX

## 0. Document Purpose

Ce PRD est destiné à l'agent développeur (Amelia) et à l'architecte (Winston) pour guider l'implémentation en 3 phases du portfolio. Il s'appuie sur le [product brief](../briefs/brief-my-portfolio-master-2026-06-02/brief.md) validé le 2 juin 2026. Les features sont groupées par phase, les FRs globalement numérotés. Le vocabulaire suit le Glossaire §3.

## 1. Vision

Transformer un prototype React fonctionnel en un portfolio professionnel — rapide, fluide, mobile-first — qui sert de vitrine technique pour attirer recruteurs, pairs techniques et prospects freelance.

Le site existe et est déployé. Le thème sky-to-ocean est validé. Ce qui manque : une base technique propre (Vite, CSS Modules, composants isolés), une UX à la hauteur des portfolios premium (smooth scroll, animations fluides, zéro bug mobile), et du contenu structuré pour raconter une histoire professionnelle convaincante.

## 2. Target User

### 2.1 Jobs To Be Done

- **Recruteur tech** — évaluer en 30s si ce candidat mérite un entretien (signal : design soigné, contenu clair, site rapide)
- **Pair technique / CTO** — évaluer la profondeur technique (signal : qualité du code source, choix technos, case studies)
- **Prospect freelance** — vérifier la capacité end-to-end et trouver un moyen de contact (signal : projets livrés, expertise claire, formulaire accessible)
- **Mounir (builder)** — maintenir et enrichir le site sans friction (signal : architecture claire, fichiers courts, ajout de contenu rapide)

### 2.2 Non-Users (v1)

- Développeurs cherchant un template portfolio à cloner
- Visiteurs non-tech (famille, amis) — le site reste accessible mais n'est pas optimisé pour eux

### 2.3 Key User Journeys

- **UJ-1. Un recruteur découvre le portfolio via LinkedIn.**
  - **Persona + contexte :** Clara, recruteuse tech chez une ESN, reçoit le lien dans un message LinkedIn sur son iPhone.
  - **Entry state :** premier contact, mobile, pas authentifiée.
  - **Path :** ouvre le lien → loader rapide → hero avec titre et spécialisations → scroll fluide vers Skills → Experience → Projects → Contact.
  - **Climax :** en 30s, elle sait ce que Mounir fait, voit 3+ projets concrets, et a le bouton Contact sous les yeux.
  - **Resolution :** elle envoie un message via le formulaire ou note le profil pour plus tard.
  - **Edge case :** sur un réseau lent (3G), le site reste utilisable (pas de blank screen prolongé).

- **UJ-2. Un CTO regarde le code source.**
  - **Persona + contexte :** Thomas, CTO d'une startup, inspecte le repo GitHub pour évaluer la qualité technique.
  - **Entry state :** desktop, repo GitHub.
  - **Path :** ouvre le repo → structure claire (composants isolés, noms explicites) → lit un composant → comprend la logique en < 1min.
  - **Climax :** le code reflète les compétences annoncées — propre, modulaire, bien organisé.
  - **Resolution :** il considère Mounir pour une mission ou un poste.

## 3. Glossaire

- **Section** — Bloc visuel du one-page (Hero, Skills, Experience, Projects, Contact).
- **Composant** — Fichier React (.jsx) + son CSS Module associé, dans un dossier dédié.
- **Smooth scroll** — Défilement interpolé à 60fps via Lenis, sans saccade native du navigateur.
- **Layout shift** — Décalage visuel inattendu d'éléments pendant le chargement ou une animation (CLS).
- **CSS Module** — Fichier `.module.css` dont les classes sont scopées au composant à la compilation.
- **Loader** — Écran de chargement initial affiché avant le rendu du contenu principal.
- **TypeAnimation** — Composant affichant un texte typé lettre par lettre (effet machine à écrire).
- **Hero** — Première Section visible (ciel étoilé, nom, titres animés, vagues).
- **Ocean-depth** — Conteneur principal sous le Hero, gradient descendant vers les profondeurs.

## 4. Features

### 4.1 Migration Vite (Phase 1)

**Description :** Remplacer Create React App par Vite comme bundler et dev server. L'application doit fonctionner à l'identique visuellement après migration. Prérequis de toutes les autres features.

**Functional Requirements :**

#### FR-1 : Migration CRA → Vite

Le projet utilise Vite (v5+) comme bundler. Le build produit un bundle optimisé déployable sur Vercel.

**Consequences (testable) :**
- `npm run dev` lance le dev server Vite en < 2s
- `npm run build` produit un dossier `dist/` déployable
- Le rendu visuel est identique pixel-perfect à l'actuel
- Aucune dépendance CRA ne subsiste (react-scripts, react-app-rewired)

#### FR-2 : Nettoyage des dépendances

Les dépendances inutilisées sont supprimées du `package.json`.

**Consequences (testable) :**
- bootstrap, react-bootstrap, react-multi-carousel, animate.css, swiper, react-on-screen, react-device-detect supprimés
- Aucun import cassé après suppression
- Le bundle JS gzippé < 50kB (hors images)

### 4.2 Architecture composants (Phase 1)

**Description :** Restructurer le code en composants isolés avec séparation des responsabilités. Réalise UJ-2.

**Functional Requirements :**

#### FR-3 : Structure dossiers par composant

Chaque Composant vit dans `src/components/{Name}/index.jsx` + `{Name}.module.css`.

**Consequences (testable) :**
- Aucun fichier composant > 150 lignes
- Aucun fichier CSS > 200 lignes
- Aucun CSS global hors `src/styles/variables.css` et `src/styles/reset.css`

#### FR-4 : CSS Modules

Tous les styles sont scopés via CSS Modules. Les variables globales (palette, fonts) restent dans un fichier partagé importé par chaque module.

**Consequences (testable) :**
- Aucune classe CSS globale hors reset et variables
- Pas de conflit de noms de classes possible
- Le thème sky-to-ocean est préservé (mêmes couleurs, gradients, effets)

### 4.3 Fix Loader mobile (Phase 2)

**Description :** Le Loader affiche "Mounir B" en typewriter. Sur Samsung S24 Ultra et autres grands mobiles, le texte déborde du viewport. Réalise UJ-1.

**Functional Requirements :**

#### FR-5 : Loader responsive

Le contenu du Loader ne déborde jamais du viewport, quelle que soit la taille d'écran.

**Consequences (testable) :**
- Sur viewport 360px à 480px de large, aucun overflow horizontal
- Le nom s'adapte (font-size responsive ou clamp())
- Pas de scrollbar horizontale pendant le loader

### 4.4 Fix TypeAnimation layout shift (Phase 2)

**Description :** Le composant TypeAnimation dans le Hero change de hauteur selon le texte tapé, ce qui décale les éléments en dessous. Réalise UJ-1.

**Functional Requirements :**

#### FR-6 : Hauteur fixe pour TypeAnimation

Le conteneur TypeAnimation a une hauteur réservée qui ne varie pas.

**Consequences (testable) :**
- CLS = 0 pour le composant Hero (mesuré via Lighthouse)
- Les éléments sous le typed text ne bougent pas pendant l'animation
- Fonctionne sur toutes les tailles d'écran (min-height responsive)

### 4.5 Smooth scroll (Phase 2)

**Description :** Intégrer Lenis pour un défilement fluide et naturel sur tout le site. Inspiration : caoenergy.com. Réalise UJ-1.

**Functional Requirements :**

#### FR-7 : Scroll Lenis

Le scroll de la page est géré par Lenis avec interpolation fluide.

**Consequences (testable) :**
- Scroll à 60fps constant sur mobile (S24 Ultra) et desktop
- Pas de "jump" ou saccade au scroll
- Les ancres navbar scrollent smooth vers la section cible
- Le scroll natif reste fonctionnel (pas de hijack bloquant l'accessibilité)

#### FR-8 : Scroll indicator

Un indicateur visuel subtil en bas du Hero invite à scroller.

**Consequences (testable) :**
- Visible au premier chargement
- Disparaît au premier scroll
- Animé (bounce ou fade pulse)

### 4.6 Animations d'entrée (Phase 2)

**Description :** Les Sections apparaissent avec des animations fluides au scroll, via Framer Motion. Remplace le bricolage IntersectionObserver + CSS keyframes.

**Functional Requirements :**

#### FR-9 : Animations Framer Motion

Chaque Section a une animation d'entrée (fade-in + translate) déclenchée au scroll.

**Consequences (testable) :**
- Animation fluide à 60fps
- Pas de flash/flicker au chargement initial
- L'animation ne se re-trigger pas si on re-scrolle vers la section (once-only)
- Accessible : respecte `prefers-reduced-motion` (pas d'animation si activé)

### 4.7 Réactivation section Projects (Phase 3)

**Description :** La section Projects est actuellement commentée dans App.js. Elle doit être réactivée avec du contenu réel. Réalise UJ-1.

**Functional Requirements :**

#### FR-10 : Section Projects visible

La section Projects est active, visible et peuplée avec minimum 3 projets réels.

**Consequences (testable) :**
- 3+ cartes projets avec image, titre, description, techno, lien
- Le lien navbar "Projects" scrolle vers la section
- Responsive : grille adaptée mobile/desktop
- Images optimisées (lazy load, format moderne)

## 5. Non-Goals (Explicit)

- **Ne pas devenir un CMS** — le contenu est en dur dans le code (pas de headless CMS en v1)
- **Ne pas ajouter de routing multi-page** — le site reste un one-page
- **Ne pas changer le design** — palette, typo, concept sky-to-ocean conservés
- **Ne pas ajouter de blog en v1** — le contenu blog est hors scope MVP
- **Ne pas migrer en TypeScript** — pas de bénéfice user visible pour un portfolio solo
- **Ne pas ajouter d'analytics** — hors scope technique de cette refonte

## 6. MVP Scope

### 6.1 In Scope

- Migration Vite complète
- Restructuration composants + CSS Modules
- Suppression dépendances inutilisées
- Fix loader débordement mobile
- Fix TypeAnimation layout shift
- Intégration Lenis smooth scroll
- Scroll indicator Hero
- Animations Framer Motion (sections)
- Réactivation section Projects (3+ projets)
- Déploiement Vercel fonctionnel

### 6.2 Out of Scope pour MVP

- Blog / articles — [NOTE FOR PM] à revisiter en v2 si le brief est bien reçu
- Case studies détaillées — v2
- Page domaine dédié (IA + migration) — v2
- Section certifications — v2
- Internationalisation FR/EN — v3
- Mode sombre / clair toggle — non planifié
- Tests unitaires / E2E — v2 [ASSUMPTION : pas de tests en v1]

## 7. Success Metrics

**Primary**

- **SM-1 :** Lighthouse mobile Performance > 90. Valide FR-1, FR-2.
- **SM-2 :** CLS = 0 sur le Hero. Valide FR-6.
- **SM-3 :** 60fps au scroll sur Samsung S24 Ultra. Valide FR-7.

**Secondary**

- **SM-4 :** Build time < 5s (vs ~30s CRA). Valide FR-1.
- **SM-5 :** Aucun fichier > 200 lignes dans le repo. Valide FR-3.
- **SM-6 :** 3+ projets visibles et documentés dans la section Projects. Valide FR-10.

**Counter-metrics (ne pas optimiser)**

- **SM-C1 :** Bundle size — ne pas sacrifier la fluidité (Lenis + Framer Motion) pour gagner 5kB. Contrebalance SM-1.
- **SM-C2 :** Time-to-interactive — ne pas supprimer les animations pour atteindre un TTI plus bas. Contrebalance SM-1.

## 8. Open Questions

1. ~~Le scroll indicator (FR-8)~~ → Résolu : disparaît au premier scroll.
2. ~~Les animations Framer Motion~~ → Résolu : once-only.
3. Les projets (FR-10) : quels 3 projets prioriser ? → Différé (sera traité en Phase 3).
4. ~~Vercel config~~ → Résolu : auto-detect (pas de vercel.json).

## 9. Assumptions Index

- ~~§4.5 FR-8~~ — Confirmé : disparaît au premier scroll
- ~~§4.6 FR-9~~ — Confirmé : once-only
- §6.2 — [ASSUMPTION] Pas de tests unitaires/E2E en v1
