import React from 'react';
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { DiJavascript1, DiMongodb } from 'react-icons/di';
import { SiTailwindcss, SiMysql, SiFirebase, SiSolidity } from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      items: [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'JavaScript', icon: <DiJavascript1 />, color: '#F7DF1E' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
      ],
    },
    {
      category: 'Backend',
      color: 'from-green-500 to-emerald-500',
      items: [
        { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'MongoDB', icon: <DiMongodb />, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
      ],
    },
    {
      category: 'Tools & Others',
      color: 'from-purple-500 to-pink-500',
      items: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Blockchain', icon: <SiSolidity />, color: '#363636' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="text-textSecondary text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
            Technologies I use to build amazing projects
          </p>
        </motion.div>

        {/* Simple Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="bg-tertiary rounded-xl p-4 sm:p-6 border border-textSecondary/10 hover:border-secondary/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-xs sm:text-sm font-semibold mb-4 sm:mb-6`}>
                {category.category}
              </div>

              {/* Skills List */}
              <div className="space-y-3 sm:space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                    className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-primary/50 transition-colors duration-200 group"
                  >
                    <div
                      className="text-xl sm:text-2xl transition-transform duration-200 group-hover:scale-110"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-textPrimary font-medium group-hover:text-secondary transition-colors duration-200 text-sm sm:text-base">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
  
export default Skills;
