import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Placeholder images - replace with actual photo URLs or import local images
const placeholderPhotos = [
  'https://via.placeholder.com/400x300/cccccc/888888?text=Photo+1',
  'https://via.placeholder.com/400x300/cccccc/888888?text=Photo+2',
  'https://via.placeholder.com/400x300/cccccc/888888?text=Photo+3',
  'https://via.placeholder.com/400x300/cccccc/888888?text=Photo+4',
];

// Placeholder press mentions
const pressMentions = ['Mention 1', 'Mention 2', 'Mention 3'];

const Photography = () => {
  const { t } = useTranslation();

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="photography" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">{t('photography.title')}</motion.h2>

          {/* Mini Gallery */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {placeholderPhotos.map((photo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg shadow-md"
              >
                <img src={photo} alt={`Photographie ${index + 1}`} className="w-full h-auto object-cover aspect-square" />
              </motion.div>
            ))}
          </motion.div>

          {/* Press Mentions */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">{t('photography.mentions_title')}</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
              {pressMentions.map((mention, index) => (
                <span key={index} className="text-md text-gray-600 dark:text-gray-400">
                  {mention}
                </span>
              ))}
            </div>
          </motion.div>

          {/* External Portfolio Link - Optional */}
          {/* Consider adding a condition to show this only if a URL is provided */}
          <motion.div variants={itemVariants} className="text-center">
            <a
              href="#" // Replace with actual portfolio URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 transition duration-300"
            >
              {t('photography.portfolio_link')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Photography;

