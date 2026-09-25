'use client';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { generateGoogleCalendarUrl, downloadIcsFile, BookingDetails } from '@/lib/calendar';

const shopLocation = {
  name: 'New Cuts Barbershop',
  address: '145 Mercer Street, Suite 4, New York, NY 10012',
  mapUrl: 'https://www.google.com/maps?q=145+Mercer+Street+New+York+NY+10012&output=embed',
};

const barberOptions = [
  { value: 'Marcus', label: 'Marcus (Master Barber)' },
  { value: 'David', label: 'David (Fade Specialist)' },
];

function BookingPageContent() {
  const searchParams = useSearchParams();
  const [isBooked, setIsBooked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [selectedBarber, setSelectedBarber] = useState('Marcus');

  useEffect(() => {
    const barberFromQuery = searchParams.get('barber');
    if (!barberFromQuery) return;

    const normalizedQuery = barberFromQuery.trim().toLowerCase();
    const match = barberOptions.find(
      (barber) => barber.value.toLowerCase() === normalizedQuery,
    );

    if (match) {
      setSelectedBarber(match.value);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));

      const formData = new FormData(form);
      const dateStr = `${formData.get('date')}T${formData.get('time')}`;
      const appointmentDate = new Date(dateStr);

      const newBooking: BookingDetails = {
        service: formData.get('service') as string,
        barber: formData.get('barber') as string,
        date: appointmentDate,
        customerName: formData.get('name') as string,
      };

      setBooking(newBooking);
      setIsBooked(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="mx-auto my-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Visit us</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Book Your Appointment</h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
          {!isBooked ? (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="flex-1 rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/80 ring-1 ring-slate-200 md:p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Service</label>
                    <select name="service" required className="mt-1 block w-full rounded-md border border-slate-300 p-2.5 text-slate-900 outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20">
                      <option value="Classic Haircut">Classic Haircut - $30</option>
                      <option value="Skin Fade">Skin Fade - $35</option>
                      <option value="Beard Trim">Beard Trim - $20</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Barber</label>
                    <select
                      name="barber"
                      value={selectedBarber}
                      onChange={(event) => setSelectedBarber(event.target.value)}
                      required
                      className="mt-1 block w-full rounded-md border border-slate-300 p-2.5 text-slate-900 outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                    >
                      {barberOptions.map((barber) => (
                        <option key={barber.value} value={barber.value}>
                          {barber.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <input type="date" name="date" required className="mt-1 block w-full rounded-md border border-slate-300 p-2.5 text-slate-900 outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Time</label>
                    <input type="time" name="time" required className="mt-1 block w-full rounded-md border border-slate-300 p-2.5 text-slate-900 outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" required className="mt-1 block w-full rounded-md border border-slate-300 p-2.5 text-slate-900 outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20" />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-slate-900 p-3 font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-500"
                >
                  {isSubmitting ? 'Confirming booking...' : 'Confirm Booking'}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex-1 rounded-2xl bg-white p-8 text-center shadow-lg shadow-slate-200/80 ring-1 ring-slate-200"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-600">✓</div>
              <h2 className="mt-6 text-2xl font-bold text-slate-900">Booking Confirmed!</h2>
              <p className="mt-3 text-gray-600">Your appointment for a {booking?.service} with {booking?.barber} is set.</p>

              <div className="mt-8 flex flex-col justify-center gap-4 border-t border-slate-200 pt-6 sm:flex-row">
                <a
                  href={booking ? generateGoogleCalendarUrl(booking) : '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
                >
                  Add to Google Calendar
                </a>
                <button
                  onClick={() => booking && downloadIcsFile(booking)}
                  className="rounded-md bg-gray-800 px-6 py-2.5 font-medium text-white transition hover:bg-gray-900"
                >
                  Add to Apple Calendar (.ics)
                </button>
              </div>
            </motion.div>
          )}

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="flex w-full flex-1 flex-col overflow-hidden rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-300/70"
          >
            <div className="border-b border-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Find us</p>
              <h2 className="mt-2 text-2xl font-bold">{shopLocation.name}</h2>
              <p className="mt-2 text-sm text-slate-300">{shopLocation.address}</p>
            </div>

            <div className="relative h-[280px] min-h-[280px] flex-1 overflow-hidden bg-slate-800 sm:h-[340px] sm:min-h-[340px] lg:h-[420px] lg:min-h-[420px]">
              <iframe
                title="New Cuts Barbershop location"
                src={shopLocation.mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900 to-transparent" />
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-slate-950/40 p-5 text-sm text-slate-200">
              <div>
                <p className="font-semibold text-white">Walk-ins welcome</p>
                <p>Mon–Sat • 9:00 AM – 7:00 PM</p>
              </div>
              <a
                href={shopLocation.mapUrl.replace('output=embed', 'output=classic')}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
              >
                Open map
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="mx-auto my-12 max-w-6xl px-4 text-slate-700">Loading booking form…</div>}>
      <BookingPageContent />
    </Suspense>
  );
}
