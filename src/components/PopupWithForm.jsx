import React from "react";

function PopupWithForm ({ title, name, isOpen, onClose, children }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
        <div className="popup__container">
          <h2 className="popup__title">{`${title}`}</h2>
          <form className="popup__form" name={`${name}-form`} /*novalidate*/>
            <fieldset className="popup__set">
              {children}
              <button className="popup__button-submit" aria-label="сохранить" type="submit">Сохранить</button>
            </fieldset>
          </form>
          <button onClick={onClose} className="popup__button-close" aria-label="закрыть"
           type="button"></button>
        </div>
      </div>
  )
}
export default PopupWithForm;
