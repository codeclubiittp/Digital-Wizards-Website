import React from 'react';
import Navbar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import LandingPage from '../components/LandingPage.jsx';
import DomainCards from '../components/Domains.jsx';
import FallingMatrix from '../components/FallingMatrix.jsx';
import { Leads } from '../components/Leads.jsx';
import Events from '../components/Events.jsx';
import ProjectsGrid from '../components/OngoingProjects.jsx';
import { FolderArrowDownIcon } from '@heroicons/react/24/solid';


function HomePage() {  
  return (
    <div>
      <FallingMatrix />
      <Navbar/>
      <LandingPage />
      <div id="domain-cards">
        <DomainCards />
      </div>

    {/* Knowledge Transfer */}
    <div className="flex-col justify-center items-center my-5">
      {/* Section Heading */}
      <p className="text-[2rem] md:text-[4rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-2">
        Knowledge Transfer <br />
      </p>

      {/* Line under the heading */}
      <div className="w-24 mx-auto border-t-4 border-white mb-8"></div>
        <p className="text-[1rem] md:text-[1.25rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-2">
            If you don’t know where to start, you’ve landed in the right place.<br />
            We have compiled a list of resources to help you get started in any domain.
        </p>
        <div className="flex justify-center items-center my-5">
            <a
            href="https://drive.google.com/drive/folders/1eNzOZAQZrs6bDScnVS-kewUBSEyMkgBj"
            target="_blank"
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
            <FolderArrowDownIcon className="w-[1.5rem] translate-y-[-3px] inline-block mr-1 text-yellow-400" /> Start your journey
            </a>
        </div>
      </div>

      <Events />
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
      <Footer />
    </div>
  );
}

export default HomePage;
