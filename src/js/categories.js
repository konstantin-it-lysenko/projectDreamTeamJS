import { fetchCategories } from './api-service/categories-api';
import { fetchExercises, fetchAllExercises } from './api-service/exercises-api';
import { createExercisesMarkup } from './templates/exercises-markup';
import { createCategoryMarkup } from './templates/categories-markup';
import throttle from 'lodash.throttle';
import { handleOpenModalClick } from './modal-exercise';
import { catsPagination, exersPagination } from './categ-exer-pagination';

const refs = {
  catsList: document.querySelector('.categories-list'),
  exercisesList: document.querySelector('.exercises-list'),
  catFilterList: document.querySelector('.cat-filter-list'),
  catPaginationList: document.querySelector('.cat-pagination-list'),
  exerPaginationList: document.querySelector('.exer-pagination-list'),
  exercisesTitleSpan: document.querySelector('.exercises-title-span'),
  catFilterInput: document.querySelector('.cat-filter-input'),
};
const { catsList, exercisesList, catFilterList, catPaginationList, exerPaginationList, exercisesTitleSpan, catFilterInput } = refs;
const catPagiBtns = catPaginationList.querySelectorAll('button[data-page]');
const exerPagiBtns = exerPaginationList.querySelectorAll('button[data-exer]');
let categoryName = 'Body parts';
let category = 'bodypart';
let currentExercise = '';
let respFilterAll = [];
let totalCategoryPages = 1;
let totalExercisesPages = 1;
let currentCategoryPage = 1;
let currentExercisesPage = 1;

catsList.addEventListener('click', catsListBtnHandler);
catFilterList.addEventListener('click', catFilterBtnHandler);
exercisesList.addEventListener('click', exericesModalBtnsHandler);
catFilterInput.addEventListener('input', throttle(catInputHandler, 300));
catPaginationList.addEventListener('click', catsPagiBtnHandler);
exerPaginationList.addEventListener('click', exerPagiBtnHandler);

exerPaginationList.classList.add('is-hidden');

fetchCategories()
  .then(resp => {
    totalCategoryPages = resp.totalPages;

    catsList.insertAdjacentHTML(
      'beforeend',
      createCategoryMarkup(resp.results)
    );
    catsPagination(categoryName, totalCategoryPages, currentCategoryPage, catPagiBtns);
  })
  .catch(err => console.log(err));

async function catFilterBtnHandler(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  categoryName = e.target.dataset.name;

  catsList.classList.remove('is-hidden', 'd-none');
  catPaginationList.classList.remove('is-hidden', 'd-none');
  exercisesList.classList.add('is-hidden', 'd-none')
  exerPaginationList.classList.add('is-hidden', 'd-none')
  catFilterInput.value = '';

  const catFilterBtns = document.querySelectorAll('.cat-filter-btn');
  catFilterBtns.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');

  switch (categoryName) {
    case 'Muscles':
      category = 'muscles';
      break;
    case 'Equipment':
      category = 'equipment';
      break;
    case 'Body parts':
      category = 'bodypart';
      break;
  }

  try {
    const resp = await fetchCategories(categoryName, currentCategoryPage);

    totalCategoryPages = resp.totalPages;
    currentCategoryPage = resp.page;
    const categoryByName = resp.results.filter(
      ({ filter }) => filter === categoryName
    );

    exercisesTitleSpan.innerHTML = '';
    catFilterInput.hidden = true;
    catsList.innerHTML = createCategoryMarkup(categoryByName);
    catsPagination(categoryName, totalCategoryPages, currentCategoryPage, catPagiBtns);
  } catch {
    err => console.log(err);
  }
}

async function catsListBtnHandler(e) {
  try {
    currentExercise = e.target.closest('.categories-item').dataset.bodyPart;

    const getExercises = await fetchExercises(category, currentExercise);
    exercisesList.innerHTML = createExercisesMarkup(getExercises.results);
    exercisesTitleSpan.innerHTML = `<span class="exercises-title-span-page">/</span> ${currentExercise}`;

    const perPage = getExercises.perPage;
    totalExercisesPages = getExercises.totalPages;
    currentExercisesPage = getExercises.page;

    exersPagination(category, currentExercise, totalExercisesPages, currentExercisesPage, exerPagiBtns);

    catsList.classList.add('is-hidden', 'd-none');
    catPaginationList.classList.add('is-hidden', 'd-none');
    exercisesList.classList.remove('is-hidden', 'd-none');
    exerPaginationList.classList.remove('is-hidden', 'd-none');
    catFilterInput.hidden = false;

    respFilterAll = await fetchAllExercises(
      category,
      currentExercise,
      perPage,
      totalExercisesPages
    );
  } catch {
    err => console.log('Err', err);
  }
}

function catsPagiBtnHandler(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const catPagiBtn = e.target;
  currentCategoryPage = catPagiBtn.innerHTML;

  if (catPagiBtn.dataset.page === 'next' && catPagiBtn.innerHTML < totalCategoryPages) {
    catPagiBtns.forEach(btn => {
      const btnNum = Number(btn.innerHTML);
      btn.innerHTML = btnNum + 1;
    })
  } else if (catPagiBtn.dataset.page === 'prev' && catPagiBtn.innerHTML > 1) {
    catPagiBtns.forEach(btn => {
      const btnNum = Number(btn.innerHTML);
      btn.innerHTML = btnNum - 1;
    })
  } else {
    catPagiBtn.classList.add('active');
  }

  catsPagination(categoryName, totalCategoryPages, currentCategoryPage, catPagiBtns);
}

function catInputHandler(e) {
  let filterInput = catFilterInput.value.toLowerCase().trim('');
  const filteredExercises = respFilterAll.filter(({ name }) =>
    name.includes(filterInput)
  );
  const markupNotFound = `<span class='exer-not-found'>Sorry, there is no data matching your search query.</span>`;
  exercisesList.innerHTML =
    filteredExercises.length === 0
      ? markupNotFound
      : createExercisesMarkup(filteredExercises);
}

function exerPagiBtnHandler(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const exerPagiBtn = e.target;
  currentExercisesPage = exerPagiBtn.innerHTML;

  if (exerPagiBtn.dataset.exer === 'next' && exerPagiBtn.innerHTML < totalExercisesPages) {
    exerPagiBtns.forEach(btn => {
      const btnNum = Number(btn.innerHTML);
      btn.innerHTML = btnNum + 1;
    })
  } else if (exerPagiBtn.dataset.exer === 'prev' && exerPagiBtn.innerHTML > 1) {
    exerPagiBtns.forEach(btn => {
      const btnNum = Number(btn.innerHTML);
      btn.innerHTML = btnNum - 1;
    })
  } else {
    exerPagiBtn.classList.add('active');
  }

  exersPagination(category, currentExercise, totalExercisesPages, currentExercisesPage, exerPagiBtns);
}

function exericesModalBtnsHandler(event) {
  const nodeName = event.target.nodeName;

  if (nodeName === 'BUTTON' || nodeName === 'svg' || nodeName === 'use') {
    const exerciseId =
      event.target.closest('.exercises-item').dataset.exerciseId;

    handleOpenModalClick(event, exerciseId);
  }
}
