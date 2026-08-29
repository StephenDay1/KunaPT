import { useMemo } from 'react';
import { useJsonLdScript } from '../hooks/useJsonLdScript';
import {
  buildBreadcrumbStructuredData,
  type BreadcrumbItem,
} from '../utils/breadcrumbStructuredData';

type BreadcrumbJsonLdProps = {
  id: string;
  items: BreadcrumbItem[];
};

export default function BreadcrumbJsonLd({ id, items }: BreadcrumbJsonLdProps) {
  const jsonLd = useMemo(() => buildBreadcrumbStructuredData(items), [items]);
  useJsonLdScript(`kuna-breadcrumb-jsonld-${id}`, jsonLd);
  return null;
}
