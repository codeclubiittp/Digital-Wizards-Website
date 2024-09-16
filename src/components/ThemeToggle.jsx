import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import "../css/ThemeToggle.css";

const ThemeToggle = ({ onThemeChange }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
    
    if (onThemeChange) {
      onThemeChange(theme); // Call the parent callback with the current theme
    }
  }, [theme, onThemeChange]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="theme-toggle-container">
      <button className={`theme-toggle-btn ${theme}`} onClick={toggleTheme}>
        {theme === 'light' ? (
          <FaMoon className="icon moon-icon" />
        ) : (
          <FaSun className="icon sun-icon" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
