export type ClinicHours = {
  weekdayLabel: string;
  weekdayHours: string;
  saturdayLabel: string;
  saturdayHours: string;
};

export type ClinicAddress = {
  line1: string;
  line2: string;
  mapsQuery: string;
};

export const CLINIC_NAME = 'Kuna Physical Therapy';

export const CLINIC_ADDRESS: ClinicAddress = {
  line1: '1222 N Meridian Rd',
  line2: 'Kuna, ID 83642',
  mapsQuery: '1222 N Meridian Rd Kuna ID 83642',
};

export const CLINIC_PHONE_DISPLAY = '+1 (208) 123-4567';
export const CLINIC_PHONE_TEL = '+12081234567';

export const CLINIC_HOURS: ClinicHours = {
  weekdayLabel: 'Mon-Fri',
  weekdayHours: '8:00 AM - 5:00 PM',
  saturdayLabel: 'Sat',
  saturdayHours: '8:00 AM - 12:00 PM',
};

export function getGoogleMapsDirectionsUrl(query: string) {
  // return `https://maps.google.com/?q=${encodeURIComponent(query)}`;
  return `https://maps.app.goo.gl/RHE9spt7AkdKie1s5`;
}

export function getGoogleMapsEmbedUrl(query: string) {
  return `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d67265.8829979981!2d-116.37894738713842!3d43.555084170939594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae454a27dc158b%3A0xa7da959ee43071fe!2s1222%20N%20Meridian%20Rd%2C%20Kuna%2C%20ID%2083634!5e0!3m2!1sen!2sus!4v1775091979174!5m2!1sen!2sus`;
  // return `https://maps.app.goo.gl/m2dxUbjhxiFj4XS97&output=embed`;
  // return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

