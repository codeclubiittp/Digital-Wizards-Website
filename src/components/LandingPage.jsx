import React, { useRef } from "react";
import TypingEffect from "./TypingEffect";

const LandingPage = () => {
  const aboutMeRef = useRef(null);

  const handleScroll = () => {
    aboutMeRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      // style={{ backgroundImage: 'url("/images/background.png")' }} // Update the path to your background image
    >
      <div className="text-center space-y-0">
        {/* Main Title */}
        <p
          className="font-bold leading-tight font-instrument-sans
          text-[3rem] sm:text-[4rem] md:text-[4rem] lg:text-[6rem] xl:text-[6rem]
          text-transparent bg-clip-text bg-gradient-to-r from-blue-600 from-white via-yellow-100 to-yellow-600"
        >
          Digital Wizards
        </p>

        {/* Subtitle */}
        <p
          className="font-normal font-ovo mt-0 pt-0
          text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem]
          text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-yellow-100 to-white"
        >
          Code Club - IIT Tirupati
        </p>
        <p className="text-lg font-mono text-[#20C20E]">
          <span className="text-[2em]">Join us as we </span><TypingEffect words={["build through code.", "break through code.", "innovate through code."]} speed={150} /> 
        </p>

        {/* Explore Button */}

        <div>
          {/* Button with onClick handler */}
          <button
            onClick={handleScroll}
            className="mt-6 inline-block text-black bg-white rounded-full 
              py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 lg:py-4 lg:px-12 
              text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.5rem] 
              hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Explore
          </button>

          {/* The section to scroll to */}
          <div ref={aboutMeRef} id="about-me" className="about-section" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
