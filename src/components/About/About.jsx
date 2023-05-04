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
        <path fill="transparent" fillOpacity="1" stroke="#393B4E" strokeWidth="2" strokeDasharray="10 5" strokeDashoffset="0" d="M0,160 C80,130 160,117 240,105 C320,93 400,83 560,97 C720,111 880,149 1040,160 C1200,171 1280,149 1360,122.7 C1400,109.3 1440,96 1440,96"></path>
      </svg>
    </>
  )
}
