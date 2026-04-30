export type ClinicAddress = {
  line1: string;
  line2: string;
  mapsQuery: string;
};

export const CLINIC_NAME = 'Kuna Physical Therapy';

export const OPENING_DATE = new Date('2026-06-01');

export const CLINIC_ADDRESS: ClinicAddress = {
  line1: '1222 N Meridian Rd',
  line2: 'Kuna, ID 83642',
  mapsQuery: '1222 N Meridian Rd Kuna ID 83642',
};

export const CLINIC_PHONE_DISPLAY = '+1 (208) 869-7881';
export const CLINIC_PHONE_TEL = '+12088697881';

export function getGoogleMapsDirectionsUrl(query: string) {
  return `https://maps.app.goo.gl/RHE9spt7AkdKie1s5`;
}

export function getGoogleMapsEmbedUrl(query: string) {
  return `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d67265.8829979981!2d-116.37894738713842!3d43.555084170939594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae454a27dc158b%3A0xa7da959ee43071fe!2s1222%20N%20Meridian%20Rd%2C%20Kuna%2C%20ID%2083634!5e0!3m2!1sen!2sus!4v1775091979174!5m2!1sen!2sus`;
}

