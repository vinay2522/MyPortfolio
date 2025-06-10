import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub />,
      url: 'https://github.com/vinay2522',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      url: 'https://linkedin.com/in/vinay-naik-v-4aa303251',
    },
    {
      name: 'Twitter',
      icon: <FiTwitter />,
      url: 'https://twitter.com/Vinay_252',
    },
    {
      name: 'Instagram',
      icon: <FiInstagram />,
      url: 'https://www.instagram.com/_vinay_252',
    },
  ];

  return (
    <footer className="py-6 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-textSecondary text-sm">
            © 2024 Vinay Naik V. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
