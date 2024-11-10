import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar.jsx';
import Card from '../components/CardComponent.jsx'
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import NoteFromFA from '../components/NoteFromFacultyAdvisor.jsx';
import Collab from '../components/Collab.jsx';
import LandingPage from '../components/LandingPage.jsx';
import DomainCards from '../components/Domains.jsx';
import FallingMatrix from '../components/FallingMatrix.jsx';
import ClubMember from '../components/ClubMember.jsx';
function HomePage() {
  return (
    <div>
      <FallingMatrix />
      <Navbar/>
      <LandingPage />
      <DomainCards />
      {/* <Hero /> */}
      {/* <Link to="/about">Go to About Page</Link> */}

      {/* convert the below 5 lines into single component and write mediaqueries */}
      {/* <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}> */}
        {/* <Card />
        <Card />
        <Card /> */}
      
      {/* <Collab /> */}
      {/* </div> */}

      
      {/* <NoteFromFA/> */}
      <Footer />
    </div>
  );
}

export default HomePage;
