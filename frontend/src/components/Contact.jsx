import React, { useState } from 'react';
import {
  IconSend,
  IconMail,
  IconMapPin,
  IconCheck,
  IconGithub,
  IconLinkedin,
  IconTwitter
} from './Icons';
import { api } from '../services/api';
import '../styles/Contact.css';

export const Contact = ({ profile, onNotification }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side quick check
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onNotification('Please fill in Name, Email, and Message.', 'error');
      return;
    }

    try {
      setStatus('submitting');
      const res = await api.submitContact(formData);

      setStatus('success');
      setResponseMsg(res.message || 'Message sent successfully!');
      onNotification('Message sent successfully! Thank you for reaching out.', 'success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setStatus('error');
      setResponseMsg(err.message || 'Failed to submit message. Please try emailing directly.');
      onNotification(err.message || 'Failed to submit message.', 'error');
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Build Something Exceptional</h2>
          <p className="section-subtitle">
            Whether you have an upcoming project, a full-time role inquiry, or just want to chat about web architecture.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Info Side Column */}
          <div className="contact-info-col">
            <div className="glass-card contact-card-info">
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-desc">
                Feel free to send a message using the form or reach out directly through my social channels.
              </p>

              <div className="contact-methods">
                <a
                  href={`mailto:${profile?.email || 'alex.mercer.dev@example.com'}`}
                  className="contact-method-item"
                >
                  <div className="method-icon">
                    <IconMail size={20} />
                  </div>
                  <div>
                    <span className="method-label">Direct Email</span>
                    <span className="method-value">{profile?.email || 'alex.mercer.dev@example.com'}</span>
                  </div>
                </a>

                <div className="contact-method-item">
                  <div className="method-icon">
                    <IconMapPin size={20} />
                  </div>
                  <div>
                    <span className="method-label">Location</span>
                    <span className="method-value">{profile?.location || 'San Francisco, CA / Remote'}</span>
                  </div>
                </div>
              </div>

              {/* Response SLA */}
              <div className="response-time-box">
                <span className="sla-dot"></span>
                <span>Average response time: <strong>&lt; 24 hours</strong></span>
              </div>

              {/* Social Channels */}
              <div className="contact-socials-box">
                <span className="contact-socials-title">Follow / Network:</span>
                <div className="contact-socials-row">
                  <a
                    href={profile?.github || 'https://github.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="GitHub"
                  >
                    <IconGithub size={18} />
                  </a>
                  <a
                    href={profile?.linkedin || 'https://linkedin.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="LinkedIn"
                  >
                    <IconLinkedin size={18} />
                  </a>
                  <a
                    href={profile?.twitter || 'https://x.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="Twitter / X"
                  >
                    <IconTwitter size={18} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-col">
            <div className="glass-card contact-form-card">
              <h3 className="form-card-title">Send a Message</h3>

              {status === 'success' && (
                <div className="alert-banner success">
                  <IconCheck size={20} />
                  <p>{responseMsg}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="alert-banner error">
                  <p>{responseMsg}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                      className="form-input"
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email <span className="required-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required
                      className="form-input"
                      disabled={status === 'submitting'}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Opportunity"
                    className="form-input"
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, or timeline..."
                    required
                    className="form-textarea"
                    disabled={status === 'submitting'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="spinner"></span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <IconSend size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

