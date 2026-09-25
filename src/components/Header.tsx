'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from '@/components/Logo';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/terms', label: 'Terms' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--muted)] bg-[rgba(248,249,250,0.82)] backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center" aria-label="New Cuts Barbershop home">
            <Logo className="w-28 text-[var(--brand-primary)] sm:w-36" />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={
                  isActive(href)
                    ? 'text-sm font-semibold text-[var(--brand-primary)]'
                    : 'text-sm font-medium text-[var(--foreground)]/75 transition-colors hover:text-[var(--brand-primary)]'
                }
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/terms"
              className="rounded-full border border-[var(--muted)] bg-white px-4 py-2 text-sm font-medium text-[var(--brand-primary)] transition-colors hover:border-[var(--brand-secondary)]"
            >
              Policies
            </Link>
            <Link
              href="/book"
              className="rounded-full bg-[var(--brand-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--brand-accent)]/20 transition-transform hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--muted)] bg-white text-[var(--brand-primary)] transition-colors hover:border-[var(--brand-secondary)] md:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-[var(--muted)] bg-white py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={
                    isActive(href)
                      ? 'rounded-xl bg-[var(--muted)] px-3 py-2 text-base font-semibold text-[var(--brand-primary)]'
                      : 'rounded-xl px-3 py-2 text-base font-medium text-[var(--foreground)]/80 hover:bg-[var(--muted)]/60'
                  }
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-4 py-2.5 text-sm font-semibold text-white"
              >
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
