import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { reportages } from '@/data/content';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Zes trouwreportages met een rustige, editorial stijl.'
};

export default function PortfolioPage() {
  return (
    <section className="container-page section-space">
      <h1 className="mb-8 text-3xl font-semibold">Portfolio</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reportages.map((reportage) => (
          <article key={reportage.slug} className="overflow-hidden rounded-xl border border-neutral-200">
            <Image
              src={reportage.cover.src}
              alt={reportage.cover.alt}
              width={900}
              height={600}
              loading="lazy"
              placeholder="blur"
              blurDataURL={reportage.cover.blurDataURL}
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="space-y-3 p-5">
              <h2 className="text-xl font-medium">{reportage.title}</h2>
              <p className="text-neutral-700">{reportage.summary}</p>
              <Link href={`/portfolio/${reportage.slug}`} className="text-sm underline underline-offset-4">
                Bekijk reportage
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
