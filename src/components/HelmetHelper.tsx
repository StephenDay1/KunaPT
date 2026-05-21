import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { CLINIC_SITE_ORIGIN } from '../data/clinicInfo';
import { normalizePathname } from '../utils/urlPath';

const HelmetHelper = ({ title, description }: { title?: string; description: string }) => {
  const { t } = useTranslation();
  const fullTitle = title ? t('meta.titleTemplate', { page: title }) : t('meta.siteName');
  const canonicalUrl = `${CLINIC_SITE_ORIGIN}${normalizePathname(window.location.pathname)}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default HelmetHelper;
