'use client';

import React, { useRef } from 'react';

const MagneticButton = ({ children, href, className, onClick, type, target, rel }) => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = 'translate(0, 0)';
  };

  const props = {
    ref: btnRef,
    className: `magnetic-btn ${className || ''}`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)' },
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type || 'button'} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default MagneticButton;
