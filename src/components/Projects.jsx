import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Integrated Ambulance Booking System',
      description: 'AI-powered ambulance booking web app integrating ML and animations. Designed with real-time predictive analytics and machine learning models for optimized route suggestions and booking predictions. Features an animated UI for seamless user experience.',
      tech: ['Machine Learning', 'React', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/vinay2522/Temp-mini_project-',
      live: '#',
      image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=1000&auto=format&fit=crop',
      isOngoing: true
    },
    {
      title: 'Evidence Chaining Using Blockchain',
      description: 'Created a blockchain-based system ensuring secure, tamper-proof evidence sharing in judicial processes. Enabled real-time evidence verification and validation, ensuring data integrity and transparency. Received 3rd place at Hackkshetra 2024.',
      tech: ['Blockchain', 'Solidity', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/vinay2522/Hackcult',
      live: '#',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop',
      isHackathon: true
    },
    {
      title: 'Plant Disease Detection',
      description: 'Built a deep learning model using TensorFlow to identify plant diseases from images. Integrated a user-friendly interface for real-time plant disease detection and recommendations. Used a large dataset of plant images for training.',
      tech: ['TensorFlow', 'Python', 'Flask', 'HTML', 'CSS'],
      github: 'https://github.com/vinay2522/plant_disease',
      live: '#',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Resume Builder App',
      description: 'Developed a web app using Streamlit to create dynamic and editable resumes. Enabled live previews and downloadable resume formats like PDF and DOCX.',
      tech: ['Streamlit', 'Python', 'HTML', 'CSS'],
      github: 'https://github.com/vinay2522/stream_lit_resume',
      live: 'https://appresume-lht5p3ftmdbn8ycygtshb3.streamlit.app/',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Live Calculator',
      description: 'Interactive calculator web application with real-time calculations and responsive design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/vinay2522/CALCULATOR',
      live: 'https://vinay2522.github.io/CALCULATOR/',
      image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
        
        <div className="mt-12 space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative grid md:grid-cols-12 gap-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Project Content */}
              <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative bg-tertiary p-6 rounded-lg shadow-xl">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-textPrimary">
                      {project.title}
                      {project.isOngoing && (
                        <span className="ml-2 text-xs font-normal text-secondary">(Ongoing)</span>
                      )}
                      {project.isHackathon && (
                        <span className="ml-2 text-xs font-normal text-secondary">(Hackathon Winner)</span>
                      )}
                    </h3>
                  </div>
                  
                  {/* Project Description */}
                  <p className="text-textSecondary mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-secondary text-sm font-mono px-2 py-1 bg-secondary/10 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textSecondary hover:text-secondary transition-colors duration-300"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <FiGithub className="w-6 h-6" />
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textSecondary hover:text-secondary transition-colors duration-300"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <FiExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Project Image */}
              <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="relative aspect-video rounded-lg overflow-hidden group">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop';
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
