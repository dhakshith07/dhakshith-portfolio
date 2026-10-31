import React, { useState } from 'react';
import {
  IconCode,
  IconExternalLink,
  IconGithub,
  IconSparkles,
  IconCheck,
  IconSearch,
  IconShieldCheck
} from '../components/Icons';
import '../styles/ProjectsSection.css';

export const ProjectsSection = ({ projects = [], onSelectProject, projectsSource, onOpenSocialModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Computer Vision', 'IoT & Embedded Systems'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      project.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      selectedCategory.toLowerCase().includes(project.category.toLowerCase());

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Featured Engineering</span>
          <h2 className="section-title">Academic Projects</h2>
          <p className="section-subtitle">
            Hands-on prototypes spanning Deep Learning object detection, Computer Vision healthcare screening exploration, and assistive IoT smart gloves.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="projects-controls-bar">
          <div className="projects-category-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-search-box">
            <IconSearch size={16} className="search-icon-pos" />
            <input
              type="text"
              placeholder="Filter by tech (YOLOv11, Arduino...) or title"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="projects-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-trigger"
                onClick={() => setSearchQuery('')}
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-cards-grid">
          {filteredProjects.map((project) => (
            <article key={project._id || project.title} className="glass-card project-card-modern">
              
              {/* Thumbnail Container */}
              <div className="project-media-banner">
                <img
                  src={project.image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80'}
                  alt={project.title}
                  className="project-banner-img"
                  loading="lazy"
                />
                
                <div className="project-banner-badges">
                  <span className="badge badge-cyan">{project.category}</span>
                  {project.isExperimental && (
                    <span className="badge badge-amber experimental-tag" title="Academic Research Prototype">
                      🔬 Experimental Concept
                    </span>
                  )}
                </div>
              </div>

              {/* Project Card Body */}
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-summary">{project.summary}</p>

                {/* Experimental Academic Disclaimer Banner if applicable */}
                {project.isExperimental && project.disclaimer && (
                  <div className="academic-disclaimer-box">
                    <span className="disclaimer-icon">⚠️</span>
                    <p className="disclaimer-text">{project.disclaimer}</p>
                  </div>
                )}

                {/* Key Features Bullet List */}
                <div className="project-features-block">
                  <span className="features-block-label">Key Features:</span>
                  <ul className="project-features-list">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="feature-list-item">
                        <IconCheck size={14} className="feature-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies List */}
                <div className="project-tech-tags">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-badge-item">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions Footer */}
                <div className="project-card-footer">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm details-btn"
                    onClick={() => onSelectProject(project)}
                  >
                    Deep Dive &amp; Arch
                  </button>

                  <div className="card-external-links">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-icon-link"
                        title="View GitHub Repository"
                      >
                        <IconGithub size={18} />
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="external-icon-link disabled-link"
                        onClick={() => onOpenSocialModal('GitHub')}
                        title="GitHub link: Configure your actual repository URL"
                      >
                        <IconGithub size={18} />
                      </button>
                    )}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-icon-link"
                        title="Open Live Demonstration"
                      >
                        <IconExternalLink size={18} />
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="external-icon-link disabled-link"
                        onClick={() => alert(`Live demonstration link for "${project.title}" will be activated when a deployment URL is provided.`)}
                        title="Live demo link placeholder"
                      >
                        <IconExternalLink size={18} />
                      </button>
                    )}
                  </div>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

