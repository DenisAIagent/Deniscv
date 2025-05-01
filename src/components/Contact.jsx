import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; // Import emailjs

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  // --- TODO: Replace with actual EmailJS credentials --- 
  const SERVICE_ID = 'service_ex03wyi'; // Replace with user's Service ID
  const TEMPLATE_ID = 'template_a87k1rm'; // Replace with user's Contact Template ID
  const PUBLIC_KEY = 'a3nA-PiQ5mEXFNbv2'; // Replace with user's Public Key
  // -----------------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || SERVICE_ID === 'YOUR_SERVICE_ID') {
        console.error('EmailJS credentials are not configured.');
        setSubmitStatus('error'); // Indicate error if credentials are placeholders
        // Hide status message after a few seconds
        setTimeout(() => setSubmitStatus(null), 5000);
        return; // Prevent submission if not configured
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Hide status message after a few seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 variants={itemVariants} id="contact-heading" className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">{t('contact.title')}</motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Contact Form */}
            <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.form_name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  autoComplete="name" // Add autocomplete attribute
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.form_email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  autoComplete="email" // Add autocomplete attribute
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.form_message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                ></textarea>
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : t('contact.form_submit')}
                </motion.button>
              </div>
              {/* Status messages with ARIA live regions */}
              {submitStatus === 'success' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} role="status" aria-live="polite" className="text-green-600 dark:text-green-400 text-center mt-4">{t('contact.success_message')}</motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} role="alert" aria-live="assertive" className="text-red-600 dark:text-red-400 text-center mt-4">An error occurred. Please check credentials or try again.</motion.p> // Updated error message
              )}
            </motion.form>

            {/* Direct Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4 text-gray-700 dark:text-gray-300" aria-label="Direct contact information">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Direct Coordinates</h3>
              <p>
                <strong>Email:</strong> <a href="mailto:denis.adam@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">denis.adam@example.com</a>
              </p>
              <p>
                <strong>{t('contact.timezone')}:</strong> Europe/Paris (GMT+2)
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

