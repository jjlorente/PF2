import React from 'react'
import './Main.css'

export const Main = ({len}) => {
  return (
    <>
    <div className='Main' id='main'>
            <div className='title-container'>
                <h1 className='title-name' style={{display:"flex", flexDirection:"row"}}>
                  {len === "en" ? (
                    <>
                      Hi, <span id='hand' >👋</span> I'm Joel,
                    </>
                    ) : (
                    <>
                      Hola, <span id='hand' >👋</span> Soy Joel,
                    </>
                    )
                  }
                </h1>
                <h1 className='title-dev' style={{color:"#1CCA73"}}>
                  {len === "en" ? (
                    <>
                      Web Developer.
                    </>
                    ) : (
                    <>
                      Desarrollador Web.
                    </>
                    )
                  }
                </h1>
                <p>{len === "en" ? "Passionate full-stack developer based in Spain." : "Apasionado desarrollador full-stack viviendo en España."}</p>
                <div className='a-links' style={{display:"flex", flexDirection:"row", gap:"1rem"}}>
                    <a className="cv">{len === "en" ? "Download CV" : "Descargar CV"}</a>
                    <a href="https://github.com/jjlorente" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://github.com/jjlorente" target="_blank"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <img src="/assets/fotoperfil.jpg" alt="profile image" />
    </div>
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="svg-sep absolute -top-20 sm:-top-40 lg:-top-60 left-0 w-screen h-42 md:h-60 lg:h-80">
      <path fill="transparent" fillOpacity="1" stroke="#393B4E" strokeWidth="2" strokeDasharray="10 5" strokeDashoffset="0" d="M0,160 C80,130 160,117 240,105 C320,93 400,83 560,97 C720,111 880,149 1040,160 C1200,171 1280,149 1360,122.7 C1400,109.3 1440,96 1440,96"></path>
    </svg>
    </>
  )
}
