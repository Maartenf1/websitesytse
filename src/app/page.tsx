import Image from 'next/image';
import Link from 'next/link';

import { FilmstripHero } from '@/components/filmstrip-hero';
import { highlightImages, reviews } from '@/data/content';

export default function HomePage() {
  return (
    <>
      <FilmstripHero images={highlightImages.slice(0, 10)} />

      <section className="container-page pb-10">
        <p className="max-w-3xl text-lg leading-relaxed text-neutral-700">
          Rustige trouwfotografie met oog voor echte momenten, zonder regie die jullie dag onderbreekt.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {['Heldere communicatie', 'Onopvallende aanwezigheid', 'Preview binnen enkele dagen'].map(
            (usp) => (
              <div key={usp} className="rounded-xl border border-neutral-200 p-5">
                <h2 className="font-medium">{usp}</h2>
              </div>
            )
          )}
        </div>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          Check datum
        </Link>
      </section>

      <section className="container-page section-space">
        <h2 className="mb-6 text-2xl font-semibold">Highlights</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlightImages.slice(0, 12).map((image) => (
            <div key={`grid-${image.src}`} className="overflow-hidden rounded-xl bg-sand">
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={700}
                loading="lazy"
                placeholder="blur"
                blurDataURL={image.blurDataURL}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="container-page section-space">
        <h2 className="mb-6 text-2xl font-semibold">Reviews</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review.author} className="rounded-xl border border-neutral-200 p-6">
              <p className="text-neutral-700">“{review.text}”</p>
              <footer className="mt-4 text-sm font-medium">{review.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
