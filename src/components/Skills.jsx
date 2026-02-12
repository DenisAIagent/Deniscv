import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Skills = () => {
  const { t } = useTranslation();

  const skillKeys = ['dev', 'automation', 'ai', 'marketing', 'project_management', 'mediation'];

  const levelColors = {
    20: 'bg-indigo-500',
    50: 'bg-yellow-500',
    55: 'bg-yellow-500',
    75: 'bg-blue-500',
    80: 'bg-blue-600',
    95: 'bg-green-600',
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-gray-800 dark:text-white"
        >
          {t('skills_section.title')}
        </motion.h2>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {skillKeys.map((key) => {
            const skill = {
              title: t(`skills_section.${key}.title`),
              detail: t(`skills_section.${key}.detail`),
              level: t(`skills_section.${key}.level`),
              percent: Number(t(`skills_section.${key}.percent`)),
            };

            const barColor = levelColors[skill.percent] || 'bg-blue-500';

            return (
              <motion.div
                key={key}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg transition-shadow duration-300 hover:shadow-md cursor-default"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.detail}
                    </p>
                  </div>
                  <span className={`mt-1 sm:mt-0 inline-block px-3 py-1 text-xs font-semibold rounded-full text-white ${barColor}`}>
                    {skill.level}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-3 rounded-full ${barColor}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
