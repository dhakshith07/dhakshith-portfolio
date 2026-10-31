import React from 'react';
import {
  IconCheck,
  IconMapPin,
  IconMail,
  IconBriefcase,
  IconCode,
  IconServer,
  IconDatabase,
  IconSparkles
} from './Icons';
import '../styles/About.css';

export const About = ({ profile }) => {
  const bio = profile?.bioParagraphs || [
    "Hello! I am a passionate Full-Stack Developer with 4+ years of dedicated experience architecting robust web solutions across modern tech stacks. I thrive at the intersection of performant backend engineering and intuitive, responsive frontend interfaces.",
    "My core expertise revolves around the JavaScript/Node.js ecosystem, modern React, Express RESTful APIs, and MongoDB schema design. I have delivered mission-critical applications ranging from real-time analytics platforms to interactive SaaS portals."
  ];

  const highlights = [
    {
      icon: <IconCode size={22} />,
      title: "Clean Modern Frontend",
      desc: "Pixel-perfect React interfaces built with accessible, component-driven CSS design."
    },
    {
      icon: <IconServer size={22} />,
      title: "Resilient RESTful APIs",
      desc: "Robust Express.js middleware, clean controllers, rate-limiting, and error handling."
    },
    {
      icon: <IconDatabase size={22} />,
      title: "MongoDB Data Modeling",
      desc: "High-performance NoSQL schemas, Mongoose validation, and optimized indexing."
    },
    {
      icon: <IconSparkles size={22} />,
      title: "Performance First",
      desc: "Optimized bundle sizes, fast rendering, database indexing, and sub-100ms response targets."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Bridging Clean Code &amp; Real-World Impact</h2>
          <p className="section-subtitle">
            A developer who cares about both the elegance under the hood and the polish of the final product.
          </p>
        </div>

        <div className="about-grid">
          
          {/* Bio text column */}
          <div className="about-bio-column">
            <div className="glass-card bio-card">
              <h3 className="bio-heading">Who I Am</h3>
              <div className="bio-paragraphs">
                {bio.map((paragraph, idx) => (
                  <p key={idx} className="bio-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quick Info Grid */}
              <div className="quick-info-grid">
                <div className="info-item">
                  <div className="info-icon"><IconMapPin size={18} /></div>
                  <div>
                    <span className="info-label">Location</span>
                    <span className="info-value">{profile?.location || 'San Francisco, CA / Remote'}</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><IconMail size={18} /></div>
                  <div>
                    <span className="info-label">Email</span>
                    <span className="info-value">{profile?.email || 'alex.mercer.dev@example.com'}</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><IconBriefcase size={18} /></div>
                  <div>
                    <span className="info-label">Role</span>
                    <span className="info-value">{profile?.role || 'Full-Stack Software Engineer'}</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><IconCheck size={18} /></div>
                  <div>
                    <span className="info-label">Status</span>
                    <span className="info-value text-emerald">Available for Hire</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Pillars column */}
          <div className="about-pillars-column">
            <div className="pillars-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="glass-card pillar-card">
                  <div className="pillar-icon-box">{item.icon}</div>
                  <h4 className="pillar-title">{item.title}</h4>
                  <p className="pillar-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

