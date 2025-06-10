import React from 'react';
import { motion } from 'framer-motion';

const SkillsRadar = () => {
  const skills = [
    { name: 'React.js', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 85, category: 'Frontend' },
    { name: 'HTML/CSS', level: 92, category: 'Frontend' },
    { name: 'Java', level: 78, category: 'Backend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 82, category: 'Database' },
    { name: 'MySQL', level: 75, category: 'Database' },
    { name: 'Blockchain', level: 70, category: 'Blockchain' },
    { name: 'Git', level: 85, category: 'Tools' }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];
  const colors = {
    'Frontend': '#64FFDA',
    'Backend': '#FF6B6B',
    'Database': '#96CEB4',
    'Blockchain': '#45B7D1',
    'Tools': '#FFB74D'
  };

  return (
    <div className="bg-tertiary rounded-lg p-6">
      <h3 className="text-xl font-bold text-textPrimary mb-6 text-center">Skills Overview</h3>
      
      {/* Skills by Category */}
      <div className="space-y-6">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <h4 className="text-lg font-semibold text-textPrimary mb-3 flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: colors[category] }}
              />
              {category}
            </h4>
            
            <div className="space-y-3">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-textSecondary text-sm">{skill.name}</span>
                      <span className="text-secondary text-sm font-mono">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-primary rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ backgroundColor: colors[category] }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.8,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Overall Progress */}
      <motion.div
        className="mt-8 p-4 bg-primary rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-center">
          <h4 className="text-textPrimary font-semibold mb-2">Overall Proficiency</h4>
          <div className="flex justify-center space-x-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">
                {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
              </div>
              <div className="text-textSecondary">Average</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">{skills.length}</div>
              <div className="text-textSecondary">Skills</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">{categories.length}</div>
              <div className="text-textSecondary">Categories</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsRadar;
