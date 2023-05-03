import React from 'react'
import './Header.css'
import "@fortawesome/fontawesome-svg-core"
import { useEffect, useState } from 'react'

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
            <img src={`../../../src/assets/logo-joel.png`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} alt="Image of the logo for the website" width={200}/>
            <div className='nav-container'>
              <nav className='nav-header'>
                <ul className='ul-header'>
                  <li><a href="#">INICIO</a></li>
                  <li><a href="#">SOBRE MÍ</a></li>
                  <li><a href="#">PROYECTOS</a></li>
                  <li><a href="#">SKILLS</a></li>
                  <li><a href="#">CONTÁCTAME</a></li>
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
                  <li><a href="#">INICIO</a></li>
                  <li><a href="#">SOBRE MÍ</a></li>
                  <li><a href="#">PROYECTOS</a></li>
                  <li><a href="#">SKILLS</a></li>
                  <li><a href="#">CONTÁCTAME</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
    </>
  )
}
