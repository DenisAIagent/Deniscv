import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import CvModal from './CvModal';

import logoFr from '../assets/logo-fr.png';
import logoEn from '../assets/logo-en.png';
import logoEs from '../assets/logo-es.png';
import logoPt from '../assets/logo-pt.png';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const logos = { fr: logoFr, en: logoEn, es: logoEs, pt: logoPt };
  const logoSrc = logos[currentLang] || logos.fr;

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-background-light to-gray-100 dark:from-background-dark dark:to-gray-800 pt-20 md:pt-0"
    >
      <img
        src={logoSrc}
        alt={t('hero.logo_alt', 'Logo Denis Adam')}
        className="w-40 md:w-48 h-auto mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold font-heading mb-2 text-primary dark:text-white">
        {t('hero.name')}
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
        {t('hero.subtitle')}
      </h2>
      <p className="text-lg md:text-xl mb-6 max-w-2xl text-secondary dark:text-gray-300">
        {t('hero.slogan')}
      </p>

      {/* Contact info badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm text-gray-600 dark:text-gray-400">
        <span className="flex items-center gap-1.5 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm">
          <FiMapPin size={14} />
          {t('hero.location')}
        </span>
        <span className="flex items-center gap-1.5 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm">
          <FiPhone size={14} />
          {t('hero.phone')}
        </span>
        <span className="flex items-center gap-1.5 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm">
          <FiMail size={14} />
          {t('hero.email_hero')}
        </span>
      </div>

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
          onClick={() => setIsCvModalOpen(true)}
          className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 transition duration-300"
        >
          {t('hero.cta_cv')}
        </motion.button>
      </div>

      <CvModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </motion.section>
  );
};

export default Hero;
