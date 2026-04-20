'use client';

import React, { useState } from 'react';
import { useTheme, colorThemes } from './ThemeProvider';

const ThemeSettings = () => {
  const { theme, toggleTheme, colorTheme, setColorTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="theme-settings-wrapper">
      {/* Floating trigger button */}
      <button
        className="theme-settings-btn"
        onClick={() => setOpen(prev => !prev)}
        aria-label="Open theme settings"
        title="Theme settings"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`theme-settings-icon ${open ? 'spinning' : ''}`}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>

      {/* Panel */}
      <div className={`theme-settings-panel ${open ? 'open' : ''}`}>
        <div className="theme-settings-header">
          <span>Theme Settings</span>
          <button className="theme-settings-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
        </div>

        {/* Dark / Light toggle */}
        <div className="theme-settings-section">
          <p className="theme-settings-label">Mode</p>
          <div className="theme-mode-row">
            <button
              className={`theme-mode-btn ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => theme !== 'dark' && toggleTheme()}
            >
              🌙 Dark
            </button>
            <button
              className={`theme-mode-btn ${theme === 'light' ? 'active' : ''}`}
              onClick={() => theme !== 'light' && toggleTheme()}
            >
              ☀️ Light
            </button>
          </div>
        </div>

        {/* Color swatches */}
        <div className="theme-settings-section">
          <p className="theme-settings-label">Accent Color</p>
          <div className="theme-color-grid">
            {colorThemes.map(ct => (
              <button
                key={ct.id}
                className={`theme-color-swatch ${colorTheme === ct.id ? 'selected' : ''}`}
                style={{ backgroundColor: ct.accent }}
                onClick={() => setColorTheme(ct.id)}
                aria-label={ct.label}
                title={ct.label}
              >
                {colorTheme === ct.id && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {open && <div className="theme-settings-backdrop" onClick={() => setOpen(false)} />}
    </div>
  );
};

export default ThemeSettings;
