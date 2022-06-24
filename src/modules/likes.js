const likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appID = 'lt6GBu2WzXrJuUpzFb4d';

const setLikes = async (id) => {
  const show = {
    item_id: id,
  };

  await fetch(`${likesURL}apps/${appID}/likes?item_id=${id}`, {
    method: 'POST',
    body: JSON.stringify(show),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const getLikes = async () => {
  const response = await fetch(`${likesURL}apps/${appID}/likes`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const results = await response.json();

  results.map((like) => {
    if (like.item_id != null) {
      document.getElementById(`likes${like.item_id}`).innerHTML = `
        <strong>${like.likes}</strong> Likes
      `;
    }
    return true;
  });
};

export default class Likes {
  constructor() {
    return null;
  }

  static setLikes(item) {
    setLikes(item);
  }

  static getLikes() {
    getLikes();
  }
}
