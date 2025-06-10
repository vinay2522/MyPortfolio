import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [adminClickCount, setAdminClickCount] = useState(0);
  const [showAdminButton, setShowAdminButton] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme detection
  useEffect(() => {
    const checkTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      setIsDark(savedTheme === 'dark' || savedTheme === null);
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      checkTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset admin click count after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setAdminClickCount(0);
    }, 2000);

    return () => clearTimeout(timer);
  }, [adminClickCount]);

  const handleLogoClick = () => {
    setAdminClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 3) {
        setShowAdminButton(true);
        setTimeout(() => setShowAdminButton(false), 3000);
        return 0;
      }
      return newCount;
    });
  };

  const handleAdminAccess = () => {
    navigate('/admin');
    setShowAdminButton(false);
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Resume', to: 'resume' },
    { name: 'Contact', to: 'contact' },
  ];

  const getResumeUrl = () => {
    // Always use the base path for consistency
    return '/MyPortfolio/images/VINAYNAIKV_RESUME.pdf';
  };

  const getNavbarStyle = () => {
    if (!scrolled) return 'py-4 sm:py-6';

    return 'py-3 sm:py-4 shadow-lg backdrop-blur-sm';
  };

  const getNavbarBg = () => {
    if (!scrolled) {
      return {
        backgroundColor: isDark ? 'rgba(10, 25, 47, 0.8)' : 'rgba(255, 255, 255, 0.8)'
      };
    }

    return {
      backgroundColor: isDark ? 'rgba(10, 25, 47, 0.95)' : 'rgba(255, 255, 255, 0.95)'
    };
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${getNavbarStyle()}`}
      style={getNavbarBg()}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="relative">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-3xl sm:text-4xl font-bold text-secondary cursor-pointer hover:scale-110 transition-transform"
              onClick={handleLogoClick}
            >
              VNV
            </Link>
            {showAdminButton && (
              <button
                onClick={handleAdminAccess}
                className="absolute top-full left-0 mt-2 bg-gradient-to-r from-secondary to-primary text-white px-4 py-2 rounded-md hover:scale-105 duration-300 shadow-lg text-sm z-50"
              >
                Admin Access
              </button>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                className="nav-link text-sm lg:text-base xl:text-lg relative group py-2 px-2 cursor-pointer"
                offset={-70}
              >
                <span className="relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden mobile-menu-button">
            <button
              className="text-textSecondary hover:text-secondary transition-colors duration-300 p-2 z-[60] touch-target relative flex items-center justify-center border border-textSecondary/20 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              style={{
                minWidth: '44px',
                minHeight: '44px',
                color: isDark ? '#8892B0' : '#0A192F',
                backgroundColor: isDark ? 'rgba(17, 34, 64, 0.8)' : 'rgba(255, 255, 255, 0.8)'
              }}
            >
              {isOpen ? (
                <HiX className="h-6 w-6 sm:h-7 sm:w-7" />
              ) : (
                <HiMenu className="h-6 w-6 sm:h-7 sm:w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden z-50 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          backgroundColor: isDark ? 'rgba(10, 25, 47, 0.98)' : 'rgba(255, 255, 255, 0.98)'
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-textSecondary hover:text-secondary transition-colors duration-300 p-2 z-[60] touch-target"
          aria-label="Close menu"
        >
          <HiX className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-6 sm:space-y-8 p-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              className="nav-link text-xl sm:text-2xl font-semibold hover:text-secondary transition-all duration-300 touch-target flex items-center justify-center py-3 px-6 rounded-lg hover:bg-secondary/10"
              onClick={() => setIsOpen(false)}
              offset={-70}
              style={{
                animationDelay: isOpen ? `${index * 0.1}s` : '0s'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
