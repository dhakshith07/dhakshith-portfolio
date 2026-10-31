import React, { useState, useEffect } from 'react';
import {
  IconGithub,
  IconLinkedin,
  IconTwitter,
  IconMail,
  IconSparkles,
  IconDownload,
  IconExternalLink
} from './Icons';
import '../styles/Hero.css';

const ROLES = [
  'Full-Stack Software Engineer',
  'MERN Stack Specialist',
  'Node.js & Express Architect',
  'React UI/UX Craftsman'
];

export const Hero = ({ profile }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect
  useEffect(() => {
    const fullText = ROLES[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText.length === fullText.length) {
          setIsDeleting(true);
          setTypingSpeed(1800); // Pause before deleting
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const name = profile?.name || 'Alex Mercer';
  const tagline = profile?.tagline || 'Crafting high-performance web applications, resilient backend architectures, and elegant user interfaces.';
  const availability = profile?.availability || 'Open for full-time & freelance contracts';

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        {/* Availability Badge */}
        <div className="hero-badge-wrap">
          <div className="hero-status-pill">
            <span className="hero-status-pulse"></span>
            <span className="hero-status-label">{availability}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="hero-content">
          <p className="hero-greeting">
            <span className="wave-hand">👋</span> Hello World, I'm
          </p>
          <h1 className="hero-name">
            <span className="gradient-text">{name}</span>
          </h1>

          {/* Animated Dynamic Role */}
          <div className="hero-role-wrapper">
            <span className="role-prefix">&gt; </span>
            <span className="role-typing">{currentText}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-description">{tagline}</p>

          {/* CTAs */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <IconSparkles size={18} />
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Connect
            </a>
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                alert('Sample Resume download: PDF asset can be linked in public/resume.pdf');
              }}
              className="btn btn-outline"
              title="Download Developer CV"
            >
              <IconDownload size={17} />
              Resume CV
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="socials-icons">
              <a
                href={profile?.github || 'https://github.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
              >
                <IconGithub size={19} />
              </a>
              <a
                href={profile?.linkedin || 'https://linkedin.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
              >
                <IconLinkedin size={19} />
              </a>
              <a
                href={profile?.twitter || 'https://x.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Twitter / X Profile"
              >
                <IconTwitter size={19} />
              </a>
              <a
                href={`mailto:${profile?.email || 'alex.mercer.dev@example.com'}`}
                className="social-btn"
                aria-label="Send direct email"
              >
                <IconMail size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack Ribbon */}
        <div className="hero-tech-strip">
          <span className="tech-strip-title">CORE STACK</span>
          <div className="tech-tags-list">
            <span className="tech-pill">React.js 18</span>
            <span className="tech-pill">Node.js</span>
            <span className="tech-pill">Express.js</span>
            <span className="tech-pill">MongoDB & Mongoose</span>
            <span className="tech-pill">RESTful APIs</span>
            <span className="tech-pill">Modern Dark CSS</span>
            <span className="tech-pill">Docker & Cloud</span>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="hero-stats-grid">
          <div className="glass-card stat-card">
            <span className="stat-number">4+</span>
            <span className="stat-label">Years of Experience</span>
          </div>
          <div className="glass-card stat-card">
            <span className="stat-number">30+</span>
            <span className="stat-label">Completed Projects</span>
          </div>
          <div className="glass-card stat-card">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime & Reliability</span>
          </div>
          <div className="glass-card stat-card">
            <span className="stat-number">1,400+</span>
            <span className="stat-label">Code Commits</span>
          </div>
        </div>

      </div>
    </section>
  );
};

