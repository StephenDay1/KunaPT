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
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-EFDLPX5FSK"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EFDLPX5FSK');
          `,
        }}
      />
    </Helmet>
  );
};

export default HelmetHelper;
