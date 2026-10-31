import React from 'react';
import {
  IconGraduationCap,
  IconMapPin,
  IconCalendar,
  IconAward,
  IconCheck
} from '../components/Icons';
import '../styles/EducationSection.css';

export const EducationSection = ({ education = [] }) => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal engineering foundations in Computer Science &amp; Artificial Intelligence coupled with rigorous academic coursework.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="education-grid">
          {education.map((item, index) => (
            <div key={index} className="glass-card education-card">
              
              <div className="education-card-top">
                <div className="edu-icon-box">
                  <IconGraduationCap size={24} />
                </div>

                <div className="edu-period-badge">
                  <IconCalendar size={14} className="period-icon" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <div className="edu-body">
                <span className="edu-score-pill">
                  {item.score || (item.cgpa ? `CGPA: ${item.cgpa}` : `Percentage: ${item.percentage}`)}
                </span>

                <h3 className="edu-degree">{item.degree}</h3>
                <h4 className="edu-institution">{item.institution}</h4>

                <div className="edu-location-row">
                  <IconMapPin size={15} className="loc-icon" />
                  <span>{item.location}</span>
                </div>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="edu-highlights-list">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="edu-highlight-item">
                        <IconCheck size={14} className="highlight-check" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {item.isCurrent && (
                <div className="edu-current-indicator">
                  <span className="pulse-green-dot"></span>
                  <span>Currently Enrolled (Active Scholar)</span>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

