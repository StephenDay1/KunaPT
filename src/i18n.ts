import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';
import { es } from './locales/es';

const isProd = import.meta.env.PROD;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      es,
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    // Dev: allow persisted choice from the language switcher. Prod: use URL (?lng=) or
    // browser language only — no localStorage so a prior dev session cannot override
    // visitors' system locale on the live site.
    detection: isProd
      ? {
          order: ['querystring', 'navigator'],
          caches: [],
        }
      : {
          order: ['querystring', 'localStorage', 'navigator'],
          caches: ['localStorage'],
        },
  });

export default i18n;
