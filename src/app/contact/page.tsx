import type { Metadata } from 'next';

import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Vraag vrijblijvend de beschikbaarheid op voor jullie trouwdatum.'
};

export default function ContactPage() {
  return (
    <section className="container-page section-space max-w-3xl space-y-8">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <ContactForm />
    </section>
  );
}
