const cardWrapper = document.querySelector(".cards");

cardWrapper.addEventListener('click', e => {
  const cardMoreBtn = e.target.closest(".card__more-owo");
  const cardLessBtn = e.target.closest(".card__less-owo");
  
  if(cardMoreBtn) {
    cardMoreBtn.parentNode.parentNode.classList.add('card--open');
  }

  if(cardLessBtn) {
    cardLessBtn.parentNode.parentNode.classList.remove('card--open');
  }

})