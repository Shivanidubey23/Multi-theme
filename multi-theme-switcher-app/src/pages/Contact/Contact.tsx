import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
 
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </header>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h2 className={styles.infoTitle}>Get in Touch</h2>
            
            <div className={styles.infoItem}>
              <h3 className={styles.infoLabel}>Email</h3>
              <p className={styles.infoValue}>hello@multithemeswitcher.com</p>
            </div>

            <div className={styles.infoItem}>
              <h3 className={styles.infoLabel}>Phone</h3>
              <p className={styles.infoValue}>+1 (555) 123-4567</p>
            </div>

            <div className={styles.infoItem}>
              <h3 className={styles.infoLabel}>Address</h3>
              <p className={styles.infoValue}>
                123 Theme Street<br />
                Design City, DC 12345<br />
                United States
              </p>
            </div>

            <div className={styles.infoItem}>
              <h3 className={styles.infoLabel}>Office Hours</h3>
              <p className={styles.infoValue}>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.formTitle}>Send us a Message</h2>
            
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.input}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.input}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={styles.input}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={styles.textarea}
                rows={5}
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className={`${styles.submitButton} ${
                !isFormValid || isSubmitting ? styles.submitButtonDisabled : ''
              }`}
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className={styles.successMessage}>
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={styles.errorMessage}>
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;