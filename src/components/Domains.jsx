import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const domains = [
  {
    title: 'App Development',
    description: 'Creating applications for mobile and desktop platforms.',
    backgroundImage: 'url("/images/domainLogos/App_Negative.png")'
  },
  {
    title: 'Web Development',
    description: 'Building and maintaining websites and web applications.',
    backgroundImage: 'url("/images/domainLogos/WebDevLogo.png")'
  },
  {
    title: 'Software Engineering',
    description: 'Designing, developing, and testing software systems.',
    backgroundImage: 'url("/images/domainLogos/DevOps_Negative.png")'
  },
  {
    title: 'Cyber Security',
    description: 'Protecting systems and networks from digital attacks.',
    backgroundImage: 'url("/images/domainLogos/Cyber_Negative.png")'
  },
  {
    title: 'Architecture',
    description: 'Analyzing and interpreting complex data to drive decisions.',
    backgroundImage: 'url("/images/domainLogos/C.Arch_Negative.png")'
  },
];

const DomainCards = () => {
  return (
    <section className="p-6">
      {/* Section Heading */}
      <p className="sm:text-[3rem] md:text-[4rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-4">
        Domains in Digital Wizard
      </p>

      {/* Line under the heading */}
      <div className="w-24 mx-auto border-t-4 border-white mb-8"></div>

      {/* Domain Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {domains.map((domain, index) => (
          <Link to={`/domain/${domain.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <div
              key={index}
              className="relative p-4 rounded-lg transition transform hover:scale-105"
              style={{
                backgroundImage: domain.backgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center -60px',
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center text-white">
                {/* Domain Title and Description */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 mt-[120px]">{domain.title}</h2>
                <p className="text-sm sm:text-base font-medium mb-4 px-2">{domain.description}</p>

                {/* Tags */}
                {/* <div className="flex space-x-2 mt-2">
                    <span className="px-3 py-1 text-xs sm:text-sm font-semibold bg-white bg-opacity-20 rounded-full cursor-pointer">
                      Explore
                    </span>
                  <span className="px-3 py-1 text-xs sm:text-sm font-semibold bg-white bg-opacity-20 rounded-full cursor-pointer">
                    Learn More
                  </span>
                </div> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DomainCards;