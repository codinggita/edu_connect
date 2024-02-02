import React from 'react'
import './UserProfilePage.css'
import profileImage from './Assests/mateo-avila-chinchilla-x_8oJhYU31k-unsplash.jpg'
import profileImage1 from './Assests/mitchell-orr-b6LQ3AQEcFc-unsplash.jpg'

const UserProfilePage = () => {
  return (
    <div className='upc'>
        <div className="gradient">
            <img src={profileImage1} alt="BackGroung Image" />
        </div>
        <div className="profile-down">
            <img src={profileImage} alt="User Profile" />
            <div className="profile-title">Mahdi Chaghari</div>
            <div className="profile-description">

            Hello there! I'm Amon, a third-year college student with a passion for MERN development, communication, and photography. I love diving into MERN Technology to create innovative web applications. With clear communication skills, I thrive in collaborative environments. My photography reflects my artistic eye and storytelling abilities. Engaged in extracurriculars, I'm dedicated to personal growth and community impact. Join me on this exciting journey!            </div>
            <div className="profile-button"><a href="mailto:abc@gmail.com">Contact Me</a></div>
        </div>
      
    </div>
  )
}

export default UserProfilePage
