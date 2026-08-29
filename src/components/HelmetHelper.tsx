import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  CLINIC_NAME,
  CLINIC_OG_IMAGE_HEIGHT,
  CLINIC_OG_IMAGE_URL,
  CLINIC_OG_IMAGE_WIDTH,
  CLINIC_SITE_ORIGIN,
} from '../data/clinicInfo';
import { normalizePathname } from '../utils/urlPath';

type HelmetHelperProps = {
  /** Page name inserted into `meta.titleTemplate`, unless `fullTitle` is set. */
  title?: string;
  description: string;
  /** When true, `title` is the complete document title (no template). */
  fullTitle?: boolean;
  noIndex?: boolean;
  ogType?: 'website' | 'profile';
  image?: string;
};

const HelmetHelper = ({
  title,
  description,
  fullTitle = false,
  noIndex = false,
  ogType = 'website',
  image = CLINIC_OG_IMAGE_URL,
}: HelmetHelperProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.toLowerCase().startsWith('es') ? 'es' : 'en';
  const documentTitle = fullTitle
    ? (title ?? t('meta.siteName'))
    : title
      ? t('meta.titleTemplate', { page: title })
      : t('meta.homeTitle');
  const pathname = normalizePathname(window.location.pathname);
  const canonicalUrl = `${CLINIC_SITE_ORIGIN}${pathname}`;
  const ogLocale = lang === 'es' ? 'es_US' : 'en_US';

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{documentTitle}</title>
      <meta name="description" content={description} />
      {noIndex ? <meta name="robots" content="noindex, follow" /> : null}
      {noIndex ? null : <link rel="canonical" href={canonicalUrl} />}
      {noIndex ? null : <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content={CLINIC_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={documentTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={lang === 'es' ? 'en_US' : 'es_US'} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={String(CLINIC_OG_IMAGE_WIDTH)} />
      <meta property="og:image:height" content={String(CLINIC_OG_IMAGE_HEIGHT)} />
      <meta property="og:image:alt" content={CLINIC_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={documentTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default HelmetHelper;
