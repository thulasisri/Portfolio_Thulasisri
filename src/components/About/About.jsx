import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'

 const About = () => {
    return (
        <div id ="about" className='about'>
            <div className='about-title'>
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                    <p>I am a passionate Frontend Developer with expertise in HTML, CSS, JavaScript, and React.js. I love crafting responsive, user-friendly web applications and have a keen eye for design to enhance user experiences. Always eager to learn, I thrive on collaborating to develop innovative solutions.  
                      As a Backend Developer, I have a strong foundation in Java, SQL, and database management. I enjoy building  efficient, scalable, and secure server-side applications, optimizing queries, and working with RESTful APIs. I'm excited to apply my skills, grow my expertise, and contribute to impactful projects. </p>
                    </div>
                    <div className="about-skills">
                        <h1 className="about-skills">SKILLS</h1>
                        <div className="about-skill"><p> HTML & CSS </p> <hr style={{ width: "50%" }} /> </div>
                        <div className="about-skill"><p> REACT JS </p><hr style={{ width: "70%" }} /> </div>
                        <div className="about-skill"><p> JavaScript </p><hr style={{ width: "60%" }} /><a href="https://www.credly.com/badges/00995000-4170-4545-af6d-3ac63dfbe142/public_url" target="_blank" rel="noopener noreferrer" className="certificate-link">
                                View Certificate
                            </a> </div>
                            
                        <div className="about-skill"><p> Java </p><hr style={{ width: "50%" }} /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About