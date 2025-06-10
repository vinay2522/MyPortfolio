import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMail, FiDownload, FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi';

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: <FiMail className="w-5 h-5" />,
      label: 'Email Me',
      action: () => window.location.href = 'mailto:vinaynaik252@gmail.com',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: <FiDownload className="w-5 h-5" />,
      label: 'Download Resume',
      action: () => {
        const link = document.createElement('a');
        link.href = '/MyPortfolio/images/VINAYNAIKV_RESUME.pdf';
        link.download = 'Vinay_Naik_V_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: <FiGithub className="w-5 h-5" />,
      label: 'GitHub',
      action: () => window.open('https://github.com/vinay2522', '_blank'),
      color: 'bg-gray-700 hover:bg-gray-800'
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      action: () => window.open('https://linkedin.com/in/vinay-naik-v', '_blank'),
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="mb-4 p-3 bg-secondary text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <FiArrowUp className="w-6 h-6" />
      </motion.button>

      {/* Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-3 mb-4"
          >
            {actions.map((action, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  action.action();
                  setIsOpen(false);
                }}
                className={`flex items-center space-x-3 p-3 ${action.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {action.icon}
                <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-0 group-hover:max-w-xs overflow-hidden">
                  {action.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={toggleMenu}
        className="p-4 bg-secondary text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        <FiPlus className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default FloatingActions;
