import React from 'react'
import './About.css'

export const About = () => {
  return (
    <>
      <div className='About'>
        <div className='about-container'>
          <h1 className='title-about'><i className="fas fa-user-circle"></i> About me</h1>
          <p>
            I love creating innovative and creative solutions to problems, 
            and I am excited to see how my projects can make a difference.
          </p>
          <p>
            I am looking to leverage my both soft and technical skills and wish to bring significant value to companies.
          </p>
          <p>
            Seeking an opportunity to demonstrate my skills and grow professionally, 
            if you are interested in working with me, 
            please do not hesitate to <a id="aboutme-link" href="#contact">contact me.</a>
          </p>
        </div>
        <img src="../../../src/assets/download.png" alt=""/>
      </div>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute -top-20 sm:-top-40 lg:-top-60 left-0 w-screen h-42 md:h-60 lg:h-80">
        <path id="path" fill="transparent" fillOpacity="1" d="M0,96L120,96C240,96,480,96,720,128C960,160,1200,224,1320,256L1440,288" stroke="#393B4E" strokeWidth="2" strokeDasharray="10 5" strokeDashoffset="0"></path>
      </svg>
    </>
  )
}
