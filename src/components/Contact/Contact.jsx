import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from'../../assets/location_icon.svg'
const contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "83fde902-9037-4737-be1d-0cc236f4b44f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         alert(res.message)
        }
      };
  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm always eager to connect with like-minded professionals and explore new opportunities. Whether you have a project, a question, or just want to say hello, feel free to reach out! Fill out the form below, and I’ll get back to you as soon as possible. Let’s create something amazing together!</p>
             <div className="contact-details">
                <div className="contact-detail">
                     <img src={mail_icon} alt="" /> <p>thulasisribalamurugan@gmail.com</p> 
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+91 6385271691</p>
                </div>
                <div className="contact-detail">
                     <img src={location_icon} alt="" /><p>Cuddalore, Tamil Nadu</p>
                </div>
             </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your name</label>
                <input type="text" name="Name" placeholder="Enter your Name "/>
                <label htmlFor="">Your email</label>
                <input type="e-mail" name="mail" placeholder="Enter your email "/>
                <label htmlFor="">write your message</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type="submit" className='contact-submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default contact