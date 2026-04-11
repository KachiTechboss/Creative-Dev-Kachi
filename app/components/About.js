'use client';

import React from "react";
import TextScramble from './TextScramble';

const About = () => {
  return (
    <section className="about">
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
              Nnaji Onyedikachi Miracle is a highly motivated and detail-oriented web developer with a passion for building innovative and user-friendly digital solutions. Skilled in HTML, CSS, JavaScript, React, Next.js with a strong foundation in front-end development. Dedicated to staying up-to-date with the latest web development trends and technologies, with a focus on delivering high-quality, responsive, and scalable web applications that exceed client expectations.
            </p>
            <p className="about-text">
              With years of experience in the industry, I possess a deep understanding of web development principles. My expertise spans across various industries including e-commerce, healthcare, finance, real estate, and education — delivering tailored solutions that drive results.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">&#9889;</span>
                <div>
                  <h4>Fast &amp; Responsive</h4>
                  <p>I build lightning-fast, mobile-first websites that look great on every device.</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">&#127912;</span>
                <div>
                  <h4>Clean &amp; Modern Design</h4>
                  <p>Pixel-perfect UIs with intuitive user experiences and modern aesthetics.</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">&#128640;</span>
                <div>
                  <h4>Performance Optimized</h4>
                  <p>SEO-friendly, optimized code for maximum speed and search engine visibility.</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">&#129309;</span>
                <div>
                  <h4>Client Focused</h4>
                  <p>Collaborative approach ensuring your vision is brought to life exactly as intended.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
