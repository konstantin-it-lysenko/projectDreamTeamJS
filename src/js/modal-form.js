import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const teamModalOpenBtn = document.querySelector('.form-modal-btn');
const teamModalCloseBtn = document.querySelector('.form-btn-close');
const formModal = document.querySelector('.form-modal-backdrop');


teamModalOpenBtn.addEventListener('click', onOpenClick);
teamModalCloseBtn.addEventListener('click', onCloseClick);

function onOpenClick() {
    formModal.classList.remove('is-hidden');
  }
  function onCloseClick() {
    formModal.classList.add('is-hidden');
  }


  const ratings  = document.querySelectorAll('.rating');

  if(ratings.length > 0) {
    initRatings();
  }

  function initRatings() {
    let ratingActive, ratingValue;

    for(let index = 0; index < ratings.length; index +=1) {
      const rating = ratings[index]
      initRating(rating);
    }

    function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();

      if(rating.classList.contains('rating_set')) {
        setRating(rating);
      }
    }

    function initRatingVars(rating) {
      ratingActive = rating.querySelector('.rating_active')
      ratingValue = rating.querySelector('.rating_value')
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    
    function setRating(rating) {
      const ratingItems = rating.querySelectorAll(".rating_item");
      for (let index = 0; index < ratingItems.length; index += 1) {
        const ratingItem = ratingItems[index]; 
        ratingItem.addEventListener('mouseenter', function (e){
          initRatingVars(rating)
          setRatingActiveWidth(ratingItem.value)
          ratingValue.innerHTML = index + 1;
        });
        ratingItem.addEventListener('click', function (e) {
          initRatingVars(rating);
          ratingValue.innerHTML = index + 1;
        })
      }
    }

    const submit = document.querySelector('.form-submit-btn')

    submit.addEventListener('click', handeleClick);

    function handeleClick() {
      const email = document.querySelector('.form-mail-input');
      const review = document.querySelector('.form-textarea')


      function postRatting(id, userData) {        
        return axios.patch(`https://your-energy.b.goit.study/api/exercises/
      ${id}/rating`, userData);
      }


      postRatting("64f389465ae26083f39b17a4", {
          rate: Number(ratingValue.innerHTML),
          email: `${email.value}`,
          review: `${review.value}`,
        })
        .then(Notify.success('Success'))
        .catch(error => Notify.failure(error.response.data.message));
    }

  }


