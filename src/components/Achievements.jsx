import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Achievements = () => {
  const { t } = useTranslation();
  const [startCounter, setStartCounter] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Trigger when 30% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      setStartCounter(true);
    }
  }, [inView]);

  const kpis = [
    { value: 1500, suffix: '', labelKey: 'kpi1_label', description: '6M vues' }, // 1500 campagnes / 6M vues
    { value: 133, suffix: '%', labelKey: 'kpi2_label' }, // 133% croissance équipe
    { value: 135, suffix: '%', labelKey: 'kpi3_label' }, // 135% objectifs atteints
  ];

  const mentions = ['Forbes', 'Rolling Stone', 'IPA Awards'];

  const kpiVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  const mentionsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: kpis.length * 0.2 + 0.2, // Start after KPIs finish animating
      },
    },
  };

  const mentionItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="achievements" ref={ref} className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* KPIs Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={kpiVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {startCounter ? (
                  <CountUp end={kpi.value} duration={2.5} suffix={kpi.suffix} />
                ) : (
                  `0${kpi.suffix}`
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {t(`achievements.${kpi.labelKey}`)}
                {kpi.description && <span className="block text-xs">({kpi.description})</span>}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mentions Section */}
        <motion.div
          variants={mentionsVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">{t('achievements.mentions_title')}</h3>
          <motion.div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {mentions.map((mention, index) => (
              <motion.span
                key={index}
                variants={mentionItemVariants}
                className="text-lg text-gray-600 dark:text-gray-400 font-medium"
              >
                {mention}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

