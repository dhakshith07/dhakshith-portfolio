import React, { useState, useEffect } from 'react';
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconMapPin,
  IconSparkles,
  IconDownload,
  IconExternalLink,
  IconCode
} from '../components/Icons';
import '../styles/HeroSection.css';

const ROLES = [
  'AI / ML Developer',
  'Computer Vision Specialist',
  'B.Tech CSE (AI) Student',
  'IoT & Smart Systems Builder'
];

export const HeroSection = ({ profile, onOpenResume, onOpenSocialModal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  // Typewriter effect
  useEffect(() => {
    const fullText = ROLES[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText.length === fullText.length) {
          setIsDeleting(true);
          setTypingSpeed(1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(250);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const name = profile?.name || 'Dhakshith Bavan S';
  const headline = profile?.headline || 'AI/ML Developer | Computer Vision Enthusiast | B.Tech CSE (AI) Student';
  const summary = profile?.summary || 'B.Tech Computer Science (AI) student with hands-on experience in data handling, computer vision, and AI-based projects, backed by an internship in Data Science, AI and Machine Learning. Eager to build practical solutions and grow through collaborative, applied learning.';
  const availability = profile?.availability || 'Open for AI/ML Internships & Placement Opportunities';

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Top Availability Status Badge */}
        <div className="hero-badge-wrap">
          <div className="hero-status-pill">
            <span className="hero-status-pulse"></span>
            <span className="hero-status-label">{availability}</span>
          </div>
        </div>

        {/* Dual-Column Interactive Hero Grid */}
        <div className="hero-two-column-grid">
          
          {/* Left Hero Column: Typography & CTAs */}
          <div className="hero-left-col">
            <p className="hero-greeting">
              <span className="wave-hand">👋</span> Hello, I am
            </p>

            <h1 className="hero-name">
              <span className="gradient-text">{name}</span>
            </h1>

            {/* Dynamic Animated Role */}
            <div className="hero-role-wrapper">
              <span className="role-prefix">&gt; </span>
              <span className="role-typing">{currentText}</span>
              <span className="cursor-blink">|</span>
            </div>

            <p className="hero-headline-static">{headline}</p>
            <p className="hero-description">{summary}</p>

            {/* Call-to-Action Buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <IconSparkles size={18} />
                Explore Projects
              </a>

              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                download="resume.pdf"
                className="btn btn-outline hero-resume-btn"
                title="Download Resume (resume.pdf)"
              >
                <IconDownload size={17} />
                Download Resume
              </a>
            </div>

            {/* Social Channels with Tooltips */}
            <div className="hero-socials">
              <span className="socials-label">Connect:</span>
              <div className="socials-icons">
                <button
                  type="button"
                  className="social-btn"
                  onClick={() => onOpenSocialModal('GitHub')}
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <IconGithub size={19} />
                </button>

                <button
                  type="button"
                  className="social-btn"
                  onClick={() => onOpenSocialModal('LinkedIn')}
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <IconLinkedin size={19} />
                </button>

                <a
                  href={`mailto:${profile?.email || 'dhakshithbavan1004@gmail.com'}`}
                  className="social-btn"
                  title="Send Email"
                  aria-label="Send direct email"
                >
                  <IconMail size={19} />
                </a>

                <a
                  href={`tel:${profile?.phone?.replace(/\s+/g, '') || '+919025069558'}`}
                  className="social-btn"
                  title="Direct Phone"
                  aria-label="Direct Phone"
                >
                  <IconMapPin size={19} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Interactive AI & Computer Vision Terminal Card */}
          <div className="hero-right-col">
            <div className="vision-terminal-card glass-card">
              
              {/* Terminal Window Header */}
              <div className="terminal-header">
                <div className="terminal-traffic-dots">
                  <span className="traffic-dot red"></span>
                  <span className="traffic-dot yellow"></span>
                  <span className="traffic-dot green"></span>
                </div>
                <div className="terminal-title-tab">
                  <IconCode size={14} className="terminal-icon" />
                  <span>yolov11_vision_runtime.py</span>
                </div>
                <div className="terminal-status-tag">LIVE INFERENCE</div>
              </div>

              {/* Simulated Vision Viewport */}
              <div className="vision-viewport">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&auto=format&fit=crop&q=80"
                  alt="Computer Vision Object Detection Workspace"
                  className="viewport-feed-image"
                />
                
                {/* Simulated YOLOv11 & MediaPipe Bounding Boxes */}
                <div className="bounding-box box-laptop">
                  <span className="bbox-label">laptop 98.4%</span>
                </div>
                <div className="bounding-box box-book">
                  <span className="bbox-label">stationery / book 96.1%</span>
                </div>
                <div className="bounding-box box-hand">
                  <span className="bbox-label">mediapipe: hand_tracking active</span>
                  <div className="landmark-dot dot-1"></div>
                  <div className="landmark-dot dot-2"></div>
                  <div className="landmark-dot dot-3"></div>
                </div>

                <div className="viewport-overlay-scanline"></div>
              </div>

              {/* Live Telemetry Bar */}
              <div className="vision-telemetry-grid">
                <div className="telemetry-item">
                  <span className="telemetry-label">INFERENCE FPS</span>
                  <span className="telemetry-value text-emerald">60.0 FPS</span>
                </div>
                <div className="telemetry-item">
                  <span className="telemetry-label">LATENCY</span>
                  <span className="telemetry-value text-cyan">8.2 ms</span>
                </div>
                <div className="telemetry-item">
                  <span className="telemetry-label">PIPELINE</span>
                  <span className="telemetry-value">YOLOv11 + MediaPipe</span>
                </div>
              </div>

              {/* Terminal Code Snippet */}
              <div className="terminal-code-body">
                <p className="code-line"><span className="code-keyword">import</span> cv2, mediapipe <span className="code-keyword">as</span> mp</p>
                <p className="code-line"><span className="code-keyword">from</span> ultralytics <span className="code-keyword">import</span> YOLO</p>
                <p className="code-line"><span className="code-comment"># Initializing models for workflow analysis</span></p>
                <p className="code-line">model = YOLO(<span className="code-string">"yolov11n.pt"</span>)</p>
                <p className="code-line">results = model.track(source=<span className="code-number">0</span>, show=<span className="code-keyword">True</span>)</p>
              </div>

            </div>
          </div>

        </div>

        {/* Core Expertise Ribbon */}
        <div className="hero-tech-strip">
          <span className="tech-strip-title">CORE FOCUS</span>
          <div className="tech-tags-list">
            <span className="tech-pill">YOLOv11 Object Detection</span>
            <span className="tech-pill">MediaPipe Hand Tracking</span>
            <span className="tech-pill">Computer Vision</span>
            <span className="tech-pill">Python &amp; OpenCV</span>
            <span className="tech-pill">Ensemble ML Models</span>
            <span className="tech-pill">IoT &amp; Arduino Smart Gloves</span>
            <span className="tech-pill">Streamlit &amp; Android</span>
          </div>
        </div>

        {/* Academic & Experience Stats Grid */}
        <div className="hero-stats-grid">
          <div className="glass-card stat-card">
            <span className="stat-number">2024–28</span>
            <span className="stat-label">B.Tech CSE (AI) at Karunya</span>
          </div>
          <div className="glass-card stat-card">
            <span className="stat-number">3</span>
            <span className="stat-label">Academic Vision &amp; IoT Projects</span>
          </div>
          <div className="glass-card stat-card">
            <span className="stat-number">iGeeks</span>
            <span className="stat-label">AI &amp; ML Industry Internship</span>
          </div>
          <div className="glass-card stat-card">
            <span className="stat-number">8+</span>
            <span className="stat-label">Verified Certifications (Cisco, IBM)</span>
          </div>
        </div>

      </div>
    </section>
  );
};
