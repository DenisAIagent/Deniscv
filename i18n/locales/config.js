// Dans i18n/locales/config.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationEN from './en.json'; 
import translationFR from './fr.json'; 
import translationES from './es.json'; 
import translationPT from './pt.json'; 

// On garde la définition de resources pour la structure
const resourcesData = { 
  en: { translation: translationEN },
  fr: { translation: translationFR },
  es: { translation: translationES },
  pt: { translation: translationPT }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true, 
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
    // ATTENTION: Ne pas passer 'resources' ici pour ce test
    // resources: resourcesData 
  });

// --- TEST : Ajouter les ressources manuellement APRÈS init ---
// Ajoutons explicitement le français et l'anglais
// Les 'true, true' signifient : fusion profonde, écraser si existant
if (resourcesData.fr?.translation) {
    console.log("Attempting to add FR resource bundle manually."); // Log de débogage
    i18n.addResourceBundle('fr', 'translation', resourcesData.fr.translation, true, true); 
} else {
    console.error("FR translation data is missing or invalid!");
}

if (resourcesData.en?.translation) {
    console.log("Attempting to add EN resource bundle manually."); // Log de débogage
    i18n.addResourceBundle('en', 'translation', resourcesData.en.translation, true, true); 
} else {
    console.error("EN translation data is missing or invalid!");
}
// Vous pouvez ajouter es et pt de la même manière si nécessaire pour tester
// ----------------------------------------------------------

export default i18n;
