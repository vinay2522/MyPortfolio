import React from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div 
          className="text-center lg:text-left space-y-6 md:space-y-8" 
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-secondary font-mono text-sm sm:text-base md:text-lg">
            Hi, my name is
          </h2>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-textPrimary">Vinay Naik V</span>
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-textSecondary">
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
          
          <p className="text-textSecondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
            I'm a passionate student developer currently pursuing my Bachelor's in Computer Science. 
            I love building things for the web and exploring new technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn-primary group flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>View My Work</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <a
              href="/images/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-center hover:bg-secondary/20"
            >
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start space-x-6 pt-8">
            <a 
              href="https://github.com/vinay2522" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transform hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/vinay-naik-v" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transform hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:vinaynaik2522@gmail.com"
              className="text-textSecondary hover:text-secondary transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
              aria-label="Email Me"
            >
              <FiMail className="w-6 h-6" />
              <span className="text-sm hidden sm:inline">vinaynaik2522@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
