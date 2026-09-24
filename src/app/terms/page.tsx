import Link from "next/link";

const sections = [
  {
    title: "Appointments & Cancellations",
    body:
      "Appointments are reserved for the selected date and time. We kindly ask that you arrive 5–10 minutes early. Cancellations or reschedules made less than 24 hours before your appointment may be subject to a rebooking fee.",
  },
  {
    title: "Service Expectations",
    body:
      "New Cuts Barbershop provides professional grooming services based on the package selected at booking. Results may vary depending on hair type, condition, and personal preferences. We will do our best to communicate realistic expectations before and during service.",
  },
  {
    title: "Payment & Deposits",
    body:
      "Payment is due at the time of service unless otherwise agreed. We accept card and cash payments. Deposits may be requested for large bookings or special appointments and are applied to the final total.",
  },
  {
    title: "Health & Safety",
    body:
      "We maintain a clean and professional environment and follow reasonable hygiene protocols. By visiting our shop, you acknowledge that grooming services involve close personal contact and that we may refuse service if a client is visibly unwell or disruptive to the salon environment.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-16 text-[var(--foreground)] md:px-10 lg:px-12">
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-[var(--muted)] bg-white p-6 shadow-[0_20px_60px_rgba(28,35,49,0.06)] md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand-secondary)]">
          Legal information
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[var(--brand-primary)] sm:text-5xl">
          Terms & Conditions
        </h1>

        <p className="mt-6 text-base leading-8 text-[var(--foreground)]/75">
          These Terms & Conditions govern the use of New Cuts Barbershop services and website. By booking an appointment or visiting our studio, you agree to the terms below. We reserve the right to update these terms as needed, and any changes will be reflected on this page.
        </p>

        <div className="mt-10 space-y-6">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[1.25rem] border border-[var(--muted)] bg-[var(--muted)]/30 p-5">
              <h2 className="text-xl font-bold text-[var(--brand-primary)]">{section.title}</h2>
              <p className="mt-3 text-base leading-7 text-[var(--foreground)]/75">{section.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[1.5rem] bg-[var(--brand-primary)] p-6 text-white">
          <h2 className="text-xl font-bold">Privacy & compliance</h2>
          <p className="mt-3 text-base leading-7 text-white/80">
            We respect your privacy and use customer information only for appointment management, communication, and service improvement. For more information, please review our privacy policy and any other relevant legal notices.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Return home
            </Link>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
