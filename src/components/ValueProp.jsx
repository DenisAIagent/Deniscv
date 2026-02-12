import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaChartLine, FaHandsHelping } from 'react-icons/fa';

const ValueProp = () => {
  const { t } = useTranslation();

  const pillars = [
    { key: 'management', icon: FaProjectDiagram },
    { key: 'strategie', icon: FaChartLine },
    { key: 'partenariat', icon: FaHandsHelping },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.key}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="p-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg text-center transition duration-300 hover:shadow-xl"
            >
              <pillar.icon className="text-5xl text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                {t(`expertise.${pillar.key}`)}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {t(`expertise_desc.${pillar.key}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
