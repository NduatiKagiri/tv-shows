import './style.css';
import Shows from './modules/getShows.js';
import Likes from './modules/likes.js';
import ShowsCounter from './modules/itemsCounter.js';

Shows.getShows();

ShowsCounter.itemsCounter();

Shows.displayShows();

Likes.getLikes();

const likeBtns = document.querySelectorAll('.likeButton');
likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener('click', () => {
    const id = likeBtn.getAttribute('id').slice(4);
    Likes.setLikes(id);
    Likes.getLikes();
    setTimeout(Likes.getLikes(), 500);
  });
});
