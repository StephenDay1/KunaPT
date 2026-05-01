import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const HelmetHelper = ({ title, description }: { title?: string; description: string }) => {
  const { t } = useTranslation();
  const fullTitle = title ? t('meta.titleTemplate', { page: title }) : t('meta.siteName');
  // TODO: Update url
  const canonicalUrl = `https://kunaphysicaltherapy.com${window.location.pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default HelmetHelper;
