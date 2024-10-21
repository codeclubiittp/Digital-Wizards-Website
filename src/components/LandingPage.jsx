import React from 'react';

const LandingPage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: 'url("/images/background.png")' }} // Update the path to your background image
    >
      <div className="text-center space-y-6">
        {/* Main Title */}
        <p className="text-white font-bold leading-none font-instrument-sans 
          text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[6rem] xl:text-[8rem]">
          Digital Wizards
        </p>
        
        {/* Subtitle */}
        <p className="text-white font-normal font-ovo
          text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem]">
          Code Club - IIT Tirupati
        </p>

        {/* Explore Button */}
        <a
          href="#about-me"
          className="mt-6 inline-block text-black bg-white rounded-full 
            py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 lg:py-4 lg:px-12 
            text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] 
            hover:bg-gray-700 hover:text-white transition duration-300"
        >
          Explore
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
