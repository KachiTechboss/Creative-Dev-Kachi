'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          {theme === 'dark' ? (
            <span className="toggle-moon">🌙</span>
          ) : (
            <span className="toggle-sun">☀</span>
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
