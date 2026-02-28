'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-xl border border-neutral-200 p-6">
        <h2 className="text-xl font-medium">Bedankt voor je bericht</h2>
        <p className="mt-2 text-neutral-700">
          Ik reageer doorgaans binnen 48 uur. TODO: vervang met je echte reactietijd.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-xl border border-neutral-200 p-6">
      <label className="grid gap-1 text-sm">
        Datum
        <input required type="date" className="rounded-md border border-neutral-300 px-3 py-2" />
      </label>
      <label className="grid gap-1 text-sm">
        Locatie
        <input required type="text" className="rounded-md border border-neutral-300 px-3 py-2" />
      </label>
      <label className="grid gap-1 text-sm">
        Dagdeel
        <select required className="rounded-md border border-neutral-300 px-3 py-2">
          <option value="">Kies dagdeel</option>
          <option>Ochtend</option>
          <option>Middag</option>
          <option>Avond</option>
          <option>Hele dag</option>
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        Naam
        <input required type="text" className="rounded-md border border-neutral-300 px-3 py-2" />
      </label>
      <label className="grid gap-1 text-sm">
        Email of telefoon
        <input required type="text" className="rounded-md border border-neutral-300 px-3 py-2" />
      </label>
      <label className="grid gap-1 text-sm">
        Bericht
        <textarea required rows={4} className="rounded-md border border-neutral-300 px-3 py-2" />
      </label>
      <button type="submit" className="mt-2 w-fit rounded-full bg-ink px-6 py-3 text-sm text-white">
        Verstuur aanvraag
      </button>
    </form>
  );
}
