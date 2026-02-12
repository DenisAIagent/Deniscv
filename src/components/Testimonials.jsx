import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
      <div className="max-w-2xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={32}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          a11y={{ prevSlideMessage: 'Témoignage précédent', nextSlideMessage: 'Témoignage suivant' }}
        >
          {feedbacks.map(({ name, title, text }, idx) => (
            <SwiperSlide key={idx}>
              <blockquote className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md flex flex-col items-center">
                <p className="text-gray-800 dark:text-gray-100 italic mb-6 whitespace-pre-line text-lg">"{text}"</p>
                <footer className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  <strong>{name}</strong>{title && `, ${title}`}
                </footer>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials; 