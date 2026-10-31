import React from 'react';
import '../styles/LanguagesSection.css';

export const LanguagesSection = ({ languages = [] }) => {
  const defaultLanguages = [
    { name: "Telugu", level: "Native", code: "TE", description: "Mother tongue with complete native fluency." },
    { name: "Tamil", level: "Professional Proficiency", code: "TA", description: "Fluent professional reading, writing, and conversational proficiency." },
    { name: "English", level: "C1 Proficient", code: "EN", description: "Advanced academic & technical working proficiency (C1 Level)." }
  ];

  const items = languages.length > 0 ? languages : defaultLanguages;

  return (
    <section id="languages" className="section languages-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Communication</span>
          <h2 className="section-title">Languages</h2>
          <p className="section-subtitle">
            Linguistic proficiencies enabling seamless teamwork, technical documentation, and cross-regional collaboration.
          </p>
        </div>

        {/* Languages Cards Grid */}
        <div className="languages-grid">
          {items.map((lang, idx) => (
            <div key={idx} className="glass-card language-card">
              <div className="lang-code-box">
                <span>{lang.code || lang.name.substring(0, 2).toUpperCase()}</span>
              </div>

              <div className="lang-body">
                <div className="lang-header-row">
                  <h3 className="lang-name">{lang.name}</h3>
                  <span className="lang-badge">{lang.level || lang.proficiencyPill || 'Proficient'}</span>
                </div>
                <p className="lang-desc">
                  {lang.description || `${lang.name} with ${lang.level || lang.proficiencyPill} communication.`}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

