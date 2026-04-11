'use client';

import React, { useEffect, useRef, useState } from 'react';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

const TextScramble = ({ text, className, tag: Tag = 'h2', delay = 0 }) => {
  const [displayed, setDisplayed] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) {
      setDisplayed(text.replace(/[^\s]/g, ' '));
      return;
    }

    let frame = 0;
    const totalFrames = text.length * 3;
    let timeout;

    const scramble = () => {
      timeout = setTimeout(() => {
        frame++;
        const progress = Math.floor((frame / totalFrames) * text.length);
        
        let result = '';
        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
            result += ' ';
          } else if (i < progress) {
            result += text[i];
          } else {
            result += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        setDisplayed(result);

        if (frame < totalFrames) {
          scramble();
        } else {
          setDisplayed(text);
        }
      }, 30);
    };

    const delayTimeout = setTimeout(scramble, delay);
    return () => { clearTimeout(timeout); clearTimeout(delayTimeout); };
  }, [hasStarted, text, delay]);

  return (
    <Tag ref={ref} className={className}>
      {displayed}
    </Tag>
  );
};

export default TextScramble;
