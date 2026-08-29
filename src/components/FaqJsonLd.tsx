import { useMemo } from 'react';
import { useJsonLdScript } from '../hooks/useJsonLdScript';
import {
  buildFaqPageStructuredData,
  type FaqPageItem,
} from '../utils/faqPageStructuredData';

type FaqJsonLdProps = {
  items: FaqPageItem[];
};

export default function FaqJsonLd({ items }: FaqJsonLdProps) {
  const jsonLd = useMemo(() => buildFaqPageStructuredData(items), [items]);
  useJsonLdScript('kuna-faq-jsonld', jsonLd);
  return null;
}
