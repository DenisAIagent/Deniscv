import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// Assuming you might want icons later, e.g., from react-icons
// import { FaUsersCog, FaChartLine, FaHandshake } from 'react-icons/fa';

const ValueProp = () => {
  const { t } = useTranslation();

  const pillars = [
    { key: 'pillar1', title: t('value_prop.pillar1_title'), iconPlaceholder: '🎯' /* icon: FaUsersCog */ },
    { key: 'pillar2', title: t('value_prop.pillar2_title'), iconPlaceholder: '📊' /* icon: FaChartLine */ },
    { key: 'pillar3', title: t('value_prop.pillar3_title'), iconPlaceholder: '🤝' /* icon: FaHandshake */ },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="value-prop" className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Optional: Add a section title if needed */}
        {/* <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Ma Proposition de Valeur</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.key}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible" // Animate when the element enters the viewport
              viewport={{ once: true, amount: 0.3 }} // Trigger animation once, when 30% is visible
              className="p-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg text-center transition duration-300 hover:shadow-xl"
            >
              {/* Icon Placeholder - Add icon component here */}
              {/* <pillar.icon className="text-5xl text-blue-600 dark:text-blue-400 mx-auto mb-4" /> */}
              <div className="text-6xl text-blue-600 dark:text-blue-400 mx-auto mb-4">{pillar.iconPlaceholder}</div> {/* Placeholder Icon */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{pillar.title}</h3>
              {/* Optional: Add a short description for each pillar if needed */}
              {/* <p className="text-gray-600 dark:text-gray-300">Description courte...</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;

