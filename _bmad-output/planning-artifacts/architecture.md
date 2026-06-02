---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
inputDocuments:
  - _bmad-output/planning-artifacts/briefs/brief-my-portfolio-master-2026-06-02/brief.md
  - _bmad-output/planning-artifacts/prds/prd-my-portfolio-master-2026-06-02/prd.md
workflowType: architecture
project_name: my-portfolio-master
user_name: Mounir
date: 2026-06-02
---

# Architecture — Portfolio Mounir B

## 1. Vue d'ensemble

Application front-end React (one-page portfolio) déployée sur Vercel. Pas de backend, pas de base de données, pas d'authentification. Le formulaire de contact utilise EmailJS (service tiers côté client).

```
┌──────────────────────────────────────────────┐
│                   Vercel CDN                  │
├──────────────────────────────────────────────┤
│         Static Build (Vite → dist/)          │
├──────────────────────────────────────────────┤
│              React 18 SPA                     │
│  ┌─────────┐ ┌─────────┐ ┌──────────────┐  │
│  │  Lenis  │ │ Framer  │ │  EmailJS     │  │
│  │ (scroll)│ │ Motion  │ │  (contact)   │  │
│  └─────────┘ └─────────┘ └──────────────┘  │
└──────────────────────────────────────────────┘
```

## 2. Stack technique

| Couche | Technologie | Version | Raison |
|--------|-------------|---------|--------|
| Bundler | Vite | 6.x | Rapide, maintenu, ESM natif |
| Framework | React | 18.x | En place, pas de raison de migrer |
| Styling | CSS Modules | natif Vite | Scoping sans runtime, migration douce |
| Smooth scroll | Lenis | 1.x | Léger, React-friendly, standard premium |
| Animations | Framer Motion | 11.x | API déclarative, `whileInView`, `prefers-reduced-motion` |
| Formulaire | react-hook-form + @emailjs/browser | existant | Déjà en place, fonctionne |
| TypeAnimation | react-type-animation | 3.x | En place, juste besoin d'un fix CSS |
| Déploiement | Vercel | auto-detect | Zero config pour Vite |

## 3. Dépendances — Nettoyage

### À supprimer

```
bootstrap, react-bootstrap, react-bootstrap-icons
react-multi-carousel, animate.css, swiper
react-on-screen, react-device-detect
react-mailchimp-subscribe, react-router, react-router-dom
cors, express, nodemailer, dotenv
react-helmet
```

### À conserver

```
react, react-dom
react-hook-form, @emailjs/browser
react-type-animation
react-intersection-observer (utile pour Framer Motion triggers)
```

### À ajouter

```
lenis (smooth scroll)
framer-motion (animations)
```

## 4. Structure du projet

```
my-portfolio-master/
├── index.html                    # Entry point Vite (à la racine)
├── vite.config.js                # Config Vite
├── package.json
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── manifest.json
├── src/
│   ├── main.jsx                  # Point d'entrée React
│   ├── App.jsx                   # Composant racine + Lenis provider
│   ├── styles/
│   │   ├── variables.css         # Palette, fonts, breakpoints (seul CSS global)
│   │   └── reset.css             # Reset minimal (seul CSS global)
│   ├── components/
│   │   ├── Loader/
│   │   │   ├── index.jsx
│   │   │   └── Loader.module.css
│   │   ├── Nav/
│   │   │   ├── index.jsx
│   │   │   └── Nav.module.css
│   │   ├── Hero/
│   │   │   ├── index.jsx
│   │   │   └── Hero.module.css
│   │   ├── Skills/
│   │   │   ├── index.jsx
│   │   │   └── Skills.module.css
│   │   ├── Experience/
│   │   │   ├── index.jsx
│   │   │   └── Experience.module.css
│   │   ├── Projects/
│   │   │   ├── index.jsx
│   │   │   ├── Projects.module.css
│   │   │   └── ProjectCard.jsx
│   │   ├── Contact/
│   │   │   ├── index.jsx
│   │   │   └── Contact.module.css
│   │   ├── ScrollIndicator/
│   │   │   ├── index.jsx
│   │   │   └── ScrollIndicator.module.css
│   │   ├── AnimatedSection/
│   │   │   └── index.jsx         # Wrapper Framer Motion (réutilisable)
│   │   ├── AmbientBackground/
│   │   │   ├── index.jsx
│   │   │   └── AmbientBackground.module.css
│   │   └── CustomCursor/
│   │       ├── index.jsx
│   │       └── CustomCursor.module.css
│   ├── hooks/
│   │   └── useLenis.js           # Hook Lenis scroll-to
│   └── assets/
│       ├── img/                  # Images projets, photos
│       └── fonts/                # Polices custom si nécessaire
└── dist/                         # Build output (gitignored)
```

### Règles de structure

- **1 composant = 1 dossier** : `index.jsx` + `ComponentName.module.css`
- **Aucun fichier > 150 lignes** (composant) ou 200 lignes (CSS)
- **Sous-composants** : dans le même dossier si < 50 lignes, sinon dossier séparé
- **Pas de barrel exports** (`index.js` re-export) au niveau `components/` — imports explicites

## 5. Décisions architecturales

### ADR-1 : Smooth scroll avec Lenis

**Contexte :** Le scroll natif est saccadé, l'UX cible (caoenergy) utilise un scroll interpolé.

**Décision :** Lenis initialisé dans `App.jsx`, wraps tout le contenu. Les ancres navbar utilisent `lenis.scrollTo()`.

**Pattern :**
```jsx
// App.jsx
import Lenis from 'lenis'

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
  // ...
}
```

**Contraintes :**
- Ne pas hijacker le scroll keyboard (accessibilité)
- `lerp: 0.1` — valeur par défaut, ajustable au feeling

### ADR-2 : Animations d'entrée avec Framer Motion

**Contexte :** Les animations actuelles sont du bricolage IntersectionObserver + keyframes CSS manuels.

**Décision :** Un composant `AnimatedSection` réutilisable qui wrap chaque section.

**Pattern :**
```jsx
// components/AnimatedSection/index.jsx
import { motion } from 'framer-motion'

export default function AnimatedSection({ children, className }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
```

**Contraintes :**
- `once: true` — animation ne se re-trigger pas
- Respecte `prefers-reduced-motion` (Framer Motion le fait nativement)

### ADR-3 : CSS Modules + Variables globales

**Contexte :** Un CSS monolithique de 1800+ lignes rend la maintenance impossible.

**Décision :** Chaque composant a son `.module.css`. Les variables de thème (couleurs, fonts, spacing) sont dans `variables.css` importé une seule fois dans `main.jsx`.

**Conventions :**
- Classes en camelCase dans les modules : `styles.heroTitle`
- Variables CSS custom : `--color-accent`, `--color-bg-primary`, etc.
- Media queries dans chaque module (pas de fichier responsive séparé)
- Mobile-first : styles de base = mobile, `@media (min-width: 768px)` pour desktop

### ADR-4 : Migration Vite

**Contexte :** CRA n'est plus maintenu, le build est lent (30s+).

**Décision :** 
- `index.html` à la racine (convention Vite)
- `src/main.jsx` comme entry point (au lieu de `src/index.js`)
- Variables d'env : `VITE_` prefix (au lieu de `REACT_APP_`)
- Vercel auto-detect (pas de `vercel.json`)

### ADR-5 : Scroll indicator

**Contexte :** Pas d'affordance visuelle pour inviter au scroll.

**Décision :** Composant `ScrollIndicator` positionné en bas du Hero. Disparaît au premier scroll via un listener Lenis.

**Pattern :** Chevron animé (bounce CSS) + fade-out quand `scrollY > 50px`.

### ADR-6 : Fix TypeAnimation layout shift

**Contexte :** La hauteur du TypeAnimation varie selon le texte, décalant le contenu.

**Décision :** Le conteneur a un `min-height` fixe calculé pour la ligne la plus longue. Mobile : `min-height: 3.5rem`. Desktop : `min-height: 2.5rem`.

## 6. Responsive strategy

| Breakpoint | Cible | Approche |
|------------|-------|----------|
| < 480px | Mobile (S24 Ultra = 412px) | Base styles, 1 colonne |
| 480px–768px | Grand mobile / petite tablette | Ajustements spacing |
| 768px–1024px | Tablette | 2 colonnes grid |
| > 1024px | Desktop | Layout complet |

**Approche : mobile-first.** Les styles de base ciblent mobile, les media queries ajoutent pour les écrans plus larges.

## 7. Performance

| Objectif | Stratégie |
|----------|-----------|
| Lighthouse > 90 | Bundle < 50kB gzip, lazy images, font-display:swap |
| 60fps scroll | Lenis RAF loop, pas de reflow pendant scroll |
| CLS = 0 | Dimensions réservées (TypeAnimation, images) |
| LCP rapide | Hero au-dessus du fold sans dépendance async |

## 8. Déploiement

- **Build :** `vite build` → `dist/`
- **Vercel :** auto-detect framework Vite, pas de config
- **Branch :** `main` → production
- **Preview :** chaque push sur une branche crée un preview deployment
