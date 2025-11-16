import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">Testimonial</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-image">
                <img
                  src={process.env.PUBLIC_URL + "/image/LOGOOOO.png"}
                  alt="Codemantix Collective"
                   className="testimonial-img"
/>

                <h3>Codemantix Collective</h3>
              </div>
              <p className="testimonial-text">
                "As the CEO of Codemantix Collective, I am thrilled to endorse Nnaji Onyedikachi Miracle, an exceptionally talented frontend developer I've had the privilege of mentoring. Nnaji's mastery of HTML, CSS, and JavaScript is unparalleled, enabling him to craft responsive, pixel-perfect user interfaces that blend stunning visuals with seamless functionality. His ability to transform complex client requirements into intuitive, high-performance web applications showcases his technical prowess and keen eye for user experience optimization. <br /><br />
                Nnaji's problem-solving skills and adaptability set him apart. He consistently delivers clean, efficient, and maintainable code under tight deadlines, ensuring cross-browser compatibility and outstanding results. His collaborative spirit shines through in his effective communication with designers, developers, and stakeholders, making him a vital asset to any team. Nnaji's proactive approach often leads to innovative solutions that enhance project functionality and client satisfaction. <br /><br />
                Having guided many developers, I can confidently say Nnaji is among the elite. His dedication, attention to detail, and passion for frontend development make him a top choice for any client seeking exceptional web solutions. For further details about Nnaji's contributions, feel free to contact me at codemantixcollective@gmail.com." <br /><br />
                Okechukwu Victor<br />
                CEO, Codemantix Collective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;