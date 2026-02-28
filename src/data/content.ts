export type ImageItem = {
  src: string;
  alt: string;
  blurDataURL: string;
};

const blur =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjEwIiBmaWxsPSIjZTVlMWRjIi8+PC9zdmc+';

export const highlightImages: ImageItem[] = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/sample-${i + 1}.svg`,
  alt: `Highlightfoto ${i + 1} van een trouwdag`,
  blurDataURL: blur
}));

export type Reportage = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  cover: ImageItem;
  sections: {
    key: 'prep' | 'ceremonie' | 'borrel' | 'feest';
    title: string;
    images: ImageItem[];
  }[];
  reviewQuote: string;
};

const sectionNames = {
  prep: 'Voorbereiding',
  ceremonie: 'Ceremonie',
  borrel: 'Borrel',
  feest: 'Feest'
} as const;

export const reportages: Reportage[] = Array.from({ length: 6 }, (_, idx) => {
  const start = idx + 1;
  const imgs = Array.from({ length: 28 }, (_, i) => ({
    src: `/images/sample-${((start + i) % 15) + 1}.svg`,
    alt: `Reportage ${idx + 1} beeld ${i + 1}`,
    blurDataURL: blur
  }));

  return {
    slug: `reportage-${idx + 1}`,
    title: `Reportage ${idx + 1}`,
    summary: 'Een kalme serie met aandacht voor echte momenten en sfeer.',
    intro:
      'Korte verhaallijn van de dag. TODO: vervang met details over het bruidspaar, locatie en sfeer.',
    cover: imgs[0],
    sections: [
      { key: 'prep', title: sectionNames.prep, images: imgs.slice(0, 7) },
      { key: 'ceremonie', title: sectionNames.ceremonie, images: imgs.slice(7, 14) },
      { key: 'borrel', title: sectionNames.borrel, images: imgs.slice(14, 21) },
      { key: 'feest', title: sectionNames.feest, images: imgs.slice(21, 28) }
    ],
    reviewQuote:
      '“We voelden ons volledig op ons gemak. De foto’s laten de dag precies zien zoals hij voelde.”'
  };
});

export const reviews = [
  {
    author: 'Lotte & Milan',
    text: 'Sytse gaf rust, duidelijke communicatie en beelden die echt bij ons passen.'
  },
  {
    author: 'Noa & Bram',
    text: 'Van voorbereiding tot feest: elk belangrijk moment is op een natuurlijke manier gevangen.'
  },
  {
    author: 'Eva & Thomas',
    text: 'We kregen snel een preview en voelden opnieuw de sfeer van onze dag.'
  }
];

export const faqs = [
  {
    q: 'Werk je met backup camera’s?',
    a: 'Ja, ik werk standaard met twee camera’s en dubbele opslag tijdens de dag.'
  },
  {
    q: 'Wat is de levertijd?',
    a: 'Een preview binnen enkele dagen, volledige galerij als placeholder binnen 6-8 weken.'
  },
  {
    q: 'Hoe zit het met gebruiksrechten?',
    a: 'Jullie krijgen privé gebruiksrechten. Publicatie gebeurt alleen in overleg.'
  },
  {
    q: 'Wat als het regent?',
    a: 'Ik werk met een regenplan voor locaties en houd rekening met licht en overkapping.'
  },
  {
    q: 'Hoe werkt aanbetaling en annuleren?',
    a: 'Na akkoord vraag ik een aanbetaling. Annuleringsvoorwaarden staan transparant in de offerte.'
  }
];
