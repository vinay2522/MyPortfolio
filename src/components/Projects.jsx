import React, { useState, useMemo } from 'react';
import { FiGithub, FiExternalLink, FiInfo } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import ProjectFilter from './ProjectFilter';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: 'AI-Integrated Ambulance Booking System',
      description: 'AI-powered ambulance booking web app integrating ML and animations. Designed with real-time predictive analytics and machine learning models for optimized route suggestions and booking predictions. Features an animated UI for seamless user experience.',
      detailedDescription: 'A comprehensive ambulance booking system that leverages artificial intelligence and machine learning to revolutionize emergency medical services. The system integrates real-time predictive analytics to optimize ambulance dispatch, route planning, and resource allocation. Built with a focus on user experience, the application features smooth animations and an intuitive interface that works seamlessly across all devices.',
      tech: ['Machine Learning', 'React', 'HTML', 'CSS', 'JavaScript', 'Python', 'TensorFlow'],
      github: 'https://github.com/vinay2522/Temp-mini_project-',
      live: '#',
      image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=1000&auto=format&fit=crop',
      isOngoing: true,
      category: 'AI/ML Project',
      duration: '6 months',
      team: '4 members',
      role: 'Full Stack Developer & ML Engineer',
      features: [
        'Real-time ambulance tracking and dispatch optimization',
        'Machine learning models for demand prediction',
        'Intelligent route optimization using traffic data',
        'Responsive web interface with smooth animations',
        'Emergency contact integration and notifications',
        'Hospital availability and capacity management',
        'Patient medical history integration'
      ],
      challenges: [
        'Implementing real-time ML predictions with low latency',
        'Integrating multiple APIs for traffic and location data',
        'Ensuring system reliability for emergency situations',
        'Optimizing performance for mobile devices'
      ],
      outcomes: [
        'Reduced average ambulance response time by 25%',
        'Improved resource allocation efficiency',
        'Enhanced user experience with intuitive design',
        'Successfully deployed for testing in local healthcare network'
      ]
    },
    {
      title: 'Evidence Chaining Using Blockchain',
      description: 'Created a blockchain-based system ensuring secure, tamper-proof evidence sharing in judicial processes. Enabled real-time evidence verification and validation, ensuring data integrity and transparency. Received 3rd place at Hackkshetra 2024.',
      detailedDescription: 'A revolutionary blockchain-based evidence management system designed to transform judicial processes by ensuring complete transparency, security, and immutability of evidence. The system creates an unbreakable chain of custody for digital evidence, making it impossible to tamper with or manipulate evidence once it\'s recorded on the blockchain. This project earned 3rd place at Hackkshetra 2024, competing against 200+ teams.',
      tech: ['Blockchain', 'Solidity', 'React', 'Node.js', 'MongoDB', 'Web3.js', 'IPFS'],
      github: 'https://github.com/vinay2522/Hackcult',
      live: '#',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop',
      isHackathon: true,
      category: 'Blockchain Project',
      duration: '48 hours (Hackathon)',
      team: '3 members',
      role: 'Blockchain Developer & Team Lead',
      features: [
        'Immutable evidence storage on blockchain',
        'Smart contracts for automated evidence validation',
        'Multi-party evidence verification system',
        'Cryptographic hash verification for file integrity',
        'Role-based access control for different stakeholders',
        'Real-time evidence tracking and audit trails',
        'Integration with existing judicial systems'
      ],
      challenges: [
        'Implementing complex smart contracts within time constraints',
        'Ensuring scalability for large evidence files',
        'Creating intuitive UI for non-technical users',
        'Integrating IPFS for decentralized file storage'
      ],
      outcomes: [
        '3rd place at Hackkshetra 2024 among 200+ teams',
        'Successfully demonstrated tamper-proof evidence system',
        'Received recognition from industry experts',
        'Potential for real-world implementation in judicial systems'
      ]
    },
    {
      title: 'Plant Disease Detection',
      description: 'Built a deep learning model using TensorFlow to identify plant diseases from images. Integrated a user-friendly interface for real-time plant disease detection and recommendations. Used a large dataset of plant images for training.',
      detailedDescription: 'An intelligent plant disease detection system powered by deep learning that helps farmers and agricultural professionals identify plant diseases quickly and accurately. The system uses a convolutional neural network trained on thousands of plant images to classify diseases and provide treatment recommendations. The web application offers real-time image analysis with high accuracy rates.',
      tech: ['TensorFlow', 'Python', 'Flask', 'HTML', 'CSS', 'OpenCV', 'NumPy'],
      github: 'https://github.com/vinay2522/plant_disease',
      live: '#',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000&auto=format&fit=crop',
      category: 'AI/ML Project',
      duration: '3 months',
      team: '2 members',
      role: 'ML Engineer & Backend Developer',
      features: [
        'Real-time image classification using CNN',
        'Support for multiple plant species and diseases',
        'Treatment recommendations for identified diseases',
        'Confidence score for each prediction',
        'Image preprocessing and augmentation',
        'User-friendly web interface for farmers',
        'Mobile-responsive design for field use'
      ],
      challenges: [
        'Collecting and preprocessing large dataset of plant images',
        'Achieving high accuracy across different lighting conditions',
        'Optimizing model size for web deployment',
        'Handling various image qualities and angles'
      ],
      outcomes: [
        'Achieved 94% accuracy on test dataset',
        'Successfully deployed web application',
        'Positive feedback from agricultural community',
        'Potential for integration with farming apps'
      ]
    },
    {
      title: 'Resume Builder App',
      description: 'Developed a web app using Streamlit to create dynamic and editable resumes. Enabled live previews and downloadable resume formats like PDF and DOCX.',
      detailedDescription: 'A comprehensive resume building application that empowers users to create professional resumes with ease. Built using Streamlit, the application provides an intuitive interface for inputting personal information, work experience, education, and skills. Users can see live previews of their resume and download it in multiple formats including PDF and DOCX.',
      tech: ['Streamlit', 'Python', 'HTML', 'CSS', 'ReportLab', 'python-docx'],
      github: 'https://github.com/vinay2522/stream_lit_resume',
      live: 'https://appresume-lht5p3ftmdbn8ycygtshb3.streamlit.app/',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop',
      category: 'Web Application',
      duration: '2 months',
      team: '1 member (Solo)',
      role: 'Full Stack Developer',
      features: [
        'Dynamic resume creation with live preview',
        'Multiple export formats (PDF, DOCX)',
        'Customizable templates and layouts',
        'Section-wise editing capabilities',
        'Real-time formatting and styling',
        'Mobile-responsive design',
        'Cloud deployment on Streamlit Cloud'
      ],
      challenges: [
        'Implementing real-time preview functionality',
        'Creating responsive layouts for different screen sizes',
        'Handling file generation and downloads',
        'Optimizing performance for large resumes'
      ],
      outcomes: [
        'Successfully deployed and accessible online',
        'Positive user feedback for ease of use',
        'Multiple format export functionality working seamlessly',
        'Used by students and professionals for resume creation'
      ]
    },
    {
      title: 'Live Calculator',
      description: 'Interactive calculator web application with real-time calculations and responsive design.',
      detailedDescription: 'A feature-rich calculator web application built with vanilla JavaScript that provides real-time mathematical calculations with a clean, intuitive interface. The calculator supports basic arithmetic operations, advanced functions, and includes keyboard support for enhanced user experience. Designed with responsive principles to work seamlessly across all devices.',
      tech: ['HTML', 'CSS', 'JavaScript', 'CSS Grid', 'Flexbox'],
      github: 'https://github.com/vinay2522/CALCULATOR',
      live: 'https://vinay2522.github.io/CALCULATOR/',
      image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1000&auto=format&fit=crop',
      category: 'Web Application',
      duration: '1 month',
      team: '1 member (Solo)',
      role: 'Frontend Developer',
      features: [
        'Real-time mathematical calculations',
        'Support for basic and advanced operations',
        'Keyboard input support',
        'Responsive design for all devices',
        'Clean and intuitive user interface',
        'Error handling and validation',
        'Memory functions (MC, MR, M+, M-)'
      ],
      challenges: [
        'Implementing proper order of operations',
        'Handling edge cases and error scenarios',
        'Creating responsive button layouts',
        'Adding keyboard event listeners'
      ],
      outcomes: [
        'Fully functional calculator with all standard features',
        'Deployed on GitHub Pages with 100% uptime',
        'Responsive design working across all devices',
        'Clean, professional user interface'
      ]
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [projects, activeFilter, searchTerm]);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>

        <ProjectFilter
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <div className="mt-8 sm:mt-12 space-y-12 sm:space-y-16 lg:space-y-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Project Content */}
              <div className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} order-2 lg:order-auto`}>
                <div className="relative bg-tertiary p-4 sm:p-6 rounded-lg shadow-xl">
                  {/* Project Header */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-textPrimary leading-tight">
                      {project.title}
                      {project.isOngoing && (
                        <span className="block sm:inline ml-0 sm:ml-2 text-xs font-normal text-secondary">(Ongoing)</span>
                      )}
                      {project.isHackathon && (
                        <span className="block sm:inline ml-0 sm:ml-2 text-xs font-normal text-secondary">(Hackathon Winner)</span>
                      )}
                    </h3>
                  </div>

                  {/* Project Description */}
                  <p className="text-textSecondary mb-4 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-secondary text-xs sm:text-sm font-mono px-2 py-1 bg-secondary/10 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <button
                      onClick={() => openModal(project)}
                      className="btn-primary flex items-center space-x-2 text-xs sm:text-sm px-3 sm:px-4 py-2"
                    >
                      <FiInfo className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>View Details</span>
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textSecondary hover:text-secondary transition-colors duration-300 p-2"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textSecondary hover:text-secondary transition-colors duration-300 p-2"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <FiExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Image */}
              <div className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} order-1 lg:order-auto`}>
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

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
