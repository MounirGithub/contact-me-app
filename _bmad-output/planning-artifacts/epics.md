---
stepsCompleted: [1, 2, 3, 4]
inputDocuments:
  - _bmad-output/planning-artifacts/prds/prd-my-portfolio-master-2026-06-02/prd.md
  - _bmad-output/planning-artifacts/architecture.md
project_name: my-portfolio-master
date: 2026-06-02
---

# Epics & Stories — Portfolio Mounir B

## Epics List

| # | Epic | Valeur utilisateur | FRs couverts |
|---|------|--------------------|--------------|
| 1 | Migration Vite & Architecture propre | Le développeur (Mounir) peut maintenir et faire évoluer le site sans friction | FR-1, FR-2, FR-3, FR-4 |
| 2 | UX Mobile & Scroll fluide | Le visiteur (recruteur, CTO) a une expérience fluide et sans bug sur mobile | FR-5, FR-6, FR-7, FR-8, FR-9 |
| 3 | Section Projects | Le visiteur voit des projets concrets qui démontrent les compétences | FR-10 |

---

## Epic 1 : Migration Vite & Architecture propre

**Goal :** Migrer de CRA vers Vite, restructurer en composants isolés avec CSS Modules, supprimer les dépendances inutiles. Le site fonctionne à l'identique visuellement après cette epic.

---

### Story 1.1 : Initialisation Vite et migration de base

As a **développeur**,
I want **migrer le projet de CRA vers Vite**,
So that **le dev server démarre en < 2s et le build est 10x plus rapide**.

**Acceptance Criteria :**

**Given** le projet actuel utilise react-scripts (CRA)
**When** la migration est effectuée
**Then** :
- `index.html` est à la racine du projet (convention Vite)
- `src/main.jsx` est le point d'entrée (remplace `src/index.js`)
- `vite.config.js` existe avec la config React
- `npm run dev` lance le dev server Vite en < 2s
- `npm run build` produit `dist/` (pas `build/`)
- Le rendu visuel est identique à l'actuel
- `react-scripts` est supprimé des dépendances
- Les variables d'env utilisent le prefix `VITE_`

**Technical notes :**
- Installer `vite`, `@vitejs/plugin-react`
- Mettre à jour les scripts dans `package.json`
- Déplacer `public/index.html` → racine, ajouter `<script type="module" src="/src/main.jsx">`

---

### Story 1.2 : Nettoyage des dépendances

As a **développeur**,
I want **supprimer les dépendances inutilisées**,
So that **le bundle est léger et il n'y a pas de dette cachée**.

**Acceptance Criteria :**

**Given** le package.json contient des dépendances inutilisées
**When** le nettoyage est effectué
**Then** :
- Supprimés : `bootstrap`, `react-bootstrap`, `react-bootstrap-icons`, `react-multi-carousel`, `animate.css`, `swiper`, `react-on-screen`, `react-device-detect`, `react-mailchimp-subscribe`, `react-router`, `react-router-dom`, `cors`, `express`, `nodemailer`, `dotenv`, `react-helmet`
- Conservés : `react`, `react-dom`, `react-hook-form`, `@emailjs/browser`, `react-type-animation`, `react-intersection-observer`
- Aucun import cassé (le build passe sans erreur)
- Le bundle JS gzippé < 60kB

**Technical notes :**
- Vérifier chaque import dans le code source avant suppression
- Supprimer les imports orphelins dans les composants

---

### Story 1.3 : Restructuration composants + CSS Modules

As a **développeur**,
I want **restructurer le code en composants isolés avec CSS Modules**,
So that **chaque composant est autonome, maintenable et < 150 lignes**.

**Acceptance Criteria :**

**Given** le code actuel a un CSS monolithique et des composants dans un dossier plat
**When** la restructuration est effectuée
**Then** :
- Chaque composant vit dans `src/components/{Name}/index.jsx` + `{Name}.module.css`
- `src/styles/variables.css` contient les variables de thème (palette sky-to-ocean, fonts, spacing)
- `src/styles/reset.css` contient le reset minimal
- Aucun fichier composant > 150 lignes
- Aucun fichier CSS > 200 lignes
- Les classes sont importées via `import styles from './Name.module.css'`
- Le rendu visuel est **identique** à l'actuel (pas de régression)
- La palette sky-to-ocean est préservée exactement

**Composants à créer :**
- Loader, Nav, Hero, Skills, Experience, Projects (désactivé), Contact, AmbientBackground, CustomCursor

**Technical notes :**
- Extraire les variables CSS d'abord, puis migrer composant par composant
- Tester visuellement chaque composant après migration

---

## Epic 2 : UX Mobile & Scroll fluide

**Goal :** Corriger tous les bugs d'affichage mobile, intégrer Lenis pour un scroll fluide, ajouter les animations Framer Motion et le scroll indicator. L'expérience est premium et sans saccade.

---

### Story 2.1 : Fix Loader responsive

As a **visiteur sur mobile**,
I want **voir le loader sans débordement**,
So that **ma première impression est propre, pas cassée**.

**Acceptance Criteria :**

**Given** le loader affiche "Mounir B" en typewriter
**When** affiché sur un écran de 360px à 480px de large
**Then** :
- Aucun overflow horizontal (pas de scrollbar)
- Le texte s'adapte via `clamp()` ou `vw` units
- L'animation typewriter fonctionne correctement
- Testé sur viewport 412px (Samsung S24 Ultra)

---

### Story 2.2 : Fix TypeAnimation layout shift

As a **visiteur**,
I want **que le contenu sous le titre typé ne bouge pas**,
So that **la page est stable et professionnelle**.

**Acceptance Criteria :**

**Given** le Hero contient un TypeAnimation avec des textes de longueurs variables
**When** le texte change pendant l'animation
**Then** :
- Le conteneur a un `min-height` fixe (mobile : 3.5rem, desktop : 2.5rem)
- CLS = 0 pour la section Hero (Lighthouse)
- Les éléments sous le typed text ne bougent jamais
- Le `min-height` s'adapte aux breakpoints

---

### Story 2.3 : Intégration Lenis smooth scroll

As a **visiteur**,
I want **un scroll fluide et naturel**,
So that **l'expérience de navigation est premium (type caoenergy.com)**.

**Acceptance Criteria :**

**Given** le scroll natif est saccadé
**When** Lenis est intégré
**Then** :
- Lenis est initialisé dans `App.jsx` avec `lerp: 0.1`
- Le scroll est à 60fps constant sur mobile et desktop
- Les ancres navbar scrollent smooth vers la section cible via `lenis.scrollTo()`
- Le scroll clavier reste fonctionnel (accessibilité)
- Pas de "jump" ou saccade
- Un hook `useLenis.js` expose la méthode `scrollTo` pour les composants

---

### Story 2.4 : Scroll indicator

As a **visiteur arrivant sur le site**,
I want **un indicateur visuel m'invitant à scroller**,
So that **je sais qu'il y a du contenu en dessous du Hero**.

**Acceptance Criteria :**

**Given** le visiteur voit le Hero au chargement
**When** la page est chargée
**Then** :
- Un chevron animé (bounce) est visible en bas du Hero
- Le chevron disparaît dès le premier scroll (listener Lenis, seuil `scrollY > 50px`)
- L'animation est fluide (CSS, pas de JS animation frame)
- Le composant est `src/components/ScrollIndicator/`

---

### Story 2.5 : Animations d'entrée Framer Motion

As a **visiteur**,
I want **que les sections apparaissent avec une animation fluide au scroll**,
So that **le site a de la profondeur et du mouvement**.

**Acceptance Criteria :**

**Given** les sections sont statiques au chargement
**When** une section entre dans le viewport
**Then** :
- L'animation est fade-in + translateY (40px → 0)
- Duration : 0.6s, ease-out
- `once: true` — l'animation ne se re-trigger pas
- Un composant `AnimatedSection` wrapper est réutilisable
- `prefers-reduced-motion` est respecté (pas d'animation si activé)
- 60fps pendant l'animation (pas de drop frames)
- Pas de flash/flicker au chargement initial

**Technical notes :**
- `framer-motion` avec `whileInView` + `viewport={{ once: true, margin: '-100px' }}`

---

## Epic 3 : Section Projects

**Goal :** Réactiver la section Projects commentée dans App.js avec du contenu réel et des cartes responsives.

---

### Story 3.1 : Réactivation et refonte section Projects

As a **visiteur (recruteur/CTO)**,
I want **voir les projets réalisés par Mounir**,
So that **je peux évaluer ses compétences concrètes**.

**Acceptance Criteria :**

**Given** la section Projects est commentée dans App.js
**When** elle est réactivée et restructurée
**Then** :
- La section est visible et accessible via le lien navbar "Projects"
- Minimum 3 cartes projets affichées
- Chaque carte a : image, titre, description courte, technologies utilisées, lien (si applicable)
- Grille responsive : 1 colonne mobile, 2 colonnes tablette, 3 colonnes desktop
- Images lazy-loaded (`loading="lazy"`)
- Le composant suit l'architecture (dossier `Projects/` + CSS Module)
- Les cartes ont une animation hover (scale subtil ou reveal)

**Technical notes :**
- Les données projets sont en dur dans le composant (pas de CMS)
- Les images sont dans `src/assets/img/`
- Le choix des 3+ projets à afficher est à valider avec Mounir (différé)

---

## Résumé de couverture

| FR | Story |
|----|-------|
| FR-1 (Migration Vite) | Story 1.1 |
| FR-2 (Nettoyage deps) | Story 1.2 |
| FR-3 (Structure dossiers) | Story 1.3 |
| FR-4 (CSS Modules) | Story 1.3 |
| FR-5 (Loader responsive) | Story 2.1 |
| FR-6 (TypeAnimation fix) | Story 2.2 |
| FR-7 (Lenis scroll) | Story 2.3 |
| FR-8 (Scroll indicator) | Story 2.4 |
| FR-9 (Animations FM) | Story 2.5 |
| FR-10 (Section Projects) | Story 3.1 |
