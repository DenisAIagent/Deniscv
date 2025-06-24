import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const CareerTimeline = () => {
  const { t } = useTranslation();

  const today = t('timeline.today', 'Aujourd\'hui');

  const stats = [
    { number: 133, suffix: '%', label: t('chiffres.team_growth') },
    { number: 135, suffix: '%', label: t('chiffres.goals_achieved') },
    { number: 1500, suffix: '', label: t('chiffres.youtube_campaigns') },
    { number: 34, suffix: 'M+', label: t('chiffres.total_views') }
  ];

  const timelineData = [
    {
      title: t('timeline.cmo.title'),
      company: 'BandStream SAS',
      location: 'Lisbon, Portugal',
      period: `09/2024 - ${today}`,
      icon: 'https://i.postimg.cc/xTvBjg8H/Bandstream-logo-quadri-noir.png',
      achievements: [
        { metric: '70%', text: t('chiffres.partnership_agreements') },
        { metric: '10', text: t('chiffres.technical_partners') },
        { metric: '15+', text: t('chiffres.strategic_documents') }
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
      period: `07/2018 - ${today}`,
      icon: 'https://i.postimg.cc/dDc3TZGf/favicon.png',
      achievements: [
        { metric: '1.5K', text: t('chiffres.youtube_campaigns') },
        { metric: '34M+', text: t('chiffres.total_views') },
        { metric: '10%', text: t('chiffres.engagement_rate') }
      ],
      details: [
        t('timeline.digital_marketing.strategy'),
        t('timeline.digital_marketing.performance'),
        t('timeline.digital_marketing.business'),
        t('timeline.digital_marketing.recruitment')
      ]
    },
    {
      title: t('timeline.team_leader.title'),
      company: 'John Paul',
      location: 'Lisbon, Portugal',
      period: '11/2019 - 10/2024',
      icon: 'https://i.postimg.cc/GmJzMZhB/john-paul-vector-logo.png',
      achievements: [
        { metric: '133%', text: t('chiffres.team_growth') },
        { metric: '7', text: t('chiffres.agents_trained') },
        { metric: '98%', text: t('chiffres.customer_satisfaction') }
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
      title: t('timeline.account_strategist.title'),
      company: 'Google Ads',
      location: 'Lisbon, Portugal',
      period: '11/2017 - 07/2018',
      icon: 'https://i.postimg.cc/259QMmp5/Google-Ads-logo-svg.png',
      achievements: [
        { metric: '135%', text: t('chiffres.goals_achieved') },
        { metric: '10%', text: t('chiffres.conversion_improvement') },
        { metric: '100%', text: t('chiffres.customer_satisfaction') }
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

  // Gestion de la modale Calendly
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                  {item.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center p-1 bg-blue-50 dark:bg-blue-900 rounded-lg max-w-[90px] w-full mx-auto"
                    >
                      <div className="text-base font-bold text-blue-600 dark:text-blue-400 break-words whitespace-normal text-center">
                        {achievement.metric}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300 break-words whitespace-normal text-center">
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
          <button
            onClick={openModal}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('timeline.cta')}
          </button>
        </motion.div>
        {/* Modale Calendly */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 max-w-2xl w-full relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl font-bold"
                aria-label="Fermer"
              >
                ×
              </button>
              <iframe
                src="https://calendly.com/mdmc-yt/meeting"
                title="Calendly"
                width="100%"
                height="600"
                frameBorder="0"
                className="rounded-lg border-0"
                allow="fullscreen"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareerTimeline; 
