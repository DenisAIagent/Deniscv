import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import emailjs from '@emailjs/browser'; // Import emailjs

const CvModal = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // --- TODO: Replace with actual EmailJS credentials --- 
  const SERVICE_ID = 'service_ex03wyi'; // Replace with user's Service ID
  const CV_TEMPLATE_ID = 'template_otj96im'; // Replace with user's CV Request Template ID
  const PUBLIC_KEY = 'a3nA-PiQ5mEXFNbv2'; // Replace with user's Public Key
  // -----------------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!SERVICE_ID || !CV_TEMPLATE_ID || !PUBLIC_KEY || SERVICE_ID === 'YOUR_SERVICE_ID') {
        console.error('EmailJS credentials for CV request are not configured.');
        setSubmitStatus('error'); // Indicate error if credentials are placeholders
        // Hide status message after a few seconds
        setTimeout(() => setSubmitStatus(null), 5000);
        return; // Prevent submission if not configured
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Prepare template params - ensure these match your EmailJS template
    const templateParams = {
        to_name: formData.name, // Assuming your template uses {{to_name}}
        reply_to: formData.email, // Assuming your template uses {{reply_to}}
        // Add other params your CV template might need, e.g., a link to the CV PDF
        // cv_link: 'https://your-cv-link.com/cv.pdf' 
    };

    try {
      await emailjs.send(SERVICE_ID, CV_TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setSubmitStatus('success');
      setFormData({ name: '', email: '' }); // Clear form
      // Optionally close modal on success after a delay
      // setTimeout(() => onClose(), 3000);

      // Track the CV request
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'cv_download',
          lang: i18n.language,
          userAgent: navigator.userAgent
        }),
      });
    } catch (error) {
      console.error('EmailJS Error (CV Request):', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Hide status message after a few seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // Focus trapping and Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
      // Basic focus trapping (can be improved with a library)
      if (event.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) { // Shift + Tab
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else { // Tab
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    // Focus the close button when the modal opens
    closeButtonRef.current?.focus();

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } },
    exit: { opacity: 0, y: 50, scale: 0.9 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
          onClick={onClose} // Close modal when clicking backdrop
          role="dialog" // ARIA role for dialog
          aria-modal="true" // Indicates it's a modal dialog
          aria-labelledby="cv-modal-title" // Link title for screen readers
        >
          <motion.div
            ref={modalRef} // Ref for focus trapping
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              ref={closeButtonRef} // Ref for initial focus
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
              aria-label="Close modal" // ARIA label for close button
            >
              <FiX size={24} />
            </button>
            <h3 id="cv-modal-title" className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{t('cv_form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="cv_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('cv_form.name')}</label>
                <input
                  type="text"
                  id="cv_name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true" // ARIA attribute for required field
                  autoComplete="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="cv_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('cv_form.email')}</label>
                <input
                  type="email"
                  id="cv_email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  autoComplete="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : t('cv_form.submit')}
                </motion.button>
              </div>
              {/* Status messages with ARIA live regions */}
              {submitStatus === 'success' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} role="status" aria-live="polite" className="text-green-600 dark:text-green-400 text-center mt-4">{t('cv_form.success_message')}</motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} role="alert" aria-live="assertive" className="text-red-600 dark:text-red-400 text-center mt-4">An error occurred. Please check credentials or try again.</motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CvModal;

