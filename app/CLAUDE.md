# V2-Autocertif — Conventions Techniques

## Stack

| Outil | Version / Mode | Chargement |
|-------|---------------|------------|
| Nuxt | 3 (SSR) | npm |
| Vue | 3 Composition API | via Nuxt |
| Tailwind CSS | Play CDN | `<script src="https://cdn.tailwindcss.com">` dans `app.vue` |
| GSAP + ScrollTrigger | latest | CDN `<script>` dans `app.vue` |
| @nuxtjs/i18n | latest | module Nuxt |
| Heroicons | latest | CDN / SVG inline |
| Inter font | variable | Google Fonts CDN |
| Déploiement | Vercel SSR | auto |

> **Pas de `npm install tailwindcss`** — Tailwind est chargé exclusivement via le CDN Play.
> **Pas de backend, pas de BDD, pas de logique serveur** — frontend only.

---

## Charte graphique

### Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `forest` | `#002827` | Fond principal, hero, CTA |
| `forest-deep` | `#001a19` | Fond sections alternées |
| `lime` | `#a3e635` | Accents, badges, hover actif |
| `coral` | `#f87171` | Alertes, CTA secondaires |
| `white` | `#ffffff` | Texte principal sur fond sombre |
| `white-60` | `rgba(255,255,255,0.6)` | Texte secondaire, descriptions |
| `grey-light` | `#f7f8f6` | Fond clair occasionnel |

### Typographie

- **Font unique :** Inter (Google Fonts CDN)
- **H1 :** 3.5rem / 700 / tracking-tight
- **H2 :** 2.5rem / 700
- **H3 :** 1.5rem / 600
- **Body :** 1.125rem / 400 / leading-relaxed
- **Small :** 0.875rem / 400

### Thème

- **Un seul thème sombre** — pas de dark mode toggle
- Fond sombre dominant, sections alternées `forest` / `forest-deep`
- Texte blanc sur fond sombre

---

## Structure des composants (Atomic Design)

```
components/
  atoms/
    BaseButton.vue        — bouton réutilisable (variant: primary | outline | ghost)
    BaseIcon.vue          — wrapper Heroicons SVG
    BaseBadge.vue         — badge/tag (plan tiers, catégories)
    BaseInput.vue         — champ de formulaire
    BaseLink.vue          — lien interne/externe avec i18n

  molecules/
    NavLink.vue           — lien de navigation avec état actif
    PricingCard.vue       — carte plan tarifaire
    FeatureItem.vue       — item feature (icône + titre + description)
    TestimonialCard.vue   — carte témoignage (quote + attribution)
    BlogCard.vue          — carte article blog
    StatCard.vue          — métrique chiffrée (ex: +25% conversion)

  organisms/
    TheHeader.vue         — header sticky avec nav + CTAs + lang switcher
    TheFooter.vue         — footer multi-colonnes
    HeroSection.vue       — hero pleine largeur
    PricingGrid.vue       — grille comparative des plans
    FAQAccordion.vue      — section FAQ avec expand/collapse animé
    FeatureGrid.vue       — grille de features (icônes + descriptions)
    CTASection.vue        — bannière d'appel à l'action
    LogoStrip.vue         — bande de logos clients/partenaires

  templates/
    DefaultLayout.vue     — layout standard (header + slot + footer)
    LegalLayout.vue       — layout pages légales (header + contenu prose + footer)
```

---

## Conventions de code

### Vue / Nuxt

```vue
<script setup lang="ts">
// Composition API uniquement
// Props typées
defineProps<{
  title: string
  variant?: 'primary' | 'outline'
}>()
</script>
```

- **Nommage :** PascalCase pour les composants, camelCase pour variables et fonctions
- **Pas de Options API** — `<script setup>` exclusivement
- **Auto-imports Nuxt** — pas de `import { ref } from 'vue'` explicites

### Tailwind

- Classes directement dans le template — **pas de `@apply`**
- Config custom via le CDN Play inline dans `app.vue` :

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        forest: '#002827',
        'forest-deep': '#001a19',
        lime: '#a3e635',
        coral: '#f87171',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
}
</script>
```

### Icônes

- **Heroicons** — SVG inline via composant `BaseIcon.vue`
- Nommage des icônes : kebab-case (`arrow-right`, `check-circle`)

---

## Animations (GSAP + ScrollTrigger)

| Zone | Animation | Trigger |
|------|-----------|---------|
| Hero | fade-in + slide-up (opacity 0→1, y 40→0) | Page load |
| Sections | reveal au scroll (stagger 0.15s) | ScrollTrigger `start: "top 80%"` |
| Accordions | expand/collapse (height auto, opacity) | Click |
| Carousels | slide horizontal (GSAP timeline) | Autoplay + contrôles |
| Hover | `transition-all duration-300 ease-in-out` | Tailwind classes |
| Liens/boutons | scale(1.02) + shadow au hover | Tailwind classes |

### Chargement GSAP

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
```

### Pattern d'utilisation dans un composant

```vue
<script setup lang="ts">
const sectionRef = ref<HTMLElement>()

onMounted(() => {
  if (!sectionRef.value) return
  gsap.from(sectionRef.value.children, {
    opacity: 0,
    y: 40,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
    },
  })
})
</script>
```

---

## Internationalisation (i18n)

### Configuration

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'fr', file: 'fr.json', name: 'Français' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales/',
    lazy: true,
  },
})
```

### Routing

| Langue | Préfixe | Exemple |
|--------|---------|---------|
| EN (défaut) | `/` | `/pricing`, `/about` |
| FR | `/fr` | `/fr/pricing`, `/fr/about` |

### Usage

```vue
<template>
  <h1>{{ $t('home.hero.title') }}</h1>
  <NuxtLinkLocale to="/pricing">{{ $t('nav.pricing') }}</NuxtLinkLocale>
</template>
```

---

## Images

- Stockées dans `public/images/` organisées par page :
  ```
  public/images/
    home/
    pricing/
    features/
    about/
    blog/
    shared/      → logos, icônes partagées
  ```
- **Format privilégié :** WebP (fallback PNG/JPG)
- **Référencement :** `/images/home/hero.webp` (chemin absolu depuis public/)

---

## Dossiers RAG (lecture seule — ne pas modifier)

| Dossier | Rôle |
|---------|------|
| `text_content_rag/` | Contenu textuel du site actuel — à reproduire fidèlement |
| `website_sample_rag/` | Design de référence ContentSquare — inspiration layouts, sections, patterns |

---

## Règles strictes

1. **Même structure d'URLs** que le site existant (`autocertif-sample.vercel.app`)
2. **Même contenu textuel** — copié depuis `text_content_rag/`
3. **Mêmes images** — copiées en local dans `public/images/`
4. **Design entièrement différent** — inspiré ContentSquare (layouts, charte, sections)
5. **Frontend only** — zéro backend, zéro BDD, zéro logique serveur
6. **Tailwind CDN uniquement** — pas de module npm Tailwind
7. **Pas de fichiers README, CHANGELOG ou docs** sauf si explicitement demandé
