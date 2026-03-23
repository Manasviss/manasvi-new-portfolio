import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          LET'S CONNECT
        </motion.h2>

        <div className="contact-grid">
          <motion.div 
            className="contact-info glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Get In Touch</h3>
            <p>I'm always open to discussing promising projects, creative ideas, or opportunities to be part of your vision.</p>
            
            <div className="contact-methods">
              <a href="mailto:manassms01782@gmail.com" className="method-item">
                <div className="method-icon"><FaEnvelope /></div>
                <div>
                  <h4>Email</h4>
                  <span>manassms01782@gmail.com</span>
                </div>
              </a>
              <a href="tel:+917876084179" className="method-item">
                <div className="method-icon"><FaPhone /></div>
                <div>
                  <h4>Phone</h4>
                  <span>+91 7876084179</span>
                </div>
              </a>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/manasvimannu/" target="_blank" rel="noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Manasviss" target="_blank" rel="noreferrer" className="social-icon">
                <FaGithub />
              </a>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form glass-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea rows="5" placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="btn submit-btn">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
