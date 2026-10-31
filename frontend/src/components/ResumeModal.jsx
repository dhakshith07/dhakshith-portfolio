import React from 'react';
import { IconX, IconDownload, IconCheck, IconExternalLink } from './Icons';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '540px' }}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <IconX size={20} />
        </button>

        <div className="modal-content" style={{ padding: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)',
              marginBottom: '1rem'
            }}>
              <IconDownload size={26} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#fff', marginBottom: '0.4rem' }}>
              Curriculum Vitae / Resume
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Dhakshith Bavan S — B.Tech CSE (Artificial Intelligence)
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '1.5rem',
            fontSize: '0.88rem',
            lineHeight: '1.6',
            color: 'var(--text-secondary)'
          }}>
            <strong style={{ color: '#fff', display: 'block', marginBottom: '0.5rem' }}>
              ✓ Resume Ready for Download
            </strong>
            The official resume PDF containing Dhakshith Bavan S's complete academic background, AI/ML skills, internship experience, and projects is ready for download below.
          </div>

          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                setTimeout(onClose, 500);
              }}
            >
              <IconDownload size={18} />
              Download resume.pdf
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

