import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/over-mij', label: 'Over mij' },
  { href: '/werkwijze-faq', label: 'Werkwijze/FAQ' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-medium tracking-[0.2em] uppercase">
          Sytse
        </Link>
        <nav aria-label="Hoofdnavigatie" className="flex items-center gap-5 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline underline-offset-4">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10 text-sm text-neutral-600">
      <div className="container-page flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Sytse Trouwfotografie</p>
        <p>Rustig, oprecht en tijdloos beeldverhaal.</p>
      </div>
    </footer>
  );
}
