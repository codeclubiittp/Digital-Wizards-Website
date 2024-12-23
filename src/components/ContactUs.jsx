import React from "react";
import data from '../data.json';

const ContactUs = () => {
    return (
    <section className="p-6">
      {/* Section Heading */}
      <p className="sm:text-[3rem] md:text-[4rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-4">
        Contact Us
      </p>
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
        <div className="overflow-x-auto w-full max-w-5xl">
            <table className="table-auto w-full border-collapse border border-gray-700">
            <thead>
                <tr className="bg-gray-800">
                <th className="border border-gray-700 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Email-ID</th>
                <th className="border border-gray-700 px-4 py-2 text-left">GitHub</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Instagram</th>
                </tr>
            </thead>
            {Object.keys(data).map((domainKey) => {
                const domain = data[domainKey];
                <tbody>
                    {domain.members.map((member, index) => (
                    <tr
                        key={index}
                        className={`${index % 2 === 0 ? "bg-teal-700" : "bg-gray-800"} hover:bg-teal-800`}
                    >
                        <td className="border border-gray-700 px-4 py-2">{member.name}</td>
                        <td className="border border-gray-700 px-4 py-2">{member.socials.email}</td>
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
                })}
            </table>
        </div>
        </div>
    </section>
    );
};

export default ContactUs;
