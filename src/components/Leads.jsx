import React from 'react';
import data from '../data.json'; // Import data from JSON file
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import social media icons
import { ClubMemberCard } from './MemberCard'; // Import ClubMemberCard component

export const Leads = () => {
  // Extract all leads from the data
  const allLeads = data.lead;

  // Extract domain leads from the data
  const domainLeads = Object.keys(data.domains).flatMap((domainKey) => {
    const domainData = data.domains[domainKey];
    return domainData.members.filter((member) =>
      member.role.toLowerCase().includes('domain head') // Filter members with the role "domain head"
    );
  });

  return (
    <section>
      {/* Leads Section Heading */}
      <p className="mt-5 text-[2rem] md:text-[3rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-4">
        2024 - 2025<br /> Lead
      </p>

      {/* Line under the heading */}
      <div className="w-24 mx-auto border-t-4 border-white mb-8"></div>

      {/* All Leads Cards */}
      <div className="mx-3 md:mx-0 flex flex-wrap justify-center gap-12 mt-8">
        {allLeads.map((lead, index) => (
          <div className='relative flex w-full max-w-md md:px- md:max-w-sm p-[2px] hover:bg-gradient-to-br from-indigo-500 to-teal-300 rounded-2xl shadow-xl transition-transform transform duration-300 hover:scale-105'>
          <div
            key={index}
            className="relative w-full max-w-sm p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl text-white flex flex-col items-center text-center space-y-4"
          >
            {/* Profile Photo */}
            <div className="relative">
              <img
                src={lead.photo} // Lead's profile photo
                alt={`${lead.name} profile`} // Alt text for accessibility
                className="w-40 h-40 rounded-full border-4 border-neon-blue object-cover shadow-lg"
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-green opacity-40 blur-xl pointer-events-none"></div>
            </div>

            {/* Name and Role */}
            <div>
              <h2 className="text-2xl font-bold text-neon-blue">{lead.name}</h2> {/* Lead's name */}
              <p className="text-md text-gray-400">{lead.club}</p> {/* Club name */}
              <p className="text-lg text-neon-green">{lead.role}</p> {/* Lead's role */}
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6">
              {/* Instagram Icon */}
              <a
                href={`https://www.instagram.com/${lead.socials.instagram}`} // Instagram profile link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition-transform transform hover:scale-125 duration-300"
              >
                <FaInstagram size={28} /> {/* Instagram icon */}
              </a>

              {/* GitHub Icon */}
              <a
                href={`https://github.com/${lead.socials.github}`} // GitHub profile link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition-transform transform hover:scale-125 duration-300"
              >
                <FaGithub size={28} /> {/* GitHub icon */}
              </a>

              {/* LinkedIn Icon */}
              <a
                href={`https://www.linkedin.com/in/${lead.socials.linkedin}`} // LinkedIn profile link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-125 duration-300"
              >
                <FaLinkedin size={28} /> {/* LinkedIn icon */}
              </a>

              {/* Email Icon */}
              <a
                href={`mailto:${lead.socials.email}`} // Email link
                className="text-gray-300 hover:text-red-500 transition-transform transform hover:scale-125 duration-300"
              >
                <FaEnvelope size={28} /> {/* Email icon */}
              </a>
            </div>

            {/* Glow Effect for Card */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-green opacity-20 blur-lg pointer-events - none"></div>
          </div>
          </div>
        ))}
      </div>

      {/* Domain Leads Section */}
      <p className="text-[2rem] md:text-[2.5rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mt-12 mb-3">
        Domain Leads
      </p>

      {/* Line under the heading */}
      <div className="w-24 mx-auto border-t-4 border-white mb-8"></div>

      {/* Domain Leads Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {domainLeads.map((lead, index) => (
          <ClubMemberCard member={lead} key={index} /> // Render ClubMemberCard for each domain lead
        ))}
      </div>

    </section>
  );
};