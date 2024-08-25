import React from 'react';
import NavBar from './NavBar'; // Import the NavBar component
import { Link } from 'react-router-dom';
import Footer from './Footer';
function HomePage() {
  return (
    <div>
      <NavBar /> {/* Include the NavBar */}
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <Link to="/about">Go to About Page</Link>
      <Footer/>
    </div>
  );
}

export default HomePage;
