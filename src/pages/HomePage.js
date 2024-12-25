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
import { Leads } from '../components/Leads.jsx';
import Events from '../components/Events.jsx';
import ProjectsGrid from '../components/OngoingProjects.jsx';

function HomePage() {  
  return (
    <div>
      <FallingMatrix />
      <Navbar/>
      <LandingPage />
      <DomainCards/>
      {/* <Events /> */}
      <ProjectsGrid />
      <Leads />

      {/* Contact Us */}
      <div className="flex justify-center items-center my-5">
        <a
          href="/contact"
          className="group relative inline-block bg-white rounded-full 
            py-3 px-5 md:py-4 md:px-7 lg:py-4 lg:px-9 
            text-[1rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem]
            font-extrabold text-center text-transparent bg-clip-text 
            bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-100 
            shadow-md hover:shadow-lg hover:scale-110 transition duration-300 ease-out"
          style={{
            backgroundColor: 'white',
            border: '2px solid #f3f4f6', // Optional border for subtle contrast
          }}
        >
          Contact Us
        </a>
      </div>



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
