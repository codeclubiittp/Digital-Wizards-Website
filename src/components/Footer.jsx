import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'; // Social icons

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-8 sm:space-y-0">

        {/* Left Section - Logo, Title, and Tagline */}
        <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
          <div className="w-24 h-24 bg-gray-600 rounded-full mb-4 sm:mb-2"></div> {/* Replace with actual logo */}
          <p className="text-lg sm:text-xl font-semibold text-center sm:text-left">Digital Wizards</p>
          <p className="text-sm text-gray-400 text-center sm:text-left">Innovating the digital world, one line of code at a time.</p>
        </div>

        {/* Right Section - Links (ABOUT US, DOMAINS, CONTACT US) */}
        <div className="flex flex-col items-center sm:items-end space-y-6 sm:space-y-0 sm:space-x-8 sm:flex-row w-full sm:w-auto">
          <ul className="space-y-2 sm:space-y-0 text-center sm:text-right">
            <li className="hover:text-gray-400 cursor-pointer">ABOUT US</li>
            <li className="hover:text-gray-400 cursor-pointer">DOMAINS</li>
            <li className="hover:text-gray-400 cursor-pointer">CONTACT US</li>
          </ul>
        </div>

        {/* Middle Section - Social Links and Contact */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start space-y-6 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
          
          {/* Social Media Icons */}
          <ul className="flex space-x-6 justify-center sm:justify-start">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 transition duration-300"
              >
                <FaGithub size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
          </ul>

        </div>

      </div>

      {/* Bottom Section - Copyright (always at the bottom) */}
      <div className="w-full bg-black text-center py-4 mt-6">
        <p className="text-sm sm:text-base">&copy; Copyright. All rights reserved.</p>
        <p className="text-sm sm:text-base">Made with 💙 by Team Web Development.</p>
      </div>
    </footer>
  );
}

export default Footer;
