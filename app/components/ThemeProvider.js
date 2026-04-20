'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const colorThemes = [
  { id: 'orange', label: 'Orange', accent: '#f97316', hover: '#ea580c', light: '#fb923c' },
  { id: 'blue',   label: 'Blue',   accent: '#3b82f6', hover: '#2563eb', light: '#60a5fa' },
  { id: 'purple', label: 'Purple', accent: '#a855f7', hover: '#9333ea', light: '#c084fc' },
  { id: 'green',  label: 'Green',  accent: '#22c55e', hover: '#16a34a', light: '#4ade80' },
  { id: 'rose',   label: 'Rose',   accent: '#f43f5e', hover: '#e11d48', light: '#fb7185' },
  { id: 'cyan',   label: 'Cyan',   accent: '#06b6d4', hover: '#0891b2', light: '#22d3ee' },
];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [colorTheme, setColorTheme] = useState('orange');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const savedColor = localStorage.getItem('portfolio-color-theme');
    if (savedTheme) setTheme(savedTheme);
    if (savedColor) setColorTheme(savedColor);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    const found = colorThemes.find(t => t.id === colorTheme);
    if (found) {
      document.documentElement.style.setProperty('--accent', found.accent);
      document.documentElement.style.setProperty('--accent-hover', found.hover);
      document.documentElement.style.setProperty('--accent-light', found.light);
    }
    localStorage.setItem('portfolio-color-theme', colorTheme);
  }, [colorTheme, mounted]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
