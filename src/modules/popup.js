import myURL from './baseurl.js';
import {addComment, getCommentsByItem} from './comments.js';
import {htmlModalTvShow } from './htmlPopup.js'

const getTvShowById = async (id) => {
  const response = await fetch(`${myURL}/${id}`);
  const dataShow = await response.json();
  return dataShow;
};

const openModal = async (id) => {
  const tvShowId = await getTvShowById(id);
  htmlModalTvShow(tvShowId);
  const genres = document.querySelector('.modal__genres');
  tvShowId.genres.forEach((element) => {
    genres.innerHTML += `<li>${element}</li>`;
  });

  const addComments = document.querySelector('.modal__add-comment')
  addComments.innerHTML = 
  `<div class="add-comment__container">
  <input class="add-comment__user" type="text" id="username" name="username" placeholder="Write your Name" required/>
  <textarea
      class="add-comment__review"
      placeholder="Write a review..."
      rows="6"
      required></textarea>
  <button id="add_comment" class="btn btn-add" type="button">Submit</button>
 </div>`

 const btnAddComment = document.querySelector('#add_comment')
 const inputUserName = document.querySelector('#username')
 const inputReview = document.querySelector('.add-comment__review')

 btnAddComment.addEventListener('click', ()=>{
  if (inputUserName.value && inputReview.value) {
    addComment(`item${id}`,inputUserName.value, inputReview.value);
  }
  inputUserName.value = '';
  inputReview.value = '';
 })

  const comments =document.querySelector('.modal__comments')
  const getComments = await getCommentsByItem(id);
  
  getComments.forEach((comment)=>{
  console.log(comment)
  comments.innerHTML += 
  ` <div class="comments">
  <div class="comments__header">
    <p class="comments__username">${comment.username}</p>
    <p class="comments__date">${comment.creation_date}</p>
  </div>
  <div class="comments__body">
    <p class="comments__detail">${comment.comment}</p>
  </div>
</div>`;
 })  
};

export default openModal;