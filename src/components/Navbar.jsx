import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [adminClickCount, setAdminClickCount] = useState(0);
  const [showAdminButton, setShowAdminButton] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    { name: 'Contact', to: 'contact' },
  ];

  const getResumeUrl = () => {
    // Check if we're in development or production
    const isProduction = window.location.hostname !== 'localhost';
    return isProduction 
      ? '/portfolio_updated/images/resume.pdf'
      : '/images/resume.pdf';
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-4xl font-bold text-secondary cursor-pointer hover:scale-110 transition-transform"
              onClick={handleLogoClick}
            >
              VNV
            </Link>
            {showAdminButton && (
              <button
                onClick={handleAdminAccess}
                className="absolute top-full left-0 mt-2 bg-gradient-to-r from-secondary to-primary text-white px-4 py-2 rounded-md hover:scale-105 duration-300 shadow-lg text-sm"
              >
                Admin Access
              </button>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                className="nav-link text-base lg:text-lg relative group py-2"
                offset={-70}
              >
                <span className="relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ))}
            <a
              href={getResumeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base lg:text-lg"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuRef}
            className="md:hidden text-textSecondary hover:text-secondary transition-colors duration-300 p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <HiX className="h-8 w-8" />
            ) : (
              <HiMenu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-primary/98 backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        ref={menuRef}
      >
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              className="nav-link text-2xl font-semibold hover:text-secondary transition-colors duration-300"
              onClick={() => setIsOpen(false)}
              offset={-70}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={getResumeUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xl"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
