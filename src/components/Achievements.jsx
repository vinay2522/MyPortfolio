import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiTarget, FiCode, FiUsers } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Hackathon Winner",
      description: "3rd Place at Hackkshetra 2024",
      icon: <FaTrophy className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
      date: "2024",
      category: "Competition"
    },
    {
      id: 2,
      title: "Project Excellence",
      description: "5+ Projects Completed",
      icon: <FiCode className="w-8 h-8" />,
      color: "from-blue-400 to-purple-500",
      date: "2023-2024",
      category: "Development"
    },
    {
      id: 3,
      title: "Academic Achievement",
      description: "Computer Science Engineering Student",
      icon: <FiStar className="w-8 h-8" />,
      color: "from-green-400 to-blue-500",
      date: "2022-2026",
      category: "Education"
    },
    {
      id: 4,
      title: "Innovation Leader",
      description: "AI & Blockchain Projects",
      icon: <FiTarget className="w-8 h-8" />,
      color: "from-purple-400 to-pink-500",
      date: "2024",
      category: "Innovation"
    },
    {
      id: 5,
      title: "Team Collaboration",
      description: "Successful Team Projects",
      icon: <FiUsers className="w-8 h-8" />,
      color: "from-teal-400 to-green-500",
      date: "2023-2024",
      category: "Teamwork"
    },
    {
      id: 6,
      title: "Technical Excellence",
      description: "Full Stack Development",
      icon: <FiAward className="w-8 h-8" />,
      color: "from-red-400 to-pink-500",
      date: "2023-2024",
      category: "Technical"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" data-aos="fade-up">
          Achievements & Milestones
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="bg-tertiary rounded-lg p-6 border border-textSecondary/20 hover:border-secondary/50 transition-all duration-300 h-full">
                {/* Badge Icon */}
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${achievement.color} mb-4`}>
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>

                {/* Category Tag */}
                <div className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs font-mono rounded mb-3">
                  {achievement.category}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-textPrimary mb-2">
                  {achievement.title}
                </h3>
                
                <p className="text-textSecondary text-sm mb-3">
                  {achievement.description}
                </p>

                {/* Date */}
                <div className="flex items-center justify-between">
                  <span className="text-secondary text-xs font-mono">
                    {achievement.date}
                  </span>
                  
                  {/* Hover Effect */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-tertiary rounded-lg p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">5+</div>
              <div className="text-textSecondary text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">1</div>
              <div className="text-textSecondary text-sm">Hackathon Win</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">3+</div>
              <div className="text-textSecondary text-sm">Years Learning</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">10+</div>
              <div className="text-textSecondary text-sm">Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
