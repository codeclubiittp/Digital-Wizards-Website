import React,{ useState } from "react";
import data from "../data.json"; // Adjust the path as needed

// const events = Object.values(data).flatMap((domain) => domain.events || []); // Fallback to empty array if events is missing
const events = Object.values(data.domains)
  .flatMap((domain) => domain.events || [])
  .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort in descending order

const Events = () => {
  return (
    <section className="mt-12">
      {/* Events Section Heading */}
      <p className="sm:text-[3rem] md:text-[4rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-4">
        Events & Sessions
      </p>

      {/* Line under the heading */}
      <div className="w-24 mx-auto border-t-4 border-white mb-8"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {events.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4).map((event, index) => (
          <div
            key={index}
            className="relative p-4 lg:p-6 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-lg text-white transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl"
          >
            {/* Slanted background image */}
            <div
              className="absolute inset-0 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url("${event.backgroundImage || "https://via.placeholder.com/300"}")`,
                clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 50% 100%)",
                opacity: 0.7,
              }}
            ></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-60 rounded-lg"></div>

            <div className="relative z-10 p-4 lg:p-6">
              {/* Icon */}
              <div className="flex items-center justify-center w-10 lg:w-12 h-10 lg:h-12 mb-4 bg-blue-900 bg-opacity-20 rounded-full transition-colors duration-300 ease-out hover:bg-blue-800">
                <svg
                  className="w-5 lg:w-6 h-5 lg:h-6 text-blue-400"
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

              {/* Event Title */}
              <h3 className="text-lg lg:text-2xl font-semibold mb-2">
                {event.name || "Event Name"}
              </h3>

              {/* Event Date */}
              <p className="text-sm sm:text-md text-gray-200 mt-1 sm:mt-2">
                {event.date || "Event Date"}
              </p>

              {/* Event Description */}
              <p className="text-xs sm:text-sm text-gray-300 mt-2 sm:mt-3">
                {event.description || "Event Description"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
