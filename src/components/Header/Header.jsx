import React from 'react'
import './Header.css'
import "@fortawesome/fontawesome-svg-core"
import { useEffect, useState } from 'react'
import { Link, animateScroll } from 'react-scroll'
import { Events } from 'react-scroll';

export const Header = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const [imgIndex, setImgIndex] = useState(1)
  
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

  const handleMouseOver = () => {
    setImgIndex(2);
    
  };

  const handleMouseOut = () => {
    setImgIndex(1);
  };

  return (
    <>
        <header>
          <div className='header-container'>
            <img className="logo" src={`../../assets/logo-joel.png`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} alt="Image of the logo for the website" width={200}/>
            <div className='nav-container'>
              <nav className='nav-header'>
                <ul className='ul-header'>
                  <li>
                    <Link to="main" spy={true} smooth={true} duration={500} style={{cursor:"pointer"}}>
                        HOME
                    </Link>
                  </li>
                  <li>
                    <Link to="about" spy={true} smooth={true} duration={500} style={{cursor:"pointer"}}>
                      ABOUT ME
                    </Link>
                  </li>
                  <li>
                    <Link to="projects" spy={true} smooth={true} duration={500} style={{cursor:"pointer"}}>
                      PROJECTS
                    </Link>
                  </li>
                  <li>
                    <Link to="skills" spy={true} smooth={true} duration={500} style={{cursor:"pointer"}}>
                      SKILLS
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} duration={500} style={{cursor:"pointer"}}>
                      CONTACT ME
                    </Link>
                  </li>
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
                    <Link to="main" spy={true} smooth={true} duration={500} style={{cursor:"pointer"}}>
                        HOME
                    </Link>
                  </li>
                  <li>
                    <Link to="about" spy={true} smooth={true} duration={500} style={{cursor:"pointer"}}>
                      ABOUT ME
                    </Link>
                  </li>
                  <li>
                    <Link to="projects" spy={true} smooth={true} duration={500} style={{cursor:"pointer"}}>
                      PROJECTS
                    </Link>
                  </li>
                  <li>
                    <Link to="skills" spy={true} smooth={true} duration={500} style={{cursor:"pointer"}}>
                      SKILLS
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} duration={500} style={{cursor:"pointer"}}>
                      CONTACT ME
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
    </>
  )
}
