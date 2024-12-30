import React from 'react';
import { FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { DiJavascript1, DiMongodb } from 'react-icons/di';
import { SiTailwindcss, SiMysql, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: 'Languages',
      items: [
        { name: 'Java', icon: <FaJava /> },
        { name: 'JavaScript', icon: <DiJavascript1 /> },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      ],
    },
    {
      category: 'Databases & Tools',
      items: [
        { name: 'MongoDB', icon: <DiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Git', icon: <FaGitAlt /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div
              key={category.category}
              className="bg-tertiary rounded-lg p-6"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold mb-4 text-secondary">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-2 text-textSecondary hover:text-secondary transition-colors duration-300"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
  
export default Skills;
