import React from "react";
import data from "../data.json"; // Adjust the path as needed

const events = Object.values(data).flatMap((domain) => domain.events || []); // Fallback to empty array if ongoingProjects is missing

const Events = () => {
  return (
    <section>
      {/* Leads Section Heading */}
      <p className="sm:text-[3rem] md:text-[4rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-4">
        Events
      </p>

      {/* Line under the heading */}
      <div className="w-24 mx-auto border-t-4 border-white mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center rounded-lg shadow-neon overflow-hidden"
            style={{
              backgroundImage: `url("${event.backgroundImage || "https://via.placeholder.com/300"}")`,
              height: "300px",
              maxHeight: "80vw",
            }}
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 rounded-lg"></div>
            <div className="relative z-10 p-4 md:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {event.name || "Event Name"}
              </h3>
              <p className="text-sm sm:text-md text-gray-200 mt-1 sm:mt-2">
                {event.date || "Event Date"}
              </p>
              <p className="text-xs sm:text-sm text-gray-100 mt-2 sm:mt-3">
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
