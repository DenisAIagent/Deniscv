import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/portrait.jpg';

const About = () => {
  const { t } = useTranslation();

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row items-center gap-10 md:gap-16"
        >
          {/* Photo */}
          <motion.div variants={itemVariantsLeft} className="w-full lg:w-1/3 flex-shrink-0">
            <img
              src={profilePhoto}
              alt={t('about.portrait')}
              className="rounded-lg shadow-xl w-full max-w-sm mx-auto lg:mx-0 h-auto object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Texte */}
          <motion.div variants={itemVariantsRight} className="w-full lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-primary dark:text-white">
              {t('about.title')}
            </h2>

            <div className="text-base md:text-lg leading-relaxed space-y-4">
              {t('about.texte').split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Highlight for the target position */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 dark:border-blue-400 rounded-r-lg">
              <p className="font-medium text-blue-700 dark:text-blue-300">
                {t('about.highlight')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
