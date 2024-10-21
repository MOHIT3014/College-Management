import React from 'react'
import './Detail.css'
import Mountain from '../../assets/collage.jpg'
import mission from '../../assets/mission.jpg'
import temple from '../../assets/clg.jpg'
import adventure from '../../assets/coll.jpg'
import nature from '../../assets/library.jpg'
import culture from '../../assets/vtn.JPG'


const Details = () => {
  return (
    <>
    <div className="heading-main">
            
            <h1>To know about us</h1>
            <p><strong>"HIET College: Empowering minds, inspiring innovation, shaping future leaders."</strong></p>
        </div>
            <div className="about">
                <div className="about-image">

                    <img src={Mountain} alt="" />
                <div className="abouta">
                    
                <h2 className='about-contenthead'>Welcome to HIET!</h2>
                <p className='about-paracontent'>
                At HIET GROUP: we are passionate about grooming leaders who are not only professionals but also good human beings with values and ethics. HIET GROUP OF INSTITUTIONS provide a variety of stimulating environments for intellectual development, free thinking, and personal growth, challenging its students with dynamic learning opportunities and equipping them with the skills, insights, attitudes and practical experiences that are necessary to take up responsibilities in the society.
                </p>
                </div>
                </div>
                <div className="mission">
                    <div className="mission-content">

            <h2>Our Mission</h2>
            <p>
            "To provide quality education, foster innovation, and cultivate leadership skills, empowering students to excel in their chosen fields while contributing positively to society through knowledge, integrity, and excellence."
            </p>
                    </div>
                    <img src={mission} alt="" />
                </div>
            <h2 className='choose'>Why we Choose?</h2>
            <p>"At HIET College, we offer a dynamic learning environment with a focus on innovation and hands-on experience. Our dedicated faculty, state-of-the-art facilities, and industry-relevant programs prepare students for successful careers and personal growth."</p>
            
            <div className="Explore-image">
            <div className="spiritual">
            <img src={temple} alt="" />
            <h3>College</h3>

            </div>
            <div className="adventure">
            <img src={adventure} alt="" />
            <h3>collage</h3>

            </div>
            <div className="nature">

            <img src={nature} alt="" />
            <h3>Library</h3>
            </div>
            <div className="culture">
            <img src={culture} alt="" />
            <h3>Veterinary</h3>
            </div>

                {/* <img src={temple} alt="" />

                <img src={adventure} alt="" />
                <img src={nature} alt="" />
                <img src={culture} alt="" /> */}
            </div>

            <p>
                Join us at hiet.co.in and embark on a journey that will leave you with cherished memories and a deep connection to the mystical collage.
            </p>
            
            </div>
    </>
  )
}

export default Details
