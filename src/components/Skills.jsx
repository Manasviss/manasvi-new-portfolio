import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = {
  Languages: ['C++', 'Python', 'C', 'Java', 'JavaScript', 'PHP'],
  Frameworks: ['HTML & CSS', 'Tailwind CSS', 'Node.js', 'React'],
  Tools: ['MS SQL Server', 'Git', 'Vite'],
  'Soft Skills': ['Team Player', 'Delegation', 'Adaptability', 'Agility', 'Attention to Detail']
};

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          SKILLS ARCHITECTURE
        </motion.h2>

        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div 
              key={category}
              className="skill-category glass-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="category-title">{category}</h3>
              <div className="skills-tags">
                {skills.map((skill, i) => (
                  <motion.span 
                    key={skill} 
                    className="skill-tag"
                    whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-color)', color: '#000' }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill}
                  </motion.span>
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
