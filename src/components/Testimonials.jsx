import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">{t('testimonials.title')}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: t('testimonials.camille.name'),
            title: t('testimonials.camille.title'),
            text: t('testimonials.camille.text'),
          },
          {
            name: t('testimonials.lucas.name'),
            title: t('testimonials.lucas.title'),
            text: t('testimonials.lucas.text'),
          },
          {
            name: t('testimonials.marta.name'),
            title: t('testimonials.marta.title'),
            text: t('testimonials.marta.text'),
          }
        ].map(({ name, title, text }, idx) => (
          <blockquote key={idx} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <p className="text-gray-800 dark:text-gray-100 italic mb-4">"{text}"</p>
            <footer className="text-sm text-gray-600 dark:text-gray-300">
              <strong>{name}</strong>, {title}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 