import './style.css';
import Shows from './modules/getShows.js';

Shows.getShows();

Shows.displayShows();

const itemsCounter = () => {
  const shows = document.querySelectorAll('.show');
  const items = shows.length;
  document.getElementById('count').innerHTML = `<h4>Total number of shows is ( ${items} )</h4>`;
};
itemsCounter();
