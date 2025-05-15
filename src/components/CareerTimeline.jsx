import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const CareerTimeline = () => {
  const { t } = useTranslation();

  const stats = [
    { number: 133, suffix: '%', label: 'Croissance Équipe' },
    { number: 135, suffix: '%', label: 'Objectifs Atteints' },
    { number: 1500, suffix: '+', label: 'Campagnes Gérées' },
    { number: 6, suffix: 'M+', label: 'Vues YouTube' }
  ];

  const timelineData = [
    {
      title: t('timeline.team_leader.title'),
      company: 'Premium international concierge service',
      location: 'Lisbon, Portugal',
      period: '11/2019 - 10/2024',
      icon: 'https://i.postimg.cc/GmJzMZhB/john-paul-vector-logo.png',
      achievements: [
        { metric: '133%', text: 'Croissance de l\'équipe en 1 an' },
        { metric: '7', text: 'Agents formés et coachés' },
        { metric: '98%', text: 'Satisfaction client' }
      ],
      details: [
        t('timeline.team_leader.team_creation'),
        t('timeline.team_leader.planning'),
        t('timeline.team_leader.quality'),
        t('timeline.team_leader.coaching'),
        t('timeline.team_leader.collaboration')
      ]
    },
    {
      title: t('timeline.cmo.title'),
      company: 'BandStream SAS',
      location: 'Lisbon, Portugal',
      period: '09/2024 - 09/2024',
      icon: 'https://i.postimg.cc/xTvBjg8H/Bandstream-logo-quadri-noir.png',
      achievements: [
        { metric: '70%', text: 'Accords de partenariat' },
        { metric: '10', text: 'Partenaires techniques' },
        { metric: '15+', text: 'Documents stratégiques' }
      ],
      details: [
        t('timeline.cmo.strategy'),
        t('timeline.cmo.mvp'),
        t('timeline.cmo.partnerships'),
        t('timeline.cmo.market'),
        t('timeline.cmo.commercial')
      ]
    },
    {
      title: t('timeline.digital_marketing.title'),
      company: 'Mdmc',
      location: 'Lisbon, Portugal',
      period: '07/2018 - 01/2024',
      icon: 'https://i.postimg.cc/dDc3TZGf/favicon.png',
      achievements: [
        { metric: '1.5K', text: 'Campagnes YouTube' },
        { metric: '6M+', text: 'Vues cumulées' },
        { metric: '10%', text: 'Taux d\'engagement' }
      ],
      details: [
        t('timeline.digital_marketing.strategy'),
        t('timeline.digital_marketing.performance'),
        t('timeline.digital_marketing.business'),
        t('timeline.digital_marketing.recruitment')
      ]
    },
    {
      title: t('timeline.account_strategist.title'),
      company: 'Google Ads',
      location: 'Lisbon, Portugal',
      period: '11/2017 - 07/2018',
      icon: 'https://i.postimg.cc/259QMmp5/Google-Ads-logo-svg.png',
      achievements: [
        { metric: '135%', text: 'Objectifs atteints' },
        { metric: '10%', text: 'Amélioration conversion' },
        { metric: '100%', text: 'Satisfaction client' }
      ],
      details: [
        t('timeline.account_strategist.management'),
        t('timeline.account_strategist.strategy'),
        t('timeline.account_strategist.training'),
        t('timeline.account_strategist.adaptability'),
        t('timeline.account_strategist.collaboration'),
        t('timeline.account_strategist.relations')
      ]
    }
  ];

  return (
    <section id="career" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* En-tête avec statistiques clés */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-gray-800 dark:text-white"
          >
            {t('timeline.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-12"
          >
            {t('timeline.subtitle')}
          </motion.p>
          
          {/* Statistiques clés */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  <CountUp end={stat.number} suffix={stat.suffix} duration={2.5} />
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Timeline */}
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              date={item.period}
              iconStyle={{
                background: '#fff',
                border: '4px solid #2196f3',
                boxShadow: '0 0 0 6px #e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0
              }}
              icon={
                <img 
                  src={item.icon} 
                  alt={item.company}
                  className="w-8 h-8 object-contain"
                />
              }
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {item.company}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.location}
                </p>

                {/* Réalisations clés */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {item.achievements.map((achievement, idx) => (
                    <div key={idx} className="text-center p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {achievement.metric}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {achievement.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Détails */}
                <ul className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-200">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('timeline.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerTimeline; 