import { Helmet } from 'react-helmet-async';

const HelmetHelper = ({ title: page_title, description }: { title: string; description: string }) => {
    // TODO: Update url
    const canonicalUrl = `https://kunapt.web.app${window.location.pathname}`;
    // const canonicalUrl = window.location.href;

    return (
        <Helmet>
            <title>{page_title ? `Kuna PT | ${page_title}` : "Kuna Physical Therapy"}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
    );
};

export default HelmetHelper;