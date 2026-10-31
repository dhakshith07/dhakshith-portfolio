import React, { useState } from 'react';
import {
  IconAward,
  IconBriefcase,
  IconExternalLink,
  IconShieldCheck,
  IconCalendar,
  IconMapPin,
  IconCheck
} from './Icons';
import '../styles/InternshipsCertifications.css';

const DEFAULT_INTERNSHIPS = [
  {
    role: "Full-Stack Web Development Intern",
    company: "TechCorp Innovations",
    type: "Summer Internship",
    period: "May 2023 - August 2023",
    location: "San Francisco, CA (Hybrid)",
    department: "Frontend Platform & UI Design Systems",
    summary: "Worked alongside senior engineers on customer-facing React components and Express API integration.",
    achievements: [
      "Engineered 12+ accessible, responsive React components now integrated across the core design system.",
      "Integrated RESTful endpoints in Express to support real-time data export and CSV downloading.",
      "Participated actively in sprint planning, GitHub code reviews, and cross-functional team demos."
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "Node.js", "Express", "CSS Modules", "Git"]
  },
  {
    role: "Software Engineering Intern",
    company: "DataSphere Analytics Labs",
    type: "Winter Internship",
    period: "January 2023 - April 2023",
    location: "Remote",
    department: "Data Engineering & Dashboard Squad",
    summary: "Contributed to performance optimizations and interactive charts for enterprise telemetry dashboards.",
    achievements: [
      "Built dynamic, interactive chart widgets using React and SVG visualization libraries.",
      "Optimized MongoDB aggregation pipelines, reducing customer report query times by 28%.",
      "Wrote comprehensive unit and integration test suites using Jest, boosting test coverage above 85%."
    ],
    technologies: ["React.js", "MongoDB", "Mongoose", "Express.js", "REST APIs", "Jest"]
  }
];

const DEFAULT_CERTIFICATIONS = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "Oct 2023",
    expiryDate: "Oct 2026",
    credentialId: "AWS-CP-894721",
    badgeColor: "cyan",
    verificationUrl: "https://aws.amazon.com/verification",
    skills: ["Cloud Architecture", "Amazon EC2", "Amazon S3", "IAM Security", "Serverless"]
  },
  {
    title: "Meta Front-End Developer Professional",
    issuer: "Meta / Coursera",
    issueDate: "Aug 2023",
    expiryDate: "Lifetime",
    credentialId: "META-FED-492019",
    badgeColor: "indigo",
    verificationUrl: "https://coursera.org/verify/professional-cert",
    skills: ["React.js", "Advanced JavaScript", "Responsive Design", "Version Control", "UI/UX"]
  },
  {
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB Inc.",
    issueDate: "May 2023",
    expiryDate: "May 2026",
    credentialId: "MDB-DEV-382910",
    badgeColor: "emerald",
    verificationUrl: "https://university.mongodb.com/credentials",
    skills: ["Schema Modeling", "Aggregation Pipelines", "Mongoose ODM", "Indexing Optimization"]
  },
  {
    title: "OpenJS Node.js Application Development",
    issuer: "The Linux Foundation & OpenJS",
    issueDate: "Mar 2023",
    expiryDate: "Lifetime",
    credentialId: "LF-JSNAD-77312",
    badgeColor: "purple",
    verificationUrl: "https://www.credly.com",
    skills: ["Node.js Runtime", "Express.js", "Asynchronous Control Flow", "REST API Security"]
  },
  {
    title: "Problem Solving (Gold Level Certification)",
    issuer: "HackerRank",
    issueDate: "Dec 2022",
    expiryDate: "Lifetime",
    credentialId: "HR-PS-GOLD-5510",
    badgeColor: "amber",
    verificationUrl: "https://www.hackerrank.com/certificates",
    skills: ["Data Structures", "Algorithms", "Time Complexity", "Dynamic Programming"]
  }
];

export const InternshipsCertifications = () => {
  const [activeTab, setActiveTab] = useState('both'); // 'both' | 'internships' | 'certifications'

  return (
    <section id="certifications" className="section internships-cert-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Credentials &amp; Training</span>
          <h2 className="section-title">Internships &amp; Certifications</h2>
          <p className="section-subtitle">
            Hands-on software engineering industry internships coupled with globally recognized professional technical certifications.
          </p>
        </div>

        {/* View Selection Filter Tabs */}
        <div className="ic-tab-controls">
          <button
            type="button"
            className={`ic-tab-btn ${activeTab === 'both' ? 'active' : ''}`}
            onClick={() => setActiveTab('both')}
          >
            All Credentials
          </button>
          <button
            type="button"
            className={`ic-tab-btn ${activeTab === 'internships' ? 'active' : ''}`}
            onClick={() => setActiveTab('internships')}
          >
            <IconBriefcase size={16} />
            Industry Internships
          </button>
          <button
            type="button"
            className={`ic-tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            <IconAward size={16} />
            Verified Certifications
          </button>
        </div>

        {/* Internships Sub-Section */}
        {(activeTab === 'both' || activeTab === 'internships') && (
          <div className="ic-block">
            <div className="ic-block-header">
              <div className="ic-block-icon">
                <IconBriefcase size={20} />
              </div>
              <div>
                <h3 className="ic-block-title">Engineering Internships</h3>
                <p className="ic-block-subtitle">Direct hands-on experience working in high-pace technical teams</p>
              </div>
            </div>

            <div className="internships-grid">
              {DEFAULT_INTERNSHIPS.map((internship, idx) => (
                <div key={idx} className="glass-card internship-card">
                  <div className="internship-top">
                    <div>
                      <span className="internship-type-pill">{internship.type}</span>
                      <h4 className="internship-role">{internship.role}</h4>
                      <h5 className="internship-company">{internship.company}</h5>
                    </div>

                    <div className="internship-meta">
                      <div className="internship-meta-row">
                        <IconCalendar size={14} className="meta-icon" />
                        <span>{internship.period}</span>
                      </div>
                      <div className="internship-meta-row">
                        <IconMapPin size={14} className="meta-icon" />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="internship-summary">{internship.summary}</p>

                  <ul className="internship-bullets">
                    {internship.achievements.map((item, bIdx) => (
                      <li key={bIdx} className="internship-bullet-item">
                        <IconCheck size={14} className="bullet-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="internship-tech-pills">
                    {internship.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Sub-Section */}
        {(activeTab === 'both' || activeTab === 'certifications') && (
          <div className="ic-block">
            <div className="ic-block-header">
              <div className="ic-block-icon">
                <IconAward size={20} />
              </div>
              <div>
                <h3 className="ic-block-title">Professional Certifications &amp; Accreditations</h3>
                <p className="ic-block-subtitle">Validated mastery across Cloud, Full-Stack, and Databases</p>
              </div>
            </div>

            <div className="certifications-grid">
              {DEFAULT_CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="glass-card cert-card">
                  
                  <div className="cert-card-header">
                    <div className="cert-verified-pill">
                      <IconShieldCheck size={14} />
                      <span>Verified</span>
                    </div>
                    <span className="cert-date">{cert.issueDate}</span>
                  </div>

                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">Issued by: <strong>{cert.issuer}</strong></p>

                  <div className="cert-id-row">
                    <span className="cert-id-label">Credential ID:</span>
                    <span className="cert-id-value">{cert.credentialId}</span>
                  </div>

                  {/* Skills tags */}
                  <div className="cert-skills-wrap">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="cert-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Verification action */}
                  <div className="cert-action-row">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm cert-verify-btn"
                    >
                      <IconExternalLink size={14} />
                      Verify Credential
                    </a>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

