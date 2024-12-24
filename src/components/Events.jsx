import React from 'react';
import data from '../data.json'; // Adjust the path as needed

const Events = () => {
  // Extract all events from all domains
  const events = Object.values(data).flatMap(domain => domain.ongoingProjects);
    console.log(events);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
      {events.map((event, index) => (
        <div
          key={index}
          className="relative bg-cover bg-center rounded-lg shadow-neon overflow-hidden"
          style={{
            backgroundImage: `url("${event.backgroundImage || 'https://via.placeholder.com/300'}")`,
            height: '300px',
            maxHeight: '80vw',
          }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 rounded-lg"></div>
          <div className="relative z-10 p-4 md:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              {event.name || 'Event Name'}
            </h3>
            <p className="text-sm sm:text-md text-gray-200 mt-1 sm:mt-2">
              {event.date || 'Event Date'}
            </p>
            <p className="text-xs sm:text-sm text-gray-100 mt-2 sm:mt-3">
              {event.description || 'Event Description'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
