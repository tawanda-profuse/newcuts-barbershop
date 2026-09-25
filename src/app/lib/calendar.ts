import { addMinutes } from 'date-fns';

export interface BookingDetails {
  service: string;
  barber: string;
  date: Date;
  customerName: string;
}

const toCalendarUtcStamp = (date: Date) => {
  const iso = date.toISOString();
  return `${iso.slice(0, 4)}${iso.slice(5, 7)}${iso.slice(8, 10)}T${iso.slice(11, 19)}Z`;
};

export const generateGoogleCalendarUrl = (booking: BookingDetails) => {
  const endDate = addMinutes(booking.date, 45); // Assume 45 min slots
  const formattedStart = toCalendarUtcStamp(booking.date);
  const formattedEnd = toCalendarUtcStamp(endDate);

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${booking.service} with ${booking.barber} at New Cuts Barbershop`,
    dates: `${formattedStart}/${formattedEnd}`,
    details: `Appointment for ${booking.customerName}. Thank you for booking with New Cuts Barbershop`,
    location: '145 Mercer Street, Suite 4, New York, NY 10012',
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const downloadIcsFile = (booking: BookingDetails) => {
  const endDate = addMinutes(booking.date, 45);
  const formattedStart = toCalendarUtcStamp(booking.date);
  const formattedEnd = toCalendarUtcStamp(endDate);

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:https://your-barbershop.example
DTSTART:${formattedStart}
DTEND:${formattedEnd}
SUMMARY:${booking.service} with ${booking.barber}
DESCRIPTION:Appointment for ${booking.customerName} at New Cuts Barbershop
LOCATION: 145 Mercer Street, Suite 4
New York, NY 10012
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'barber-appointment.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};