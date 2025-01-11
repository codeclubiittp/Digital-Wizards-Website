// Importing React to enable React functionality
import React from "react";

// Importing data from a JSON file to populate the contact table
import data from "../data.json";

// ContactUs component definition
const ContactUs = () => {
  return (
    // Main section container
    <section>
      {/* Section Heading */}
      <p className="text-[2rem] md:text-[3rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-1 mt-4">
        Contact Us
      </p>

      {/* Line under the heading */}
      <div className="w-16 mx-auto border-t-4 border-white mb-4"></div>

      {/* Table Container */}
      <div className="min-h-screen text-white flex items-center justify-center p-4">
        <div className="overflow-x-auto w-full max-w-5xl">
          {/* Table Structure */}
          <table className="table-auto w-full border-collapse border border-gray-700">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-700 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Role</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Email-ID</th>
                <th className="border border-gray-700 px-4 py-2 text-left">GitHub</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Instagram</th>
              </tr>
            </thead>

            {/* Table Body */}
            {Object.keys(data.domains).map((domainKey) => {
              const domain = data.domains[domainKey];
              return (
                <tbody key={domainKey}>
                  {/* Domain Row */}
                  <tr>
                    <td
                      colSpan="5"
                      className="bg-gray-900 text-center text-lg font-bold text-yellow-400 py-3"
                    >
                      {domainKey} {/* Displaying the domain name */}
                    </td>
                  </tr>

                  {/* Member Rows */}
                  {domain.members.map((member, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-teal-700" : "bg-gray-800"
                      } hover:bg-teal-800`}
                    >
                      {/* Member Name */}
                      <td className="border border-gray-700 px-4 py-2">
                        {member.name}
                      </td>

                      {/* Member Role */}
                      <td className="border border-gray-700 px-4 py-2 font-bold">
                        {member.role}
                      </td>

                      {/* Member Email */}
                      <td className="border border-gray-700 px-4 py-2">
                        {member.socials.email}
                      </td>

                      {/* Member GitHub Link */}
                      <td className="border border-gray-700 px-4 py-2">
                        <a
                          href={`https://github.com/${member.socials.github}`}
                          className="text-blue-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {member.socials.github}
                        </a>
                      </td>

                      {/* Member Instagram Link */}
                      <td className="border border-gray-700 px-4 py-2">
                        <a
                          href={`https://instagram.com/${member.socials.instagram}`}
                          className="text-pink-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {member.socials.instagram}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
};

// Exporting the ContactUs component for use in other files
export default ContactUs;