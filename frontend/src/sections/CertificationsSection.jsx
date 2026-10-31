import React, { useState } from 'react';
import {
  IconAward,
  IconShieldCheck,
  IconCheck,
  IconExternalLink
} from '../components/Icons';
import '../styles/CertificationsSection.css';

export const CertificationsSection = ({ certificationsByOrg = [] }) => {
  const [selectedOrg, setSelectedOrg] = useState('All');

  const orgNames = ['All', ...certificationsByOrg.map((o) => o.organization)];

  const filteredOrgs = selectedOrg === 'All'
    ? certificationsByOrg
    : certificationsByOrg.filter((o) => o.organization === selectedOrg);

  const getOrgColor = (org) => {
    switch (org) {
      case 'Cisco':
        return '#06b6d4'; // Cyan
      case 'IBM':
        return '#3b82f6'; // Blue
      case 'Infosys':
        return '#8b5cf6'; // Purple
      case 'SkillForge':
        return '#10b981'; // Emerald
      default:
        return '#6366f1';
    }
  };

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Accreditations</span>
          <h2 className="section-title">Professional Certifications</h2>
          <p className="section-subtitle">
            Industry and institutional certifications grouped by issuing organization across Programming, Artificial Intelligence, Networking, and Cybersecurity.
          </p>
        </div>

        {/* Organization Filter Tabs */}
        <div className="cert-org-filters">
          {orgNames.map((org) => (
            <button
              key={org}
              type="button"
              className={`cert-org-btn ${selectedOrg === org ? 'active' : ''}`}
              onClick={() => setSelectedOrg(org)}
            >
              {org}
            </button>
          ))}
        </div>

        {/* Grouped Certifications */}
        <div className="cert-orgs-container">
          {filteredOrgs.map((orgGroup, idx) => (
            <div key={idx} className="glass-card cert-org-card">
              
              <div className="cert-org-header">
                <div
                  className="org-badge-box"
                  style={{ borderColor: `${getOrgColor(orgGroup.organization)}40` }}
                >
                  <IconAward size={22} style={{ color: getOrgColor(orgGroup.organization) }} />
                  <span className="org-title">{orgGroup.organization}</span>
                </div>

                <div className="cert-verified-label">
                  <IconShieldCheck size={15} />
                  <span>Verified Credentials ({orgGroup.certifications.length})</span>
                </div>
              </div>

              {/* Certificates List */}
              <div className="cert-items-grid">
                {orgGroup.certifications.map((certItem, cIdx) => {
                  const certTitle = typeof certItem === 'string' ? certItem : certItem.name;
                  const certCategory = typeof certItem === 'object' ? certItem.category : 'Certification';

                  return (
                    <div key={cIdx} className="cert-item-card">
                      <div className="cert-item-top">
                        <IconCheck size={16} className="cert-check-icon" />
                        <h4 className="cert-item-title">{certTitle}</h4>
                      </div>

                      <div className="cert-item-bottom">
                        <span className="cert-org-subtext">Issued by {orgGroup.organization}</span>
                        {certCategory && (
                          <span className="cert-category-badge">{certCategory}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

