const myURL = 'https://api.tvmaze.com/shows';

const getShows = async () => {
  const response = await fetch(`${myURL}`);
  let datas = await response.json();
  datas = datas.slice(0, 6);
  const shows = [];
  datas.forEach((data) => {
    const newShow = {
      id: 0,
      name: '',
      image: '',
    };
    newShow.id = data.id;
    newShow.name = data.name;
    newShow.image = data.image.medium;
    shows.push(newShow);
  });
  localStorage.setItem('shows', JSON.stringify(shows));
};

const fetchShows = () => {
  const shows = JSON.parse(localStorage.getItem('shows'));
  if (shows) return shows;
  return [];
};

const displayShows = () => {
  const shows = fetchShows();
  shows.forEach((show) => {
    document.getElementById('shows').innerHTML += `
    <div class="show">
      <img class="show-img" src="${show.image}" alt="">
      <div class="name-likes">
        <h6>${show.name}</h6>
        <div class="likes">
          <img id="like${show.id}" src="https://nduatikagiri.co.ke/tvshows/love-red-48.png" alt="">
          <p><strong>5</strong> likes</p>
        </div>
      </div>
      <button type="button" class="homebtnc" id="comments${show.id}">Comments</button>
      <button type="button" class="homebtnr" id="reservations${show.id}">Reservations</button>
    </div>
    `;
  });
};

export default class Shows {
  constructor() {
    return null;
  }

  static getShows() {
    getShows();
  }

  static displayShows() {
    displayShows();
  }
}
