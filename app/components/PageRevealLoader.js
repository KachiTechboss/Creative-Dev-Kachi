'use client';

import React, { useState, useEffect } from 'react';

const PageRevealLoader = () => {
  const [phase, setPhase] = useState('loading'); // loading | revealing | done
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('portfolio-visited');
    if (hasVisited) {
      setPhase('done');
      return;
    }

    // Animate progress 0 -> 100
    let frame = 0;
    const totalFrames = 60; // ~1.5s at 60fps
    const tick = () => {
      frame++;
      const p = Math.min(100, Math.round((frame / totalFrames) * 100));
      setProgress(p);
      if (frame < totalFrames) {
        requestAnimationFrame(tick);
      } else {
        // Start reveal
        setTimeout(() => {
          setPhase('revealing');
          sessionStorage.setItem('portfolio-visited', 'true');
          // Remove from DOM after animation
          setTimeout(() => setPhase('done'), 1200);
        }, 400);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`page-reveal ${phase === 'revealing' ? 'page-reveal--open' : ''}`}>
      {/* Left panel */}
      <div className="reveal-panel reveal-panel--left">
        <div className="reveal-logo">
          <div className="reveal-logo-icon">
            <img src="/Kachi-logoo.jpeg" alt="Logo" />
          </div>
        </div>
        <h2 className="reveal-name">Miracle</h2>
        <p className="reveal-tagline">Frontend Developer</p>
      </div>
      {/* Right panel */}
      <div className="reveal-panel reveal-panel--right">
        <div className="reveal-progress-wrap">
          <div className="reveal-progress-bar">
            <div className="reveal-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="reveal-progress-text">{progress}%</span>
        </div>
        <p className="reveal-loading-text">
          {progress < 40 ? 'Loading assets...' : progress < 80 ? 'Preparing experience...' : 'Almost ready...'}
        </p>
      </div>
    </div>
  );
};

export default PageRevealLoader;
