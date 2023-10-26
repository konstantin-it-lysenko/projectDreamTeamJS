import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { postRatting } from './api-service/modal-form-api';
import { ModalBox } from './modal-class-box';
import svgSpritePath from '../img/sport-sprite.svg';

const teamModalOpenBtn = document.querySelector('.form-modal-btn');

let currentId = '';
let modalRating = {};

teamModalOpenBtn?.addEventListener('click', onOpenClick);

export function onOpenClick(_, id) {
  currentId = id;

  modalRating = new ModalBox(
    createModalRatingMarkup,
    '.form-btn-close',
    '',
    true
  );

  modalRating.open(currentId);

  const ratings = document.querySelectorAll('.rating');

  if (ratings.length > 0) {
    initRatings(ratings);
  }
}

function initRatings(ratings) {
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

      ratingItem.addEventListener('mouseenter', () => {
        initRatingVars(rating);
        setRatingActiveWidth(ratingItem.value);
      });

      ratingItem.addEventListener('mouseleave', () => {
        setRatingActiveWidth();
      });

      ratingItem.addEventListener('click', () => {
        initRatingVars(rating);
        ratingValue.innerHTML = index + 1;
      });
    }
  }

  const submit = document.querySelector('.form-info');

  submit.addEventListener('submit', event => handeleClick(event, ratingValue));
}

async function handeleClick(event, ratingValue) {
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
    modalRating.instance.close();
  } catch (error) {
    Notify.failure(error.response.data.message);
  }
}

function createModalRatingMarkup() {
  return `
  <div class="form-modal-backdrop">
    <div class="form-modal">
        
        <button type="button" class="form-btn-close">
            <svg class="team-close-icon" width="24" height="24">
              <use href="${svgSpritePath}#icon-cross"></use>
            </svg>
          </button>
          
          <p class="form-modal-title">Rating</p>
          
          <div class="rating rating_set">
            <div class="rating_value">0.0</div>
            <div class="rating_body">
                <div class="rating_active"></div>
                <div class="rating_items">
                    <input type="radio" class="rating_item" value="1" name="rating">
                    <input type="radio" class="rating_item" value="2" name="rating">
                    <input type="radio" class="rating_item" value="3" name="rating">
                    <input type="radio" class="rating_item" value="4" name="rating">
                    <input type="radio" class="rating_item" value="5" name="rating">
                </div>
            </div>
          </div>
          <form class="form-info">
            <input type="email" name="email" placeholder="Email" class="form-info-item form-mail-input">
            <textarea name="comment" placeholder="Your comment" class="form-info-item form-textarea"></textarea>
            <button type="submit" class="form-submit-btn">Send</button>
          </form>
          
    </div>
</div>`;
}
