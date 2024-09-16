import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About Page!</p>
      <Link to="/">Go to Home Page</Link>
      <Footer />
    </div>
  );
}

export default AboutPage;
