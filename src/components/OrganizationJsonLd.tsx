import { useMemo } from 'react';
import { useJsonLdScript } from '../hooks/useJsonLdScript';
import { buildHomePageStructuredData } from '../utils/organizationStructuredData';

type OrganizationJsonLdProps = {
  description: string;
};

const SCRIPT_ID = 'kuna-home-jsonld';

/** Homepage JSON-LD (WebSite site name + Organization) — homepage only per Google guidelines. */
export default function OrganizationJsonLd({ description }: OrganizationJsonLdProps) {
  const jsonLd = useMemo(() => buildHomePageStructuredData({ description }), [description]);
  useJsonLdScript(SCRIPT_ID, jsonLd);

  return null;
}
