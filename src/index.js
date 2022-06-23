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
    const id = likeBtn.getAttribute('id');
    const showID = id.slice(4);
    Likes.setLikes(showID);
    likeBtn.style.display = 'none';
    const likedID = `liked${showID.toString()}`;
    const likedBtn = document.getElementById(likedID);
    likedBtn.style.animation = 'displayliked 1.5s ease-out forwards 0.1s';
    likedBtn.style.display = 'block';
    likedBtn.style.animation = 'removeliked 0.7s ease-in forwards 1.1s';
    setTimeout(() => {
      likedBtn.style.display = 'none';
      likeBtn.style.display = 'block';
    }, 1000);
    setTimeout(Likes.getLikes(), 1000);
  });
});
