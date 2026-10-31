import React from 'react';
import {
  IconArrowUp,
  IconSparkles,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconMapPin
} from './Icons';
import '../styles/Footer.css';

export const Footer = ({ profile, onOpenSocialModal }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrap">
      <div className="container">
        
        <div className="footer-top">
          {/* Logo & Headline */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <div className="logo-icon-box">
                <IconSparkles size={18} />
              </div>
              <span>
                Dhakshith<span className="logo-accent">.ai</span>
              </span>
            </a>
            <p className="footer-tagline">
              AI/ML Developer &amp; Computer Vision Enthusiast | B.Tech CSE (Artificial Intelligence) at Karunya Institute of Technology and Sciences.
            </p>
            <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <span>📍 Krishnagiri, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav-links">
            <h5 className="footer-heading">Navigation</h5>
            <ul className="footer-menu">
              <li><a href="#about">About Me</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Technical Skills</a></li>
              <li><a href="#internship">Internship Experience</a></li>
              <li><a href="#projects">Academic Projects</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#languages">Languages</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social Presence */}
          <div className="footer-social-section">
            <h5 className="footer-heading">Social &amp; Contact</h5>
            <div className="footer-social-row">
              <button
                type="button"
                className="social-btn"
                onClick={() => onOpenSocialModal('GitHub')}
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <IconGithub size={18} />
              </button>

              <button
                type="button"
                className="social-btn"
                onClick={() => onOpenSocialModal('LinkedIn')}
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <IconLinkedin size={18} />
              </button>

              <a
                href={`mailto:${profile?.email || 'dhakshithbavan1004@gmail.com'}`}
                className="social-btn"
                title="Send Email"
                aria-label="Email"
              >
                <IconMail size={18} />
              </a>

              <a
                href={`tel:${profile?.phone?.replace(/\s+/g, '') || '+919025069558'}`}
                className="social-btn"
                title="Call Phone"
                aria-label="Phone"
              >
                <IconMapPin size={18} />
              </a>
            </div>

            <div style={{ marginTop: '1.2rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <span>{profile?.email || 'dhakshithbavan1004@gmail.com'}</span>
              <br />
              <span>{profile?.phone || '+91 9025069558'}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} Dhakshith Bavan S. All rights reserved. Built with React.js, Node.js, Express, and MongoDB Atlas.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <IconArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};
