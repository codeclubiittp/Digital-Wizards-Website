import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx'; 
// import Footer from '../components/Footer.jsx';
import Card from '../components/CardComponent.jsx'
import Footer from '../components/Footer.jsx';

function HomePage() {
  return (
    <div>
      <NavBar /> {/* Include the NavBar */}
      {/* <h1>Home Page</h1> */}
      {/* <Link to="/about">Go to About Page</Link> */}
      {/* <Footer/> */}
      <Card />
      <Footer />
    </div>
  );
}

export default HomePage;
