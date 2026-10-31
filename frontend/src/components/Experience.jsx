import React from 'react';
import { IconBriefcase, IconMapPin } from './Icons';
import '../styles/Experience.css';

export const Experience = ({ experiences = [] }) => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Career Milestones</span>
          <h2 className="section-title">Experience &amp; Track Record</h2>
          <p className="section-subtitle">
            A chronological timeline of my professional roles, engineering contributions, and architectural impact.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {experiences.map((item, index) => (
            <div key={index} className="timeline-item">
              
              {/* Timeline Indicator Node */}
              <div className={`timeline-node ${item.isCurrent ? 'current' : ''}`}>
                <div className="timeline-node-inner"></div>
              </div>

              {/* Timeline Card */}
              <div className="glass-card timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-company-row">
                      <span className="timeline-company">{item.company}</span>
                      <span className="timeline-divider">•</span>
                      <span className="timeline-location">
                        <IconMapPin size={14} className="timeline-loc-icon" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="timeline-period-badge">
                    {item.isCurrent && <span className="period-live-dot"></span>}
                    {item.period}
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="timeline-bullets">
                  {item.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="timeline-bullet-item">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="timeline-tech-stack">
                    {item.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

