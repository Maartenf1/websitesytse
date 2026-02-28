import type { Metadata } from 'next';

import { faqs } from '@/data/content';

export const metadata: Metadata = {
  title: 'Werkwijze & FAQ',
  description: 'Praktische informatie over apparatuur, planning, levering en voorwaarden.'
};

export default function WerkwijzeFaqPage() {
  return (
    <section className="container-page section-space space-y-8">
      <h1 className="text-3xl font-semibold">Werkwijze & FAQ</h1>
      <p className="max-w-3xl text-neutral-700">
        Transparante samenwerking van kennismaking tot oplevering, zodat jullie weten waar je aan toe bent.
      </p>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.q} className="rounded-xl border border-neutral-200 p-5">
            <summary className="cursor-pointer font-medium">{faq.q}</summary>
            <p className="mt-3 text-neutral-700">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
