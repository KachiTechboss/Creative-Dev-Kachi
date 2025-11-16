import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-brand">
            <img className="boy" src={process.env.PUBLIC_URL + "/Kachi-logoo.jpeg"}  alt="boy_with_laptop" />
          </div>
          
          <div className="nav-desktop">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="nav-mobile-btn">
            <button 
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
            >
              <svg className={`menu-icon ${mobileMenuOpen ? 'hidden' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
              <svg className={`close-icon ${mobileMenuOpen ? '' : 'hidden'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m18 6-12 12"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${mobileMenuOpen ? '' : 'hidden'}`}>
          <div className="mobile-menu-links">
            <a href="#home" className="mobile-nav-link" onClick={closeMobileMenu}>Home</a>
            <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>About</a>
            <a href="#projects" className="mobile-nav-link" onClick={closeMobileMenu}>Projects</a>
            <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;