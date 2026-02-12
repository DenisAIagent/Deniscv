import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiGlobe, FiHeart, FiUser } from 'react-icons/fi';

const Achievements = () => {
  const { t } = useTranslation();

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const formations = t('formations.items', { returnObjects: true }) || [];
  const certifications = t('certifications.items', { returnObjects: true }) || [];
  const langues = t('langues.items', { returnObjects: true }) || [];
  const interets = t('interets.items', { returnObjects: true }) || [];

  return (
    <section id="formations" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Formations */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-8 text-gray-800 dark:text-white">
              {t('formations.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {Array.isArray(formations) && formations.map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                  <FiBookOpen className="text-blue-600 dark:text-blue-400 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{item.degree}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.school} - {item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold font-heading text-center mb-6 text-gray-800 dark:text-white">
              {t('certifications.title')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {Array.isArray(certifications) && certifications.map((cert, index) => (
                <span key={index} className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300">
                  <FiAward className="text-yellow-500" />
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Langues */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold font-heading text-center mb-6 text-gray-800 dark:text-white">
              {t('langues.title')}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {Array.isArray(langues) && langues.map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white dark:bg-gray-800 px-5 py-3 rounded-lg shadow-sm">
                  <FiGlobe className="text-blue-500" />
                  <span className="font-semibold text-gray-800 dark:text-white">{item.lang}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">({item.level})</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Centres d'interet */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold font-heading text-center mb-6 text-gray-800 dark:text-white">
              {t('interets.title')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {Array.isArray(interets) && interets.map((item, index) => (
                <span key={index} className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300">
                  <FiHeart className="text-red-400" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Reference */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold font-heading text-center mb-6 text-gray-800 dark:text-white">
              {t('references.title')}
            </h3>
            <div className="flex justify-center">
              <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm max-w-md">
                <FiUser className="text-blue-600 dark:text-blue-400 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">{t('references.tachfin.name')}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('references.tachfin.role')}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{t('references.tachfin.email')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
