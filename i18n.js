// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { i18n as i18nConfig } from './next-i18next.config';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ...i18nConfig,
    fallbackLng: 'es',
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;
