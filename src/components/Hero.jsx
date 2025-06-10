import React from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import TerminalHero from './TerminalHero';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      <div className="max-w-4xl w-full">
        <div
          className="text-center lg:text-left space-y-4 sm:space-y-6 md:space-y-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-secondary font-mono text-xs sm:text-sm md:text-base lg:text-lg">
            Hi, my name is
          </h2>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-textPrimary">Vinay Naik V</span>
          </h1>

          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-textSecondary leading-tight">
            <TypeAnimation
              sequence={[
                'Student Developer',
                2000,
                'Tech Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block"
            />
          </div>

          <p className="text-textSecondary text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I'm a passionate student developer currently pursuing my Bachelor's in Computer Science.
            I love building things for the web and exploring new technologies.
          </p>

          {/* Terminal Component */}
          <div className="my-6 sm:my-8">
            <TerminalHero />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 pt-2 sm:pt-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn-primary group flex items-center space-x-2 w-full sm:w-auto justify-center text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              <span>View My Work</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 w-3 h-3 sm:w-4 sm:h-4" />
            </Link>

            <a
              href="/MyPortfolio/images/VINAYNAIKV_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-center hover:bg-secondary/20 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 pt-6 sm:pt-8">
            <a
              href="https://github.com/vinay2522"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transform hover:-translate-y-1 transition-all duration-300 p-2"
              aria-label="GitHub Profile"
            >
              <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/vinay-naik-v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transform hover:-translate-y-1 transition-all duration-300 p-2"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://x.com/Vinay_252_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transform hover:-translate-y-1 transition-all duration-300 p-2"
              aria-label="Twitter Profile"
            >
              <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:vinaynaik252@gmail.com"
              className="text-textSecondary hover:text-secondary transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 p-2"
              aria-label="Email Me"
            >
              <FiMail className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm hidden md:inline">vinaynaik252@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
