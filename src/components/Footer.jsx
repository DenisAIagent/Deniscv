import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <span>{t('footer.legal')}</span>
          <span className="mx-2">|</span>
          <span>{t('footer.hosting')}</span>
        </div>
        <div>
          <span>&copy; {currentYear} Denis Adam. Tous droits reserves.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
