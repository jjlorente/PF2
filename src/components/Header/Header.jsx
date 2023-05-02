import React from 'react'
import './Header.css'
import "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <>
        <header>
          <div className='header-container'>
            <img src="../../../src/assets/1.png" alt="Image of the logo for the website" width={200}/>
            <div style={{display:"flex", justifyContent:"space-between", gap:"1rem"}}>
              <nav className='nav-header'>
                <ul className='ul-header'>
                  <li><a href="#">INICIO</a></li>
                  <li><a href="#">SOBRE MÍ</a></li>
                  <li><a href="#">PROYECTOS</a></li>
                  <li><a href="#">SKILLS</a></li>
                  <li><a href="#">CONTÁCTAME</a></li>
                </ul>
              </nav>
              <div style={{display:"flex"}}>
                <span className="flag-icon flag-icon-gb inactive-flag" id="flag-en"></span>
                <span className="flag-icon flag-icon-es" id="flag-es"></span>
              </div>
            </div>
          </div>
        </header>
    </>
  )
}
