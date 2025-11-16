import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mvgrgrpp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setToastMessage("Thank you for your message. I'll get back to you soon.");
        setToastType('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        setToastMessage(data.error || 'Something went wrong. Please try again.');
        setToastType('error');
      }
    } catch (error) {
      setToastMessage('Something went wrong. Please try again.');
      setToastType('error');
    }

    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="contact-title">Have a project?<br />Let's talk!</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2 className="contact-title">
                Let's Work <br /> Together<span className="text-orange">.</span>
              </h2>
              <p className="contact-text">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="contact-links">
                <a href="tel:+2348057032993" className="social-link" title="Call">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.06.72 3a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.94.35 1.95.59 3 .72A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </a>
                <p>+2348057032993</p>
              </div>

              <div className="contact-links">
                <a href="mailto:onyedikannaji7@gmail.com" className="social-link" title="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </a>
                <p>onyedikannaji7@gmail.com</p>
              </div>

              <div className="contact-links">
                <span className="social-link" title="Location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <path d="M21 10.5c0 7.5-9 12-9 12s-9-4.5-9-12a9 9 0 1 1 18 0z"/>
                    <circle cx="12" cy="10.5" r="3"/>
                  </svg>
                </span>
                <p>Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="contact-footer">
        <div className="container">
          <div className="contact-profile">
            <h3 className="name">Miracle</h3>
            <p className="contact-tagline">
              Bringing your ideas to life with clean, modern web solutions
            </p>
          </div>
          <div className="social-links">
            <a href="tel:+2348057032993" className="social-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.06.72 3a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.94.35 1.95.59 3 .72A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
            <a href="https://github.com/KachiTechboss" className="social-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="http://www.linkedin.com/in/onyedikachi-miracle-nnaji-9187431b5" className="social-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
          <footer className="footer">
            <p>©Copyright 2025 Miracle. All rights reserved.</p>
          </footer>
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`toast ${showToast ? 'show' : ''} ${toastType}`}>
        <div className="toast-content">
          <div className="toast-title">{toastType === 'success' ? 'Message sent!' : 'Error'}</div>
          <div className="toast-description">{toastMessage}</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
