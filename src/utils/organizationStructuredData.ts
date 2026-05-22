import {
  CLINIC_GEO,
  CLINIC_LOGO_URL,
  CLINIC_NAME,
  CLINIC_OPENING_HOURS_SPECIFICATION,
  CLINIC_PHONE_TEL,
  CLINIC_POSTAL_ADDRESS,
  CLINIC_SAME_AS,
  CLINIC_SITE_ALTERNATE_NAMES,
  CLINIC_SITE_ORIGIN,
} from '../data/clinicInfo';

export type HomePageStructuredDataOptions = {
  description: string;
};

/** WebSite node for Google site name preference (homepage only). */
export function buildWebSiteStructuredData() {
  return {
    '@type': 'WebSite',
    '@id': `${CLINIC_SITE_ORIGIN}/#website`,
    url: `${CLINIC_SITE_ORIGIN}/`,
    name: CLINIC_NAME,
    alternateName: [...CLINIC_SITE_ALTERNATE_NAMES],
    publisher: { '@id': `${CLINIC_SITE_ORIGIN}/#organization` },
  };
}

function buildOrganizationStructuredDataNode({ description }: HomePageStructuredDataOptions) {
  return {
    '@type': ['Organization', 'MedicalClinic'],
    '@id': `${CLINIC_SITE_ORIGIN}/#organization`,
    name: CLINIC_NAME,
    alternateName: 'Kuna PT',
    url: `${CLINIC_SITE_ORIGIN}/`,
    logo: CLINIC_LOGO_URL,
    image: CLINIC_LOGO_URL,
    description,
    telephone: CLINIC_PHONE_TEL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CLINIC_POSTAL_ADDRESS.streetAddress,
      addressLocality: CLINIC_POSTAL_ADDRESS.addressLocality,
      addressRegion: CLINIC_POSTAL_ADDRESS.addressRegion,
      postalCode: CLINIC_POSTAL_ADDRESS.postalCode,
      addressCountry: CLINIC_POSTAL_ADDRESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CLINIC_GEO.latitude,
      longitude: CLINIC_GEO.longitude,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: CLINIC_PHONE_TEL,
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish'],
    },
    openingHoursSpecification: CLINIC_OPENING_HOURS_SPECIFICATION,
    sameAs: CLINIC_SAME_AS,
    hasMap: CLINIC_SAME_AS[0],
  };
}

/** Homepage JSON-LD: WebSite (site name) + Organization / MedicalClinic. */
export function buildHomePageStructuredData(options: HomePageStructuredDataOptions) {
  return {
    '@context': 'https://schema.org',
    '@graph': [buildWebSiteStructuredData(), buildOrganizationStructuredDataNode(options)],
  };
}
