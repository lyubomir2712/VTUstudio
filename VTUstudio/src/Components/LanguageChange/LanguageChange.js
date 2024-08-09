// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import bg from './Languages/bg.js'
import en from './Languages/en.js'

const resources = {
    en: {
        translation: en
    },
    bg: {
        translation: bg
    }
};

i18n
    .use(LanguageDetector) // detects the user language
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
