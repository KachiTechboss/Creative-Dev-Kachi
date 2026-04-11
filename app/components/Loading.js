'use client';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="rotating-icon">
            <img
              src="/Kachi-logoo.jpeg"
              alt="Logo"
              className="logo-img"
            />
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
