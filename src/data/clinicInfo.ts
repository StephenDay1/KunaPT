export type ClinicAddress = {
  line1: string;
  line2: string;
};

export type ClinicPostalAddress = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  /** ISO 3166-1 alpha-2 country code */
  addressCountry: string;
};

export const CLINIC_NAME = 'Kuna Physical Therapy';
export const CLINIC_SITE_ORIGIN = 'https://kunaphysicaltherapy.com';
export const CLINIC_LOGO_URL = `${CLINIC_SITE_ORIGIN}/kuna-logo-icon.svg`;

/** Preferred + fallback site names for Google Search (WebSite structured data). */
export const CLINIC_SITE_ALTERNATE_NAMES = ['Kuna PT', 'kunaphysicaltherapy.com'] as const;

export const OPENING_DATE = new Date('2026-07-07');

/** Canonical postal address (also used for Organization JSON-LD). */
export const CLINIC_POSTAL_ADDRESS: ClinicPostalAddress = {
  streetAddress: '1222 N Meridian Rd, Suite 110',
  addressLocality: 'Kuna',
  addressRegion: 'ID',
  postalCode: '83642',
  addressCountry: 'US',
};

export const CLINIC_ADDRESS: ClinicAddress = {
  line1: CLINIC_POSTAL_ADDRESS.streetAddress,
  line2: `${CLINIC_POSTAL_ADDRESS.addressLocality}, ${CLINIC_POSTAL_ADDRESS.addressRegion} ${CLINIC_POSTAL_ADDRESS.postalCode}`,
};

export const CLINIC_PHONE_DISPLAY = '+1 (208) 613-9906';
export const CLINIC_PHONE_TEL = '+12086139906';

export const CLINIC_FAX_NUMBER = '+1 (208) 485-7283';

/** Matches the clinic pin in the Google Maps embed on the home page. */
export const CLINIC_GEO = {
  latitude: 43.499606,
  longitude: -116.400615,
} as const;

/** Weekday hours shown in clinic info cards (`clinic.lineOne` / `lineTwo`). */
export const CLINIC_OPENING_HOURS_SPECIFICATION = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'https://schema.org/Monday',
      'https://schema.org/Tuesday',
      'https://schema.org/Wednesday',
      'https://schema.org/Thursday',
      'https://schema.org/Friday',
    ],
    opens: '07:00',
    closes: '18:00',
  },
] as const;

export const APPLE_MAP_COORDINATES = {
  latitude: 43.499444,
  longitude: -116.393169,
} as const;

export const CLINIC_GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/tZxbCDQE8CVeSp3PA';
export const CLINIC_APPLE_MAPS_URL = `https://maps.apple.com/?q=${APPLE_MAP_COORDINATES.latitude},${APPLE_MAP_COORDINATES.longitude}`;

export const CLINIC_SAME_AS = [CLINIC_GOOGLE_MAPS_URL] as const;

export const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11577.480578698445!2d-116.4082258579666!3d43.494613354285356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae45891b160b23%3A0x4ef073e077c440ca!2sKuna%20Physical%20Therapy!5e0!3m2!1sen!2sus!4v1781391142648!5m2!1sen!2sus`;

