import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Skills = () => {
  const { t } = useTranslation();

  const skillBlocks = [
    {
      title: t('domaines.management.title'),
      desc: t('domaines.management.desc')
    },
    {
      title: t('domaines.strategie.title'),
      desc: t('domaines.strategie.desc')
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const blockVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          {skillBlocks.map((block, index) => (
            <motion.div
              key={index}
              variants={blockVariants}
              className="p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{block.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{block.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

