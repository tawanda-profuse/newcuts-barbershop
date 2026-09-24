import { format, addMinutes } from 'date-fns';

export interface BookingDetails {
  service: string;
  barber: string;
  date: Date;
  customerName: string;
}

export const generateGoogleCalendarUrl = (booking: BookingDetails) => {
  const endDate = addMinutes(booking.date, 45); // Assume 45 min slots
  const formattedStart = format(booking.date, "yyyyMMdd'T'HHmmss'Z'");
  const formattedEnd = format(endDate, "yyyyMMdd'T'HHmmss'Z'");
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${booking.service} with ${booking.barber} at Sharp Blade Barber Co.`,
    dates: `${formattedStart}/${formattedEnd}`,
    details: `Appointment for ${booking.customerName}. Thank you for booking with Sharp Blade Barber Co.`,
    location: '123 Main Street, City Center',
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const downloadIcsFile = (booking: BookingDetails) => {
  const endDate = addMinutes(booking.date, 45);
  const formattedStart = format(booking.date, "yyyyMMdd'T'HHmmss'Z'");
  const formattedEnd = format(endDate, "yyyyMMdd'T'HHmmss'Z'");

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:https://your-barbershop.example
DTSTART:${formattedStart}
DTEND:${formattedEnd}
SUMMARY:${booking.service} with ${booking.barber}
DESCRIPTION:Appointment for ${booking.customerName} at Sharp Blade Barber Co.
LOCATION:123 Main Street, City Center
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