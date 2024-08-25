import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css'; // Import CSS for styling

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
