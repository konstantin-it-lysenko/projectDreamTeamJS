import {
  createMarkupExercises,
  createMarkupPagination,
  createMurkupNoitems,
} from './templates/favourites-markup';
import { getQuote, save, load } from './api-service/favourites-api';
import { handleOpenModalClick } from './modal-exercise';
import debounce from 'lodash.debounce';
//-----------------------------------------------------------------------
const refs = {
  quote: document.querySelector('.favor-quote-wrap p'),
  quoteAuthor: document.querySelector('.favor-quote-wrap h4'),
  exercises: document.querySelector('.favor-exercises-list'),
  noExercises: document.querySelector('.favor-exercises'),
  paginationMarkup: document.querySelector('.pag-list'),
};

const { quote, quoteAuthor, exercises, noExercises, paginationMarkup } = refs;
const LS_FAVORITES_ID = 'favorite-exercises-list';
const LS_QUOTE = 'quoteData';
let favoriteExercises = [];
let pagination;
let paginationPages = 1;
let currentPage = 0;
let onePageExercises;
let pagBtnId = 0;

window.addEventListener('load', takeScreenParams);
window.addEventListener('resize', debounce(takeScreenParams, 100));

function takeScreenParams() {
  pagination = 8;
  if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    pagination = 10;
  } else if (window.innerWidth >= 1440) {
    pagination = 0;
  }
  getFavoriteExercises();
}

async function getCurrentQuote() {
  try {
    const saveQuote = load(LS_QUOTE);
    const date = new Date().toDateString();
    if (saveQuote && date === saveQuote.quoteDate) {
      quote.textContent = saveQuote.quote;
      quoteAuthor.textContent = saveQuote.author;
    } else {
      const currentQuote = await getQuote();
      currentQuote.quoteDate = date;
      quote.textContent = currentQuote.quote;
      quoteAuthor.textContent = currentQuote.author;
      save(LS_QUOTE, currentQuote);
    }
  } catch (err) {
    // console.log('Favourites page', err);
  }
}

export function getFavoriteExercises() {
  try {
    favoriteExercises = load(LS_FAVORITES_ID);
    if (favoriteExercises) {
      noExercises.classList.remove('favor-exercises-noitems');
      if (pagination === 0 || favoriteExercises.length <= pagination) {
        onePageExercises = favoriteExercises;
        paginationMarkup.innerHTML = createMarkupPagination('');
      } else {
        reloadMarkupPagination(favoriteExercises);
        setCurrentPage(currentPage);
        setExercisesToReload(favoriteExercises);
      }
      reloadMarkupExercises(onePageExercises);
    } else {
      noExercises.classList.add('favor-exercises-noitems');
      exercises.innerHTML = createMurkupNoitems();
    }
  } catch (err) {
    // Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  }
}

function reloadMarkupExercises(pageArr) {
  exercises.innerHTML = createMarkupExercises(pageArr);
  const exericesOpenBtns = document.querySelectorAll(
    '[data-modal-exercise="open"]'
  );
  const exericesRemoveBtns = document.querySelectorAll(
    '.favor-exercises-delbtn'
  );
  exericesOpenBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      const exerciseId = event.currentTarget.closest('.favor-exercises-card')
        .dataset.id;
      handleOpenModalClick(event, exerciseId);
    });
  });
  exericesRemoveBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      const exerciseId = event.currentTarget.closest('.favor-exercises-card')
        .dataset.id;
      removeFavoriteExerciseFromLS(exerciseId);
      getFavoriteExercises();
    });
  });
}

function reloadMarkupPagination(arr) {
  paginationPages = Math.ceil(arr.length / pagination);
  if (paginationPages === pagBtnId) {
    pagBtnId -= 1;
    currentPage -= 1;
  }
  paginationMarkup.innerHTML = createMarkupPagination(
    paginationPages,
    pagBtnId
  );

  const paginationBtns = document.querySelectorAll('.pag-btn');
  paginationBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      pagBtnId = Number(event.currentTarget.closest('.pag-btn').dataset.id);
      reloadMarkupPagination(arr);
      setCurrentPage(pagBtnId);
      setExercisesToReload(arr);
      reloadMarkupExercises(onePageExercises);
      smoothScrollDown();
    });
  });
}

function setExercisesToReload(arr) {
  Math.ceil(arr.length / pagination) < currentPage + 1
    ? (currentPage -= 1)
    : currentPage;
  onePageExercises = arr.slice(
    currentPage * pagination,
    pagination * (1 + currentPage)
  );
}

function setCurrentPage(num) {
  currentPage = num;
  const inActiveBtns = document.querySelectorAll('.pag-btn');
  inActiveBtns.forEach(btn => {
    btn.classList.remove('pag-btn-active');
  });
  const activeBtn = document.getElementById(`p-${num + 1}`);
  activeBtn.classList.add('pag-btn-active');
}

function removeFavoriteExerciseFromLS(id) {
  const removerObj = favoriteExercises.find(exercise => exercise._id === id);
  const favoriteExerciseIndex = favoriteExercises.indexOf(removerObj);
  favoriteExercises.splice(favoriteExerciseIndex, 1);
  save(LS_FAVORITES_ID, favoriteExercises);
  !favoriteExercises.length && localStorage.removeItem(LS_FAVORITES_ID);
}

function smoothScrollDown() {
  window.scrollBy({
    top: 1 * window.innerHeight,
    behavior: 'smooth',
  });
}

document.addEventListener('DOMContentLoaded', function () {
  getCurrentQuote();
});
