'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const barbers = [
  {
    name: "Marcus",
    title: "Master Barber",
    years: "12 years",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    bio: "Marcus blends classic barbering technique with modern texture styling, helping clients achieve polished cuts that feel personal and confident.",
  },
  {
    name: "David",
    title: "Fade Specialist",
    years: "9 years",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    bio: "David is known for clean fades, beard design, and a calming chair-side experience that makes every appointment feel effortless.",
  },
];

const values = [
  "Tailored grooming plans for every face shape and style goal",
  "Premium products and sharp finishing details",
  "A welcoming, no-rush atmosphere built around confidence and care",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand-secondary)]">
            About the studio
          </p>
          <h1 className="max-w-3xl text-4xl font-black tracking-[-0.05em] text-[var(--brand-primary)] sm:text-5xl">
            Grooming built around confidence, craft, and community.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[var(--foreground)]/75">
            New Cuts Barbershop began with a simple idea: every client deserves a barber who listens, a room that feels elevated, and a finish that proves the details matter. We combine sharp technique with a relaxed, modern experience for men who want to look their best without the rush.
          </p>
        </motion.div>

        <div className="grid gap-8 rounded-[2rem] border border-[var(--muted)] bg-white p-6 shadow-[0_20px_60px_rgba(28,35,49,0.08)] md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[var(--brand-primary)]">Why clients keep coming back</h2>
            <p className="text-base leading-7 text-[var(--foreground)]/75">
              From classic cuts to modern scissor work and beard refinement, our focus is always on shape, balance, and long-term style. We believe great grooming should feel as good as it looks.
            </p>
            <ul className="space-y-3">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3 text-[var(--brand-primary)]">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--brand-accent)] text-xs font-bold text-white">
                    ✓
                  </span>
                  <span className="text-base leading-7">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-[var(--muted)] bg-[var(--muted)]/30">
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80"
              alt="Barbershop interior with modern grooming chairs"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-14 space-y-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-secondary)]">
                Meet the team
              </p>
              <h2 className="mt-2 text-3xl font-black text-[var(--brand-primary)]">
                Skilled hands. Thoughtful service.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {barbers.map((barber, index) => (
              <motion.article
                key={barber.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="overflow-hidden rounded-[1.5rem] border border-[var(--muted)] bg-white shadow-[0_18px_40px_rgba(28,35,49,0.06)]"
              >
                <img
                  src={barber.image}
                  alt={`${barber.name} at New Cuts Barbershop`}
                  className="h-72 w-full object-cover"
                />
                <div className="space-y-4 p-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-secondary)]">
                      {barber.title}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-[var(--brand-primary)]">
                      {barber.name}
                    </h3>
                    <p className="text-sm font-medium text-[var(--brand-primary)]/70">
                      {barber.years} of experience
                    </p>
                  </div>
                  <p className="text-base leading-7 text-[var(--foreground)]/75">
                    {barber.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 rounded-[2rem] bg-[var(--brand-primary)] p-8 text-white shadow-[0_30px_80px_rgba(28,35,49,0.18)] md:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Ready for a fresh cut?
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">
                Book your next appointment with New Cuts.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-6 py-3 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Book an appointment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
