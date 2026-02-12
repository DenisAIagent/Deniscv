// src/App.jsx
import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import DarkModeToggle from './components/DarkModeToggle';
import useDarkMode from './hooks/useDarkMode';
import ScrollToTop from './components/ScrollToTop';
import ReadingProgress from './components/ReadingProgress';
import SEOHead from './components/SEOHead';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy-loaded components for better performance
const ValueProp = lazy(() => import('./components/ValueProp'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const CareerTimeline = lazy(() => import('./components/CareerTimeline'));
const Photography = lazy(() => import('./components/Photography'));
const Achievements = lazy(() => import('./components/Achievements'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const SectionFallback = () => (
  <div className="flex items-center justify-center py-24" role="status" aria-label="Chargement">
    <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  const { i18n } = useTranslation();
  const [isDarkMode] = useDarkMode();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const Controls = () => (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm p-1 rounded-lg shadow-md print:hidden">
      <nav aria-label="Langue" className="flex space-x-1">
        <button onClick={() => changeLanguage('fr')} aria-label="Version francaise" className={`px-2 py-1 text-xs rounded ${i18n.language === 'fr' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>FR</button>
        <button onClick={() => changeLanguage('en')} aria-label="English version" className={`px-2 py-1 text-xs rounded ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>EN</button>
        <button onClick={() => changeLanguage('es')} aria-label="Version en espanol" className={`px-2 py-1 text-xs rounded ${i18n.language === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>ES</button>
        <button onClick={() => changeLanguage('pt')} aria-label="Versao em portugues" className={`px-2 py-1 text-xs rounded ${i18n.language === 'pt' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>PT</button>
      </nav>
      <DarkModeToggle />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SEOHead />
      <ReadingProgress />

      {/* Skip to main content - accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:outline-none"
      >
        Aller au contenu principal
      </a>

      <Navbar />
      <Controls />
      <Hero />

      <main id="main-content" role="main">
        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <ValueProp />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <CareerTimeline />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <Photography />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <Achievements />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <Testimonials />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </main>

      <ErrorBoundary>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
      <ScrollToTop />
    </div>
  );
}

export default App;
