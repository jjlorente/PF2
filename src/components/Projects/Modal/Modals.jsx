import React from 'react';
import { useState, useRef } from 'react';
import './Modals.css'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Captions from "yet-another-react-lightbox/plugins/captions"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

export const Modals = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const zoomRef = useRef(null)

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  console.log(props.imgs[0].url);

  return (
    <>
      <div onClick={() => setOpen(true)} className='container-modal'>
        <img className='img' src={props.imgs[0].url} alt="" />
        <div className='i-container'>
          <i className="fas fa-photo-video i-img"></i>
        </div>
      </div>
      <Lightbox
        open={open}
        plugins={[Fullscreen, Captions, Zoom]}
        close={() => setOpen(false)}
        zoom={{ ref: zoomRef }}
        slides={props.imgs.map((img) => ({ src: img.url }))}
        on={{
          click: () => zoomRef.current?.zoomIn()
        }}
      />
        
      
    </>
  );
};
