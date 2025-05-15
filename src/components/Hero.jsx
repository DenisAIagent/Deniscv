import React, { useState } from 'react';
// 1. Importer useTranslation
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CvModal from './CvModal'; // Import the modal component

// 2. Importer tous les logos spécifiques à la langue
//    (Assurez-vous que les noms et extensions correspondent à vos fichiers !)
import logoFr from '../assets/logo-fr.png'; // Mettez le bon nom pour le français
import logoEn from '../assets/logo-en.png'; // Assurez-vous que ce fichier existe
import logoEs from '../assets/logo-es.png'; // Assurez-vous que ce fichier existe
import logoPt from '../assets/logo-pt.png'; // Logo portugais fourni

const Hero = () => {
  // 3. Obtenir la langue actuelle et la fonction de traduction t
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language; // Ex: 'fr', 'en', 'es', 'pt'

  const [isCvModalOpen, setIsCvModalOpen] = useState(false); // State for modal visibility

  // 4. Sélectionner le logo basé sur la langue actuelle
  const logos = {
    fr: logoFr,
    en: logoEn,
    es: logoEs,
    pt: logoPt,
  };

  // Choisit le logo de la langue actuelle, ou revient au français par défaut si non trouvé
  const logoSrc = logos[currentLang] || logos.fr;

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCvClick = () => {
    setIsCvModalOpen(true);
  };

  const handleCloseCvModal = () => {
    setIsCvModalOpen(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-background-light to-gray-100 dark:from-background-dark dark:to-gray-800 pt-20 md:pt-0" // Added padding top for controls overlap
    >
      {/* 5. Utiliser la variable logoSrc pour l'attribut src */}
      {/* Utiliser une clé de traduction pour l'attribut alt */}
      <img
        src={logoSrc}
        alt={t('hero.logo_alt', 'Denis Adam Logo')} // Ajoutez cette clé à vos fichiers de traduction
        className="w-40 md:w-48 h-auto mb-6"
      />
      <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-primary dark:text-white">{t('hero.title')}</h2>
      <p className="text-lg md:text-xl mb-8 max-w-2xl text-secondary dark:text-gray-300">{t('hero.headline')}</p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContactClick}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          {t('hero.cta_contact')}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCvClick} // Open modal on click
          className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 transition duration-300"
        >
          {t('hero.cta_cv')}
        </motion.button>
      </div>

      {/* Modal pour le CV */}
      <CvModal isOpen={isCvModalOpen} onClose={handleCloseCvModal} />
    </motion.section>
  );
};

export default Hero;
