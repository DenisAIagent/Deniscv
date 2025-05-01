import React, { useState } from 'react'; // Import useState
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import CvModal from './CvModal'; // Import the modal component

const Hero = () => {
  const { t } = useTranslation();
  const [isCvModalOpen, setIsCvModalOpen] = useState(false); // State for modal visibility

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to open the CV modal
  const handleCvClick = () => {
    setIsCvModalOpen(true);
  };

  // Function to close the CV modal
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
      <img src={logo} alt="Denis Adam Logo" className="w-40 md:w-48 h-auto mb-6" />
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
          className="px-8 py-3 bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition duration-300"
        >
          {t('hero.cta_cv')}
        </motion.button>
      </div>

      {/* Render the CV Modal */}
      <CvModal isOpen={isCvModalOpen} onClose={handleCloseCvModal} />
    </motion.section>
  );
};

export default Hero;

