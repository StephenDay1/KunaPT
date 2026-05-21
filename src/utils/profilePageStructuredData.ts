import { CLINIC_SITE_ORIGIN } from '../data/clinicInfo';

export type ProfilePageStructuredDataInput = {
  slug: string;
  /** Display name from site data (may include credentials after a comma). */
  name: string;
  imageUrl: string;
  role: string;
  /** Short credential-style line for schema `Person.description` (not the page meta tagline). */
  schemaDescription: string;
};

/** Byline/credential line for ProfilePage JSON-LD (per Google guidelines). */
export function buildProfileSchemaDescription(
  roleAtClinic: string,
  credentials: string[],
) {
  const parts = [roleAtClinic.trim()];
  if (credentials.length > 0) parts.push(...credentials.map((c) => c.trim()).filter(Boolean));
  return parts.filter(Boolean).join('. ') + '.';
}

function toAbsoluteUrl(pathOrUrl: string) {
  return pathOrUrl.startsWith('http') ? pathOrUrl : `${CLINIC_SITE_ORIGIN}${pathOrUrl}`;
}

/** Person name for schema `name` (credentials belong in description / on-page copy). */
export function getPersonNameForSchema(displayName: string) {
  return displayName.split(',')[0].trim();
}

/** JSON-LD for Google ProfilePage on team member profile routes. */
export function buildProfilePageStructuredData({
  slug,
  name,
  imageUrl,
  role,
  schemaDescription,
}: ProfilePageStructuredDataInput) {
  const profileUrl = `${CLINIC_SITE_ORIGIN}/team/${slug}`;
  const personName = getPersonNameForSchema(name);

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${profileUrl}#profilepage`,
    url: profileUrl,
    mainEntity: {
      '@type': 'Person',
      '@id': `${profileUrl}#person`,
      name: personName,
      identifier: slug,
      description: schemaDescription,
      jobTitle: role,
      image: toAbsoluteUrl(imageUrl),
      worksFor: {
        '@id': `${CLINIC_SITE_ORIGIN}/#organization`,
      },
    },
  };
}
