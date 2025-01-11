// Importing React to enable React functionality
import React from "react";

// Importing icons from react-icons/fa for social media links
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// ClubMember component definition
function ClubMember({
  name,
  role,
  club,
  instagram,
  github,
  linkedin,
  email,
  imageUrl,
}) {
  return (
    // Main container for the member card with styling
    <div className="max-w-xs sm:max-w-sm md:max-w-sm w-full bg-gray-800 rounded-3xl shadow-lg relative mx-auto">
      {/* Profile Picture Section */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
        <img
          src={
            imageUrl ||
            "https://ui-avatars.com/api/?name=Prof+ABC&background=random&color=fff&size=200"
          } // Fallback to a default avatar if no image is provided
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-white shadow-xl" // Styling for the profile picture
        />
      </div>

      {/* Member Information Section */}
      <div className="text-center py-6 pt-28 sm:pt-32">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          {name}
        </h2>{" "}
        {/* Member's name */}
        <p className="text-md sm:text-lg text-gray-300 mt-1">{club}</p>{" "}
        {/* Club name */}
        <p className="text-sm sm:text-md text-gray-400">{role}</p>{" "}
        {/* Member's role */}
      </div>

      {/* Social Links Section */}
      <div className="flex justify-center gap-4 sm:gap-6 py-4 bg-gray-900 rounded-3xl">
        {/* Instagram Link */}
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl text-pink-500 hover:text-pink-600 transition duration-200"
          >
            <FaInstagram /> {/* Instagram icon */}
          </a>
        )}

        {/* GitHub Link */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl text-white hover:text-gray-400 transition duration-200"
          >
            <FaGithub /> {/* GitHub icon */}
          </a>
        )}

        {/* LinkedIn Link */}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl text-blue-500 hover:text-blue-600 transition duration-200"
          >
            <FaLinkedin /> {/* LinkedIn icon */}
          </a>
        )}

        {/* Email Link */}
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-xl sm:text-2xl text-red-500 hover:text-red-600 transition duration-200"
          >
            <FaEnvelope /> {/* Email icon */}
          </a>
        )}
      </div>
    </div>
  );
}

// Exporting the ClubMember component for use in other files
export default ClubMember;
