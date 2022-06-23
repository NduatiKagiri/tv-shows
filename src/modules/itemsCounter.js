const fetchShows = () => {
  const shows = JSON.parse(localStorage.getItem('shows'));
  if (shows) return shows;
  return [];
};

const itemsCounter = () => {
  let items = 0;
  const shows = fetchShows();
  if (shows != null) {
    shows.forEach(() => {
      items += 1;
    });
  }
  document.getElementById('count').innerHTML = `<h4>Total number of shows is ( ${items} )</h4>`;
};

export default class ShowsCounter {
  constructor() {
    return null;
  }

  static itemsCounter() {
    itemsCounter();
  }
}
