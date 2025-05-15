import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// --- Swiper Imports ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// ----------------------

// --- Importation de vos photos réelles ---
// Assurez-vous que ce chemin '../assets/images/portfolio/' est correct
import marine82 from '../assets/images/portfolio/marine-8 2 - Grande.jpeg';
import blackPumas from '../assets/images/portfolio/Black Pumas - Grande.jpeg';
import cigarettes1 from '../assets/images/portfolio/Cigarettes after sex-1 - Grande.jpeg';
import fallingReverse102 from '../assets/images/portfolio/Falling In Reverse-10 2 - Grande.jpeg';
import fallingReverse11 from '../assets/images/portfolio/Falling In Reverse-11 - Grande.jpeg';
import img0345 from '../assets/images/portfolio/IMG_0345 - Grande.jpeg';
import img0375 from '../assets/images/portfolio/IMG_0375 - Grande.jpeg';
import img0660 from '../assets/images/portfolio/IMG_0660 - Grande.jpeg';
import leonoreHonorable from '../assets/images/portfolio/Leonore mention honorable - Grande.jpeg';
import nathaniel52 from '../assets/images/portfolio/Nathaniel Rateliff & The Night Sweats-5 2 - Grande.jpeg';
import sum112 from '../assets/images/portfolio/Sum11 2 - Grande.jpeg'; // Assurez-vous que le nom de fichier est correct si c'est Sum 41
import sum42 from '../assets/images/portfolio/Sum4 2 - Grande.jpeg';   // Assurez-vous que le nom de fichier est correct si c'est Sum 41
import peaklesTivoli45 from '../assets/images/portfolio/The Peakles Tivoli-45 - Grande.jpeg';
// ----------------------------------------------------

const Photography = () => {
  const { t } = useTranslation();

  const portfolioPhotos = [
    { src: marine82, alt: t('portfolio.photos.0') },
    { src: blackPumas, alt: t('portfolio.photos.1') },
    { src: cigarettes1, alt: t('portfolio.photos.2') },
    { src: fallingReverse102, alt: t('portfolio.photos.3') },
    { src: fallingReverse11, alt: t('portfolio.photos.4') },
    { src: img0345, alt: t('portfolio.photos.5') },
    { src: img0375, alt: t('portfolio.photos.6') },
    { src: img0660, alt: t('portfolio.photos.7') },
    { src: leonoreHonorable, alt: t('portfolio.photos.8') },
    { src: nathaniel52, alt: t('portfolio.photos.9') },
    { src: sum112, alt: t('portfolio.photos.10') },
    { src: sum42, alt: t('portfolio.photos.11') },
    { src: peaklesTivoli45, alt: t('portfolio.photos.12') }
  ];

  const pressMentions = [
    t('reconnaissances.forbes'),
    t('reconnaissances.rollingstone'),
    t('reconnaissances.ipa')
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="photography" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            {t('portfolio.title')}
          </motion.h2>

          <motion.div variants={itemVariants} className="mb-12 relative group">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{ clickable: true }}
              loop={true}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {portfolioPhotos.map((photo, index) => (
                <SwiperSlide key={index} className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-72 md:h-96 object-contain"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev-custom absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-black bg-opacity-40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
            </div>
            <div className="swiper-button-next-custom absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-black bg-opacity-40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              {t('reconnaissances.title')}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
              {pressMentions.map((mention, index) => (
                <span key={index} className="text-md text-gray-600 dark:text-gray-400 font-medium">{mention}</span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <a
              href="https://www.instagram.com/d.adam.photography/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 transition duration-300"
            >
              {t('cta_portfolio')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Photography;
