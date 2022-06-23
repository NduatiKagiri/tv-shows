import myURL from './baseurl.js';
import {getCommentsByItem} from './comments.js';

const showsModal = document.querySelector('.shows-modal');

const htmlModalTvShow = (show) => {
  const modal = document.createElement('article');
  modal.classList.add('modal');
  const modalContainer = document.createElement('div');
  modalContainer.setAttribute('class', 'modal-container');
  const modalHeader = document.createElement('div');
  modalHeader.setAttribute('class', 'modal__header');
  const modalClose = document.createElement('p');
  modalClose.setAttribute('class', 'modal__header-close');
  modalClose.innerText = 'X';
  const modalImage = document.createElement('img');
  const modalBodyImage = document.createElement('div');
  modalBodyImage.setAttribute('class', 'modal__body-image');
  modalImage.setAttribute('src', show.image.medium);
  modalImage.setAttribute('class', 'modal__image');
  const modalBody = document.createElement('div');
  modalBody.setAttribute('class', 'modal__body');
  const modalGenres = document.createElement('ul');
  modalGenres.setAttribute('class', 'modal__genres');
  const modalTitle = document.createElement('h2');
  modalTitle.setAttribute('class', 'modal__title');
  modalTitle.innerText = show.name;
  const modalFeatures = document.createElement('ul');
  modalFeatures.setAttribute('class', 'modal__features');
  const modalDuration = document.createElement('li');
  modalDuration.innerText = `${show.runtime} min`;
  modalDuration.setAttribute('class', 'modal_duration');
  const modalDate = document.createElement('li');
  modalDate.setAttribute('class', 'modal_date');
  modalDate.innerText = show.premiered;
  const modalRate = document.createElement('li');
  modalRate.setAttribute('class', 'modal_rate');
  modalRate.innerText = `Rate: ${show.rating.average}`;
  const modalSummaryTitle = document.createElement('p');
  modalSummaryTitle.setAttribute('class', 'modal__summary-title');
  modalSummaryTitle.innerHTML = 'The Plot';
  const modalSummary = document.createElement('p');
  modalSummary.setAttribute('class', 'modal__summary');
  modalSummary.innerHTML = show.summary;
  const modalFooter = document.createElement('div');
  modalFooter.setAttribute('class', 'modal__footer');
  const modalComments = document.createElement('h2')
  modalComments.setAttribute('class', 'comment__title');
  modalComments.innerText = 'Reviews';
  const modalGetComments = document.createElement('div');
  modalGetComments.setAttribute('class', 'modal__comments');
  const modalAddComments = document.createElement('div');
  modalAddComments.setAttribute('class', 'modal__add-comment' )

  modalHeader.appendChild(modalClose);
  modalContainer.appendChild(modalHeader);
  modalBodyImage.appendChild(modalImage);
  modalContainer.appendChild(modalBodyImage);
  modalBody.appendChild(modalGenres);
  modalBody.appendChild(modalTitle);
  modalFeatures.appendChild(modalDuration);
  modalFeatures.appendChild(modalDate);
  modalFeatures.appendChild(modalRate);
  modalBody.appendChild(modalFeatures);
  modalBody.appendChild(modalSummaryTitle);
  modalBody.appendChild(modalSummary);
  modalContainer.appendChild(modalBody);
  modalFooter.appendChild(modalComments);
  modalFooter.appendChild(modalGetComments);
  modalFooter.appendChild(modalAddComments);
  modalContainer.appendChild(modalFooter);
  modal.appendChild(modalContainer);
  showsModal.appendChild(modal);

  modalClose.addEventListener('click', () => {
    modal.classList.remove('modal');
    showsModal.removeChild(modal);
  });
};



const getTvShowById = async (id) => {
  const response = await fetch(`${myURL}/${id}`);
  const dataShow = await response.json();
  return dataShow;
};

const openModal = async (id) => {
  const tvShowId = await getTvShowById(id);
  console.log('tvshow',tvShowId)
  htmlModalTvShow(tvShowId);
  const genres = document.querySelector('.modal__genres');
  tvShowId.genres.forEach((element) => {
    genres.innerHTML += `<li>${element}</li>`;
  });
  const comments =document.querySelector('.modal__comments')
  console.log(comments)
  const getComments = await getCommentsByItem(id);
  console.log('getcomments',getComments);
 
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