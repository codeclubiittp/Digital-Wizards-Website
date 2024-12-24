import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/NavBar';
import FallingMatrix from '../components/FallingMatrix';
import Footer from '../components/Footer';
import ClubMember from '../components/ClubMember';
import { ClubMemberCard } from '../components/MemberCard';
import data from '../data.json'

const DomainPage = () => {
  const { domainId } = useParams();
  
//   const domainLogo = "/images/domainLogos/Cyber_Negative.png";
//   const domainName = "Artificial Intelligence";
//   const domainDescription = "Artificial Intelligence (AI) is a field of computer science focused on creating machines that can perform tasks that typically require human intelligence.";

//   const events = [
//     { name: "AI Workshop", date: "2024-11-15", description: "A hands-on workshop on AI.", backgroundImage: "https://via.placeholder.com/600x400.png" },
//     { name: "AI Hackathon", date: "2024-12-01", description: "Participate in an AI-driven hackathon.", backgroundImage: "https://via.placeholder.com/600x400.png" }
//   ];

//   const ongoingProjects = [
//     { title: "AI-based Traffic Management", description: "Developing an AI solution for traffic optimization." },
//     { title: "AI for Healthcare", description: "Using AI to improve healthcare systems." }
//   ];

//   const members = [ {
//     photo: 'https://via.placeholder.com/150', // Replace with actual image URL
//     name: 'John Doe',
//     club: 'Tech Club',
//     role: 'President',
//     socials: {
//       instagram: 'https://instagram.com/johndoe',
//       github: 'https://github.com/johndoe',
//       linkedin: 'https://linkedin.com/in/johndoe',
//       email: 'johndoe@example.com',
//     },
//   }
//   ,{
//     photo: 'https://via.placeholder.com/150', // Replace with actual image URL
//     name: 'John Doe',
//     club: 'Tech Club',
//     role: 'President',
//     socials: {
//       instagram: 'https://instagram.com/johndoe',
//       github: 'https://github.com/johndoe',
//       linkedin: 'https://linkedin.com/in/johndoe',
//       email: 'johndoe@example.com',
//     },
//   }
// ];

  // Fetch domain data based on domainId
  const domainData = data[domainId] || {};
  const { domainLogo, domainName, domainDescription, events = [], ongoingProjects = [], members = [] } = domainData;

  
  return (
    <div className="text-white min-h-screen">
      <Navbar />
      <FallingMatrix />

      {/* Domain Logo and Name Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center py-8 sm:py-10 mt-6 sm:mt-10 text-center sm:text-left">
        {/* <img
          src={domainLogo}
          alt={`${domainName} Logo`}
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-neon-green shadow-neon mb-4 sm:mb-0"
        /> */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-neon-green shadow-neon mb-4 sm:mb-0">
          <img
            src={domainLogo}
            alt={`${domainName} Logo`}
            className="w-full h-full object-cover object-top scale-125 md:translate-y-4 translate-y-2"
          />
        </div>


        <div className="flex flex-col items-center sm:items-start ">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {domainName}
          </h1>
          <h2 className="text-md sm:text-lg md:text-2xl font-semibold text-gray-400 pl-4">
            Digital Wizards
          </h2>
        </div>
      </div>


      {/* About Domain Section */}
      <div className="relative py-8 px-4 sm:py-12 sm:px-8 lg:py-16 lg:px-12 mx-auto max-w-4xl lg:max-w-6xl text-center rounded-lg shadow-xl mb-8 lg:mb-12 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md overflow-hidden">
        {/* Glowing Effect */}
        <div className="absolute inset-0 bg-neon-pink opacity-20 blur-lg rounded-lg -z-10 animate-pulse"></div>

        {/* Title */}
        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neon-pink mb-4 lg:mb-6 tracking-wide shadow-neon">
          About {domainName}
        </h4>

        {/* Description */}
        <p className="text-sm sm:text-md lg:text-lg text-gray-200 leading-relaxed mx-auto max-w-xl lg:max-w-3xl shadow-text">
          {domainDescription}
        </p>

        {/* Subtle Glowing Border Highlights */}
        <div className="absolute -top-2 left-1/2 w-16 sm:w-20 h-1 bg-neon-pink rounded-full animate-fadeInOut -translate-x-1/2"></div>
        <div className="absolute bottom-2 right-1/2 w-16 sm:w-20 h-1 bg-neon-blue rounded-full animate-fadeInOut translate-x-1/2"></div>
      </div>


      {/* Events Section */}
      <div className="py-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-semibold text-center text-neon-pink mb-6">
          Events & Sessions
        </h2>
        
        {/* Line Separator */}
        <div className="w-24 mx-auto border-b-4 border-neon-blue mb-8"/>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="relative bg-cover bg-center rounded-lg shadow-neon overflow-hidden"
              style={{ 
                backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5e6542d2ae16460bb741a9eb/1603318636443-A846ACUKNYUBA0RPLJ94/marvin-meyer-SYTO3xs06fU-unsplash.jpg")`, 
                height: '300px',
                maxHeight: '80vw'
              }}
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 rounded-lg"></div>
              <div className="relative z-10 p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white">{event.name}</h3>
                <p className="text-sm sm:text-md text-gray-200 mt-1 sm:mt-2">{event.date}</p>
                <p className="text-xs sm:text-sm text-gray-100 mt-2 sm:mt-3">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ongoing Projects Section */}
      <div className="py-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center text-neon-blue mb-6">
          Ongoing Projects
        </h2>

        {/* Line Separator */}
        <div className="w-16 lg:w-24 mx-auto border-b-4 border-neon-blue mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {ongoingProjects.map((project, index) => (
            <div
              key={index}
              className="relative p-4 lg:p-6 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-lg text-white transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl"
            >
              {/* Slanted background image on the right half */}
              <div
                className="absolute inset-0 rounded-lg bg-cover bg-center"
                style={{
                  // backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5e6542d2ae16460bb741a9eb/1603318636443-A846ACUKNYUBA0RPLJ94/marvin-meyer-SYTO3xs06fU-unsplash.jpg")`,
                  backgroundImage: `url(${project.backgroundImage})`,
                  clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 50% 100%)',
                  opacity: 0.7,
                }}
              ></div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-60 rounded-lg"></div>

              <div className="relative z-10 p-4 lg:p-6">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 lg:w-12 h-10 lg:h-12 mb-4 bg-red-900 bg-opacity-20 rounded-full transition-colors duration-300 ease-out hover:bg-red-800">
                  <svg
                    className="w-5 lg:w-6 h-5 lg:h-6 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16.7 3.3a1 1 0 0 1 1.4 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4L9 10.6l7.3-7.3z"
                    />
                  </svg>
                </div>

                {/* Project Title */}
                <h3 className="text-lg lg:text-2xl font-semibold mb-2">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-xs md:text-sm lg:text-md text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* GitHub Repo Button */}
                <button
                  onClick={() => window.open(project.githubLink, "_blank")}
                  className="inline-flex items-center text-white bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-green hover:to-neon-blue font-semibold py-2 px-4 lg:py-3 lg:px-6 rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
                >
                  <span>Check the GitHub Repo</span>
                  <svg
                    className="ml-2 w-4 lg:w-5 h-4 lg:h-5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 10H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Members Section */}
      <div className="py-10 mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-4xl font-semibold text-center text-yellow-400 mb-6">Our Members</h2>
        {/* Line Separator */}
        <div className="w-16 lg:w-24 mx-auto border-b-4 border-yellow mb-8" />
        <div className="flex flex-wrap justify-center gap-6">
          {members.map((member, index) => (
            <ClubMemberCard member={member} key={index} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DomainPage;