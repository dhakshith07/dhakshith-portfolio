import React from 'react';
import {
  IconCheck,
  IconMapPin,
  IconMail,
  IconBriefcase,
  IconCode,
  IconDatabase,
  IconSparkles,
  IconAward,
  IconDownload
} from '../components/Icons';
import '../styles/AboutSection.css';

export const AboutSection = ({ profile }) => {
  const summary = profile?.summary || "B.Tech Computer Science (AI) student with hands-on experience in data handling, computer vision, and AI-based projects, backed by an internship in Data Science, AI and Machine Learning. Eager to build practical solutions and grow through collaborative, applied learning.";

  const interests = [
    {
      title: "Computer Vision & Object Tracking",
      desc: "Developing vision pipelines with YOLOv11 and MediaPipe for object detection and real-time hand-object landmark tracking.",
      icon: <IconSparkles size={20} />
    },
    {
      title: "Machine Learning & Feature Engineering",
      desc: "Applying ensemble learning algorithms, statistical feature extraction, and color space transformations to real-world datasets.",
      icon: <IconDatabase size={20} />
    },
    {
      title: "IoT Hardware & Microcontrollers",
      desc: "Interfacing physical sensory gloves and Arduino microcontrollers with Android apps via wireless Bluetooth serial communications.",
      icon: <IconCode size={20} />
    },
    {
      title: "Applied R&D & Applied Solutions",
      desc: "Passionate about turning experimental academic research into functional prototypes that bridge software and hardware.",
      icon: <IconAward size={20} />
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Profile Overview</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            B.Tech Computer Science student specializing in Artificial Intelligence with a deep enthusiasm for Computer Vision and applied engineering.
          </p>
        </div>

        <div className="about-grid">
          
          {/* Left Column: Summary & Quick Facts */}
          <div className="about-bio-column">
            <div className="glass-card bio-card">
              <h3 className="bio-heading">Professional Summary</h3>
              <p className="bio-paragraph main-summary">
                {summary}
              </p>
              
              <p className="bio-paragraph">
                Currently pursuing my B.Tech in Computer Science (Artificial Intelligence) at Karunya Institute of Technology and Sciences, Coimbatore. Having completed an internship in Data Science, AI and Machine Learning at iGeeks Technologies, Bangalore, I have built practical academic projects in computer vision, non-invasive health screening, and assistive IoT communication gloves.
              </p>

              {/* Quick Info Grid */}
              <div className="quick-info-grid">
                <div className="info-item">
                  <div className="info-icon"><IconMapPin size={18} /></div>
                  <div>
                    <span className="info-label">Location</span>
                    <span className="info-value">{profile?.location || 'Krishnagiri, Tamil Nadu, India'}</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><IconMail size={18} /></div>
                  <div>
                    <span className="info-label">Email</span>
                    <span className="info-value email-value">{profile?.email || 'dhakshithbavan1004@gmail.com'}</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><IconBriefcase size={18} /></div>
                  <div>
                    <span className="info-label">Phone</span>
                    <span className="info-value">{profile?.phone || '+91 9025069558'}</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><IconCheck size={18} /></div>
                  <div>
                    <span className="info-label">Status</span>
                    <span className="info-value text-emerald">Available for Opportunities</span>
                  </div>
                </div>
              </div>

              {/* Download Resume Action */}
              <div className="about-resume-cta">
                <a
                  href="/resume.pdf"
                  download="resume.pdf"
                  className="btn btn-primary"
                  title="Download Dhakshith Bavan S Resume (PDF)"
                >
                  <IconDownload size={18} />
                  Download Resume
                </a>
                <a href="#contact" className="btn btn-outline">
                  Contact Me
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Key Technical Interests */}
          <div className="about-interests-column">
            <div className="interests-header">
              <h4 className="interests-title">Core Academic &amp; Technical Interests</h4>
            </div>

            <div className="interests-grid">
              {interests.map((item, idx) => (
                <div key={idx} className="glass-card interest-card">
                  <div className="interest-icon-box">{item.icon}</div>
                  <h5 className="interest-name">{item.title}</h5>
                  <p className="interest-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

