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

  // MODIFICATION: Mise à jour du tableau KPIs selon les dernières instructions
  const kpis = [
    { value: 1500, suffix: '', label: t('chiffres.campagnes') },
    { value: 1274, suffix: '+', label: t('chiffres.sessions') },
    { value: 135, suffix: '%', label: t('chiffres.objectifs') }
  ];

  // Section Mentions (Forbes, etc.) déjà supprimée

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

  return (
    <section id="achievements" ref={ref} className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* KPIs Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <CountUp end={kpi.value} duration={2.5} separator=" " suffix={kpi.suffix} />
                ) : (
                  `0${kpi.suffix}`
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {kpi.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
