import React from 'react'
import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
const project = [ 
    {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    technologies: ["React JS", " CSS", "Javascript"],
    liveDemo: "https://your-portfolio.vercel.app",
    github: "https://github.com/thulasisri/Portfolio.git",
  },
  {
    title: "E-Commerce Landing Page",
    description: "A responsive e-commerce landing page with modern UI design.",
    technologies: ["React js", "JavaScript"],
    liveDemo: "https://your-ecommerce.netlify.app",
    github: "https://github.com/yourusername/ecommerce-landing",
  },
  {
    title: "Art Gallery",
    description: "A weather forecasting app fetching real-time weather data.",
    technologies: [, "HTML","CSS","Javascript", "Bootstrap"],
    github: "https://github.com/thulasisri/art-gallery.git",
  },];

  const Project = ()=> {
  return (
    <div className="project">
    <div className='project-title'>
        <h1>Project</h1>
        <img src={theme_pattern} alt="" />
            </div>
    <div className='project-container'>
    {project.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p className="tech-stack"><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">GitHub
              </a>
          </div>
        </div>
         ))}
         </div>
       </div>
  )
}

export default Project