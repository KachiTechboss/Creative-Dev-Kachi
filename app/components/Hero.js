'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import TextScramble from './TextScramble';
import MagneticButton from './MagneticButton';
import { projectsData } from '../data/projectsData';
import { 
  SiHtml5, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiGit, SiGithub
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

const techSkillsPreview = [
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
];

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  
  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"];
  const previewProjects = projectsData.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h2 className="hero-subtitle">
                Hello<span className="text-orange">.</span>
              </h2>
              <h1 className="hero-title">
                I&apos;m <span className="hero-name">Miracle</span>
              </h1>
              <h3 className="hero-role">
                Frontend Developer<span className="text-orange">.</span>
              </h3>
            </div>
            <div className="hero-buttons">
              <MagneticButton href="https://wa.me/2348057032993" className="btn btn-primary">Contact me</MagneticButton>
              <MagneticButton href="https://github.com/KachiTechboss" className="btn btn-outline">GitHub</MagneticButton>
              <MagneticButton href="/NNAJI CV.pdf" className="btn btn-outline btn-download" download="NNAJI_CV.pdf">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </MagneticButton>
            </div>
            <div className="hero-skills">
              <span className="typing-text">I build websites with</span>
              <span className="skill-text">{skills[currentSkill]}</span>
              <span className="typing-cursor">|</span>
            </div>

            <div className="stats-grid">
              <div className="stat">
                <div className="stat-number">60<span className="stat-suffix">+</span></div>
                <div className="stat-label">Completed Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">95<span className="stat-suffix">%</span></div>
                <div className="stat-label">Client satisfaction</div>
              </div>
              <div className="stat">
                <div className="stat-number">3<span className="stat-suffix">+</span></div>
                <div className="stat-label">Years of experience</div>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-image-container">
              <div className="hero-image-bg">
               <img 
                  src="/image/kachi porfolio pics.jpg" 
                  alt="Kachi" 
                  className="hero-img" 
               />
              </div>
              <div className="hero-decoration-1"></div>
              <div className="hero-decoration-2"></div>
            </div>
          </div>
          
          <div className="scroll-indicator">
            <svg className="scroll-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="hero-preview-section">
        <div className="container">
          <TextScramble text="About Me" className="section-title" />
          <div className="about-grid">
            <div className="about-image-section">
              <div className="about-picture-frame">
                <img 
                  src="/image/kachi porfolio pics.jpg" 
                  alt="Nnaji Onyedikachi Miracle" 
                  className="about-picture bounce-animation"
                />
              </div>
            </div>
            <div className="about-content">
              <p className="about-text">
                Nnaji Onyedikachi Miracle is a highly motivated and detail-oriented web developer with a passion for building innovative and user-friendly digital solutions. Skilled in HTML, CSS, JavaScript, React, Next.js with a strong foundation in front-end development.
              </p>
              <div className="about-highlights" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="highlight-item">
                  <span className="highlight-icon">&#9889;</span>
                  <div>
                    <h4>Fast &amp; Responsive</h4>
                    <p>Lightning-fast, mobile-first websites.</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">&#127912;</span>
                  <div>
                    <h4>Clean Design</h4>
                    <p>Pixel-perfect UIs with modern aesthetics.</p>
                  </div>
                </div>
              </div>
              <div className="see-more-wrap">
                <MagneticButton href="/about" className="btn btn-primary see-more-btn">
                  See More <span className="see-more-arrow">&#8594;</span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="hero-preview-section">
        <div className="container">
          <TextScramble text="My Skills" className="section-title" />
          <div className="skills-grid">
            {techSkillsPreview.map((skill, i) => (
              <div key={i} className="skill-icon" title={skill.name}>
                {skill.icon}
                <span className="skill-label">{skill.name}</span>
              </div>
            ))}
          </div>
          <div className="see-more-wrap">
            <MagneticButton href="/skills" className="btn btn-primary see-more-btn">
              See More <span className="see-more-arrow">&#8594;</span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="hero-preview-section hero-preview-projects">
        <div className="container">
          <TextScramble text="Projects" className="section-title" />
          <div className="projects-card-grid">
            {previewProjects.map((project, idx) => (
              <div className="project-card fade-in-up" key={project.id} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
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
          <div className="see-more-wrap">
            <MagneticButton href="/projects" className="btn btn-primary see-more-btn">
              See More <span className="see-more-arrow">&#8594;</span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="hero-preview-section">
        <div className="container">
          <TextScramble text="Get In Touch" className="section-title" />
          <div className="contact-preview-content">
            <p className="about-text" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let&apos;s build something amazing together!
            </p>
            <div className="see-more-wrap">
              <MagneticButton href="/contact" className="btn btn-primary see-more-btn">
                Contact Me <span className="see-more-arrow">&#8594;</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
