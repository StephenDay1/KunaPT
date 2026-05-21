import { useMemo } from 'react';
import { useJsonLdScript } from '../hooks/useJsonLdScript';
import { buildProfilePageStructuredData } from '../utils/profilePageStructuredData';

type ProfilePageJsonLdProps = {
  slug: string;
  name: string;
  imageUrl: string;
  role: string;
  tagline: string;
};

export default function ProfilePageJsonLd({
  slug,
  name,
  imageUrl,
  role,
  tagline,
}: ProfilePageJsonLdProps) {
  const jsonLd = useMemo(
    () => buildProfilePageStructuredData({ slug, name, imageUrl, role, tagline }),
    [slug, name, imageUrl, role, tagline],
  );
  useJsonLdScript(`kuna-profile-jsonld-${slug}`, jsonLd);

  return null;
}
