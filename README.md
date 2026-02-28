# Sytse trouwfotografie portfolio (Next.js)

Custom, mobile-first trouwfotografie website met een lichte interactieve hero (filmstrip) op de homepage.

## Install & run lokaal

1. Installeer dependencies:
   ```bash
   npm install
   ```
2. Start de dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000).

Voor productie:
```bash
npm run build
npm run start
```

## Content vervangen

### Teksten, USP’s, reviews, FAQ en reportages
- Bewerk: `src/data/content.ts`
- TODO-markers zijn opgenomen waar echte content nodig is.

### Site metadata / domein / social preview
- Bewerk: `src/lib/site.ts`
- Zet hier je echte domein en OG-afbeelding.

### Foto’s vervangen
1. Plaats eigen beelden in `public/images`.
2. Update paden + alt-teksten in `src/data/content.ts`.
3. Alle beelden worden via `next/image` gerenderd met responsive `sizes`, lazy-loading (behalve hero focus image), blur placeholders en AVIF/WebP output waar mogelijk via `next.config.mjs`.

## Hero interactie (filmstrip)

Bestand: `src/components/filmstrip-hero.tsx`

Functies:
- Grote focusfoto + horizontale filmstrip thumbnails.
- Muis: click+drag om filmstrip te verplaatsen.
- Trackpad/muiswiel: verticale wheel vertaalt naar horizontale scroll.
- Hover/focus desktop: wisselt focusfoto subtiel.
- Touch/click: thumbnail activeert focusfoto.
- Lichte inertia na drag (uitgeschakeld bij reduced-motion).
- Keyboard toegankelijk via focusbare knoppen met focus states.

### Reduced motion testen
- Zet OS-instelling **Reduce motion** aan.
- Herlaad homepage.
- Inertia en overgangen worden beperkt/uitgezet (zie `prefers-reduced-motion` handling in hero component).

## Routes
- `/` Home
- `/portfolio`
- `/portfolio/[slug]`
- `/over-mij`
- `/werkwijze-faq`
- `/contact`

## Opmerking
Dit project gebruikt placeholder beelden en dummy content als startpunt.
