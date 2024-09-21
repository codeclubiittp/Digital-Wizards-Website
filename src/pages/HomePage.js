import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx'; 
import Card from '../components/CardComponent.jsx'
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';

function HomePage() {
  return (
    <div>
      <NavBar /> 
      <Hero />
      {/* <Link to="/about">Go to About Page</Link> */}
      <Card />
      <Footer />
    </div>
  );
}

export default HomePage;
