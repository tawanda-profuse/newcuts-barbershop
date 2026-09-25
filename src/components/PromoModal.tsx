'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

export default function PromoModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pathname === '/book') {
      setIsOpen(false);
      return;
    }

    // Delay popup by 3 seconds for better UX
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (pathname === '/book') return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 sm:flex-row"
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-1.5 text-gray-600 shadow-md transition hover:bg-white hover:text-black"
            >
              <X size={20} />
            </button>

            <div className="relative h-48 w-full sm:h-auto sm:w-2/5">
              <Image
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop"
                alt="Barber giving a client a fresh haircut"
                fill
                sizes="(min-width: 640px) 40vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent sm:bg-gradient-to-r" />
            </div>

            <div className="flex w-full flex-col justify-center p-8 sm:w-3/5">
              <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
                <Sparkles size={14} /> First visit?
              </span>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Welcome to the chair!</h3>
              <p className="mt-3 text-gray-600">
                We&apos;d love to treat you right on your first visit — book any standard haircut today and
                we&apos;ll finish it off with a complimentary beard oil treatment, on us.
              </p>
              <a
                href="/book"
                onClick={() => setIsOpen(false)}
                className="mt-6 block w-full rounded-xl bg-slate-900 p-3.5 text-center font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
              >
                Claim My Offer & Book
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-3 text-sm font-medium text-gray-400 transition hover:text-gray-600"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}