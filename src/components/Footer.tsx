import Link from 'next/link';
import { Clock3, MapPin, Phone, Send } from 'lucide-react';
import Logo from '@/components/Logo';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/book', label: 'Book Now' },
  { href: '/terms', label: 'Terms' },
];

const socials = [
  { href: 'https://instagram.com', label: 'Instagram', mark: 'IG' },
  { href: 'https://facebook.com', label: 'Facebook', mark: 'FB' },
  { href: 'https://x.com', label: 'X / Twitter', mark: 'X' },
];

const hours = [
  ['Monday - Friday', '9:00 AM - 7:00 PM'],
  ['Saturday', '9:00 AM - 5:00 PM'],
  ['Sunday', 'By appointment'],
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--muted)] bg-[var(--brand-primary)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr]">
          <div className="lg:pr-8">
            <Link href="/" className="inline-flex" aria-label="New Cuts Barbershop home">
              <Logo className="w-32 text-white" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Premium grooming for sharp cuts, polished finishes, and a confident routine that lasts beyond the chair.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ href, label, mark }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-bold text-white transition-colors hover:bg-white/10"
                >
                  {mark}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {navigation.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Visit</h3>
            <div className="mt-5 space-y-4 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--brand-accent)]" />
                <p>145 Mercer Street, Suite 4<br />New York, NY 10012</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-[var(--brand-accent)]" />
                <a href="tel:+12125550184" className="transition-colors hover:text-white">
                  (212) 555-0184
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Send size={16} className="shrink-0 text-[var(--brand-accent)]" />
                <a href="mailto:hello@newcutsbarbershop.com" className="transition-colors hover:text-white">
                  hello@newcutsbarbershop.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Hours</h3>
            <div className="mt-5 space-y-3 text-sm text-white/75">
              {hours.map(([day, time]) => (
                <div key={day} className="flex items-center justify-between gap-4">
                  <span>{day}</span>
                  <span className="text-right text-white/80">{time}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
              <Clock3 size={16} className="text-[var(--brand-accent)]" />
              <Link href="/book" className="font-medium text-white transition-colors hover:text-[var(--brand-accent)]">
                Book your appointment
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} New Cuts Barbershop. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
              <Link href="/terms" className="transition-colors hover:text-white">Policies</Link>
              <Link href="/book" className="transition-colors hover:text-white">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
