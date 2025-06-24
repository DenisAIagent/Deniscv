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
    },
    {
      title: t('timeline.pr_manager.title'),
      company: 'ADAM Communication & Media',
      location: 'France',
      period: '2012 - 2017',
      icon: 'https://i1.sndcdn.com/avatars-000110067276-kjiaym-t1080x1080.jpg',
      achievements: [
        { metric: '0 → €20K+', text: 'Valeur pub par édition (avant/après stratégie RP)' },
        { metric: '1 → 40', text: 'Journalistes présents (transformation complète)' },
        { metric: '120+', text: 'Pages de dossier de presse (record Scarecrow)' }
      ],
      details: [
        'Création stratégie RP complète pour Issoudun Reggae Temple (passage de 0 stratégie média à couverture nationale)',
        'Transformation radicale : de 0€ à +20K€ de valeur publicitaire par édition du festival',
        'Croissance journalistique exceptionnelle : de 1 à près de 40 journalistes présents par édition',
        'Leadership équipe de 5 personnes (2014-2017) et gestion de crise post-attaques 2015',
        'Stratégie relations institutionnelles locales, régionales et préfectorales complète',
        'Transition média Scarecrow : indépendants français → couverture nationale/internationale (120+ pages)',
        'Expansion City Kay : couverture locale → internationale (Rolling Stone Magazine Mexico)',
        'Coordination événements presse et interviews pour maximiser visibilité artistique'
      ]
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <section id="timeline" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-800 dark:text-white">
            {t('timeline.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('timeline.subtitle')}
          </p>
        </motion.div>

        {/* Statistiques rapides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                <CountUp end={stat.number} duration={2} suffix={stat.suffix} />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <VerticalTimeline animate={true}>
          {timelineData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgb(255, 255, 255)',
                color: '#374151',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb'
              }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
              date={experience.period}
              iconStyle={{
                background: '#fff',
                border: '3px solid #3b82f6',
                boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.1)',
              }}
              icon={
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company}
                    className="w-8 h-8 object-contain rounded"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              }
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{experience.title}</h3>
                <h4 className="text-lg font-semibold text-blue-600 mb-1">{experience.company}</h4>
                <p className="text-sm text-gray-500 mb-3">{experience.location}</p>
              </div>

              {/* Métriques clés */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                {experience.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{achievement.metric}</div>
                    <div className="text-xs text-gray-600">{achievement.text}</div>
                  </div>
                ))}
              </div>

              {/* Détails principaux */}
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mb-4">
                {experience.details.slice(0, 3).map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
                {experience.details.length > 3 && (
                  <li className="text-blue-600 cursor-pointer hover:underline" onClick={() => openModal(experience)}>
                    +{experience.details.length - 3} autres réalisations...
                  </li>
                )}
              </ul>

              {experience.details.length <= 3 && (
                <button
                  onClick={() => openModal(experience)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                >
                  Voir plus de détails →
                </button>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        {/* CTA en fin de timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            {t('timeline.cta')}
          </button>
        </motion.div>
      </div>

      {/* Modal pour les détails d'expérience */}
      {isModalOpen && selectedExperience && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-2xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              ✕
            </button>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {selectedExperience.title}
              </h3>
              <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-1">
                {selectedExperience.company}
              </h4>
              <p className="text-gray-500 dark:text-gray-400 mb-1">{selectedExperience.location}</p>
              <p className="text-gray-500 dark:text-gray-400">{selectedExperience.period}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {selectedExperience.achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {achievement.metric}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{achievement.text}</div>
                </div>
              ))}
            </div>

            <div>
              <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Principales réalisations :
              </h5>
              <ul className="space-y-3">
                {selectedExperience.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CareerTimeline;
