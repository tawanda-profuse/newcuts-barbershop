'use client';
import { useState } from 'react';
import { generateGoogleCalendarUrl, downloadIcsFile, BookingDetails } from '@/lib/calendar';

export default function BookingPage() {
  const [isBooked, setIsBooked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [booking, setBooking] = useState<BookingDetails | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));

      const formData = new FormData(form);

      // Create a date object from the selected date and time in the browser's local timezone
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
    <div className="max-w-2xl mx-auto p-8 my-12 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-slate-900">Book Your Appointment</h1>
      
      {!isBooked ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Service</label>
              <select name="service" required className="mt-1 block w-full p-2 border rounded-md">
                <option value="Classic Haircut">Classic Haircut - $30</option>
                <option value="Skin Fade">Skin Fade - $35</option>
                <option value="Beard Trim">Beard Trim - $20</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Barber</label>
              <select name="barber" required className="mt-1 block w-full p-2 border rounded-md">
                <option value="Marcus">Marcus (Master Barber)</option>
                <option value="David">David (Fade Specialist)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input type="date" name="date" required className="mt-1 block w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input type="time" name="time" required className="mt-1 block w-full p-2 border rounded-md" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="name" required className="mt-1 block w-full p-2 border rounded-md" />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-900 text-white p-3 rounded-md hover:bg-slate-800 transition disabled:cursor-not-allowed disabled:bg-slate-500"
          >
            {isSubmitting ? 'Confirming booking...' : 'Confirm Booking'}
          </button>
        </form>
      ) : (
        <div className="text-center space-y-6 py-8">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
          <h2 className="text-2xl font-bold text-slate-900">Booking Confirmed!</h2>
          <p className="text-gray-600">Your appointment for a {booking?.service} with {booking?.barber} is set.</p>
          
          <div className="pt-6 border-t flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={booking ? generateGoogleCalendarUrl(booking) : '#'} 
              target="_blank" 
              rel="noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Add to Google Calendar
            </a>
            <button 
              onClick={() => booking && downloadIcsFile(booking)}
              className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900"
            >
              Add to Apple Calendar (.ics)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}