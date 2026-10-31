import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { SocialPlaceholderModal } from './components/SocialPlaceholderModal';

// Sections
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { EducationSection } from './sections/EducationSection';
import { SkillsSection } from './sections/SkillsSection';
import { InternshipSection } from './sections/InternshipSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { LanguagesSection } from './sections/LanguagesSection';
import { ContactSection } from './sections/ContactSection';

import { api } from './services/api';
import { dhakshithProfileData, dhakshithProjectsData } from './services/initialData';
import './App.css';

function App() {
  const [profile, setProfile] = useState(dhakshithProfileData);
  const [education, setEducation] = useState(dhakshithProfileData.education);
  const [skillsCategories, setSkillsCategories] = useState(dhakshithProfileData.skillsCategories);
  const [internship, setInternship] = useState(dhakshithProfileData.internship);
  const [certificationsByOrg, setCertificationsByOrg] = useState(dhakshithProfileData.certificationsByOrg);
  const [languages, setLanguages] = useState(dhakshithProfileData.languages);

  const [projects, setProjects] = useState(dhakshithProjectsData);
  const [projectsSource, setProjectsSource] = useState('database');

  const [backendStatus, setBackendStatus] = useState({
    type: 'online',
    text: 'MongoDB Active'
  });

  // Modal states
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [socialModalPlatform, setSocialModalPlatform] = useState(null); // 'GitHub' | 'LinkedIn' | null

  // Toast notification
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  useEffect(() => {
    let isMounted = true;

    async function loadBackendData() {
      try {
        // 1. Health check
        const health = await api.checkHealth();
        if (isMounted) {
          if (health.status === 'online') {
            if (health.database && health.database.connected) {
              setBackendStatus({ type: 'online', text: 'MongoDB Atlas Active' });
            } else {
              setBackendStatus({ type: 'fallback', text: 'API Online' });
            }
          } else {
            setBackendStatus({ type: 'offline', text: 'Local Preview' });
          }
        }

        // 2. Fetch Profile from API
        try {
          const profileRes = await api.getProfile();
          if (isMounted && profileRes.data) {
            setProfile(profileRes.data);
            if (profileRes.data.education) setEducation(profileRes.data.education);
            if (profileRes.data.skillsCategories) setSkillsCategories(profileRes.data.skillsCategories);
            if (profileRes.data.internship) setInternship(profileRes.data.internship);
            if (profileRes.data.certificationsByOrg) setCertificationsByOrg(profileRes.data.certificationsByOrg);
            if (profileRes.data.languages) setLanguages(profileRes.data.languages);
          }
        } catch (e) {
          console.log('Profile running with initial dataset');
        }

        // 3. Fetch Projects from MongoDB API
        try {
          const projectsRes = await api.getProjects();
          if (isMounted && projectsRes.data && projectsRes.data.length > 0) {
            setProjects(projectsRes.data);
            setProjectsSource(projectsRes.source || 'database');
          }
        } catch (e) {
          console.log('Projects running with initial dataset');
        }

      } catch (err) {
        if (isMounted) {
          setBackendStatus({ type: 'offline', text: 'Local Preview' });
        }
      }
    }

    loadBackendData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="app-wrapper">
      {/* Ambient background glow orbs */}
      <div className="ambient-glow glow-top-left"></div>
      <div className="ambient-glow glow-top-right"></div>
      <div className="ambient-glow glow-bottom-left"></div>

      {/* Responsive Sticky Navbar */}
      <Navbar backendStatus={backendStatus} />

      <main className="main-content">
        {/* 1. Home / Introduction */}
        <HeroSection
          profile={profile}
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenSocialModal={(platform) => setSocialModalPlatform(platform)}
        />

        <div className="section-divider"></div>

        {/* 2. About Me */}
        <AboutSection profile={profile} />

        <div className="section-divider"></div>

        {/* 3. Education */}
        <EducationSection education={education} />

        <div className="section-divider"></div>

        {/* 4. Technical Skills */}
        <SkillsSection skillsCategories={skillsCategories} />

        <div className="section-divider"></div>

        {/* 5. Internship Experience */}
        <InternshipSection internship={internship} />

        <div className="section-divider"></div>

        {/* 6. Academic Projects */}
        <ProjectsSection
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
          projectsSource={projectsSource}
          onOpenSocialModal={(platform) => setSocialModalPlatform(platform)}
        />

        <div className="section-divider"></div>

        {/* 7. Certifications */}
        <CertificationsSection certificationsByOrg={certificationsByOrg} />

        <div className="section-divider"></div>

        {/* 8. Languages */}
        <LanguagesSection languages={languages} />

        <div className="section-divider"></div>

        {/* 9. Contact Section */}
        <ContactSection
          profile={profile}
          onNotification={showNotification}
          onOpenSocialModal={(platform) => setSocialModalPlatform(platform)}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onOpenSocialModal={(platform) => setSocialModalPlatform(platform)}
      />

      {/* Project Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenSocialModal={(platform) => setSocialModalPlatform(platform)}
        />
      )}

      {/* Resume Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Social Profile Placeholder Modal */}
      <SocialPlaceholderModal
        platform={socialModalPlatform}
        isOpen={!!socialModalPlatform}
        onClose={() => setSocialModalPlatform(null)}
      />

      {/* Toast Notification Alert */}
      {notification && (
        <div className={`toast-notification ${notification.type}`}>
          <span className="toast-icon">
            {notification.type === 'success' ? '✓' : 'ℹ'}
          </span>
          <span>{notification.message}</span>
          <button
            type="button"
            className="toast-close-btn"
            onClick={() => setNotification(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
