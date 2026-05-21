import { useEffect } from 'react';
import { buildOrganizationStructuredData } from '../utils/organizationStructuredData';

type OrganizationJsonLdProps = {
  description: string;
};

const SCRIPT_ID = 'kuna-organization-jsonld';

/**
 * Organization JSON-LD for the homepage (per Google guidelines).
 * Injected into document.head directly — React 19 hoists title/meta/link but not
 * inline script tags, and react-helmet-async's React 19 path renders scripts in-tree.
 */
export default function OrganizationJsonLd({ description }: OrganizationJsonLdProps) {
  useEffect(() => {
    const jsonLd = buildOrganizationStructuredData({ description });
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(jsonLd);

    return () => {
      script?.remove();
    };
  }, [description]);

  return null;
}
