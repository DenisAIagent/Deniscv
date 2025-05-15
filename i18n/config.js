import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import des traductions
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationES from './locales/es/translation.json';
import translationPT from './locales/pt/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
  es: {
    translation: translationES
  },
  pt: {
    translation: translationPT
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 