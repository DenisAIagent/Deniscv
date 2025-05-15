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

// --- Utilisation des images importées dans le tableau ---
const portfolioPhotos = [
  // ***** IMPORTANT: Mettez à jour les textes 'alt' ci-dessous ! *****
  { src: marine82, alt: 'Marine en concert sur scène' }, // Description exemple
  { src: blackPumas, alt: 'Le groupe Black Pumas en concert' }, // Description exemple
  { src: cigarettes1, alt: 'Cigarettes After Sex sur scène' }, // Description exemple
  { src: fallingReverse102, alt: 'Falling In Reverse performance live 1' }, // Description exemple
  { src: fallingReverse11, alt: 'Falling In Reverse performance live 2' }, // Description exemple
  { src: img0345, alt: 'Artiste en concert, plan rapproché' }, // Description exemple
  { src: img0375, alt: 'Chanteur sur scène avec micro' }, // Description exemple
  { src: img0660, alt: 'Guitariste jouant en concert' }, // Description exemple
  { src: leonoreHonorable, alt: 'Portrait noir et blanc de Leonore, mention honorable IPA' }, // Description exemple
  { src: nathaniel52, alt: 'Nathaniel Rateliff & The Night Sweats en live' }, // Description exemple
  { src: sum112, alt: 'Groupe Sum 41 en concert, vue d\'ensemble' }, // Description exemple (Adaptez si ce n'est pas Sum 41)
  { src: sum42, alt: 'Groupe Sum 41 sur scène, autre angle' }, // Description exemple (Adaptez si ce n'est pas Sum 41)
  { src: peaklesTivoli45, alt: 'The Peakles Tivoli en performance au Tivoli' }, // Description exemple
];
// ------------------------------------------------------------

// --- Mentions Presse (Utilisez celles qui sont pertinentes) ---
const pressMentions = [
  'Publication Forbes',
  'Publication Rolling Stone',
  'Mention Honorable IPA Awards 2023'
];
// ---------------------------------------------------------

const Photography = () => {
  const { t } = useTranslation();

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="photography" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 overflow-hidden"> {/* Ajout overflow-hidden */}
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">{t('photography.title')}</motion.h2>

          {/* --- Carrousel Swiper --- */}
          <motion.div variants={itemVariants} className="mb-12 relative group"> {/* Ajout relative et group */}
            <Swiper
              // Installation des modules
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={30} // Espace entre les slides
              slidesPerView={1} // Afficher 1 slide par défaut (mobile)
              navigation={{ // Configuration des flèches custom
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{ clickable: true }} // Activer les points de pagination cliquables
              loop={true} // Faire boucler le carrousel
              className="mySwiper" // Classe pour styles custom si besoin
               breakpoints={{
                 // quand la largeur d'écran >= 640px
                 640: {
                   slidesPerView: 2,
                   spaceBetween: 20,
                 },
                 // quand la largeur d'écran >= 1024px
                 1024: {
                   slidesPerView: 3,
                   spaceBetween: 30,
                 },
               }}
            >
              {portfolioPhotos.map((photo, index) => (
                <SwiperSlide key={index} className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  {/* Image avec object-contain pour respecter le format */}
                  <img
                    src={photo.src}
                    alt={photo.alt} // Utilise le texte alt mis à jour !
                    className="w-full h-72 md:h-96 object-contain" // Hauteur fixe, object-contain pour l'aspect ratio
                    loading="lazy" // Lazy loading pour la performance
                  />
                </SwiperSlide>
              ))}
            </Swiper>
             {/* Flèches de navigation customisées (visibles au survol sur desktop) */}
             <div className="swiper-button-prev-custom absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-black bg-opacity-40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
             </div>
             <div className="swiper-button-next-custom absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-black bg-opacity-40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
             </div>
          </motion.div>
          {/* ------------------------ */}

          {/* --- Press Mentions --- */}
          <motion.div variants={itemVariants} className="text-center mb-8">
             <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">{t('photography.mentions_title')}</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
              {pressMentions.map((mention, index) => (
                <span key={index} className="text-md text-gray-600 dark:text-gray-400 font-medium">{mention}</span>
              ))}
            </div>
          </motion.div>
          {/* -------------------- */}

          {/* --- Lien vers le portfolio Instagram --- */}
          <motion.div variants={itemVariants} className="text-center">
            <a
              href="https://www.instagram.com/d.adam.photography/" // Lien mis à jour
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 transition duration-300"
            >
              {t('photography.portfolio_link')}
            </a>
          </motion.div>
          {/* ------------------------------------- */}
        </motion.div>
      </div>
    </section>
  );
};

export default Photography;
