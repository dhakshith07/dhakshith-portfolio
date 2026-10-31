import React from 'react';
import {
  IconBriefcase,
  IconMapPin,
  IconCalendar,
  IconCheck,
  IconSparkles
} from '../components/Icons';
import '../styles/InternshipSection.css';

export const InternshipSection = ({ internship }) => {
  const data = internship || {
    position: "Data Science, AI & ML Intern",
    company: "iGeeks Technologies",
    location: "Bangalore, India",
    duration: "20 May 2026 – 20 June 2026",
    responsibilities: [
      "Contributed to the R&D team's Data Science, AI and Machine Learning initiatives as part of a project team.",
      "Applied Python programming to real project tasks and strengthened core Data Science and Machine Learning fundamentals.",
      "Collaborated with team members and HR to complete assigned work on schedule."
    ],
    technologies: ["Python", "Data Science", "Machine Learning", "Data Handling", "Git"]
  };

  return (
    <section id="internship" className="section internship-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Industry Experience</span>
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-subtitle">
            Professional industry exposure applying Python, Data Science, and Machine Learning algorithms on real-world team deliverables.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="internship-timeline-wrapper">
          <div className="timeline-spine"></div>

          <div className="glass-card internship-timeline-card">
            
            {/* Header / Meta */}
            <div className="internship-card-header">
              <div className="company-branding">
                <div className="company-icon-box">
                  <IconBriefcase size={22} />
                </div>
                <div>
                  <h3 className="internship-position">{data.position}</h3>
                  <h4 className="internship-company-name">{data.company}</h4>
                </div>
              </div>

              <div className="internship-badge-group">
                <div className="internship-date-pill">
                  <IconCalendar size={14} className="date-icon" />
                  <span>{data.duration}</span>
                </div>
                <div className="internship-location-pill">
                  <IconMapPin size={14} className="loc-icon" />
                  <span>{data.location}</span>
                </div>
              </div>
            </div>

            {/* Department Focus */}
            <div className="department-indicator">
              <IconSparkles size={16} className="dept-icon" />
              <span>R&amp;D Division: Data Science, AI and Machine Learning Initiatives</span>
            </div>

            {/* Responsibilities */}
            <div className="internship-responsibilities-block">
              <h5 className="responsibilities-title">Key Contributions &amp; Responsibilities:</h5>
              <ul className="responsibilities-list">
                {data.responsibilities.map((resp, idx) => (
                  <li key={idx} className="responsibility-item">
                    <IconCheck size={16} className="resp-check-icon" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            {data.technologies && (
              <div className="internship-skills-footer">
                <span className="skills-footer-label">Technologies &amp; Tools Utilized:</span>
                <div className="internship-tech-pills">
                  {data.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

