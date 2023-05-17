import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = '';
  }

  return(<PopupWithForm
    name='avatar'
    title='Обновить аватар'
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    buttonText={'Сохранить'}
    children={
      <label className="popup__field">
        <input type="url" required className="popup__input popup__input_data_avatar" placeholder="Ссылка на аватар"
          name="link" id="input-url-avatar" ref={avatarRef} />
        <span className="popup__input-error input-url-avatar-error"></span>
      </label>
    }
  />)
}

export default EditAvatarPopup;
