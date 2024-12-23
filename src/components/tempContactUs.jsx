// import React from "react";
// import data from '../data.json';

// const ContactUs = () => {
//   const contacts = [
//     {
//       name: "Aarush Singh Kushwaha",
//       hall: "12",
//       email: "aarushsk23@iitk.ac.in",
//       mobile: "9643216563",
//       github: "aasiku",
//       instagram: "_aarush.01_",
//     },
//     {
//       name: "Aayush Anand",
//       hall: "3",
//       email: "aayusha23@iitk.ac.in",
//       mobile: "8851070814",
//       github: "aayush01x",
//       instagram: "aayush.anandx",
//     },
//     {
//       name: "Abhimanyu Solanki",
//       hall: "2",
//       email: "abhimanyus23@iitk.ac.in",
//       mobile: "8218196261",
//       github: "Abhimanyu-dev",
//       instagram: "abhimanyu_4841",
//     },
//     // Add more contacts as needed
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
//       <div className="overflow-x-auto w-full max-w-5xl">
//         <table className="table-auto w-full border-collapse border border-gray-700">
//           <thead>
//             <tr className="bg-gray-800">
//               <th className="border border-gray-700 px-4 py-2 text-left">Name</th>
//               <th className="border border-gray-700 px-4 py-2 text-left">Hall</th>
//               <th className="border border-gray-700 px-4 py-2 text-left">Email-ID</th>
//               <th className="border border-gray-700 px-4 py-2 text-left">Mobile No.</th>
//               <th className="border border-gray-700 px-4 py-2 text-left">GitHub</th>
//               <th className="border border-gray-700 px-4 py-2 text-left">Instagram</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts.map((contact, index) => (
//               <tr
//                 key={index}
//                 className={`${index % 2 === 0 ? "bg-teal-700" : "bg-gray-800"} hover:bg-teal-800`}
//               >
//                 <td className="border border-gray-700 px-4 py-2">{contact.name}</td>
//                 <td className="border border-gray-700 px-4 py-2">{contact.hall}</td>
//                 <td className="border border-gray-700 px-4 py-2">{contact.email}</td>
//                 <td className="border border-gray-700 px-4 py-2">{contact.mobile}</td>
                // <td className="border border-gray-700 px-4 py-2">
                //   <a
                //     href={`https://github.com/${contact.github}`}
                //     className="text-blue-400 hover:underline"
                //     target="_blank"
                //     rel="noopener noreferrer"
                //   >
                //     {contact.github}
                //   </a>
                // </td>
                // <td className="border border-gray-700 px-4 py-2">
                //   <a
                //     href={`https://instagram.com/${contact.instagram}`}
                //     className="text-pink-400 hover:underline"
                //     target="_blank"
                //     rel="noopener noreferrer"
                //   >
                //     {contact.instagram}
                //   </a>
                // </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React from 'react';
import data from '../data.json';

const DomainMembersTable = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Domain Members</h1>
      {Object.keys(data).map((domainKey) => {
        const domain = data[domainKey];
        return (
          <div key={domainKey} className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{domain.domainName}</h2>
            <table className="table-auto w-full text-left border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Role</th>
                    <th className="border border-gray-300 px-4 py-2">Club</th>
                    {/* <th className="border border-gray-300 px-4 py-2">Socials</th> */}
                    <th className="border border-gray-700 px-4 py-2 text-left">GitHub</th>
                    <th className="border border-gray-700 px-4 py-2 text-left">Instagram</th>
                </tr>
              </thead>
              <tbody>
                {domain.members.map((member, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{member.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{member.role}</td>
                    <td className="border border-gray-300 px-4 py-2">{member.club}</td>
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
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default DomainMembersTable;
