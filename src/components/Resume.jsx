import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiEye, FiFileText, FiAward, FiBook, FiBriefcase } from 'react-icons/fi';

const Resume = () => {
  const resumeUrl = "/MyPortfolio/images/VINAYNAIKV_RESUME.pdf";

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Vinay_Naik_V_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(resumeUrl, '_blank');
  };

  const resumeHighlights = [
    {
      icon: <FiBook className="w-6 h-6" />,
      title: "Education",
      content: "B.E. Computer Science & Engineering",
      subtitle: "Siddaganga Institute of Technology, Tumkur"
    },
    {
      icon: <FiBriefcase className="w-6 h-6" />,
      title: "Experience",
      content: "Student Developer & Tech Enthusiast",
      subtitle: "3+ years of coding experience"
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Achievements",
      content: "3rd Place at Hackkshetra 2024",
      subtitle: "Evidence Chaining using Blockchain"
    },
    {
      icon: <FiFileText className="w-6 h-6" />,
      title: "Projects",
      content: "5+ Projects",
      subtitle: "AI/ML, Blockchain, Web Development"
    }
  ];

  const skills = [
    "React.js", "Node.js", "Python", "JavaScript", "Java",
    "Machine Learning", "Blockchain", "MongoDB", "TensorFlow",
    "HTML/CSS", "Git", "Solidity"
  ];

  return (
    <section id="resume" className="py-20 bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" data-aos="fade-up">
          Resume
        </h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Resume Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-primary rounded-lg shadow-2xl overflow-hidden">
              <div className="aspect-[3/4] bg-gradient-to-br from-secondary/10 to-primary flex items-center justify-center">
                <div className="text-center">
                  <FiFileText className="w-24 h-24 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-textPrimary mb-2">
                    Vinay Naik V
                  </h3>
                  <p className="text-textSecondary">
                    Computer Science Student
                  </p>
                  <p className="text-textSecondary text-sm mt-2">
                    Full Stack Developer | AI/ML Enthusiast
                  </p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <button
                  onClick={handleView}
                  className="btn-primary flex items-center space-x-2"
                >
                  <FiEye className="w-5 h-5" />
                  <span>View</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="btn-primary flex items-center space-x-2"
                >
                  <FiDownload className="w-5 h-5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Resume Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-textPrimary mb-4">
                Professional Summary
              </h3>
              <p className="text-textSecondary leading-relaxed">
                Passionate Computer Science student with 3+ years of hands-on experience in 
                full-stack development, AI/ML, and blockchain technologies. Proven track record 
                of building innovative solutions and winning hackathons. Seeking opportunities 
                to contribute to cutting-edge technology projects.
              </p>
            </div>

            {/* Resume Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resumeHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="bg-primary p-4 rounded-lg border border-textSecondary/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-secondary mt-1">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary text-sm">
                        {highlight.title}
                      </h4>
                      <p className="text-textPrimary text-sm font-medium">
                        {highlight.content}
                      </p>
                      <p className="text-textSecondary text-xs">
                        {highlight.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Skills */}
            <div>
              <h4 className="text-lg font-bold text-textPrimary mb-3">
                Key Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-secondary text-sm font-mono px-2 py-1 bg-secondary/10 rounded border border-secondary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-primary p-6 rounded-lg border border-secondary/20">
              <h4 className="text-lg font-bold text-textPrimary mb-3">
                Download Resume
              </h4>
              <p className="text-textSecondary mb-4">
                Get the latest version of my resume in PDF format.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleDownload}
                  className="btn-primary flex items-center space-x-2"
                >
                  <FiDownload className="w-5 h-5" />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={handleView}
                  className="btn-primary flex items-center space-x-2"
                >
                  <FiEye className="w-5 h-5" />
                  <span>View Online</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
