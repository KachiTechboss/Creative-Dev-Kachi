'use client';

import React, { useState } from 'react';
import TextScramble from './TextScramble';
import MagneticButton from './MagneticButton';

const Contacts = () => {
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
              <TextScramble text="Have a project? Let's talk!" className="contact-title" />
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
                <MagneticButton type="submit" className="btn btn-primary" onClick={null}>Submit</MagneticButton>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <TextScramble text="Let's Work Together." className="contact-title" />
              <p className="contact-text">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out!
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

export default Contacts;
