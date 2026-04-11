'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-content">
          <Link href="/" className="nav-brand">
            <img className="boy" src="/Kachi-logoo.jpeg" alt="logo" />
          </Link>
          
          <div className="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-nav-link ${pathname === link.href ? 'nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="mobile-theme-toggle">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
