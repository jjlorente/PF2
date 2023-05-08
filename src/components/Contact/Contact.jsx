import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className='Contact' id="contact">
      <h1 className="title-about" style={{margin:0, padding:0}}><i style={{color: "rgb(32, 202, 115)"}} className="fas fa-comments"></i>Get in touch</h1>
      <p className="p-types" style={{margin:0, padding:0, maxWidth:"54rem"}}>
          I'm open to discussing how I can apply my skills and knowledge to your team and/or projects.
      </p>
      <p className="p-types" style={{margin:0, padding:0, maxWidth:"54rem"}}>
        Looking forward to start my professional career as developer.
        If you are interested in my work, or you have any questions, please feel free to contact me.
      </p>
      <div className='container-links' style={{display:"flex", flexDirection:"row", gap:"1rem", flexWrap:"wrap"}}>
        <div className='link-container gmail'>
          <i className="far fa-envelope" style={{marginTop:"1px",fontSize:"20px"}}></i>
          <span>joel.jimenez.lorente@gmail.com</span>
        </div>   
        <div className='link-container movil'>
          <i className="fab fa-whatsapp" style={{marginTop:"1px",fontSize:"20px",margin:"0",padding:"0"}}></i>
          <span>(34) 676 15 96 39</span>
        </div>
        <a href="https://github.com/jjlorente" className='linkedin' target="_blank"><i className="fab fa-linkedin" style={{fontSize:"20px",margin:"0",padding:"0"}} ></i>joeljimenezlorente</a>
        <a href="https://github.com/jjlorente" className='github' target="_blank"><i className="fab fa-github" style={{fontSize:"20px",margin:"0",padding:"0"}} ></i>jjlorente</a>
      </div>
    </div>
  )
}
