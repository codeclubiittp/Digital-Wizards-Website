// Import necessary components
import React from 'react';
import FallingMatrix from './FallingMatrix';
import TypingEffect from './TypingEffect';

// Hero component definition
const Hero = () => {
  return (
    // Hero section container
    <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white">
      {/* Falling Matrix effect */}
      <FallingMatrix />
      
      {/* Hero content container */}
      <div className="relative z-10 text-center p-4 rounded" style={{ backdropFilter: 'blur(3px)' }}>
        {/* Hero title */}
        <h1 className="text-5xl font-bold mb-4 font-mono">Digital Wizards</h1>
        
        {/* Hero subtitle */}
        <p className="text-xl mb-2 font-mono">The Coding Club of IIT Tirupati</p>
        
        {/* Typing effect */}
        <p className="text-lg font-mono">
          Join us as we <TypingEffect words={["build through code.", "break through code.", "innovate through code."]} speed={150} /> 
        </p>
      </div>
      
      {/* Social media links */}
      <div className="flex space-x-4"  style={{ backdropFilter: 'blur(3px)' }}>
        {/* Facebook */}
        <a href="#facebook" className="text-4xl hover:text-blue-500">
          <i className="fab fa-facebook-f"></i>
        </a>
        
        {/* Instagram */}
        <a href="https://www.instagram.com/digitalwizardsiitt/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-pink-500">
          <i className="fab fa-instagram"></i>
        </a>
        
        {/* Github */}
        <a href="https://github.com/codeclubiittp" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-grey-500">
          <i className="fab fa-github"></i>
        </a>
        
        {/* Linked In */}
        <a href="https://www.linkedin.com/company/digital-wizards-iitt/mycompany/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-[#0072b1]">
          <i className="fab fa-linkedin" />
        </a>
      </div>
      
      {/* Explore Now button */}
      <button className="mt-4 flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
          Explore Now
        <i className="fas fa-arrow-down ml-2"></i> {/* Down arrow icon */}
      </button>
    </div>
  );
};

export default Hero;