import React, { useState } from 'react';
import '../styles/Skills.css';

export const Skills = ({ skills = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud & DevOps'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(
        (s) => s.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Technical Arsenal</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of my core competencies, frameworks, databases, and DevOps tools.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`skills-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="glass-card skill-card">
              <div className="skill-card-top">
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-category-badge">{skill.category}</span>
                </div>
                <div className="skill-meta">
                  <span className="skill-badge-pill">{skill.badge || 'Advanced'}</span>
                  <span className="skill-percentage">{skill.proficiency}%</span>
                </div>
              </div>

              {/* Proficiency Progress Bar */}
              <div className="skill-progress-track">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Competencies Footer Banner */}
        <div className="skills-footer-banner glass-card">
          <div className="banner-content">
            <h4 className="banner-title">Architecting with the MERN Stack</h4>
            <p className="banner-desc">
              From React virtual DOM rendering &amp; responsive modern CSS to Express routing, async MongoDB aggregation pipelines, and secure REST APIs.
            </p>
          </div>
          <a href="#projects" className="btn btn-primary btn-sm banner-cta">
            See Skills in Action
          </a>
        </div>

      </div>
    </section>
  );
};

