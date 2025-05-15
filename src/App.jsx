// src/App.jsx
import React from 'react'; // <-- React doit aussi être importé si ce n'est pas déjà fait implicitement par votre config Vite
import { useTranslation } from 'react-i18next';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Achievements from './components/Achievements';
import About from './components/About'; // <-- AJOUTER CET IMPORT
import Skills from './components/Skills';
import Photography from './components/Photography';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const { i18n } = useTranslation();
  const [isDarkMode] = useDarkMode();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const Controls = () => (
     <div className="fixed top-4 right-4 z-50 flex items-center space-x-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm p-1 rounded-lg shadow-md">
       {/* Language Buttons */}
       <div className="flex space-x-1">
        <button onClick={() => changeLanguage('fr')} className={`px-2 py-1 text-xs rounded ${i18n.language === 'fr' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>FR</button>
        <button onClick={() => changeLanguage('en')} className={`px-2 py-1 text-xs rounded ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>EN</button>
        <button onClick={() => changeLanguage('es')} className={`px-2 py-1 text-xs rounded ${i18n.language === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>ES</button>
        <button onClick={() => changeLanguage('pt')} className={`px-2 py-1 text-xs rounded ${i18n.language === 'pt' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>PT</button>
       </div>
      <DarkModeToggle />
    </div>
  );

  return (
    // Appliquez la classe 'dark' au conteneur principal si isDarkMode est vrai
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
       <Controls /> {/* Affiche les contrôles de langue/mode sombre */}
       <Hero />
       <ValueProp />
       <Achievements />
       <About />      {/* <-- AJOUTER CETTE LIGNE */}
       <Skills />     {/* Skills vient après About */}
       <Photography />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
