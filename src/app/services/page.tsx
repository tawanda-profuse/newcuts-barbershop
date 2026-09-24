import Link from "next/link";

const services = [
  {
    name: "Classic Haircut",
    price: "$30",
    duration: "30–40 min",
    description: "A sharp, balanced cut with styling and finishing tailored to your look.",
  },
  {
    name: "Skin Fade",
    price: "$35",
    duration: "40–50 min",
    description: "Precision fade work with seamless blending and a clean outline.",
  },
  {
    name: "Beard Trim",
    price: "$20",
    duration: "20–25 min",
    description: "Detail-focused beard shaping, line work, and finish for a polished look.",
  },
  {
    name: "Kids Cuts",
    price: "$22",
    duration: "20–30 min",
    description: "Easy-going, kid-friendly cuts in a relaxed environment and patient care.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-16 text-[var(--foreground)] md:px-10 lg:px-12">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand-secondary)]">
            Services & pricing
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[var(--brand-primary)] sm:text-5xl">
            Premium grooming, tailored to you.
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.name}
              className="flex h-full flex-col rounded-[1.5rem] border border-[var(--muted)] bg-white p-6 shadow-[0_18px_45px_rgba(28,35,49,0.06)]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <h2 className="text-xl font-bold text-[var(--brand-primary)]">
                  {service.name}
                </h2>
                <span className="rounded-full bg-[var(--brand-accent)]/10 px-3 py-1 text-sm font-bold text-[var(--brand-accent)]">
                  {service.price}
                </span>
              </div>

              <p className="mb-5 text-base leading-7 text-[var(--foreground)]/75">
                {service.description}
              </p>

              <div className="mt-auto border-t border-[var(--muted)] pt-4">
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--brand-secondary)]">
                  Duration
                </p>
                <p className="mt-1 text-base font-semibold text-[var(--brand-primary)]">
                  {service.duration}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[2rem] bg-[var(--brand-primary)] px-6 py-8 text-center text-white md:flex-row md:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Need a custom look?
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">
              Book a consultation and get a style that fits your routine.
            </h2>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-6 py-3 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Reserve a slot
          </Link>
        </div>
      </section>
    </main>
  );
}
