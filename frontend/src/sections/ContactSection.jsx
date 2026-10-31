import React, { useState } from 'react';
import {
  IconSend,
  IconMail,
  IconPhone,
  IconMapPin,
  IconCheck,
  IconGithub,
  IconLinkedin,
  IconSparkles
} from '../components/Icons';
import { api } from '../services/api';
import '../styles/ContactSection.css';

export const ContactSection = ({ profile, onNotification, onOpenSocialModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onNotification('Please fill in Name, Email, and Message.', 'error');
      return;
    }

    try {
      setStatus('submitting');
      const res = await api.submitContact(formData);

      setStatus('success');
      setResponseMsg(res.message || 'Thank you! Your message has been saved successfully.');
      onNotification('Message delivered successfully! Saved to MongoDB.', 'success');

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setStatus('error');
      setResponseMsg(err.message || 'Failed to submit message. Please email directly.');
      onNotification(err.message || 'Failed to submit message.', 'error');
    }
  };

  const email = profile?.email || 'dhakshithbavan1004@gmail.com';
  const phone = profile?.phone || '+91 9025069558';
  const location = profile?.location || 'Krishnagiri, Tamil Nadu, India';

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Information &amp; Message</h2>
          <p className="section-subtitle">
            Open to AI/ML engineering internships, academic research collaborations, and placement opportunities.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Info Side Column */}
          <div className="contact-info-col">
            <div className="glass-card contact-card-info">
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-desc">
                Feel free to send a message through the form or get in touch via email or phone.
              </p>

              <div className="contact-methods">
                <a href={`mailto:${email}`} className="contact-method-item" title="Click to compose email">
                  <div className="method-icon"><IconMail size={20} /></div>
                  <div>
                    <span className="method-label">Direct Email</span>
                    <span className="method-value email-break">{email}</span>
                  </div>
                </a>

                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-method-item" title="Click to call">
                  <div className="method-icon"><IconPhone size={20} /></div>
                  <div>
                    <span className="method-label">Phone</span>
                    <span className="method-value">{phone}</span>
                  </div>
                </a>

                <div className="contact-method-item">
                  <div className="method-icon"><IconMapPin size={20} /></div>
                  <div>
                    <span className="method-label">Location</span>
                    <span className="method-value">{location}</span>
                  </div>
                </div>
              </div>

              {/* Response Time SLA */}
              <div className="response-time-box">
                <span className="sla-dot"></span>
                <span>Response Time: Typically under <strong>24 hours</strong></span>
              </div>

              {/* Social Channels with Placeholders */}
              <div className="contact-socials-box">
                <span className="contact-socials-title">Social / Professional Links:</span>
                <div className="contact-socials-row">
                  <button
                    type="button"
                    className="social-btn"
                    onClick={() => onOpenSocialModal('GitHub')}
                    title="Configure GitHub URL"
                    aria-label="GitHub Profile"
                  >
                    <IconGithub size={18} />
                  </button>

                  <button
                    type="button"
                    className="social-btn"
                    onClick={() => onOpenSocialModal('LinkedIn')}
                    title="Configure LinkedIn URL"
                    aria-label="LinkedIn Profile"
                  >
                    <IconLinkedin size={18} />
                  </button>

                  <a
                    href={`mailto:${email}`}
                    className="social-btn"
                    title="Send Email"
                    aria-label="Email"
                  >
                    <IconMail size={18} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Form Side Column */}
          <div className="contact-form-col">
            <div className="glass-card contact-form-card">
              <h3 className="form-card-title">Send a Direct Message</h3>

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

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input"
                      disabled={status === 'submitting'}
                    />
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
                      placeholder="Internship / Project Inquiry"
                      className="form-input"
                      disabled={status === 'submitting'}
                    />
                  </div>
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
                    placeholder="Hello Dhakshith, I would like to discuss..."
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
                      Saving to MongoDB...
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

