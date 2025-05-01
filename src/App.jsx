import { useTranslation } from 'react-i18next';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Photography from './components/Photography';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle'; // Import DarkModeToggle
import useDarkMode from './hooks/useDarkMode'; // Import the hook to manage dark mode state

function App() {
  const { i18n } = useTranslation();
  const [isDarkMode] = useDarkMode(); // Get dark mode state

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Improved language switcher and dark mode toggle container
  const Controls = () => (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm p-1 rounded-lg shadow-md">
      {/* Language Buttons */}
      <div className="flex space-x-1">
        <button onClick={() => changeLanguage('fr')} className={`px-2 py-1 text-xs rounded ${i18n.language === 'fr' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>FR</button>
        <button onClick={() => changeLanguage('en')} className={`px-2 py-1 text-xs rounded ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>EN</button>
        <button onClick={() => changeLanguage('es')} className={`px-2 py-1 text-xs rounded ${i18n.language === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>ES</button>
        <button onClick={() => changeLanguage('pt')} className={`px-2 py-1 text-xs rounded ${i18n.language === 'pt' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>PT</button>
      </div>
      {/* Dark Mode Toggle */}
      <DarkModeToggle />
    </div>
  );

  return (
    // Apply dark class dynamically based on the hook's state
    <div className={`${isDarkMode ? 'dark' : ''} bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 font-sans`}>
      <Controls />
      <Hero />
      <ValueProp />
      <Achievements />
      <Skills />
      <Photography />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

