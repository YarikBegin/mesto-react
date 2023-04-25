class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }
  _checkResult(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }
  getUserInform() {
    return fetch(`${this.url}/users/me`, { headers: this.headers })
      .then(this._checkResult)

  }
  getInitialCards() {
    return fetch(`${this.url}/cards`, { headers: this.headers })
      .then(this._checkResult)

  }
  editProfile({ name, job }) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    })
      .then(this._checkResult)
  }
  addNewCard({ name, link }) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then(this._checkResult)

  }
  deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then(this._checkResult)

  }
  toogleStateLike(id, state) {
    return fetch(`${this.url}/cards/${id}/likes`, {
      method: state,
      headers: this.headers,
    })
      .then(this._checkResult)

  }
  editProfileAvatar({ link }) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: link,
      }),
    })
      .then(this._checkResult)

  }
}

export const api = new Api({
  url: `https://mesto.nomoreparties.co/v1/cohort-63`,
  headers: {
    authorization: '7843b4ee-a306-45a2-ae22-f9c65ffb4d6f',
    'Content-Type': 'application/json',
  }
});
