import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" data-aos="fade-up">
          Get In Touch
        </h2>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6" data-aos="fade-right">
            <h3 className="text-xl sm:text-2xl font-bold text-textPrimary">
              Let's Connect
            </h3>
            <p className="text-textSecondary text-sm sm:text-base lg:text-lg leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>

            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:vinaynaik252@gmail.com"
                className="flex items-center space-x-3 text-textSecondary hover:text-secondary transition-colors duration-300 p-2 rounded-lg hover:bg-tertiary/50"
              >
                <FiMail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">vinaynaik252@gmail.com</span>
              </a>
              <a
                href="tel:+918147938224"
                className="flex items-center space-x-3 text-textSecondary hover:text-secondary transition-colors duration-300 p-2 rounded-lg hover:bg-tertiary/50"
              >
                <FiPhone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="text-sm sm:text-base">+91 8147938224</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6"
            data-aos="fade-left"
          >
            <div>
              <label htmlFor="name" className="block text-textSecondary mb-2 text-sm sm:text-base">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-tertiary border border-textSecondary/20 rounded-lg focus:outline-none focus:border-secondary text-textPrimary text-sm sm:text-base"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-textSecondary mb-2 text-sm sm:text-base">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-tertiary border border-textSecondary/20 rounded-lg focus:outline-none focus:border-secondary text-textPrimary text-sm sm:text-base"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-textSecondary mb-2 text-sm sm:text-base">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-tertiary border border-textSecondary/20 rounded-lg focus:outline-none focus:border-secondary text-textPrimary resize-none text-sm sm:text-base"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`btn-primary w-full flex items-center justify-center space-x-2 text-sm sm:text-base py-2.5 sm:py-3 ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend className="w-4 h-4 sm:w-5 sm:h-5" />
                </>
              )}
            </button>

            {error && (
              <p className="text-red-500 text-center mt-2 text-sm sm:text-base">{error}</p>
            )}
            {success && (
              <p className="text-green-500 text-center mt-2 text-sm sm:text-base">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
