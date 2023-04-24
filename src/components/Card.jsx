import React from "react";

function Card({ onCardClick, link, name, likes }) {

  function handleClickCard() {
    onCardClick({ link, name });
  }

  return (
        <article className="card">
          <button className="card__delete" type="button"></button>
          <img className="card__image" alt={name} src={link} onClick={handleClickCard}/>
          <div className="card__align">
            <h2 className="card__title">{name}</h2>
            <div>
              <button className="card__button-like" type="button"></button>
              <p className="card__counter">{likes.length}</p>
            </div>
          </div>
        </article>
  )
}

export default Card;
