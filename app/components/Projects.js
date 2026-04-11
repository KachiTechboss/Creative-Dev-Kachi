'use client';

import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import TextScramble from './TextScramble';
import MagneticButton from './MagneticButton';

const featuredIds = [10, 1]; // Inomad + Business Waitlist

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const allTags = ['All', ...Array.from(new Set(projectsData.flatMap(p => p.tags)))];

  const filtered = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.tags.includes(activeFilter));

  return (
    <section className="projects">
      <div className="container">
        <div className="projects-header">
          <TextScramble text="Projects" className="section-title" />
          <div className="section-divider"></div>
          <p className="projects-subtitle">
            A selection of {projectsData.length} projects showcasing my expertise in modern web development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects-filters">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`projects-filter-btn ${activeFilter === tag ? 'projects-filter-active' : ''}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
              {tag !== 'All' && (
                <span className="filter-count">
                  {projectsData.filter(p => p.tags.includes(tag)).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <p className="projects-showing">
          Showing {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </p>

        <div className="projects-card-grid">
          {filtered.map((project, idx) => (
            <div 
              className={`project-card fade-in-up ${hoveredCard === project.id ? 'project-card-hovered' : ''}`}
              key={project.id} 
              style={{ animationDelay: `${idx * 0.08}s` }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {featuredIds.includes(project.id) && (
                <div className="project-featured-badge">&#11088; Featured</div>
              )}
              <div className="project-card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-card-overlay">
                  <MagneticButton href={project.live} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    View Live
                  </MagneticButton>
                </div>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`tag ${activeFilter === tag ? 'tag-active' : ''}`}
                      onClick={() => setActiveFilter(tag)}
                      style={{ cursor: 'pointer' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="project-card-description">{project.description}</p>
                <div className="project-buttons">
                  <MagneticButton href={project.github} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </MagneticButton>
                  <MagneticButton href={project.live} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </MagneticButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
