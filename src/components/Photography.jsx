import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// --- Swiper Imports ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- Photos ---
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
import sum112 from '../assets/images/portfolio/Sum11 2 - Grande.jpeg';
import sum42 from '../assets/images/portfolio/Sum4 2 - Grande.jpeg';
import peaklesTivoli45 from '../assets/images/portfolio/The Peakles Tivoli-45 - Grande.jpeg';

// --- Screenshots Web ---
import screenshotMounjago from '../assets/images/portfolio/screenshot-mounjago.jpg';
import screenshotCamille from '../assets/images/portfolio/screenshot-camille.jpg';
import screenshotMdmc from '../assets/images/portfolio/screenshot-mdmc.jpg';
import screenshotDenis from '../assets/images/portfolio/screenshot-denis.jpg';

const WEB_PROJECTS = [
  {
    name: 'MounjaGO',
    url: 'https://mounjago.com/',
    desc: {
      fr: "Application gratuite de suivi sante pour patients sous Mounjaro. Suivi des injections, evolution du poids, graphiques de progression et rappels.",
      en: "Free health tracking app for Mounjaro patients. Injection tracking, weight evolution, progress charts and reminders.",
      es: "Aplicacion gratuita de seguimiento de salud para pacientes con Mounjaro. Seguimiento de inyecciones, peso, graficos de progreso y recordatorios.",
      pt: "Aplicacao gratuita de acompanhamento de saude para pacientes com Mounjaro. Acompanhamento de injecoes, peso, graficos de progresso e lembretes."
    },
    tech: ['React', 'Vite', 'Tailwind CSS', 'PWA'],
    screenshot: screenshotMounjago
  },
  {
    name: 'Camille Osteopatia',
    url: 'https://www.camilleosteopatia.com/fr',
    desc: {
      fr: "Site vitrine pour un cabinet d'osteopathie a Lisbonne. Presentation des soins, prise de rendez-vous, multilingue.",
      en: "Showcase website for an osteopathy practice in Lisbon. Treatment presentation, appointment booking, multilingual.",
      es: "Sitio web para un consultorio de osteopatia en Lisboa. Presentacion de tratamientos, citas, multilingue.",
      pt: "Site vitrine para um consultorio de osteopatia em Lisboa. Apresentacao dos tratamentos, marcacao de consultas, multilingue."
    },
    tech: ['React', 'i18n', 'Tailwind CSS'],
    screenshot: screenshotCamille
  },
  {
    name: 'MDMC Music Ads',
    url: 'https://www.mdmcmusicads.com',
    desc: {
      fr: "Site de l'agence de marketing musical. Presentation des services, portfolio d'artistes, tunnel de conversion.",
      en: "Music marketing agency website. Service presentation, artist portfolio, conversion funnel.",
      es: "Sitio de la agencia de marketing musical. Presentacion de servicios, portafolio de artistas, embudo de conversion.",
      pt: "Site da agencia de marketing musical. Apresentacao dos servicos, portfolio de artistas, funil de conversao."
    },
    tech: ['React', 'Node.js', 'Railway'],
    screenshot: screenshotMdmc
  },
  {
    name: 'Denis Adam - CV',
    url: 'https://adam-denis.com',
    desc: {
      fr: "Ce site ! CV interactif multilingue avec dark mode, animations et formulaire de contact.",
      en: "This website! Multilingual interactive CV with dark mode, animations and contact form.",
      es: "Este sitio! CV interactivo multilingue con modo oscuro, animaciones y formulario de contacto.",
      pt: "Este site! CV interativo multilingue com modo escuro, animacoes e formulario de contato."
    },
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'i18n'],
    screenshot: screenshotDenis
  }
];

const Photography = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('photos');
  const lang = i18n.language?.substring(0, 2) || 'fr';

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
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            {t('portfolio.title')}
          </motion.h2>

          {/* Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'photos'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {t('portfolio_tabs.photos')}
              </button>
              <button
                onClick={() => setActiveTab('web')}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'web'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {t('portfolio_tabs.web')}
              </button>
            </div>
          </motion.div>

          {/* Photos Tab */}
          {activeTab === 'photos' && (
            <>
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
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
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
            </>
          )}

          {/* Web Projects Tab */}
          {activeTab === 'web' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {WEB_PROJECTS.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="w-full h-44 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={project.screenshot}
                      alt={project.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.desc[lang] || project.desc.fr}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((techItem, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Photography;
