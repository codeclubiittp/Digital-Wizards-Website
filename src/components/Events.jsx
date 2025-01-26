import React from "react";
import data from "../data.json"; // Import data from JSON file

// Extract and sort events from the data
const events = Object.values(data.domains)
  .flatMap((domain) => domain.events || []) // Flatten events from all domains, fallback to empty array if no events
  .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort events in descending order by date

const Events = () => {
  return (
    <section className="mt-12">
      {/* Events Section Heading */}
      <p className="text-[2rem] md:text-[4rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-4">
        Events & Sessions
      </p>

      {/* Line under the heading */}
      <div className="w-24 mx-auto border-t-4 border-white mb-8"></div>

      {/* Grid layout for displaying events */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {events
          .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort events again (redundant, but ensures order)
          .slice(0, 4) // Display only the first 4 events
          .map((event, index) => (
            <div className="relative p-[1px] lg:p-[1px] hover:bg-gradient-to-tr from-indigo-500 to-teal-300 rounded-lg shadow-lg text-white transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl">
            <div
              key={index}
              className="relative p-4 lg:p-6 h-full bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-lg text-white"
            >
              {/* Slanted background image */}
              <div
                className="absolute inset-0 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url("${event.backgroundImage || "https://via.placeholder.com/300"}")`, // Fallback to placeholder if no image is provided
                  clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 50% 100%)", // Slanted effect
                  opacity: 0.7, // Adjust opacity for better readability
                }}
              ></div>

              {/* Gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-60 rounded-lg"></div>

              {/* Event Content */}
              <div className="relative z-10 p-4 lg:p-6">
                {/* Icon representing the event */}
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
                  {event.name || "Event Name"} {/* Fallback title */}
                </h3>

                {/* Event Date */}
                <p className="text-sm sm:text-md text-gray-200 mt-1 sm:mt-2">
                  {event.date || "Event Date"} {/* Fallback date */}
                </p>

                {/* Event Description */}
                <p className="text-xs sm:text-sm text-gray-300 mt-2 sm:mt-3">
                  {event.description || "Event Description"}{" "}
                  {/* Fallback description */}
                </p>
              </div>
            </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Events;
