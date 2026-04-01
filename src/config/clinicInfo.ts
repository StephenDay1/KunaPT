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
  line1: '123 Wellness Way, Suite 200',
  line2: 'Kuna, ID 83642',
  mapsQuery: '123 Wellness Way Suite 200 Kuna ID 83642',
};

export const CLINIC_PHONE_DISPLAY = '(208) 123-4567';
export const CLINIC_PHONE_TEL = '+12081234567';

export const CLINIC_HOURS: ClinicHours = {
  weekdayLabel: 'Mon-Fri',
  weekdayHours: '8:00 AM - 5:00 PM',
  saturdayLabel: 'Sat',
  saturdayHours: '8:00 AM - 12:00 PM',
};

export function getGoogleMapsDirectionsUrl(query: string) {
  return `https://maps.google.com/?q=${encodeURIComponent(query)}`;
}

export function getGoogleMapsEmbedUrl(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

