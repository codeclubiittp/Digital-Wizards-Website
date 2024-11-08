import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/NavBar';
import FallingMatrix from '../components/FallingMatrix';
import Footer from '../components/Footer';
import ClubMember from '../components/ClubMember';

const DomainPage = () => {
  const { domainId } = useParams();
  
  const domainLogo = "/images/domainLogos/Cyber_Negative.png";
  const domainName = "Artificial Intelligence";
  const domainDescription = "Artificial Intelligence (AI) is a field of computer science focused on creating machines that can perform tasks that typically require human intelligence.";

  const events = [
    { name: "AI Workshop", date: "2024-11-15", description: "A hands-on workshop on AI.", backgroundImage: "https://via.placeholder.com/600x400.png" },
    { name: "AI Hackathon", date: "2024-12-01", description: "Participate in an AI-driven hackathon.", backgroundImage: "https://via.placeholder.com/600x400.png" }
  ];

  const ongoingProjects = [
    { title: "AI-based Traffic Management", description: "Developing an AI solution for traffic optimization." },
    { title: "AI for Healthcare", description: "Using AI to improve healthcare systems." }
  ];

  const members = [
    { name: "Prof. ABC", role: "Domain Lead", club: "AI Club", email: "profabc@example.com", imageUrl: "" , instaid:"ceef", githubid:"cref", linkedin:"cfr"},
    { name: "Dr. XYZ", role: "Researcher", club: "AI Club", email: "drxyz@example.com", imageUrl: ""  , instaid:"ceef", githubid:"cref", linkedin:"cfr"}
  ];

  return (
    <div className="text-white min-h-screen">
      <Navbar />
      

      {/* Domain Logo and Name Section */}
      <div className="flex justify-center items-center py-10">
        <img src={domainLogo} alt={`${domainName} Logo`} className="w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-neon-green shadow-neon" />
        <div className='flex flex-col justify-start ml-4'>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-black">{domainName}</h1>
          <h1 className="text-lg sm:text-2xl font-bold text-gray-400">Digital Wizards</h1>
        </div>
      </div>

      {/* About Domain Section */}
      <div className="bg-slate-300 text-center py-8 px-6 mx-auto max-w-6xl rounded-lg border border-neon-pink mb-10">
        <h2 className="text-2xl sm:text-4xl text-center text-neon-pink mb-6 font-bold text-gray-800">About {domainName}</h2>
        <p className="text-lg text-gray-500">{domainDescription}</p>
      </div>

      {/* Events Section */}
      <div className="py-10 mx-auto max-w-6xl">
      !
        <h2 className=" text-2xl sm:text-4xl text-center text-neon-pink mb-6 font-bold text-gray-800">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="relative bg-cover bg-center rounded-lg shadow-neon"
              style={{ backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5e6542d2ae16460bb741a9eb/1603318636443-A846ACUKNYUBA0RPLJ94/marvin-meyer-SYTO3xs06fU-unsplash.jpg")`, height: '300px' }}
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 rounded-lg"></div>
              <div className="relative z-10 p-4">
                <h3 className="text-xl font-semibold text-white">{event.name}</h3>
                <p className="text-md text-gray-200 mt-2">{event.date}</p>
                <p className="text-sm text-gray-100 mt-3">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ongoing Projects Section */}
      <div className="py-10 mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-4xl text-center text-neon-pink mb-6 font-bold text-gray-800">Ongoing Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {ongoingProjects.map((project, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-neon">
              <h3 className="text-xl font-semibold text-neon-green">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-3">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Members Section */}
      <div className="py-10 mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-4xl text-center text-neon-pink mb-6 font-bold text-gray-800 ">Our Members</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {members.map((member, index) => (
            <ClubMember
              key={index}
              name={member.name}
              role={member.role}
              rollNumber={member.rollNumber}
              club={member.club}
              instagram={member.instaid}
              github={member.githubid}
              linkedin={member.linkedin}
              email={member.email}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DomainPage;
