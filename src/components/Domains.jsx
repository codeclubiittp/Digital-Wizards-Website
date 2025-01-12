import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

// Array of domain objects containing title, description, and background image
const domains = [
  {
    title: 'App Development',
    description: 'Creating applications for mobile and desktop platforms.',
    backgroundImage: 'url("/images/domainLogos/App_Negative.png")'
  },
  {
    title: 'Architecture',
    description: 'Analyzing and interpreting complex data to drive decisions.',
    backgroundImage: 'url("/images/domainLogos/C.Arch_Negative.png")'
  },
  {
    title: 'Competitive Programming',
    description: 'Mastering problem-solving and algorithmic thinking through coding challenges under time and resource constraints.',
    backgroundImage: 'url("/images/domainLogos/CP_Negative.png")'
  },
  {
    title: 'Cyber Security',
    description: 'Protecting systems and networks from digital attacks.',
    backgroundImage: 'url("/images/domainLogos/Cyber_Negative.png")'
  },
  {
    title: 'Software Engineering',
    description: 'Designing, developing, and testing software systems.',
    backgroundImage: 'url("/images/domainLogos/DevOps_Negative.png")'
  },
  {
    title: 'Web Development',
    description: 'Building and maintaining websites and web applications.',
    backgroundImage: 'url("/images/domainLogos/WebDevLogo.png")'
  }
];

// DomainCards component to display a grid of domain cards
const DomainCards = () => {
  return (
    <section className="p-6" id="domain-cards">
      {/* Section Heading */}
      <p className="text-[2rem] md:text-[4rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-4">
        Domains in Digital Wizard
      </p>

      {/* Line under the heading */}
      <div className="w-24 mx-auto border-t-4 border-white mb-8"></div>

      {/* Domain Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {domains.map((domain, index) => (
          // Link to navigate to the specific domain page
          <Link to={`/domain/${domain.title.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
            <div
              className="relative p-4 rounded-lg transition transform hover:scale-105"
              style={{
                backgroundImage: domain.backgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center -120px',
              }}
            >
              {/* Overlay to darken the background image */}
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

              {/* Content inside the card */}
              <div className="relative z-10 flex flex-col items-center text-center text-white">
                {/* Domain Title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 mt-[170px]">{domain.title}</h2>
                {/* Domain Description */}
                <p className="text-sm sm:text-base font-medium mb-4 px-2">{domain.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DomainCards;