import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const ClubMemberCard = ({ member }) => {
  return (
    <div className="relative flex w-full max-w-md md:px-2 md:max-w-sm p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl text-white transition-transform transform hover:scale-105 duration-300">
      
      {/* Profile Photo on the Left */}
      <div className="flex-shrink-0">
        <img
          src={member.photo}
          alt={`${member.name} profile`}
          className="w-32 h-32 rounded-full border-4 border-neon-blue object-cover"
        />
      </div>

      {/* Name, Club, Role, and Social Icons on the Right */}
      <div className="ml-6 flex flex-col justify-center">
        <div>
          <h2 className="text-2xl font-semibold text-neon-blue">{member.name}</h2>
          <p className="text-md text-gray-400">{member.club}</p>
          <p className="text-sm text-neon-green">{member.role}</p>
        </div>

        {/* Social Icons */}
        <div className="mt-4 flex space-x-4">
          {member.socials.instagram && (
            <a
              href={`https://www.instagram.com/${member.socials.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125 duration-300 hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
          )}
          
          {member.socials.github && (
            <a
              href={`https://github.com/${member.socials.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125 duration-300 hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
          )}

          {member.socials.linkedin && (
            <a
              href={`https://www.linkedin.com/in/${member.socials.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125 duration-300 hover:text-blue-500"
            >
              <FaLinkedin size={24} />
            </a>
          )}

          {member.socials.email && (
            <a
              href={`mailto:${member.socials.email}`}
              className="transition-transform transform hover:scale-125 duration-300 hover:text-red-500"
            >
              <FaEnvelope size={24} />
            </a>
          )}
        </div>

      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-green opacity-20 blur-xl pointer-events-none"></div>
    </div>
  );
};
