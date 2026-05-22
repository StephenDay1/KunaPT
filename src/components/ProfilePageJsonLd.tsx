import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CLINIC_NAME } from '../data/clinicInfo';
import { useJsonLdScript } from '../hooks/useJsonLdScript';
import {
  buildProfilePageStructuredData,
  buildProfileSchemaDescription,
} from '../utils/profilePageStructuredData';
import i18n from '../i18n';

type ProfilePageJsonLdProps = {
  slug: string;
  name: string;
  imageUrl: string;
  role: string;
  credentials: string[];
  certifications: string[];
};

export default function ProfilePageJsonLd({
  slug,
  name,
  imageUrl,
  role,
  credentials,
  certifications,
}: ProfilePageJsonLdProps) {
  const { t } = useTranslation();

  const jsonLd = useMemo(() => {
    const andOrY = i18n.language === 'es' ? 'y' : 'and';
    const roleAtClinic = t('teamDetail.profileSchemaRoleAtClinic', {
      role,
      clinicName: CLINIC_NAME,
      // joins credentials with comma, last one includes an 'and' | Spanish translation uses 'y' instead of 'and'
      credentials: certifications.map((c, i) => i === certifications.length - 1 ? `${andOrY} ${c}` : c).join(', '),
    });
    const schemaDescription = buildProfileSchemaDescription(roleAtClinic, credentials);
    return buildProfilePageStructuredData({ slug, name, imageUrl, role, schemaDescription });
  }, [t, slug, name, imageUrl, role, credentials, certifications]);
  useJsonLdScript(`kuna-profile-jsonld-${slug}`, jsonLd);

  return null;
}
