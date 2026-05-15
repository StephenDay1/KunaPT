export type ClinicAddress = {
  line1: string;
  line2: string;
};

export const CLINIC_NAME = 'Kuna Physical Therapy';

export const OPENING_DATE = new Date('2026-06-01');
export const isOpen = Date.now() > OPENING_DATE.getTime();

export const CLINIC_ADDRESS: ClinicAddress = {
  line1: '1222 N Meridian Rd',
  line2: 'Kuna, ID 83642',
};

export const CLINIC_PHONE_DISPLAY = '+1 (208) 869-7881';
export const CLINIC_PHONE_TEL = '+12088697881';

export function getGoogleMapsDirectionsUrl() {
  return `https://maps.app.goo.gl/RHE9spt7AkdKie1s5`;
}

export function getGoogleMapsEmbedUrl() {
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9750.088613413945!2d-116.40061493657576!3d43.499605901747586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae4536029664c5%3A0xb30157fe57d5680!2s1222%20N%20Meridian%20Rd%2C%20Kuna%2C%20ID%2083634!5e0!3m2!1sen!2sus!4v1778799148799!5m2!1sen!2sus`;
}

