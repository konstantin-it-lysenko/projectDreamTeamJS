import Notiflix from 'notiflix';
import { fetchPostApi } from './api-service/footer-api';
import { gsap } from 'gsap';

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

  fetchPostApi(subscriptionData)
    .then(resp => {
      const massage = resp.data.message;
      Notiflix.Notify.success(massage);
    })
    .catch(error => {
      const badRequest = error.response.data.message;
      if (error.response.status === 409) {
        Notiflix.Notify.warning('Subscription already exists');
      }
      if (error.response.status === 400) {
        Notiflix.Notify.warning(badRequest);
      }
    });
  formSubmit.reset();
}
function isValidEmail(email) {
  // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};
const icon = document.querySelector('.footer_logo_icon');
const text = document.querySelector('.footer_title_span');

const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(icon);

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    gsap.to(icon, {
      duration: 2,
      opacity: 1,
      x: 0,
      rotationX: 360,
    });
    gsap.to(text, {
      duration: 2,
      opacity: 1,
    });
  });
}
