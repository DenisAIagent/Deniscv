import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          {/* Placeholder for Legal Notice link - maybe a modal or separate page later */}
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">{t('footer.legal')}</a>
          <span className="mx-2">|</span>
          <span>{t('footer.hosting')}</span>
        </div>
        <div>
          <span>{t('footer.copyright').replace('© Denis Adam', `© ${currentYear} Denis Adam`)}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

