import React from 'react';
import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa'; // Social icons

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-8 sm:space-y-0">

        {/* Left Section - Logo, Title, and Tagline */}
        <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
          <div className="w-24 h-24  rounded-full mb-4 sm:mb-2">  
          <img
            src="/images/domainLogos/DW_darkmode.png"
            alt="Logo"
            className="h-24 w-auto"
          />
          </div> {/* Replace with actual logo */}
          <p className="text-lg sm:text-xl font-semibold text-center sm:text-left">Digital Wizards</p>
          <p className="text-sm text-gray-400 text-center sm:text-left">Innovating the digital world, one line of code at a time.</p>
        </div>

        {/* Right Section - Links (ABOUT US, DOMAINS, CONTACT US) */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-0 sm:space-x-8 sm:flex-row w-full sm:w-auto">
          <ul className="space-y-2 sm:space-y-0 text-center">
            <li>
              <Link to="/" className="hover:text-gray-400 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#domains" className="hover:text-gray-400 cursor-pointer">
                Domains
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 cursor-pointer">
                Contact Us
              </Link>
            </li>
            {/* <li className="hover:text-gray-400 cursor-pointer">CONTACT US</li> */}
          </ul>
        </div>

        {/* Middle Section - Social Links and Contact */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start space-y-6 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
          
          {/* Social Media Icons */}
          <ul className="flex space-x-6 justify-center sm:justify-start">
            <li>
              <a
                href="https://www.instagram.com/digitalwizardsiitt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codeclubiittp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 transition duration-300"
              >
                <FaGithub size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/digital-wizards-iitt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FaLinkedin size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/XmMxm6qd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FaDiscord size={28} />
              </a>
            </li>
          </ul>

        </div>

      </div>

      {/* Bottom Section - Copyright (always at the bottom) */}
      {/* <div className="w-full bg-black text-center py-4 mt-6">
        <p className="text-sm sm:text-base">&copy; Copyright. All rights reserved.</p>
        <p className="text-sm sm:text-base">Made with 💙 by Team Web Development DW.</p>
      </div> */}
      <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-center py-6 mt-8">
        <p className="text-sm sm:text-base text-gray-400">
          &copy; {new Date().getFullYear()} Digital Wizards. All rights reserved.
        </p>
        <p className="text-sm sm:text-base text-gray-400 mt-2">
          Crafted with <span className="text-neon-blue">💙</span> by 
          <span className="font-semibold text-white"> Team Web Development</span> of 
          <span className="font-semibold text-neon-blue"> Digital Wizards</span>.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
