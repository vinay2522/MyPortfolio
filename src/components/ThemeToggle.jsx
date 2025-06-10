import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    const body = document.body;

    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      body.style.backgroundColor = '#0A192F';
      body.style.color = '#CCD6F6';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      body.style.backgroundColor = '#FFFFFF';
      body.style.color = '#2D3748';
    }

    // Save theme preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[9999] p-2.5 sm:p-3 rounded-full border-2 shadow-xl transition-all duration-300 cursor-pointer touch-target"
      style={{
        backgroundColor: isDark ? '#112240' : '#F8F9FA',
        borderColor: isDark ? '#64FFDA' : '#0A192F',
        color: isDark ? '#64FFDA' : '#0A192F',
        boxShadow: isDark
          ? '0 20px 25px -5px rgba(100, 255, 218, 0.1), 0 10px 10px -5px rgba(100, 255, 218, 0.04)'
          : '0 20px 25px -5px rgba(10, 25, 47, 0.1), 0 10px 10px -5px rgba(10, 25, 47, 0.04)'
      }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <motion.div
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FiSun className="w-4 h-4 sm:w-5 sm:h-5" />
        ) : (
          <FiMoon className="w-4 h-4 sm:w-5 sm:h-5" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
