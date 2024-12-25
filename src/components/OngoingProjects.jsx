import React from 'react';
import data from '../data.json'; // Adjust the path as needed

const ProjectsGrid = () => {
  // Extract all ongoing projects from all domains
  const projects = Object.values(data)
    .flatMap(domain => domain.ongoingProjects || []); // Fallback to empty array if ongoingProjects is missing

  return (
    <section className='mt-12'>
      {/* Leads Section Heading */}
      <p className="sm:text-[3rem] md:text-[4rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-4">
        Ongoing Projects
      </p>

      {/* Line under the heading */}
      <div className="w-24 mx-auto border-t-4 border-white mb-8"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
      {projects.map((project, index) => (
          <div
          key={index}
          className="relative p-4 lg:p-6 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-lg text-white transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl"
          >
          {/* Slanted background image on the right half */}
          <div
              className="absolute inset-0 rounded-lg bg-cover bg-center"
              style={{
              backgroundImage: `url("${project.backgroundImage || 'https://via.placeholder.com/300'}")`,
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
              {project.title || 'Project Title'}
              </h3>

              {/* Project Description */}
              <p className="text-xs md:text-sm lg:text-md text-gray-300 mb-4 leading-relaxed">
              {project.description || 'Project Description'}
              </p>

              {/* GitHub Repo Button */}
              {project.githubLink && (
              <button
                  onClick={() => window.open(project.githubLink, "_blank")}
                  className="inline-flex items-center text-white bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-green hover:to-neon-blue font-semibold py-2 px-4 lg:py-3 lg:px-6 rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                  <span>Check the GitHub Repo</span>
                  <svg
                  className="ml-2 w-4 lg:w-5 h-4 lg:h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 20 20 20"
                  >
                  <path d="M12.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 10H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
                  </svg>
              </button>
              )}
          </div>
          </div>
      ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
