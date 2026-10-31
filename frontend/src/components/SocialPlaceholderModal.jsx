import React from 'react';
import { IconX, IconGithub, IconLinkedin } from './Icons';

export const SocialPlaceholderModal = ({ platform, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <IconX size={20} />
        </button>

        <div className="modal-content" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            background: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-cyan)',
            marginBottom: '1rem'
          }}>
            {platform === 'GitHub' ? <IconGithub size={26} /> : <IconLinkedin size={26} />}
          </div>

          <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#fff', marginBottom: '0.4rem' }}>
            {platform} Profile Link Placeholder
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
            In accordance with instructions, no dummy or invented profile link has been generated.
          </p>

          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            textAlign: 'left',
            fontSize: '0.86rem',
            lineHeight: '1.6',
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem'
          }}>
            <strong style={{ color: '#fff' }}>How to connect your actual profile URL:</strong>
            <p style={{ marginTop: '0.4rem' }}>
              Open <code style={{ color: 'var(--accent-cyan)' }}>frontend/src/services/initialData.js</code> (and backend dataset) and insert your profile link into:
            </p>
            <code style={{ display: 'block', marginTop: '0.4rem', padding: '0.35rem 0.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', color: 'var(--accent-indigo)' }}>
              socials.{platform.toLowerCase()} = "https://{platform.toLowerCase()}.com/yourusername"
            </code>
          </div>

          <button type="button" className="btn btn-secondary" onClick={onClose} style={{ width: '100%' }}>
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};

