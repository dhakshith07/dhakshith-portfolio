import React, { useState, useEffect } from 'react';
import { IconCode, IconMenu, IconX, IconSparkles } from './Icons';
import '../styles/Navbar.css';

export const Navbar = ({ backendStatus }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        'home',
        'about',
        'education',
        'skills',
        'internship',
        'projects',
        'certifications',
        'languages',
        'contact'
      ];

      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Internship', href: '#internship', id: 'internship' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Languages', href: '#languages', id: 'languages' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        
        {/* Brand / Logo */}
        <a href="#home" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
          <div className="logo-icon-box">
            <IconSparkles size={19} className="logo-icon" />
          </div>
          <span className="logo-text">
            Dhakshith<span className="logo-accent">.ai</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          <div className="status-pill" title={`Status: ${backendStatus.text}`}>
            <span className={`status-dot ${backendStatus.type}`}></span>
            <span className="status-text">{backendStatus.text}</span>
          </div>

          <a href="#contact" className="btn btn-primary btn-sm nav-cta">
            Hire / Connect
          </a>

          <button
            type="button"
            className="mobile-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mobile-cta-item">
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get In Touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
