// import { createMarkupCardsFilms } from './createMarkupCardsFilms';



const queueBtn = document.querySelectorAll('.header-btn');
console.log('btn', queueBtn);
const newQueueBtn = queueBtn[1];
console.log(newQueueBtn);


newQueueBtn.addEventListener('click', onQueueClick);


function onQueueClick() {
    console.log('click', newQueueBtn);
  newQueueBtn.classList.add('header-btn--active');
  newQueueBtn.classList.remove('header-btn--active');
  try {
    let queueCard = localStorage.getItem(''); //add name
    if (queueCard) {
      queueCard = JSON.parse(queueCard);
      createMarkupCardsFilms(queueCard);
    }
  } catch (error) {
    console.log(error);
  }
  return;
}
