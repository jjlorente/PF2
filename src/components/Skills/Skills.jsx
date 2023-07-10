import React from 'react'
import './Skills.css'

const skillsJSON = [
  {
    name: "Angular",
    className: "angular",
    imgSrc: "angular.png"
  },
  {
    name: "React",
    className: "react",
    imgSrc: "react.png"
  },
  {
    name: "NodeJS",
    className: "node",
    imgSrc: "node.png"
  },
  {
    name: "ExpressJS",
    className: "exp",
    imgSrc: "express.svg"
  },
  {
    name: "TypeScript",
    className: "",
    imgSrc: "tsicon.png"
  },
  {
    name: "JavaScript",
    className: "",
    imgSrc: "js-logo.png"
  },
  {
    name: "Python",
    className: "",
    imgSrc: "python.webp"
  },
  {
    name: "MongoDB",
    className: "",
    imgSrc: "mongodb.png"
  },
  {
    name: "Bootstrap",
    className: "boot",
    imgSrc: "bootstrap.png"
  },
  {
    name: "CSS",
    className: "",
    imgSrc: "css.png"
  }
]

export const Skills = () => {
  return (
    <>
      <div className='Skills' id="skills">
        <h1 className='title-about'><i className="fas fa-laptop-code" style={{color:"#20CA73"}}></i> Skills</h1>
        <div className='container-skills'>
          <div className="skill">
            <img className="img-logo angular" src={`/assets/angular.png`} alt='angular logo'></img>
            <h3>Angular</h3>
          </div>
          <div className="skill">
            <img className="img-logo react" src={`/assets/react.png`} alt='react logo'></img>
            <h3>React</h3>
          </div>
          <div className="skill">
            <img className="img-logo node" src={`/assets/node.png`} alt='node logo'></img>
            <h3>NodeJS</h3>
          </div>
          <div className="skill">
            <img className="img-logo exp" src={`/assets/express.svg`} alt='express logo'></img>
            <h3>ExpressJS</h3>
          </div>
          <div className="skill">
            <img className="img-logo" src={`/assets/tsicon.png`} alt='ts logo'></img>
            <h3>TypeScript</h3>
          </div>
          <div className="skill">
            <img className="img-logo" src={`/assets/js-logo.png`} alt='js logo'></img>
            <h3>JavaScript</h3>
          </div>
          <div className="skill">
            <img className="img-logo" src={`/assets/python.webp`} alt='python logo'></img>
            <h3>Python</h3>
          </div>
          <div className="skill">
            <img className="img-logo" src={`/assets/mongodb.png`} alt='mongodb logo'></img>
            <h3>MongoDB</h3>
          </div>
          <div className="skill">
            <img className="img-logo boot" src={`/assets/bootstrap.png`} alt='Bootstrap logo'></img>
            <h3>Bootstrap</h3>
          </div>
          <div className="skill">
            <img className="img-logo" src={`/assets/css.png`} alt='css logo'></img>
            <h3>CSS</h3>
          </div>
        </div>
      </div>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute svgSkills -top-20 sm:-top-40 lg:-top-60 left-0 w-screen h-42 md:h-60 lg:h-80">
        <path id="path" fill="transparent" fillOpacity="1" d="M0,96L120,96C240,96,480,96,720,128C960,160,1200,224,1320,256L1440,288" stroke="#393B4E" strokeWidth="2" strokeDasharray="10 5" strokeDashoffset="0"></path>
      </svg>
    </>
  )
}
