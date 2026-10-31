import React, { useEffect } from 'react';
import {
  IconX,
  IconExternalLink,
  IconGithub,
  IconSparkles,
  IconCheck
} from './Icons';
import '../styles/Modal.css';

export const ProjectModal = ({ project, onClose, onOpenSocialModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <IconX size={22} />
        </button>

        {project.image && (
          <div className="modal-image-wrapper">
            <img
              src={project.image}
              alt={project.title}
              className="modal-image"
              loading="lazy"
            />
            <div className="modal-image-overlay">
              <span className="badge badge-cyan">{project.category}</span>
              {project.isExperimental && (
                <span className="badge badge-amber" style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24', borderColor: 'rgba(245, 158, 11, 0.4)' }}>
                  🔬 Academic Research Prototype
                </span>
              )}
            </div>
          </div>
        )}

        <div className="modal-content">
          <h3 className="modal-title">{project.title}</h3>

          {/* Academic Disclaimer */}
          {project.isExperimental && project.disclaimer && (
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.6rem',
              padding: '0.85rem 1rem',
              background: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '1.5rem',
              color: '#fcd34d',
              fontSize: '0.86rem',
              lineHeight: '1.5'
            }}>
              <span>⚠️</span>
              <span>{project.disclaimer}</span>
            </div>
          )}

          {/* Description */}
          <div className="modal-section">
            <h4 className="modal-section-title">Project Overview &amp; Architecture</h4>
            <p className="modal-description">{project.description}</p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">Engineered Features &amp; Modules</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {project.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    <IconCheck size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="modal-section">
            <h4 className="modal-section-title">Technologies &amp; Libraries</h4>
            <div className="modal-tags">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="modal-actions">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <IconExternalLink size={18} />
                Live Demo
              </a>
            ) : (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => alert(`Live demonstration for "${project.title}" will be activated when an online Streamlit or cloud URL is provided.`)}
              >
                <IconExternalLink size={18} />
                Live Demo (Local / In R&amp;D)
              </button>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <IconGithub size={18} />
                GitHub Repository
              </a>
            ) : (
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => onOpenSocialModal('GitHub')}
              >
                <IconGithub size={18} />
                Repository Link (Configure)
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
