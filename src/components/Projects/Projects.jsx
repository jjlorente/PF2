import React from 'react'
import './Projects.css'

export const Projects = () => {
  return (
    <>
      <div className='Projects'>
        <h1 className='title-about'><i className="fas fa-rocket"></i> Projects</h1>
        <h2>These are some of those <em className='gr-curs' style={{fontStyle:"italic"}}>things</em> I've built</h2>
        <article className='project'>
          <div className='project-cont'>
            <img src="../../../src/assets/Tattook1.png" alt="" />
            <div className='info-project'>
              <h1 className='title-project'>Tattook</h1>
              <p>A mobile application, which was a finalist in contests and inspired by the booking business concept, 
                  designed to facilitate the search for a tattoo shop or freelance tattoo artist for someone looking for the ideal place to get a tattoo.
              </p>
              <div className='links'>
                <a href="https://wiket.esteveterradas.cat/index.php/Tattook" target="_blank">All about Tattook 
                  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#1CCA73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                  </svg>
                </a>
                <a href="" target="_blank">Front-end
                  <i className="fab fa-github"></i>
                </a>
                <a href="" target="_blank">Back-end
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className='project-cont'>
            <div className='tecs-cont'>
              <div className='tecs'>
                <span>Angular</span>
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>SASS</span>
                <span>Ionic</span>
                <span>NodeJS</span>
                <span>MongoDB</span>
                <span>ExpressJS</span>
                <span>Socket.io</span>
                <span>Google Cloud</span>
                <span>Heroku</span>            
              </div>
            </div>
          </div>
        </article>
              <article className='project'>
          <div className='project-cont'>
            <img src="../../../src/assets/Tattook1.png" alt="" />
            <div className='info-project'>
              <h1 className='title-project'>ChatGPT Clone</h1>
              <p>A mobile application, which was a finalist in contests and inspired by the booking business concept, 
                  designed to facilitate the search for a tattoo shop or freelance tattoo artist for someone looking for the ideal place to get a tattoo.
              </p>
              <div className='links'>
                <a href="https://wiket.esteveterradas.cat/index.php/Tattook" target="_blank">Website
                  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#1CCA73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                  </svg>
                </a>
                <a href="" target="_blank">Front-end
                  <i className="fab fa-github"></i>
                </a>
                <a href="" target="_blank">Back-end
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className='project-cont'>
            <div className='tecs-cont'>
              <div className='tecs'>
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>NodeJS</span>
                <span>ExpressJS</span>
                <span>CohereAI</span>         
              </div>
            </div>
          </div>
        </article>
      </div>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="svg-project absolute -top-20 sm:-top-52 lg:-top-72 left-0 w-screen h-42 md:h-60 lg:h-80">
        <path d="M0,160 C480,400 960,-100 1440,160" fill="transparent" stroke="#393B4E" strokeWidth="2" strokeDasharray="10 5" strokdashoffset="0"></path>
      </svg>
    </>
  )
}
