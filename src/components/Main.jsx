import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInform()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    api
    .getInitialCards()
    .then((res) => {
      setCards([...res]);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
        <section className="profile" aria-label="секция редактирования профиля">
          <div className="profile__align">
            <button className="profile__avatar-button" type="button" onClick={onEditAvatar}>
              <img className="profile__avatar" alt="Аватар" src={userAvatar} />
            </button>
            <div className="profile__info">
              <div className="profile__row-top">
                <h1 className="profile__name">{userName}</h1>
                <button className="profile__edit-button" onClick={onEditProfile} type="button" aria-label="кнопка редактирования профиля"></button>
              </div>
              <p className="profile__about-me">{userDescription}</p>
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
            />
          ))}
        </section>
      </main>
  )
}

export default Main;
