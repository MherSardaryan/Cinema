import React, { useState,useEffect } from "react";
import "./Modal.scss";

import LearnButton from "./LearnButton ";

const ModalFavorites = ({ favorites }) => {
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  


  const toggleModal = () => {
    setModal(!modal);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };


  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const limitedFavorites = favorites.slice(0, 6); 

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Favorites Movies</h2>
            <div className="modal1">
              {limitedFavorites.map((favorite, index) => (
                <div key={index} className="modalDiv">
                  <div className="flex">
                    <img src={favorite.img} alt="" />
                    <LearnButton  item={favorite} />
                  </div>
                </div>
              ))}
            </div>

            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalFavorites;
