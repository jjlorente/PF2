import React from 'react'
import './About.css'
import { Link, animateScroll } from 'react-scroll'

export const About = ({len}) => {
  return (
    <>
      <div className='About' id="about">
        <div className='about-container'>
          <h1 className='title-about'><i className="fas fa-user-circle" style={{color:"#20CA73"}}></i>{len === "en" ? "About me" : "Sobre mí"}</h1>
          <p>
            {len === "en" ? 
              "I love creating innovative and creative solutions to problems, and I am excited to see how my projects can make a difference."
              : 
              "Me encanta crear soluciones innovadoras y creativas a problemas, y estoy emocionado por ver cómo mis proyectos pueden marcar la diferencia."
            }
          </p>
          <p>
            {len === "en" ? 
              "I am looking to leverage my both soft and technical skills and wish to bring significant value to companies."
              : 
              "Estoy buscando aprovechar tanto mis habilidades técnicas como mis habilidades blandas, y deseo aportar un valor significativo a las empresas."
            }
          </p>
          <p>
            {len === "en" ? 
              <>
                Seeking an opportunity to demonstrate my skills and grow professionally, if you are interested in working with me, please do not hesitate to <Link to="contact" spy={true} smooth={true} duration={500} style={{cursor:"pointer", color:"#20CA73"}}><span id='contact-t'>contact me.</span></Link>
              </>
              : 
              <>
                Buscando una oportunidad para demostrar mis habilidades y crecer profesionalmente, si estás interesado/a en trabajar conmigo, no dudes en <Link to="contact" spy={true} smooth={true} duration={500} style={{cursor:"pointer", color:"#20CA73"}}><span id='contact-t'>contactarme.</span></Link>
              </>
            }

          </p>
        </div>
      </div>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="svg-sep absolute -top-20 sm:-top-40 lg:-top-60 left-0 w-screen h-42 md:h-60 lg:h-80">
        <path id="path" fill="transparent" fillOpacity="1" d="M0,96L120,96C240,96,480,96,720,128C960,160,1200,224,1320,256L1440,288" stroke="#393B4E" strokeWidth="2" strokeDasharray="10 5" strokeDashoffset="0"></path>
      </svg>
    </>
  )
}
