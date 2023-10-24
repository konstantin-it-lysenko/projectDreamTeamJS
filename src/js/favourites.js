import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  createMarkupExercises,
  createMarkupPagination,
  createMurkupNoitems,
} from './templates/favourites-markup';
import { getQuote, save, load } from './api-service/favourites-api';
import { handleOpenModalClick } from './modal-exercise';

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
let pagination;
let paginationPages = 1;
let currentPage = 0;
let page;

window.addEventListener('load', takeScreenParams);
window.addEventListener('resize', takeScreenParams);

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
    // Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  }
}

export function getFavoriteExercises() {
  try {
    const favoriteExercises = load(LS_FAVORITES_ID);
    if (favoriteExercises) {
      noExercises.classList.remove('favor-exercises-noitems');
      const totalExercises = favoriteExercises.length;
      if (pagination === 0 || totalExercises <= pagination) {
        page = favoriteExercises;
        paginationMarkup.innerHTML = createMarkupPagination('');
      } else {
        paginationPages = Math.ceil(totalExercises / pagination);
        paginationMarkup.innerHTML = createMarkupPagination(paginationPages);
        const paginationBtns = document.querySelectorAll('.pag-btn');
        paginationBtns.forEach(btn => {
          btn.addEventListener('click', event => {
            const pagBtnId = Number(
              event.currentTarget.closest('.pag-btn').dataset.id
            );
            reloadCurrentPage(pagBtnId, favoriteExercises);
          });
        });
        setExercisesToReload(favoriteExercises);
        setCurrentPage(currentPage);
      }
      reloadMarkupExercises(page, favoriteExercises);
    } else {
      noExercises.classList.add('favor-exercises-noitems');
      exercises.innerHTML = createMurkupNoitems();
    }
  } catch (err) {
    // Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  }
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

function setExercisesToReload(arr) {
  page = arr.slice(
    0 + currentPage * pagination,
    pagination * (1 + currentPage)
  );
  reloadMarkupExercises(page, arr);
}

function reloadMarkupExercises(page, arr) {
  exercises.innerHTML = createMarkupExercises(page);
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
      removeFavoriteExerciseFromLS(exerciseId, arr);
      getFavoriteExercises();
    });
  });
}

function removeFavoriteExerciseFromLS(id, arr) {
  const removerObj = arr.find(exercise => exercise._id === id);
  const favoriteExerciseIndex = arr.indexOf(removerObj);
  arr.splice(favoriteExerciseIndex, 1);
  save(LS_FAVORITES_ID, arr);
  !arr.length && localStorage.removeItem(LS_FAVORITES_ID);
}

function reloadCurrentPage(num, arr) {
  setCurrentPage(num);
  setExercisesToReload(arr);
}

getCurrentQuote();

// Test favor exercises
// async function getManyExercises() {
//   const { results } = await getExercises();
//   const dataExercises = results.map(
//     ({ _id, name, burnedCalories, bodyPart, target }) => ({
//       _id: `${_id}`,
//       name: `${name}`,
//       burnedCalories: `${burnedCalories}`,
//       bodyPart: `${bodyPart}`,
//       target: `${target}`,
//     })
//   );
//   save('favor-exercises', dataExercises);
// }
// getManyExercises();
// Test favor exercises
