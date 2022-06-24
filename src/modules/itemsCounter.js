const itemsCounter = () => {
  let items = 0;
  const shows = JSON.parse(localStorage.getItem('shows'));
  if (shows != null) {
    shows.forEach(() => {
      items += 1;
    });
  }
  document.getElementById('count').innerHTML = `<h4 id="totalCounts">Total number of shows is ( ${items} )</h4>`;
};

export default class ShowsCounter {
  constructor() {
    return null;
  }

  static itemsCounter() {
    itemsCounter();
  }
}
