import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_photo overlay ${card ? 'popup_opened' : ''}`}>
    <div className="popup__container popup__container_type_photo">
      <img className="popup__photo" alt={card ? card.name : '#'} src={card ? card.link : '#'} />
      <p className="popup__subtitle">{card ? card.name : ''}</p>
      <button onClick={onClose} className="popup__button-close popup__button-close_type_photo" aria-label="закрыть" type="button"></button>
    </div>
  </div>
  )
}

export default ImagePopup;
