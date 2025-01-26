import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const ClubMemberCard = ({ member }) => {
  return (
    // Main container for the member card with hover effect and gradient background
    <div className='relative flex w-full max-w-md md:px- md:max-w-sm p-[2px] bg-gradient-to-br from-indigo-500 to-teal-300 rounded-2xl shadow-xl text-white transition-transform transform hover:scale-105 duration-300'>
      <div className="relative flex w-full max-w-md md:px-2 md:max-w-sm p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl text-white transition-transform transform hover:scale-105 duration-300">
      
      {/* Profile Photo Section */}
      <div className="flex-shrink-0">
        <img
          src={member.photo} // Member's profile photo
          alt={`${member.name} profile`} // Alt text for accessibility
          className="w-32 h-32 rounded-full border-4 border-neon-blue object-cover" // Styling for the photo
        />
      </div>

      {/* Member Details Section */}
      <div className="ml-6 flex flex-col justify-center">
        {/* Member Name, Club, and Role */}
        <div>
          <h2 className="text-2xl font-semibold text-neon-blue">{member.name}</h2> {/* Member's name */}
          <p className="text-md text-gray-400">{member.club}</p> {/* Club name */}
          <p className="text-sm text-neon-green">{member.role}</p> {/* Member's role */}
        </div>

        {/* Social Media Icons Section */}
        <div className="mt-4 flex space-x-4">
          {/* Instagram Icon */}
          {member.socials.instagram && (
            <a
              href={`https://www.instagram.com/${member.socials.instagram}`} // Instagram profile link
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125 duration-300 hover:text-pink-500" // Hover effect
            >
              <FaInstagram size={24} /> {/* Instagram icon */}
            </a>
          )}
          
          {/* GitHub Icon */}
          {member.socials.github && (
            <a
              href={`https://github.com/${member.socials.github}`} // GitHub profile link
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125 duration-300 hover:text-gray-400" // Hover effect
            >
              <FaGithub size={24} /> {/* GitHub icon */}
            </a>
          )}

          {/* LinkedIn Icon */}
          {member.socials.linkedin && (
            <a
              href={`https://www.linkedin.com/in/${member.socials.linkedin}`} // LinkedIn profile link
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125 duration-300 hover:text-blue-500" // Hover effect
            >
              <FaLinkedin size={24} /> {/* LinkedIn icon */}
            </a>
          )}

          {/* Email Icon */}
          {member.socials.email && (
            <a
              href={`mailto:${member.socials.email}`} // Email link
              className="transition-transform transform hover:scale-125 duration-300 hover:text-red-500" // Hover effect
            >
              <FaEnvelope size={24} /> {/* Email icon */}
            </a>
          )}
        </div>
      </div>

      {/* Glow Effect for Aesthetic Appeal */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-green opacity-20 blur-xl pointer-events-none"></div>
    </div></div>
    
  );
};