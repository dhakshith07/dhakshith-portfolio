import React, { useState } from 'react';
import {
  IconCode,
  IconSparkles,
  IconDatabase,
  IconServer,
  IconCheck,
  IconBriefcase
} from '../components/Icons';
import '../styles/SkillsSection.css';

export const SkillsSection = ({ skillsCategories = [] }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categoriesList = ['All', ...skillsCategories.map((c) => c.category)];

  const displayedCategories = activeCategory === 'All'
    ? skillsCategories
    : skillsCategories.filter((c) => c.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <IconCode size={20} />;
      case 'AI, Machine Learning & Computer Vision':
        return <IconSparkles size={20} />;
      case 'Tools & Platforms':
        return <IconDatabase size={20} />;
      case 'Core Fundamentals':
        return <IconServer size={20} />;
      default:
        return <IconBriefcase size={20} />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Core programming languages, computer vision frameworks, machine learning models, and embedded development platforms.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="skills-filter-nav">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`skills-pill-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="categories-grid">
          {displayedCategories.map((catGroup, idx) => (
            <div key={idx} className="glass-card skill-category-card">
              
              <div className="category-header">
                <div className="category-icon-box">
                  {getCategoryIcon(catGroup.category)}
                </div>
                <div>
                  <h3 className="category-name">{catGroup.category}</h3>
                  <span className="category-count">{catGroup.skills.length} Competencies</span>
                </div>
              </div>

              {/* Skills Chips Grid */}
              <div className="skills-chips-list">
                {catGroup.skills.map((skillName, sIdx) => (
                  <div key={sIdx} className="skill-chip">
                    <span className="chip-bullet">▹</span>
                    <span className="chip-text">{skillName}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Applied Engineering Focus Bar */}
        <div className="skills-highlight-banner glass-card">
          <div className="highlight-content">
            <h4 className="highlight-title">Applied AI &amp; Embedded Prototyping</h4>
            <p className="highlight-desc">
              Focusing on end-to-end vision pipelines: from capturing frames and running YOLOv11 &amp; MediaPipe inference to streaming telemetry through Streamlit dashboards and Arduino-Bluetooth hardware interfaces.
            </p>
          </div>
          <a href="#projects" className="btn btn-primary btn-sm banner-action-btn">
            View Projects In Action
          </a>
        </div>

      </div>
    </section>
  );
};

