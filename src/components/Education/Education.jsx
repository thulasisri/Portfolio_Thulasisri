import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
const Education = () => {
    const educationData = [
      {institution:"Besant Technology",
        degree: "Full stack developer(JAVA)"
      },
        {
          degree: "Bachelor of Technology in Computer Science",
          institution: "SRI MANAKULA VINAYAGAR ENGINEERING COLLEGE",
          year: "2020 - 2024",
          grade: "CGPA: 7.1/10",
        },
        {
          degree: "Higher Secondary Education",
          institution: "CK Matriculation Higher Secondary School",
          year: "2018 - 2020",
          grade: "Percentage: 66%",
        },
        {
            degree: " SSLC ",
            institution: "St.mary's matriculation Higher Secondary School",
            year: "2017 - 2018",
            grade: "Percentage: 78.5%",
          },
      ];

  return (
    <div id='education'className='Education'>
    <div className="education-text">
    <div className='edu-title'> <h1>Education</h1>
      <img src={theme_pattern} alt="" />
        </div>
        <div className="edu-details">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-500">{edu.year}</p>
              <p className="text-gray-500">{edu.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
