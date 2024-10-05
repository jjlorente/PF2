import React, { useState, useEffect, useRef } from 'react'
import './Projects.css'
import { Modal, Button } from 'react-bootstrap';
import { Modals } from './Modal/Modals';

export const Projects = ({len}) => {
  const projects = {
    1: {
      "title": "Tattook",
      "description": {
        "en": "A mobile application, which was a finalist in contests and inspired by the booking business concept, designed to facilitate the search for a tattoo shop or freelance tattoo artist for someone looking for the ideal place to get a tattoo.",
        "es": "Una aplicación móvil, finalista en concursos e inspirada en el concepto de booking, diseñada para facilitar la búsqueda de un estudio de tatuajes o tatuador independiente para aquellos que buscan el lugar ideal para hacerse un tatuaje."
      },
      "link-web": "https://wiket.esteveterradas.cat/index.php/Tattook",
      "img": [
        { "title": "Tattook", "caption": "Caption 1", "url": "/assets/Tattook1.jpg" },
        { "title": "Tattook", "caption": "Caption 2", "url": "/assets/tattook-1.jpeg" },
        { "title": "Tattook", "caption": "Caption 3", "url": "/assets/tattook-2.jpeg" },
        { "title": "Tattook", "caption": "Caption 4", "url": "/assets/tattook-3.jpeg" },
        { "title": "Tattook", "caption": "Caption 5", "url": "/assets/tattook-4.jpeg" }
      ],
      "link-front": "https://github.com/jjlorente/tattook-front",
      "link-back": "https://github.com/jjlorente/tattook-back",
      "tecs": ["Angular", "TypeScript", "JavaScript", "SASS", "Ionic", "NodeJS", "MongoDB", "ExpressJS", "Socket.io", "GoogleCloud", "Heroku"]
    },
    4: {
      "title": "ChatGPT Clone",
      "description": {
        "en": "Web application, creating a clone of the ChatGPT front-end. The application allows users to interact with the chatbot and receive responses generated by AI technology, integrating the CohereAI artificial intelligence system.",
        "es": "Aplicación web que crea un clon de la interfaz de usuario de ChatGPT. La aplicación permite a los usuarios interactuar con el chatbot y recibir respuestas generadas por tecnología de IA, integrando el sistema de inteligencia artificial CohereAI."
      },
      "link-web": "",
      "img": [
        { "title": "ChatGPT", "caption": "Caption 1", "url": "/assets/gpt-1.png" },
        { "title": "ChatGPT", "caption": "Caption 2", "url": "/assets/gpt-2.png" },
        { "title": "ChatGPT", "caption": "Caption 3", "url": "/assets/gpt-3.png" },
        { "title": "ChatGPT", "caption": "Caption 4", "url": "/assets/gpt-4.png" },
        { "title": "ChatGPT", "caption": "Caption 5", "url": "/assets/gpt-6.png" },
        { "title": "ChatGPT", "caption": "Caption 6", "url": "/assets/gpt-5.png" }
      ],
      "link-front": "https://github.com/jjlorente/ChatGPT/tree/main/client-gpt",
      "link-back": "https://github.com/jjlorente/ChatGPT/tree/main/server",
      "tecs": ["React", "JavaScript", "CSS", "NodeJS", "ExpressJS", "CohereAI"]
    },
    2: {
      "title": "GACHANIME",
      "description": {
        "en": "Web application focused on daily anime-themed games, where users earn 'gachas' as rewards to pull cards and complete collections. Players unlock new difficulty levels based on their card power. The platform features a ranking system and a marketplace for buying, selling, and trading cards. Games reset daily, offering new challenges and rewards.",
        "es": "Aplicación web centrada en juegos diarios, donde los usuarios ganan 'gachas' como recompensa para obtener cartas y completar colecciones. Los jugadores desbloquean dificultades según el poder de sus cartas. La plataforma incluye un sistema de clasificación y un mercado para comprar y vender cartas. Los juegos se reinician diariamente, ofreciendo nuevos desafíos."
      },
      "link-web": "",
      "img": [
        { "title": "GACHANIME", "caption": "Caption 1", "url": "/assets/g6.PNG" },
        { "title": "GACHANIME", "caption": "Caption 2", "url": "/assets/g1.PNG" },
        { "title": "GACHANIME", "caption": "Caption 3", "url": "/assets/g2.PNG" },
        { "title": "GACHANIME", "caption": "Caption 4", "url": "/assets/g3.PNG" },
        { "title": "GACHANIME", "caption": "Caption 5", "url": "/assets/g4.PNG" },
        { "title": "GACHANIME", "caption": "Caption 6", "url": "/assets/g5.PNG" },
        { "title": "GACHANIME", "caption": "Caption 5", "url": "/assets/g7.PNG" },
        { "title": "GACHANIME", "caption": "Caption 5", "url": "/assets/g8.PNG" },
        { "title": "GACHANIME", "caption": "Caption 5", "url": "/assets/g9.PNG" },
        { "title": "GACHANIME", "caption": "Caption 5", "url": "/assets/g10.PNG" },
        { "title": "GACHANIME", "caption": "Caption 5", "url": "/assets/g11.PNG" },
        { "title": "GACHANIME", "caption": "Caption 5", "url": "/assets/g12.PNG" },
        { "title": "GACHANIME", "caption": "Caption 5", "url": "/assets/g13.PNG" }
      ],
      "link-front": "",
      "link-back": "",
      "tecs": ["Vue.js", "TypeScript", "JavaScript", "CSS", "NodeJS", "ExpressJS", "MongoDB"]
    },
    3: {
      "title": "LoLBoard",
      "description": {
        "en": "Web application visited by dozens of users daily inspired by League of Legends, where users must guess the positions of champions on a board based on clues provided in the rows and columns.",
        "es": "Aplicación web visitada por decenas de usuarios diariamente, inspirado en League of Legends, donde los usuarios deben adivinar la posición de los campeones en un tablero en función de pistas proporcionadas en las filas y columnas."
      },
      "link-web": "https://lolboard.netlify.app/",
      "img": [
        { "title": "LoLBoard", "caption": "Caption 1", "url": "/assets/lolboard.jpg" },
        { "title": "LoLBoard", "caption": "Caption 2", "url": "/assets/lolboard2.jpg" },
        { "title": "LoLBoard", "caption": "Caption 3", "url": "/assets/lolboard3.jpg" },
        { "title": "LoLBoard", "caption": "Caption 4", "url": "/assets/lolboard4.jpg" },
        { "title": "LoLBoard", "caption": "Caption 5", "url": "/assets/lolboard5.jpg" }
      ],
      "link-front": "https://github.com/jjlorente",
      "link-back": "",
      "tecs": ["React", "TypeScript", "CSS", "HTML"]
    },
    5: {
      "title": "Encadenadas",
      "description": {
      "en": "Web application, this is a guessing game inspired by Wordle, where users have to guess a chain of related words. The second and fourth word in a chain of five words are related to each other. Every day, you will receive a new chain. I challenge you to try it out!",
      "es": "Aplicación web, un juego de adivinanzas inspirado en Wordle, donde los usuarios tienen que adivinar una cadena de palabras relacionadas. La segunda y cuarta palabra en una cadena de cinco palabras están relacionadas entre sí. Cada día recibirás una nueva cadena. ¡Te desafío a que lo pruebes!"
      },
      "link-web": "https://encadenadas.netlify.app/",
      "img": [
        { "title": "Encadenadas", "caption": "Caption 1", "url": "/assets/encadenadas-1.jpg" },
        { "title": "Encadenadas", "caption": "Caption 2", "url": "/assets/encadenadas-2.jpg" },
        { "title": "Encadenadas", "caption": "Caption 3", "url": "/assets/encadenadas-3.jpg" },
        { "title": "Encadenadas", "caption": "Caption 4", "url": "/assets/encadenadas-4.jpg" }
      ],
      "link-front": "https://github.com/jjlorente/encadenados-react",
      "link-back": "",
      "tecs": ["React", "JavaScript", "TypeScript", "CSS", "HTML", "Swal"]
    },
    6: {
      "title": "Marvel Snap",
      "description": {
      "en": "The web application is related to the mobile game Marvel Snap, where users can access a variety of information about the game, including news, patches, decks, cards, and more. It involves creating an API from scratch with a MongoDB database.",
      "es": "La aplicación web está relacionada con el juego para móviles Marvel Snap, donde los usuarios pueden acceder a una variedad de información sobre el juego, incluyendo noticias, parches, mazos, cartas y más. Implica la creación de una API desde cero con una base de datos de MongoDB."
      },
      "link-web": "",
      "img": [
        { "title": "Marvel Snap", "caption": "Caption 1", "url": "/assets/marvel.jpg" },
        { "title": "Marvel Snap", "caption": "Caption 2", "url": "/assets/marvel2.jpg" },
        { "title": "Marvel Snap", "caption": "Caption 3", "url": "/assets/marvel3.jpg" }
      ],
      "link-front": "https://github.com/jjlorente/snap-front",
      "link-back": "https://github.com/jjlorente/snap-back",
      "tecs": ["Angular", "JavaScript", "TypeScript", "SASS", "NodeJS", "ExpressJS"]
    },    
    7: {
      "title": "PoetAI",
      "description": {
      "en": "Web application, where you can create a poem for any situation and dedicate it to anyone you want. It offers a wide range of poem types to choose from. Select the type of poem and the name of the person you want to dedicate it to, and the AI will generate it for you.",
      "es": "Aplicación web donde puedes crear un poema para cualquier situación y dedicárselo a quien desees. Ofrece una amplia variedad de tipos de poemas para elegir. Selecciona el tipo de poema y el nombre de la persona a la que deseas dedicarlo, y la inteligencia artificial lo generará para ti."
      },
      "link-web": "",
      "img": [
        { "title": "PoetAI", "caption": "Caption 1", "url": "/assets/poet-3.png" },
        { "title": "PoetAI", "caption": "Caption 2", "url": "/assets/poet-1.png" },
        { "title": "PoetAI", "caption": "Caption 3", "url": "/assets/poet-2.png" }
      ],
      "link-front": "https://github.com/jjlorente/PoetAI/tree/main/client-poetAI",
      "link-back": "https://github.com/jjlorente/PoetAI/tree/main/server",
      "tecs": ["React", "JavaScript", "CSS", "NodeJS", "ExpressJS", "CohereAI"]
    },
    8: {
      "title": "Travel",
      "description": {
      "en": "Web application, website where you can search for all the places to find your perfect vacation, prices, schedules and more... Back-end not implemented, currently only the front-end is implemented.",
      "es": "Aplicación web, un sitio web donde puedes buscar todos los lugares para encontrar tus vacaciones perfectas, precios, horarios y más... El back-end no está implementado, actualmente solo se ha implementado el front-end."
      },
      "link-web": "https://travel-scope.netlify.app/",
      "img": [
      { "title": "Travel", "caption": "Caption 1", "url": "/assets/travel-1.jpg" },
      { "title": "Travel", "caption": "Caption 2", "url": "/assets/travel-2.jpg" },
      { "title": "Travel", "caption": "Caption 3", "url": "/assets/travel-3.jpg" }
      ],
      "link-front": "https://github.com/jjlorente/travel-scope",
      "link-back": "",
      "tecs": ["React", "JavaScript", "SCSS", "HTML"]
    },
    9: {
      "title": "Admin table",
      "description": {
        "en": "Angular project that implements a user table where you can add, delete, and edit users. It utilizes JSON Server as the backend. The table also includes a filtering feature for each column and the ability to sort any column.",
        "es": "Web que implementa una tabla de usuarios donde puedes agregar, eliminar y editar usuarios. Utiliza JSON Server como backend. También incluye una función de filtrado y la capacidad de ordenar cualquier columna."
      },
      "link-web": "",
      "img": [
        { "title": "User Table", "caption": "Caption 1", "url": "/assets/table-1.png" },
        { "title": "User Table", "caption": "Caption 2", "url": "/assets/table-2.png" },
        { "title": "User Table", "caption": "Caption 3", "url": "/assets/table-3.png" },
        { "title": "User Table", "caption": "Caption 4", "url": "/assets/table-4.png" }
      ],
      "link-front": "https://github.com/jjlorente/PT-Angular",
      "link-back": "",
      "tecs": ["Angular", "Angular Material", "TypeScript", "HTML", "CSS", "JSON Server"]
    }
  }

  return (
    <>
      <div className='Projects' id="projects">
        <h1 className='title-about'><i className="fas fa-rocket" style={{color:"#20CA73"}}></i>{len === "en" ? "Projects" : "Proyectos"}</h1>
        <h2>
          {len === "en" ? 
          <>These are some of those <em className='gr-curs' style={{fontStyle:"italic"}}>things</em> I've built</> 
          : 
          <>Algunos de los <em className='gr-curs' style={{fontStyle:"italic"}}>proyectos</em> que he desarrollado</>
          }
        </h2> 

        { Object.keys(projects).map((project) => {
          return (
          <article key={project} className='project'>
            <div className='project-cont'>
              <Modals imgs={projects[project]["img"]} />
              <div className='info-project'>
                <h1 className='title-project'> {projects[project]["title"]} </h1>
                <p> {len === "en" ? projects[project]["description"]["en"] : projects[project]["description"]["es"]} </p>
                <div className='links'>
                  {projects[project]["link-web"] ? 
                    <a href={projects[project]["link-web"]} target="_blank">
                      {projects[project]["title"] === "Tattook" ? (len === "en" ? "All about App" : "Todo sobre la App") : "Web"}
                      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#1CCA73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                      </svg>
                    </a> : 
                    ""}
                  <a href={projects[project]["link-front"]} target="_blank">Front-end
                    <i className="fab fa-github"></i>
                  </a>
                  {projects[project]["link-back"] ? 
                    <a href={projects[project]["link-back"]} target="_blank">Back-end
                      <i className="fab fa-github"></i>
                    </a> : 
                    ""}
                </div>
              </div>
            </div>
            <div className='project-cont'>
              <div className='tecs-cont'>
                <div className='tecs'>
                  {projects[project]["tecs"].map( (tec, index) => {
                    return <span key={index}>{tec}</span>
                  })}        
                </div>
              </div>
            </div>
          </article>
        )})}
        <a className='bttn-projects' href="https://github.com/jjlorente?tab=repositories" target="_blank">{len === "en" ? "See all projects" : "Ver todos los proyectos"} <i className="fab fa-github i-projects"></i></a>
      </div>
      
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="svg-sep absolute -top-20 sm:-top-52 lg:-top-72 left-0 w-screen h-42 md:h-60 lg:h-80">
        <path d="M0,160 C480,400 960,-100 1440,160" fill="transparent" stroke="#393B4E" strokeWidth="2" strokeDasharray="10 5" strokdashoffset="0"></path>
      </svg>
    </>
  )
}
