import { API_PROPS } from './api/api';
import axios from 'axios';
import Notiflix from 'notiflix';

const { BASE_URL, SUBSCR_EDPOINT } = API_PROPS;

const formSubmit = document.querySelector('.js-footer-form');

formSubmit.addEventListener('submit', fetchSubscription);

function fetchSubscription(event) {
  event.preventDefault();

  const emailInput = document.querySelector('input[type="email"]');
  const email = emailInput.value;

  if (!isValidEmail(email)) {
    return Notiflix.Notify.failure('Invalid email address was entered.');
  }

  const subscriptionData = {
    email: email,
  };

  axios
    .post(`${BASE_URL}${SUBSCR_EDPOINT}`, subscriptionData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    .then(resp => {
      Notiflix.Notify.success(
        'Were excited to have you on board! 🎉 Thank you f…ep towards improving your fitness and well-being.'
      );
      console.log('respons', resp);
    })
    .catch(error => {
      if (error.response.status === 409) {
        Notiflix.Notify.failure('Subscription already exists');
      }
      console.dir(error);
    });

  console.log(13456);
}
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
