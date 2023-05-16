import React from 'react'
import './Header.css'
import "@fortawesome/fontawesome-svg-core"
import { useEffect, useState } from 'react'
import { Link, animateScroll } from 'react-scroll'
import { Events } from 'react-scroll';

export const Header = ({changeLen, len}) => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  
  const updateMenu = () => {
    if(!isMenuClicked) {
        setBurgerClass("burger-bar clicked")
        setMenuClass("menu visible")
    }
    else {
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  const handleLanguageChange = (leng) => {
    changeLen(leng);
  };

  return (
    <>
        <header>
          <div className='header-container'>
            <img className="logo" src={`/assets/logo-joel.png`} alt="Image of the logo for the website" width={200}/>
            <div className='nav-container'>
              <nav className='nav-header'>
                <ul className='ul-header'>
                  <li>
                    <Link to="main" activeClass="active" spy={true} smooth={true} duration={500} offset={-400} style={{cursor:"pointer"}}>
                      {len == "en" ? "HOME" : "INICIO"}
                    </Link>
                  </li>
                  <li>
                    <Link to="about" activeClass="active" spy={true} smooth={true} duration={500} offset={-200} style={{cursor:"pointer"}}>
                      {len == "en" ? "ABOUT ME" : "SOBRE MÍ"}
                    </Link>
                  </li>
                  <li>
                    <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500} offset={-200} style={{cursor:"pointer"}}>
                      {len == "en" ? "PROJECTS" : "PROYECTOS"}
                    </Link>
                  </li>
                  <li>
                    <Link to="skills" activeClass="active" spy={true} smooth={true} duration={500} offset={-200} style={{cursor:"pointer"}}>
                      {len == "en" ? "SKILLS" : "SKILLS"}
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500} offset={-350} style={{cursor:"pointer"}}>
                      {len == "en" ? "CONTACT ME" : "CONTÁCTAME"}
                    </Link>
                  </li>
                  <div className="flags" id="flags">
                    <span onClick={() => handleLanguageChange("en")} className={`flag-icon flag-icon-gb ${len === "es" ? "inactive-flag" : "active-flag"}`} id="flag-en"></span>
                    <span onClick={() => handleLanguageChange("es")} className={`flag-icon flag-icon-es ${len === "en" ? "inactive-flag" : "active-flag"}`} id="flag-es"></span>
                  </div>
                </ul>
              </nav>
            </div>
            {/*BURGER MENU*/}
            <nav className='burger'>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
              <nav className='burger-menu-header'>
                <ul className='burger-menu-ul-header'>
                  <li>
                    <Link to="main" activeClass="active" spy={true} smooth={true} duration={500} offset={-400} style={{cursor:"pointer"}}>
                      {len == "en" ? "HOME" : "INICIO"}
                    </Link>
                  </li>
                  <li>
                    <Link to="about" activeClass="active" spy={true} smooth={true} duration={500} offset={-200} style={{cursor:"pointer"}}>
                      {len == "en" ? "ABOUT ME" : "SOBRE MÍ"}
                    </Link>
                  </li>
                  <li>
                    <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500} offset={-200} style={{cursor:"pointer"}}>
                      {len == "en" ? "PROJECTS" : "PROYECTOS"}
                    </Link>
                  </li>
                  <li>
                    <Link to="skills" activeClass="active" spy={true} smooth={true} duration={500} offset={-200} style={{cursor:"pointer"}}>
                      {len == "en" ? "SKILLS" : "SKILLS"}
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500} offset={-350} style={{cursor:"pointer"}}>
                      {len == "en" ? "CONTACT ME" : "CONTÁCTAME"}
                    </Link>
                  </li>
                  <div className="flags" id="flags">
                    <span onClick={() => handleLanguageChange("en")} className={`flag-icon flag-icon-gb ${len === "es" ? "inactive-flag" : "active-flag"}`} id="flag-en"></span>
                    <span onClick={() => handleLanguageChange("es")} className={`flag-icon flag-icon-es ${len === "en" ? "inactive-flag" : "active-flag"}`} id="flag-es"></span>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </header>
    </>
  )
}
