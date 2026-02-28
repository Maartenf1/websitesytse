import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Over mij',
  description: 'Maak kennis met Sytse en de werkwijze achter de trouwreportages.'
};

const steps = [
  'Kennismaking en planning',
  'Tijdlijn en fotowensen afstemmen',
  'Rustige begeleiding op de dag',
  'Selectie en nabewerking',
  'Levering galerij + albumadvies'
];

export default function OverMijPage() {
  return (
    <section className="container-page section-space space-y-8">
      <h1 className="text-3xl font-semibold">Over mij</h1>
      <div className="grid gap-8 md:grid-cols-[1fr,1.3fr] md:items-start">
        <Image
          src="/images/sample-12.svg"
          alt="Portret van trouwfotograaf Sytse"
          width={900}
          height={1200}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2Zy8+"
          sizes="(max-width: 768px) 100vw, 40vw"
          className="aspect-[3/4] w-full rounded-xl object-cover"
        />
        <div className="space-y-6">
          <p className="text-neutral-700">
            Ik leg trouwdagen vast met een documentaire aanpak: aanwezig, maar nooit opdringerig.
            TODO: vervang deze bio door je eigen verhaal en stijl.
          </p>
          <ol className="space-y-3">
            {steps.map((step, index) => (
              <li key={step} className="rounded-lg border border-neutral-200 p-4">
                <span className="mr-2 text-sm text-neutral-500">0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
