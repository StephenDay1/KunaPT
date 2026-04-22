import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      common: {
        home: 'Home',
        about: 'About',
        ourTeam: 'Our Team',
        testimonials: 'Testimonials',
        services: 'Services',
        allServices: 'All Services',
        viewAllServices: 'View All Services',
        bookAppointment: 'Book Appointment',
        learnMore: 'Learn more',
        language: 'Language',
        toTop: 'To Top',
        allRightsReserved: 'All rights reserved.',
      },
      homepage: {
        heroTitlePrefix: 'Restore Your',
        heroTitleMotion: 'Motion',
        heroTitleMiddle: 'Reclaim Your',
        heroTitleLife: 'Life',
        heroDescription:
          'Expert physical therapy tailored to your unique needs. We combine advanced techniques with compassionate care to help you move without pain.',
        ourServices: 'Our Services',
      },
      language: {
        english: 'English',
        spanish: 'Spanish',
      },
    },
  },
  es: {
    translation: {
      common: {
        home: 'Inicio',
        about: 'Acerca de',
        ourTeam: 'Nuestro equipo',
        testimonials: 'Testimonios',
        services: 'Servicios',
        allServices: 'Todos los servicios',
        viewAllServices: 'Ver todos los servicios',
        bookAppointment: 'Programar una visita',
        learnMore: 'Mas informacion',
        language: 'Idioma',
        toTop: 'Volver arriba',
        allRightsReserved: 'Todos los derechos reservados.',
      },
      homepage: {
        heroTitlePrefix: 'Recupera tu',
        heroTitleMotion: 'movimiento',
        heroTitleMiddle: 'y recupera tu',
        heroTitleLife: 'vida',
        heroDescription:
          'Terapia fisica experta adaptada a tus necesidades. Combinamos tecnicas avanzadas con atencion compasiva para ayudarte a moverte sin dolor.',
        ourServices: 'Nuestros servicios',
      },
      language: {
        english: 'Ingles',
        spanish: 'Espanol',
      },
    },
  },
};

const isProd = import.meta.env.PROD;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
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
