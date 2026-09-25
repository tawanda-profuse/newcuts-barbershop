import { addMinutes } from 'date-fns';

export interface BookingDetails {
  service: string;
  barber: string;
  date: Date;
  customerName: string;
}

const shopName = 'New Cuts Barbershop';
const shopLocation = '145 Mercer Street, Suite 4, New York, NY 10012';

const toCalendarUtcStamp = (date: Date) => {
  return `${date.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`;
};

const formatAppointmentDisplay = (date: Date) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  return formatter.format(date);
};

export const generateGoogleCalendarUrl = (booking: BookingDetails) => {
  const endDate = addMinutes(booking.date, 45);
  const formattedStart = toCalendarUtcStamp(booking.date);
  const formattedEnd = toCalendarUtcStamp(endDate);
  const appointmentWindow = `${formatAppointmentDisplay(booking.date)} - ${formatAppointmentDisplay(endDate)}`;

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${booking.service} with ${booking.barber} | ${shopName}`,
    dates: `${formattedStart}/${formattedEnd}`,
    details: [
      `Hey ${booking.customerName}, we can't wait to see you!`,
      '',
      `Service: ${booking.service}`,
      `Barber: ${booking.barber}`,
      `Appointment time: ${appointmentWindow}`,
      `Location: ${shopLocation}`,
      '',
      `Thanks for choosing ${shopName} — see you soon!`,
    ].join('\n'),
    location: shopLocation,
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
URL:https://newcutsbarbershop.com
DTSTAMP:${toCalendarUtcStamp(new Date())}
DTSTART:${formattedStart}
DTEND:${formattedEnd}
SUMMARY:${booking.service} with ${booking.barber} | ${shopName}
DESCRIPTION:Hey ${booking.customerName}\, we can't wait to see you!\n\nService: ${booking.service}\nBarber: ${booking.barber}\nAppointment time: ${formatAppointmentDisplay(booking.date)} - ${formatAppointmentDisplay(endDate)}\nLocation: ${shopLocation}\n\nThanks for choosing ${shopName} — see you soon!
LOCATION:${shopLocation}
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