import React from 'react';
import { useState } from 'react';
import './Modals.css'
import { Lightbox } from "react-modal-image";
export const Modals = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  console.log(props.imgs[0].url);

  return (
    <>
      <img className='img' onClick={handleOpenModal} src={props.imgs[0].url} alt="" />
      {
        showModal && (
          <Lightbox
            medium={props.imgs[0].url}
            large={props.imgs[0].url}
            alt={props.imgs[0].title}
            onClose={handleCloseModal}
          />
        )
      }
    </>
  );
};
