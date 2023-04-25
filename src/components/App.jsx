import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      {/* Модальное окно редактирования профиля */}
      <PopupWithForm
        name='edit'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__field">
              <input type="text" required className="popup__input popup__input_data_name" placeholder="Имя профиля"
                name="name" id="input-name" minLength="2" maxLength="40" />
              <span className="popup__input-error input-name-error"></span>
            </label>
            <label className="popup__field">
              <input type="text" required className="popup__input popup__input_data_job" placeholder="Занятие"
                name="job" id="input-job" minLength="2" maxLength="200" />
              <span className="popup__input-error input-job-error"></span>
            </label>
          </>
        }
      />
      {/* <!--Модальное окно добавления новой карточки--> */}
      <PopupWithForm
        name='add'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__field">
              <input type="text" required className="popup__input popup__input_data_image" placeholder="Название"
                name="name" id="input-image" minLength="2" maxLength="30" />
              <span className="popup__input-error input-image-error"></span>
            </label>
            <label className="popup__field">
              <input type="url" required className="popup__input popup__input_data_url" placeholder="Ссылка на картинку"
                name="link" id="input-url-newcard" />
              <span className="popup__input-error input-url-newcard-error"></span>
            </label>
          </>
        }
      />
      {/* <!--Модальное окно редактирования аватара--> */}
      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <label className="popup__field">
            <input type="url" required className="popup__input popup__input_data_avatar" placeholder="Ссылка на аватар"
              name="link" id="input-url-avatar" />
            <span className="popup__input-error input-url-avatar-error"></span>
          </label>
        }
      />
      {/* <!--Модальное окно удаления карточки--> */}
      <PopupWithForm
        name='delete'
        title='Вы уверены?'
        isOpen={false}
      />
      {/* Модальное окно увеличение фото карточки */}
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>

  );
};

export default App;
