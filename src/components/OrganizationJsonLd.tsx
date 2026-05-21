import { useMemo } from 'react';
import { useJsonLdScript } from '../hooks/useJsonLdScript';
import { buildOrganizationStructuredData } from '../utils/organizationStructuredData';

type OrganizationJsonLdProps = {
  description: string;
};

const SCRIPT_ID = 'kuna-organization-jsonld';

/** Organization JSON-LD — intended for the homepage only (per Google guidelines). */
export default function OrganizationJsonLd({ description }: OrganizationJsonLdProps) {
  const jsonLd = useMemo(() => buildOrganizationStructuredData({ description }), [description]);
  useJsonLdScript(SCRIPT_ID, jsonLd);

  return null;
}
