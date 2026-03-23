import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          ABOUT ME
        </motion.h2>

        <div className="about-grid">
          <motion.div 
            className="about-text glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              I am a driven Computer Science and Engineering student at Lovely Professional University.
              With a passion for building innovative and efficient web systems, I specialize in full-stack
              development using modern frameworks like React, Node.js, and databases like MS SQL Server.
            </p>
            <p>
              My goal is to craft premium, robust digital experiences that perform beautifully and efficiently, whether it's an online
              dictionary using Trie data structures or a sleek E-commerce platform powered by machine learning algorithms.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>6.0</h3>
                <span>CGPA</span>
              </div>
              <div className="stat">
                <h3>B.Tech</h3>
                <span>CSE</span>
              </div>
              <div className="stat">
                <h3>2027</h3>
                <span>Graduation</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="education-timeline"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="timeline-title">EDUCATION</h3>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Since Aug '23</div>
              <div className="timeline-content glass-panel">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <p>Lovely Professional University | Punjab, India</p>
                <span className="accent-text">CGPA: 6.0</span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">March '21 - May '22</div>
              <div className="timeline-content glass-panel">
                <h4>Intermediate (12th Grade)</h4>
                <p>D.A.V School | Solan, Himachal Pradesh</p>
                <span className="accent-text">Percentage: 62%</span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Feb '19 - March '20</div>
              <div className="timeline-content glass-panel">
                <h4>Matriculation (10th Grade)</h4>
                <p>D.A.V School | Solan, Himachal Pradesh</p>
                <span className="accent-text">Percentage: 79%</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
