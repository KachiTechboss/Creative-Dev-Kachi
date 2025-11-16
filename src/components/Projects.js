import React, { useState, useEffect } from "react";
import { projectsData } from "../data/projectsData";
import "../styles/App.css";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2 className="section-title">Projects</h2>
        <div className="section-divider"></div>
      </div>

      <div className="carousel">
        <div
          className="carousel-inner"
          style={{
            width: `${projectsData.length * 100}%`,
            transform: `translateX(-${(100 / projectsData.length) * currentProject}%)`,
          }}
        >
          {projectsData.map((project, idx) => (
            <div className="project" key={idx} style={{ width: `${100 / projectsData.length}%` }}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-buttons">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View Github
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button className="carousel-btn prev" onClick={prevProject}>
          &lt;
        </button>
        <button className="carousel-btn next" onClick={nextProject}>
          &gt;
        </button>

        {/* Indicators */}
        <div className="carousel-indicators">
          {projectsData.map((_, idx) => (
            <button
              key={idx}
              className={`indicator ${idx === currentProject ? "active" : ""}`}
              onClick={() => goToProject(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
