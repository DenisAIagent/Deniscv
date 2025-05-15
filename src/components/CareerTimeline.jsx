import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from 'react-i18next';

const CareerTimeline = () => {
  const { t } = useTranslation();

  return (
    <section id="timeline" className="bg-white dark:bg-gray-900 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">{t('timeline.title')}</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          date="2022–2025"
          iconStyle={{ background: '#0B132B', color: '#fff' }}
          contentStyle={{ background: '#F8F9FA', color: '#000' }}
        >
          <h3 className="font-bold">{t('timeline.mdmc.title')}</h3>
          <p>{t('timeline.mdmc.desc')}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2019–2022"
          iconStyle={{ background: '#3A506B', color: '#fff' }}
        >
          <h3 className="font-bold">{t('timeline.johnpaul.title')}</h3>
          <p>{t('timeline.johnpaul.desc')}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2015–2019"
          iconStyle={{ background: '#FFD700', color: '#000' }}
        >
          <h3 className="font-bold">{t('timeline.google.title')}</h3>
          <p>{t('timeline.google.desc')}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default CareerTimeline; 