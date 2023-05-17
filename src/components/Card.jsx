import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ onCardClick, link, name, likes, owner, _id, onCardLike, onCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext);

  function handleClickCard() {
    onCardClick({ link, name });
  }
  function handleDeleteClick() {
    onCardDelete(_id);
  }
  function handleLikeClick() {
    onCardLike(likes, _id);
  }

  const isOwn = owner._id === currentUser._id;
  const isLiked = likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `card__button-like ${isLiked && 'card__button-like_active'}`
  );;

  return (
    <article className="card">
      {isOwn && <button className="card__delete" type="button" onClick={handleDeleteClick}></button>}
      <img className="card__image" alt={name} src={link} onClick={handleClickCard} />
      <div className="card__align">
        <h2 className="card__title">{name}</h2>
        <div>
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <p className="card__counter">{likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;
