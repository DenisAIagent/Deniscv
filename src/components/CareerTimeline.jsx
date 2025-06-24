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
        { metric: '50+', text: t('chiffres.media_mentions') },
        { metric: '100+', text: t('chiffres.media_projects') },
        { metric: '90%', text: t('chiffres.press_success') }
      ],
      details: [
        t('timeline.pr_manager.strategy'),
        t('timeline.pr_manager.press_releases'),
        t('timeline.pr_manager.media_relations'),
        t('timeline.pr_manager.press_events'),
        t('timeline.pr_manager.monitoring')
      ]
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    // ... (code JSX inchangé)
  );
};

export default CareerTimeline;
