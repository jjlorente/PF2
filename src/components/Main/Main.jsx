import React from 'react'
import './Main.css'

export const Main = () => {
  return (
    <>
    <div className='Main'>
            <div className='title-container'>
                <h1 style={{display:"flex", flexDirection:"row"}}>Hi, <span id='hand' >👋</span>I'm Joel,</h1>
                <h1 style={{color:"#1CCA73"}}>Web Developer.</h1>
                <p>Passionate full-stack developer based in Spain.</p>
                <div style={{display:"flex", flexDirection:"row", gap:"1rem"}}>
                    <a className="cv">Download CV</a>
                    <a href="https://github.com/jjlorente" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://github.com/jjlorente" target="_blank"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <img src="../../../src/assets/fotoperfil.jpg" alt="" />
    </div>
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute -top-20 sm:-top-40 lg:-top-60 left-0 w-screen h-42 md:h-60 lg:h-80">
        <path id="path" fill="transparent" fillOpacity="1" d="M0,96L120,96C240,96,480,96,720,128C960,160,1200,224,1320,256L1440,288" stroke="#393B4E" strokeWidth="2" strokeDasharray="10 5" strokeDashoffset="0"></path>
    </svg>
    </>
  )
}
