import React from 'react';
import data from '../data.json';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ClubMemberCard } from './MemberCard';

export const Leads = () => {
  const allLeads = Object.keys(data).flatMap((domainKey) => {
    const domainData = data[domainKey];
    return domainData.members.filter((member) =>
      member.role.toLowerCase().includes('lead(s)')
    );
  });

  const domainLeads = Object.keys(data).flatMap((domainKey) => {
    const domainData = data[domainKey];
    return domainData.members.filter((member) =>
      member.role.toLowerCase().includes('domain head')
    );
  });

  return (
    <section>
      {/* Leads Section Heading */}
      <p className="mt-5 sm:text-[3rem] md:text-[4rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-4">
        Lead
      </p>

      {/* Line under the heading */}
      <div className="w-24 mx-auto border-t-4 border-white mb-8"></div>

      {/* All Leads Cards */}
      <div className="mx-3 md:mx-0 flex flex-wrap justify-center gap-12 mt-8">
        {allLeads.map((lead, index) => (
          <div
            key={index}
            className="relative w-full max-w-sm p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl text-white transition-transform transform hover:scale-105 duration-300 flex flex-col items-center text-center space-y-4"
          >
            {/* Profile Photo */}
            <div className="relative">
              <img
                src={lead.photo}
                alt={`${lead.name} profile`}
                className="w-40 h-40 rounded-full border-4 border-neon-blue object-cover shadow-lg"
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-green opacity-40 blur-xl pointer-events-none"></div>
            </div>

            {/* Name and Role */}
            <div>
              <h2 className="text-2xl font-bold text-neon-blue">{lead.name}</h2>
              <p className="text-md text-gray-400">{lead.club}</p>
              <p className="text-lg text-neon-green">{lead.role}</p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <a
                href={`https://www.instagram.com/${lead.socials.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition-transform transform hover:scale-125 duration-300"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href={`https://github.com/${lead.socials.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition-transform transform hover:scale-125 duration-300"
              >
                <FaGithub size={28} />
              </a>
              <a
                href={`https://www.linkedin.com/in/${lead.socials.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-125 duration-300"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href={`mailto:${lead.socials.email}`}
                className="text-gray-300 hover:text-red-500 transition-transform transform hover:scale-125 duration-300"
              >
                <FaEnvelope size={28} />
              </a>
            </div>

            {/* Glow Effect for Card */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-green opacity-20 blur-lg pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Domain Leads Section */}
      <p className="sm:text-[2rem] md:text-[2.5rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mt-12 mb-3">
        Domain Leads
      </p>

      {/* Line under the heading */}
      <div className="w-24 mx-auto border-t-4 border-white mb-8"></div>

      {/* Domain Leads Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {domainLeads.map((lead, index) => (
          <ClubMemberCard member={lead} key={index} />
        ))}
      </div>

    </section>
  );
};
