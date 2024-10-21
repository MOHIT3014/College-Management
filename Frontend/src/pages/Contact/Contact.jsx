import React from 'react'
import './Contact.css'
import { NavLink } from 'react-router-dom';
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";


const Contact = () => {
  return (
    <>
    <div className='contact'>

     <div className="contact-text">
    <h2>
      Contact <span>us!</span>
    </h2>
    <h4>Welcome to the Contact Us page of HIET Group of Institutions</h4>
    <p>
    We are here to assist you with any queries regarding admissions, courses, or general information. Our dedicated team is available to provide prompt support and guidance. Feel free to reach out and connect with us for a bright future! 
      
    </p>
    </div>
    <div className="list">
      <li>
        +91 987654321
      </li>
      <li>
        info@hiet.co.in & hiet.co.in
      </li>
    </div>
    <div className="myicons">
        <NavLink to="/Home"><IoLogoWhatsapp/></NavLink>
        <NavLink to="https://hiet.co.in/"><SiGmail/></NavLink>
        <NavLink to="https://www.instagram.com/hietgroup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="Follow us on Instagram"><AiFillInstagram/></NavLink>
    </div>
    </div>

    
    </>
  )
}

export default Contact
