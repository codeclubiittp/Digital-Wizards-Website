import React from 'react';
import { Link } from "react-router-dom"; // Import Link for routing
import { FaInstagram, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa'; // Import social media icons

function Footer() {
  return (
    <div><footer className="bg-black text-white py-10">
      {/* Main container for footer content */}
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-8 sm:space-y-0">

        {/* Left Section - Logo, Title, and Tagline */}
        <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
          {/* Logo */}
          <div className="w-24 h-24 rounded-full mb-4 sm:mb-2">
            <img
              src="/images/domainLogos/DW_darkmode.png" // Logo image source
              alt="Logo" // Alt text for accessibility
              className="h-24 w-auto" // Styling for the logo
            />
          </div>
          {/* Title */}
          <p className="text-lg sm:text-xl font-semibold text-center sm:text-left">Digital Wizards</p>
          {/* Tagline */}
          <p className="text-sm text-gray-400 text-center sm:text-left">Innovating the digital world, one line of code at a time.</p>
        </div>

        {/* Right Section - Links (Home, Domains, Contact Us) */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-0 sm:space-x-8 sm:flex-row w-full sm:w-auto">
          <ul className="space-y-2 sm:space-y-0 text-center">
            {/* Home Link */}
            <li>
              <Link to="/" className="hover:text-gray-400 cursor-pointer">
                Home
              </Link>
            </li>
            {/* Domains Link */}
            <li>
              <Link to="/domains" className="hover:text-gray-400 cursor-pointer">
                Domains
              </Link>
            </li>
            {/* Contact Us Link */}
            <li>
              <Link to="/contact" className="hover:text-gray-400 cursor-pointer">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Middle Section - Social Links */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start space-y-6 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
          {/* Social Media Icons */}
          <ul className="flex space-x-6 justify-center sm:justify-start">
            {/* Instagram Icon */}
            <li>
              <a
                href="https://www.instagram.com/digitalwizardsiitt/" // Instagram link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={28} /> {/* Instagram icon */}
              </a>
            </li>
            {/* GitHub Icon */}
            <li>
              <a
                href="https://github.com/codeclubiittp" // GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 transition duration-300"
              >
                <FaGithub size={28} /> {/* GitHub icon */}
              </a>
            </li>
            {/* LinkedIn Icon */}
            <li>
              <a
                href="https://www.linkedin.com/company/digital-wizards-iitt" // LinkedIn link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FaLinkedin size={28} /> {/* LinkedIn icon */}
              </a>
            </li>
            {/* Discord Icon */}
            <li>
              <a
                href="https://discord.gg/XmMxm6qd" // Discord link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FaDiscord size={28} /> {/* Discord icon */}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Copyright and Credits */}
      <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-center py-6 mt-8">
        {/* Copyright Notice */}
        <p className=" text-sm sm:text-base text-gray-400">
          &copy; {new Date().getFullYear()} Digital Wizards. All rights reserved.
        </p>
        {/* Credits */}
        <p className="text-sm sm:text-base text-gray-400 mt-2">
          Crafted with <span className="text-neon-blue">💙</span> by 
          <span className="font-semibold text-white"> Team Web Development</span> of 
          <span className="font-semibold text-neon-blue"> Digital Wizards</span>.
        </p>
      </div>
    </footer>
    <footer className='bg-slate-950 text-white py-10'>
      {/* Main Footer Content */}
    <div className="max-w-screen-xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-col justify-between items-start sm:items-start space-y-8 sm:space-y-0">
      {/* First Section */}
        <ul className="flex space-x-6 justify-center sm:justify-start py-10">
          <li><p className='text-xl'>Follow us</p></li>
            {/* Instagram Icon */}
            <li>
              <a
                href="https://www.instagram.com/digitalwizardsiitt/" // Instagram link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={28} /> {/* Instagram icon */}
              </a>
            </li>
            {/* GitHub Icon */}
            <li>
              <a
                href="https://github.com/codeclubiittp" // GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 transition duration-300"
              >
                <FaGithub size={28} /> {/* GitHub icon */}
              </a>
            </li>
            {/* LinkedIn Icon */}
            <li>
              <a
                href="https://www.linkedin.com/company/digital-wizards-iitt" // LinkedIn link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FaLinkedin size={28} /> {/* LinkedIn icon */}
              </a>
            </li>
            {/* Discord Icon */}
            <li>
              <a
                href="https://discord.gg/XmMxm6qd" // Discord link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FaDiscord size={28} /> {/* Discord icon */}
              </a>
            </li>
          </ul>
          <hr className="border-t-0.5 border-gray-700 flex-shrink-0 w-[90rem] py-4" />
          </div>
      
    </footer>
    </div>
    
  );
}

export default Footer;