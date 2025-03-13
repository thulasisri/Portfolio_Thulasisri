import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import { faGithub, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt=""/>
          <p>© 2025 Thulasi Sri B. All Rights Reserved.</p>
           <div className="social-links">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="icon github" />
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
                  </a>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                  </a>
                  <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
                  </a>
                </div>
        <p className="footer-text">Built with ❤️ using React</p>
        </div>
      </div>
    </div>
  )
}

export default Footer