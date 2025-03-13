import React from "react"
import './certification.css'

const certifications = [   
  {
    title: "React.js Developer Certificate",
    organization: "Coursera",
    link: "https://coursera.org/certificate/reactjs",
  },
  {
    title: "Full-Stack Web Development",
    organization: "Udemy",
    link: "https://udemy.com/certificate/fullstack",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    organization: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/javascript",
  },
];

const Certifications = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <faCertificate className="text-yellow-500" /> Certifications
      </h2>

      <ul className="space-y-4">
        {certifications.map((cert, index) => (
          <li key={index} className="p-3 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium">{cert.title}</h3>
            <p className="text-gray-600">{cert.organization}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1 mt-2"
            >
              View Certificate <faExternalLinkAlt />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
