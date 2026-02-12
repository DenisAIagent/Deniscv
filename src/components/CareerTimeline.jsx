import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const CareerTimeline = () => {
  const { t } = useTranslation();
  const today = t('timeline.today', "Aujourd'hui");

  const timelineData = [
    {
      title: t('timeline.cmo.title'),
      company: t('timeline.cmo.company', 'BandStream SAS - Paris'),
      period: `2024 - ${today}`,
      icon: 'https://i.postimg.cc/xTvBjg8H/Bandstream-logo-quadri-noir.png',
      details: [
        t('timeline.cmo.strategy'),
        t('timeline.cmo.mvp'),
        t('timeline.cmo.partnerships'),
        t('timeline.cmo.market'),
      ],
    },
    {
      title: t('timeline.team_leader.title'),
      company: t('timeline.team_leader.company', 'John Paul - Lisbonne'),
      period: '2019 - 2024',
      icon: 'https://i.postimg.cc/GmJzMZhB/john-paul-vector-logo.png',
      details: [
        t('timeline.team_leader.team_creation'),
        t('timeline.team_leader.planning'),
        t('timeline.team_leader.quality'),
        t('timeline.team_leader.coaching'),
      ],
    },
    {
      title: t('timeline.digital_marketing.title'),
      company: t('timeline.digital_marketing.company', 'MDMC Music Ads - Lisbonne / Paris'),
      period: `2018 - ${today}`,
      icon: 'https://i.postimg.cc/dDc3TZGf/favicon.png',
      details: [
        t('timeline.digital_marketing.strategy'),
        t('timeline.digital_marketing.performance'),
        t('timeline.digital_marketing.business'),
        t('timeline.digital_marketing.recruitment'),
      ],
    },
    {
      title: t('timeline.account_strategist.title'),
      company: t('timeline.account_strategist.company', 'Google Ads - Lisbonne, Portugal'),
      period: '2017 - 2018',
      icon: 'https://i.postimg.cc/259QMmp5/Google-Ads-logo-svg.png',
      details: [
        t('timeline.account_strategist.management'),
        t('timeline.account_strategist.strategy'),
      ],
    },
    {
      title: t('timeline.pr_manager.title'),
      company: t('timeline.pr_manager.company', 'Secteur musical et culturel - France'),
      period: '2011 - 2016',
      icon: 'https://i1.sndcdn.com/avatars-000110067276-kjiaym-t1080x1080.jpg',
      details: [
        t('timeline.pr_manager.strategy_creation'),
        t('timeline.pr_manager.value_transformation'),
      ],
    },
    {
      title: t('timeline.radio.title'),
      company: t('timeline.radio.company', 'Emission Session Live - 20 stations'),
      period: '2008 - 2011',
      details: [t('timeline.radio.description')],
    },
    {
      title: t('timeline.ambulancier.title'),
      company: t('timeline.ambulancier.company', 'Secteur prive - France'),
      period: '2003 - 2008',
      details: [t('timeline.ambulancier.description')],
    },
  ];

  return (
    <section id="timeline" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
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

        <VerticalTimeline animate={true}>
          {timelineData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgb(255, 255, 255)',
                color: '#374151',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb',
              }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
              date={experience.period}
              iconStyle={{
                background: '#fff',
                border: '3px solid #3b82f6',
                boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.1)',
              }}
              icon={
                experience.icon ? (
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company}
                      className="w-8 h-8 object-contain rounded"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                ) : null
              }
            >
              <div className="mb-3">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{experience.title}</h3>
                <h4 className="text-lg font-semibold text-blue-600 mb-2">{experience.company}</h4>
              </div>

              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                {experience.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

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
    </section>
  );
};

export default CareerTimeline;
