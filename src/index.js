import './style.css';
import Shows from './modules/getShows.js';
import Likes from './modules/likes.js';

Shows.getShows();

Shows.displayShows();

Likes.getLikes();

const itemsCounter = () => {
  const shows = document.querySelectorAll('.show');
  const items = shows.length;
  document.getElementById('count').innerHTML = `<h4>Total number of shows is ( ${items} )</h4>`;
};
itemsCounter();

const likeBtns = document.querySelectorAll('.likeButton');
likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener('click', () => {
    const id = likeBtn.getAttribute('id').slice(4);
    Likes.setLikes(id);
    Likes.getLikes();
    setTimeout(Likes.getLikes(), 500);
  });
});
