import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';
import './Certificates.css';

const certificates = [
  { name: 'C++ Beginner to Master', issuer: 'Udemy (Abdul Bari)', date: "Nov '25" },
  { name: 'Java Beginner to Master', issuer: 'Udemy (Abdul Bari)', date: "May '25" },
  { name: 'DSA Beginner to Master', issuer: 'LPU', date: "July '25" },
  { name: 'Building Generative AI Apps and Tools', issuer: 'Udemy', date: "Aug '25" },
  { name: 'Master Generative AI Tools', issuer: 'Infosys Springboard', date: "Aug '25" },
  { name: 'AI Essentials for Beginners', issuer: 'Infosys Springboard', date: "Sept '25" },
  { name: 'Computational Theory and Automata', issuer: 'Infosys Springboard', date: "Sept '25" }
];

const Certificates = () => {
  return (
    <section className="certificates section" id="certificates">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          CERTIFICATIONS
        </motion.h2>

        <div className="certificates-list glass-panel">
          {certificates.map((cert, index) => (
            <motion.div 
              className="certificate-item"
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="cert-info">
                <FaAward className="cert-icon" />
                <div>
                  <h4>{cert.name}</h4>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </div>
              <div className="cert-date">{cert.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
