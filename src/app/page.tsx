import Link from "next/link";
import Logo from "@/components/Logo";

const highlights = [
  "Precision fades",
  "Straight razor finish",
  "Walk-in friendly",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12 lg:py-16">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-[var(--muted)] bg-white/70 px-4 py-2 text-sm font-medium text-[var(--brand-primary)] shadow-sm backdrop-blur-sm">
            Since 2012 • Premium Barber Studio
          </div>

          <div className="space-y-5">
            <Logo className="w-44 text-[var(--brand-primary)]" />
            <h1 className="max-w-xl text-4xl font-black tracking-[-0.06em] text-[var(--brand-primary)] sm:text-5xl lg:text-6xl">
              Sharp cuts. Modern style. Always on time.
            </h1>
            <p className="max-w-lg text-lg leading-8 text-[var(--foreground)]/80">
              Tailored grooming for professionals, creatives, and everyday
              legends. Step into a refined space where expert barbers and
              premium service meet your routine.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-7 py-3 text-base font-semibold text-white shadow-lg shadow-[var(--brand-accent)]/20 transition-transform hover:-translate-y-0.5 hover:bg-[var(--brand-accent)]/90"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-[var(--brand-secondary)]/40 bg-white px-7 py-3 text-base font-semibold text-[var(--brand-primary)] transition-colors hover:bg-[var(--muted)]/60"
            >
              View Services
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--muted)] bg-[var(--muted)]/50 px-3 py-1.5 text-sm font-medium text-[var(--brand-primary)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-[var(--brand-secondary)]/20 blur-2xl" />
          <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-[var(--brand-accent)]/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--muted)] bg-white shadow-[0_30px_80px_rgba(28,35,49,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80"
              alt="Barber trimming a client's hair"
              className="h-[560px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/80 via-[var(--brand-primary)]/15 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                Premium grooming in the city
              </p>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-2xl font-bold">Open 6 days a week</p>
                  <p className="text-sm text-white/80">
                    Walk-ins welcome • 9:00 AM – 7:00 PM
                  </p>
                </div>
                <div className="rounded-full border border-white/30 bg-white/10 px-3 py-2 text-sm font-medium backdrop-blur-sm">
                  4.9/5 rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
