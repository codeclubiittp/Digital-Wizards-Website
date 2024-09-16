import React, { useState } from 'react';
import '../css/NavBar.css'; // Import CSS for styling
import '../css/ThemeToggle.css'
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

function NavBar() {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="outer">
        <p className="logo">Digital Wizards</p>

        <div className={`mid ${menuOpen ? 'open' : ''}`}>
          <p className="link">Home</p>
          <p className="link">Domains</p>
          <p className="link">About Us</p>
        </div>

        <div className="end">
          <ThemeToggle onThemeChange={handleThemeChange} />
          <button className={`hamburger ${currentTheme === 'light' ? '' : 'dark'}`} onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
