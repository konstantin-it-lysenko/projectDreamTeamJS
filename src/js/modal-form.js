import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { postRatting } from './api-service/modal-form-api';
import { handleOpenModalClick } from './modal-exercise';

const teamModalOpenBtn = document.querySelector('.form-modal-btn');
const teamModalCloseBtn = document.querySelector('.form-btn-close');
const formModal = document.querySelector('.form-modal-backdrop');
const backdrop = document.querySelector('.form-modal-backdrop');
let currentId = '';

backdrop.addEventListener('click', onBackdropClick);

teamModalOpenBtn.addEventListener('click', onOpenClick);
teamModalCloseBtn.addEventListener('click', onCloseClick);

export function onOpenClick(_, id) {
  formModal.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscKeyPress);
  document.body.style.overflow = 'hidden';
  currentId = id;
}

function onCloseClick() {
  formModal.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.style.overflow = 'auto';
}

function onEscKeyPress(e) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = e.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseClick();
  }
}
function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseClick();
  }
}

const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive, ratingValue;

  for (let index = 0; index < ratings.length; index += 1) {
    const rating = ratings[index];
    initRating(rating);
  }

  function initRating(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

    if (rating.classList.contains('rating_set')) {
      setRating(rating);
    }
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating_active');
    ratingValue = rating.querySelector('.rating_value');
  }

  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating_item');
    for (let index = 0; index < ratingItems.length; index += 1) {
      const ratingItem = ratingItems[index];

      ratingItem.addEventListener('mouseenter', function (e) {
        initRatingVars(rating);
        setRatingActiveWidth(ratingItem.value);
      });

      ratingItem.addEventListener('mouseleave', function (e) {
        setRatingActiveWidth();
      });

      ratingItem.addEventListener('click', function (e) {
        initRatingVars(rating);
        ratingValue.innerHTML = index + 1;
      });
    }
  }

  const submit = document.querySelector('.form-info');

  submit.addEventListener('submit', handeleClick);

  async function handeleClick(event) {
    event.preventDefault();
    const email = document.querySelector('.form-mail-input');
    const review = document.querySelector('.form-textarea');

    try {
      const result = await postRatting(currentId, {
        rate: Number(ratingValue.innerHTML),
        email: `${email.value}`,
        review: `${review.value}`,
      });
      Notify.success('Success');
      onCloseClick();
      handleOpenModalClick(event, currentId);
    } catch (error) {
      console.log(error);
      Notify.failure(error.response.data.message);
    }
  }
}
