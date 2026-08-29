import { CLINIC_PHONE_DISPLAY } from '../data/clinicInfo';

export type FaqPageItem = {
  question: string;
  answer: string | string[];
};

function answerToText(answer: string | string[]) {
  const raw = Array.isArray(answer) ? answer.join(' ') : answer;
  return raw.replace(/\{\{phone\}\}/g, CLINIC_PHONE_DISPLAY).replace(/\s+/g, ' ').trim();
}

export function buildFaqPageStructuredData(items: FaqPageItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answerToText(item.answer),
      },
    })),
  };
}
