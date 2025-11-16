import React from "react";
import Skills from "./Skills"; // import the Skills component

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">About me</h2>
            <p className="about-text">
              Nnaji Onyedikachi Miracle is a highly motivated and detail-oriented web developer with a passion for building innovative and user-friendly digital solutions. Skilled in HTML, CSS, JavaScript, React, with a strong foundation in front-end development. Dedicated to staying up-to-date with the latest web development trends and technologies, with a focus on delivering high-quality, responsive, and scalable web applications that exceed client expectations. <br /><br />
              With years of experience in the industry, I possess a deep understanding of web development principles. My expertise spans across various industries [e-commerce, healthcare, finance, etc.] 
            </p>

            
            <div className="stats-grid">
              <div className="stat">
                <div className="stat-number">50<span className="stat-suffix">+</span></div>
                <div className="stat-label">Completed Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">95<span className="stat-suffix">%</span></div>
                <div className="stat-label">Client satisfaction</div>
              </div>
              <div className="stat">
                <div className="stat-number">2<span className="stat-suffix">+</span></div>
                <div className="stat-label">Years of experience</div>
              </div>
            </div>
          </div>
          
          <div className="services-section">
            <h2 className="section-title">My Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="14" x="2" y="3" rx="2"/>
                    <line x1="8" x2="16" y1="21" y2="21"/>
                    <line x1="12" x2="12" y1="17" y2="21"/>
                  </svg>
                </div>
                <div className="service-content">
                  <h3 className="service-title">Website Development</h3>
                </div>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
                    <line x1="6" x2="6.01" y1="6" y2="6"/>
                    <line x1="6" x2="6.01" y1="18" y2="18"/>
                  </svg>
                </div>
                <div className="service-content">
                  <h3 className="service-title">Website Hosting</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
          {/* Insert the Skills component here */}
            <h2 className="skill-title">My Skills</h2>
            <Skills />
    </section>
  );
};

export default About;
