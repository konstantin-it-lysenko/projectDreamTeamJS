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
    Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
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
        setCurrentPage(currentPage);
        page = favorExercises.slice(
          0 + currentPage * pagination,
          pagination * (1 + currentPage)
        );
      }
      refs.exercises.innerHTML = createMarkupExercises(page);
    } else {
      refs.noExercises.classList.add('favor-exercises-noitems');
      //   Notify.failure(`There are no exercises in your favorites`);
    }
  } catch (err) {
    // Notify.failure(`Oops012! Something went wrong! Try reloading the page!`);
  }
}

function setCurrentPage(num) {
  let currentPage = num + 1;
  const activeBtn = document.getElementById(`p-${currentPage}`);
  activeBtn.classList.add('pag-btn-active');
}

getCurrentQuote();

// Test favor exercises
async function getManyExercises() {
  const { results } = await getExercises();
  const dataExers = results.map(
    ({ _id, name, burnedCalories, bodyPart, target }) => ({
      _id: `${_id}`,
      name: `${name}`,
      burnedCalories: `${burnedCalories}`,
      bodyPart: `${bodyPart}`,
      target: `${target}`,
    })
  );
  save('favor-exercises', dataExers);
}
getManyExercises();
// Test favor exercises
