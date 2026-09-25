import Link from 'next/link';
import type { SVGProps } from 'react';
import { Clock3, MapPin, Phone, Send } from 'lucide-react';
import Logo from '@/components/Logo';

type SocialIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function InstagramIcon({ size = 16, ...props }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 16, ...props }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V7.4c0-.9.3-1.5 1.6-1.5H16V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H7v3h2.3v8h4.2Z" />
    </svg>
  );
}

function XIcon({ size = 16, ...props }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.1 8.1L23.2 22h-6.4l-5-6.7L6.3 22H3.2l7.6-8.7L.8 2h6.5l4.5 6.1L18.9 2Zm-1.1 18h1.8L7.2 3.9H5.3L17.8 20Z" />
    </svg>
  );
}

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/book', label: 'Book Now' },
  { href: '/terms', label: 'Terms' },
];

const socials = [
  { href: 'https://instagram.com', label: 'Instagram', icon: InstagramIcon },
  { href: 'https://facebook.com', label: 'Facebook', icon: FacebookIcon },
  { href: 'https://x.com', label: 'X / Twitter', icon: XIcon },
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
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
                >
                  <Icon size={16} />
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
