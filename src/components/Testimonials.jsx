import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  const feedbacks = [
    {
      name: t('testimonials.tachfin.name'),
      title: t('testimonials.tachfin.title'),
      text: t('testimonials.tachfin.text'),
    },
    {
      name: t('testimonials.customer_feedback.title'),
      title: '',
      text: t('testimonials.customer_feedback.fraud'),
    },
    {
      name: t('testimonials.customer_feedback.title'),
      title: '',
      text: t('testimonials.customer_feedback.mbappe'),
    },
    {
      name: t('testimonials.customer_feedback.title'),
      title: '',
      text: t('testimonials.customer_feedback.covid'),
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">{t('testimonials.title')}</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {feedbacks.map(({ name, title, text }, idx) => (
          <blockquote key={idx} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <p className="text-gray-800 dark:text-gray-100 italic mb-4 whitespace-pre-line">"{text}"</p>
            <footer className="text-sm text-gray-600 dark:text-gray-300">
              <strong>{name}</strong>{title && `, ${title}`}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 