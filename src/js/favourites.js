import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  createMarkupExercises,
  createMarkupPagination,
} from './templates/favourites-markup';
import {
  getQuote,
  save,
  load,
  getExercises,
} from './api-service/favourites-api';
import { handleOpenModalClick } from './modal-exercise';
import { fetchExerciseModalById } from './api-service/modal-exercise-api';
import {
  createModalExerciseMarkup,
  createAddToFavoritesMarkup,
  createRemoveFromFavoritesMarkup,
} from './templates/modal-exercise-markup';
import { ModalBox } from './modal-class-box';

//-----------------------------------------------------------------------
const refs = {
  quote: document.querySelector('.favor-quote-wrap p'),
  quoteAuthor: document.querySelector('.favor-quote-wrap h4'),
  exercises: document.querySelector('.favor-exercises-list'),
  noExercises: document.querySelector('.favor-exercises'),
  pagination: document.querySelector('.pag-list'),
};

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
  getFavorExercises();
}

async function getCurrentQuote() {
  try {
    const quote = load('quote-current-day');
    const date = new Date().toDateString();
    if (quote && date === quote.quoteDate) {
      refs.quote.textContent = quote.quote;
      refs.quoteAuthor.textContent = quote.author;
    } else {
      const currentQuote = await getQuote();
      currentQuote.quoteDate = date;
      refs.quote.textContent = currentQuote.quote;
      refs.quoteAuthor.textContent = currentQuote.author;
      save('quote-current-day', currentQuote);
    }
  } catch (err) {
    console.log('Favourites page', err);
    // Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  }
}

function getFavorExercises() {
  try {
    const favorExercises = load('favor-exercises');
    if (favorExercises) {
      refs.noExercises.classList.remove('favor-exercises-noitems');
      const totalExercises = favorExercises.length;
      if (pagination === 0 || totalExercises <= pagination) {
        page = favorExercises;
        refs.pagination.innerHTML = createMarkupPagination('');
      } else {
        paginationPages = Math.ceil(totalExercises / pagination);
        refs.pagination.innerHTML = createMarkupPagination(paginationPages);
        const paginationBtns = document.querySelectorAll('.pag-btn');
        paginationBtns.forEach(btn => {
          btn.addEventListener('click', event => {
            const pagBtnId = Number(
              event.currentTarget.closest('.pag-btn').dataset.id
            );
            reloadCurrentPage(pagBtnId, favorExercises);
          });
        });
        ddd(favorExercises);
        setCurrentPage(currentPage);
      }
      fff(page, favorExercises);
    } else {
      refs.noExercises.classList.add('favor-exercises-noitems');
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

function ddd(arr) {
  page = arr.slice(
    0 + currentPage * pagination,
    pagination * (1 + currentPage)
  );
  fff(page, arr);
}

function fff(page, arr) {
  refs.exercises.innerHTML = createMarkupExercises(page);
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
      getFavorExercises();
    });
  });
}

function removeFavoriteExerciseFromLS(id, arr) {
  const removerObj = arr.find(exercise => exercise._id === id);
  const favoriteExerciseIndex = arr.indexOf(removerObj);
  arr.splice(favoriteExerciseIndex, 1);
  save('favor-exercises', arr);
}

function reloadCurrentPage(num, arr) {
  setCurrentPage(num);
  ddd(arr);
}

getCurrentQuote();

// Test favor exercises
async function getManyExercises() {
  const { results } = await getExercises();
  const dataExercises = results.map(
    ({ _id, name, burnedCalories, bodyPart, target }) => ({
      _id: `${_id}`,
      name: `${name}`,
      burnedCalories: `${burnedCalories}`,
      bodyPart: `${bodyPart}`,
      target: `${target}`,
    })
  );
  save('favor-exercises', dataExercises);
}
getManyExercises();
// Test favor exercises
