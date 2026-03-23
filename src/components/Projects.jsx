import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Robust Dictionary',
    date: "July '25",
    tech: ['DSA', 'Trie', 'NodeJS', 'HTML', 'CSS'],
    description: 'Designed a handy webpage serving as a comprehensive dictionary for online readers. Houses over 375,000 words. Implemented using Trie data structure to ensure robust nature and robust speed.',
    image: '/dict.png',
  },
  {
    title: 'E-Commerce Fashion',
    date: "April '25",
    tech: ['TailwindCSS', 'JavaScript', 'PHP', 'SQL Server'],
    description: 'Designed an E-Commerce online store for a local shop in Jalandhar. Implemented a Machine Learning algorithm that adapts to users\' browsing history. Boasts a PAN INDIA ethnic store catering to everyone.',
    image: '/fashion.png',
  },
  {
    title: 'Fitness Tracking',
    date: "Oct '23",
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'Developed a responsive web app for tracking health and fitness with personalized fitness plans. Optimized for various devices offering a colorful interface, dynamic UX, and multiple budget-friendly plans.',
    image: '/fitness.png',
  }
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          SELECTED WORK
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card glass-panel"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <a href="#" className="project-link"><FaGithub size={24} /></a>
                  <a href="#" className="project-link"><FaExternalLinkAlt size={20} /></a>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-date">{project.date}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
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
