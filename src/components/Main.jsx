import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete, cards }) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile" aria-label="секция редактирования профиля">
        <div className="profile__align">
          <button className="profile__avatar-button" type="button" onClick={onEditAvatar}>
            <img className="profile__avatar" alt="Аватар" src={currentUser.avatar} />
          </button>
          <div className="profile__info">
            <div className="profile__row-top">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button className="profile__edit-button" onClick={onEditProfile} type="button" aria-label="кнопка редактирования профиля"></button>
            </div>
            <p className="profile__about-me">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} type="button"></button>
      </section>
      <section className="elements" aria-label="секция с фотографиями">
        {cards.map((item) => (
          <Card
            onCardClick={onCardClick}
            link={item.link}
            name={item.name}
            likes={[...item.likes]}
            key={item._id}
            owner={item.owner}
            _id={item._id}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  )
}

export default Main;
