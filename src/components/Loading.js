import React from 'react';
import '../styles/App.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="rotating-icon">
            {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="14" x="2" y="3" rx="2"/>
              <line x1="8" x2="16" y1="21" y2="21"/>
              <line x1="12" x2="12" y1="17" y2="21"/>
            </svg> */}
            <img src={process.env.PUBLIC_URL + "/kachi-logoo.jpeg"} alt="Logo" className="logo-img" />
          </div>
          <h2 className="loading-text">Creative-Dev Kachi</h2>
        </div>
        <div className="loading-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;