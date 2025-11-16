import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  
  const skills = ["HTML", "CSS", "JavaScript", "React", "TypeScript"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hello<span className="text-orange">.</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm <span className="hero-name">Miracle</span>
            </h2>
            <h3 className="hero-role">
              Frontend Developer<span className="text-orange">.</span>
            </h3>
          </div>
          <div className="hero-buttons">
            <a href="https://wa.me/2348057032993" className="btn btn-primary">Contact me</a>
            <a href="https://github.com/KachiTechboss" className="btn btn-outline">GitHub</a>
          </div>
          <div className="hero-skills">
            <span className="typing-text">I build websites with</span>
            <span className="skill-text">{skills[currentSkill]}</span>
            <span className="typing-cursor">|</span>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="hero-image-container">
            <div className="hero-image-bg">
             <img 
                src={process.env.PUBLIC_URL + "/image/kachi porfolio pics.jpg"} 
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
  );
};

export default Hero;