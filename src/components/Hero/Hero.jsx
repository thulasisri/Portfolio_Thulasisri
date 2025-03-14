import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div id="home" className='hero'>
    <img src={profile_img} alt="" />
    <h1><span>I'm Thulasi Sri Balamurugan</span>,</h1>
    <h2><span> Frontend Developer | React.js Enthusiast </span></h2>
    <p>Motivated and detail-oriented Web Designer with hands-on experience in creating modern, responsive, and user-friendly websites. Skilled in HTML, CSS, JavaScript,Bootstrap, with a passion for blending creativity and functionality to enhance digital experiences. Eager to learn and grow in the field of web design.</p>

    <div className="social-links">
        <a href="https://github.com/thulasisri" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon github" />
        </a>
        <a href="https://www.linkedin.com/in/thulasi-sri-balamurugan-299402226" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
        </a>
        <a href="mailto:thulasisribalamurugan@gmail.com">
  <FontAwesomeIcon icon={faEnvelope} className="icon email" />
</a>
      </div>
    <div className='hero-action'>
        <div id=''className="hero-connect">
            connect with me 
            <a href="tel:+91 6385271691" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPhone} className="icon-phone" />
        </a>
        </div>
        <div className="hero-resume"><a href="/resume.pdf" download="My_Resume.pdf">My Resume</a>
        </div>
    </div>
    </div>
  )
}

export default Hero