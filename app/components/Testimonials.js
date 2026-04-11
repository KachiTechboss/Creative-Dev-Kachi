'use client';

import React from 'react';
import TextScramble from './TextScramble';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <TextScramble text="Testimonials" className="section-title" />
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-image">
                <img
                  src="/image/LOGOOOO.png"
                  alt="Codemantix Collective"
                  className="testimonial-img"
                />
                <h3>Codemantix Collective</h3>
              </div>
              <p className="testimonial-text">
                &quot;As the CEO of Codemantix Collective, I am thrilled to endorse Nnaji Onyedikachi Miracle, an exceptionally talented frontend developer I&apos;ve had the privilege of mentoring. Nnaji&apos;s mastery of HTML, CSS, and JavaScript is unparalleled, enabling him to craft responsive, pixel-perfect user interfaces that blend stunning visuals with seamless functionality. His ability to transform complex client requirements into intuitive, high-performance web applications showcases his technical prowess and keen eye for user experience optimization. <br /><br />
                Nnaji&apos;s problem-solving skills and adaptability set him apart. He consistently delivers clean, efficient, and maintainable code under tight deadlines, ensuring cross-browser compatibility and outstanding results. His collaborative spirit shines through in his effective communication with designers, developers, and stakeholders, making him a vital asset to any team. Nnaji&apos;s proactive approach often leads to innovative solutions that enhance project functionality and client satisfaction. <br /><br />
                Having guided many developers, I can confidently say Nnaji is among the elite. His dedication, attention to detail, and passion for frontend development make him a top choice for any client seeking exceptional web solutions.&quot; <br /><br />
                Okechukwu Victor<br />
                CEO, Codemantix Collective.
              </p>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-image">
                <div className="testimonial-avatar">AC</div>
                <h3>Asogwa Chiuba</h3>
              </div>
              <p className="testimonial-text">
                &quot;Working with Nnaji Onyedikachi Miracle has been an absolute pleasure. His technical expertise in frontend development is truly impressive — from building sleek, responsive interfaces to ensuring every pixel is perfectly placed. What sets him apart is his ability to understand project requirements quickly and deliver results that consistently exceed expectations. <br /><br />
                Nnaji brought creativity and precision to every project we collaborated on. His code is clean, well-structured, and maintainable, which made our development workflow seamless. He has a remarkable talent for turning ideas into functional, visually appealing web applications. <br /><br />
                I highly recommend Nnaji to anyone looking for a dedicated, skilled, and reliable frontend developer. He is a true professional who takes pride in his craft and delivers excellence every single time.&quot; <br /><br />
                Asogwa Chiuba
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
