import { fetchCategories } from './api-service/categories-api';
import { fetchExercises, fetchAllExercises } from './api-service/exercises-api';
import { createExercisesMarkup } from './templates/exercises-markup';
import { createCategoryMarkup } from './templates/categories-markup';
import throttle from 'lodash.throttle';
import { handleOpenModalClick } from './modal-exercise';
import { catsPagination, exersPagination, updatePaginationState } from './categ-exer-pagination';

const refs = {
  catsList: document.querySelector('.categories-wrapper'),
  catFilterList: document.querySelector('.cat-filter-list'),
  catPaginationList: document.querySelector('.cat-pagination-list'),
  exerPaginationList: document.querySelector('.exer-pagination-list'),
  exercisesTitleSpan: document.querySelector('.exercises-title-span'),
  catFilterInput: document.querySelector('.cat-filter-input'),
};
const { catsList, catFilterList, catPaginationList, exerPaginationList, exercisesTitleSpan, catFilterInput } = refs;

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

catFilterList.addEventListener('click', catFilterBtnHandler);
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
    catsList.addEventListener('click', catsListBtnHandler);

    catsPagination(categoryName, totalCategoryPages, currentCategoryPage);
  })
  .catch(err => console.log(err));

async function catFilterBtnHandler(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  categoryName = e.target.dataset.name;

  catPaginationList.classList.remove('is-hidden')
  exerPaginationList.classList.add('is-hidden')
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
    const resp = await fetchCategories(categoryName);

    totalCategoryPages = resp.totalPages;
    currentCategoryPage = resp.page;
    const categoryByName = resp.results.filter(
      ({ filter }) => filter === categoryName
    );

    let filterPagiBtnNum = 1;

    catPagiBtns.forEach(btn => {
      btn.innerHTML = filterPagiBtnNum;
      filterPagiBtnNum += 1;
    })

    exercisesTitleSpan.innerHTML = '';
    catFilterInput.hidden = true;
    catsList.innerHTML = createCategoryMarkup(categoryByName);
    updatePaginationState(catPagiBtns, currentCategoryPage);
    catsPagination(categoryName, totalCategoryPages, currentCategoryPage);
  } catch {
    err => console.log(err);
  }
}

async function catsListBtnHandler(e) {
  try {
    currentExercise = e.target.closest('.categories-item').dataset.bodyPart;

    const getExercises = await fetchExercises(category, currentExercise);
    catsList.innerHTML = createExercisesMarkup(getExercises.results);
    exercisesTitleSpan.innerHTML = `<span class="exercises-title-span-page">/</span> ${currentExercise}`;

    const perPage = getExercises.perPage;
    const exercisesList = document.querySelector('.exercises-list');
    totalExercisesPages = getExercises.totalPages;
    currentExercisesPage = getExercises.page;

    console.log('currentExercisesPage', currentExercisesPage);
    exercisesList.addEventListener('click', exericesModalBtnsHandler);

    catPaginationList.classList.add('is-hidden');
    exerPaginationList.classList.remove('is-hidden');
    catFilterInput.hidden = false;

    updatePaginationState(exerPagiBtns, currentExercisesPage);
    exerPagiBtns[0].classList.add('active');

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

  updatePaginationState(catPagiBtns, currentCategoryPage);
  catsPagination(categoryName, totalCategoryPages, currentCategoryPage);
}

function catInputHandler(e) {
  let filterInput = catFilterInput.value.toLowerCase().trim('');
  const filteredExercises = respFilterAll.filter(({ name }) =>
    name.includes(filterInput)
  );
  const markupNotFound = `<span class='exer-not-found'>Sorry, there is no data matching your search query.</span>`;
  catsList.innerHTML =
    filteredExercises.length === 0
      ? markupNotFound
      : createExercisesMarkup(filteredExercises);

  const exercisesList = document.querySelector('.exercises-list');

  exercisesList.addEventListener('click', exericesModalBtnsHandler);
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

  updatePaginationState(exerPagiBtns, currentExercisesPage);
  exersPagination(category, currentExercise, totalExercisesPages, currentExercisesPage);
}

function exericesModalBtnsHandler(event) {
  const nodeName = event.target.nodeName;

  if (nodeName === 'BUTTON' || nodeName === 'svg' || nodeName === 'use') {
    const exerciseId =
      event.target.closest('.exercises-item').dataset.exerciseId;

    handleOpenModalClick(event, exerciseId);
  }
}
