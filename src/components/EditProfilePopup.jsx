import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  return (
  <PopupWithForm
    name='edit'
    title='Редактировать профиль'
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    buttonText={'Сохранить'}
    children={
      <>
        <label className="popup__field">
          <input type="text" required className="popup__input popup__input_data_name" placeholder="Имя профиля"
            name="name" id="input-name" minLength="2" maxLength="40"
            onChange={handleNameChange} value={name || ''} />
          <span className="popup__input-error input-name-error"></span>
        </label>
        <label className="popup__field">
          <input type="text" required className="popup__input popup__input_data_job" placeholder="Вид деятельности"
            name="job" id="input-job" minLength="2" maxLength="200" onChange={handleDescriptionChange} value={description || ''} />
          <span className="popup__input-error input-job-error"></span>
        </label>
      </>
    }
  />)
}

export default EditProfilePopup;
