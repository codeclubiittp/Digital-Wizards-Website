import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Add icons for social links

function ClubMember({ name, role, club, instagram, github, linkedin, email, imageUrl }) {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-sm w-full bg-gray-800 rounded-3xl shadow-lg relative mx-auto">
      {/* Profile Picture */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
        <img
          src={imageUrl || "https://ui-avatars.com/api/?name=Prof+ABC&background=random&color=fff&size=200"}
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-white shadow-xl"
        />
      </div>

      {/* Member Information */}
      <div className="text-center py-6 pt-28 sm:pt-32">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">{name}</h2> {/* White color for the name */}
        <p className="text-md sm:text-lg text-gray-300 mt-1">{club}</p> {/* Lighter gray text for club */}
        <p className="text-sm sm:text-md text-gray-400">{role}</p> {/* Lighter gray for the role */}
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 sm:gap-6 py-4 bg-gray-900 rounded-3xl">
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl text-pink-500 hover:text-pink-600 transition duration-200">
            <FaInstagram />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl text-white hover:text-gray-400 transition duration-200">
            <FaGithub />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl text-blue-500 hover:text-blue-600 transition duration-200">
            <FaLinkedin />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="text-xl sm:text-2xl text-red-500 hover:text-red-600 transition duration-200">
            <FaEnvelope />
          </a>
        )}
      </div>
      
    </div>
  );
}

export default ClubMember;
