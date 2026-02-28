import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { reportages } from '@/data/content';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return reportages.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const current = reportages.find((item) => item.slug === params.slug);

  if (!current) {
    return { title: 'Reportage niet gevonden' };
  }

  return {
    title: current.title,
    description: current.summary
  };
}

export default function ReportageDetailPage({ params }: Props) {
  const reportage = reportages.find((item) => item.slug === params.slug);

  if (!reportage) {
    notFound();
  }

  return (
    <article className="container-page section-space space-y-10">
      <header className="max-w-3xl space-y-4">
        <h1 className="text-3xl font-semibold">{reportage.title}</h1>
        <p className="text-neutral-700">{reportage.intro}</p>
      </header>

      {reportage.sections.map((section) => (
        <section key={section.key} className="space-y-4">
          <h2 className="text-2xl font-medium">{section.title}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.images.map((image) => (
              <Image
                key={`${section.key}-${image.src}-${image.alt}`}
                src={image.src}
                alt={image.alt}
                width={900}
                height={600}
                loading="lazy"
                placeholder="blur"
                blurDataURL={image.blurDataURL}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            ))}
          </div>
        </section>
      ))}

      <blockquote className="rounded-xl border border-neutral-200 p-6 text-neutral-700">
        {reportage.reviewQuote}
      </blockquote>

      <Link href="/contact" className="inline-flex rounded-full bg-ink px-6 py-3 text-sm text-white">
        Check datum
      </Link>
    </article>
  );
}
