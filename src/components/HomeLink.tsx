'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HomeLink() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <div className="pointer-events-none fixed left-4 top-4 z-50">
      <Link
        href="/"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[var(--muted)] bg-white/85 px-3 py-2 text-sm font-medium text-[var(--brand-primary)] shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-secondary)] hover:text-[var(--brand-primary)]"
        aria-label="Return to the home page"
      >
        <span aria-hidden="true">←</span>
        <span>Home</span>
      </Link>
    </div>
  );
}
