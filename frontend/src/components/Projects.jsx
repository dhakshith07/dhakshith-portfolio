import React, { useState } from 'react';
import {
  IconExternalLink,
  IconGithub,
  IconSparkles,
  IconSearch,
  IconCode
} from './Icons';
import '../styles/Projects.css';

export const Projects = ({ projects = [], onSelectProject, projectsSource }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  // Client-side instant filter
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      project.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Projects &amp; Deployments</h2>
          <p className="section-subtitle">
            A curated showcase of scalable full-stack applications, real-time dashboards, and developer tooling.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="projects-controls">
          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-bar-wrapper">
            <IconSearch size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search by tech (React, MongoDB...) or title"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Source Badge */}
        {projectsSource && (
          <div className="projects-source-info">
            <span className="source-dot"></span>
            <span>
              {projectsSource === 'database'
                ? 'Synced dynamically with MongoDB'
                : 'Displaying initial portfolio dataset'}
            </span>
          </div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="glass-card empty-projects-card">
            <IconCode size={36} className="empty-icon" />
            <h4 className="empty-title">No projects found</h4>
            <p className="empty-desc">
              Try adjusting your search query or choosing a different category filter.
            </p>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project._id || project.title} className="glass-card project-card">
                
                {/* Project Thumbnail Image */}
                <div className="project-thumbnail-wrapper">
                  <img
                    src={project.image || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80'}
                    alt={project.title}
                    className="project-thumbnail"
                    loading="lazy"
                  />
                  <div className="thumbnail-badges">
                    <span className="badge badge-cyan">{project.category}</span>
                    {project.featured && (
                      <span className="badge badge-purple">
                        <IconSparkles size={13} /> Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Body */}
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>

                  {/* Metrics Pill */}
                  {project.metrics && (
                    <div className="project-metric">
                      <span className="metric-indicator">⚡</span>
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="project-actions">
                    <button
                      type="button"
                      className="btn btn-outline btn-sm project-btn"
                      onClick={() => onSelectProject(project)}
                    >
                      Details &amp; Arch
                    </button>

                    <div className="project-external-links">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-icon-btn"
                          title="View Source Code"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <IconGithub size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-icon-btn"
                          title="Open Live Application"
                          aria-label={`Live Demo for ${project.title}`}
                        >
                          <IconExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

