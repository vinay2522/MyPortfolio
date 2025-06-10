import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiCalendar, FiUsers, FiTool } from 'react-icons/fi';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-tertiary rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-tertiary border-b border-textSecondary/20 p-6 flex justify-between items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-2">
                  {project.title}
                  {project.isOngoing && (
                    <span className="ml-2 text-sm font-normal text-secondary">(Ongoing)</span>
                  )}
                  {project.isHackathon && (
                    <span className="ml-2 text-sm font-normal text-secondary">(Hackathon Winner)</span>
                  )}
                </h2>
                <p className="text-textSecondary">{project.category}</p>
              </div>
              <button
                onClick={onClose}
                className="text-textSecondary hover:text-secondary transition-colors duration-300 p-2"
                aria-label="Close modal"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Project Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
              </div>

              {/* Project Info Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {project.duration && (
                  <div className="flex items-center space-x-3">
                    <FiCalendar className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-textSecondary text-sm">Duration</p>
                      <p className="text-textPrimary font-medium">{project.duration}</p>
                    </div>
                  </div>
                )}
                
                {project.team && (
                  <div className="flex items-center space-x-3">
                    <FiUsers className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-textSecondary text-sm">Team Size</p>
                      <p className="text-textPrimary font-medium">{project.team}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center space-x-3">
                  <FiTool className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-textSecondary text-sm">Role</p>
                    <p className="text-textPrimary font-medium">{project.role || 'Full Stack Developer'}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-textPrimary mb-4">Project Overview</h3>
                <p className="text-textSecondary leading-relaxed">{project.detailedDescription}</p>
              </div>

              {/* Key Features */}
              {project.features && (
                <div>
                  <h3 className="text-xl font-bold text-textPrimary mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-secondary mt-1">▹</span>
                        <span className="text-textSecondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && (
                <div>
                  <h3 className="text-xl font-bold text-textPrimary mb-4">Challenges & Solutions</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-secondary mt-1">▹</span>
                        <span className="text-textSecondary">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-bold text-textPrimary mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-secondary text-sm font-mono px-3 py-1 bg-secondary/10 rounded-full border border-secondary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              {project.outcomes && (
                <div>
                  <h3 className="text-xl font-bold text-textPrimary mb-4">Outcomes & Impact</h3>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-secondary mt-1">▹</span>
                        <span className="text-textSecondary">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-textSecondary/20">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center space-x-2"
                >
                  <FiGithub className="w-5 h-5" />
                  <span>View Code</span>
                </a>
                {project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center space-x-2"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
