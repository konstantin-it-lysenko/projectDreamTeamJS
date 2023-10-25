import { fetchCategories } from './api-service/categories-api';
import { fetchExercises, fetchAllExercises } from './api-service/exercises-api';
import { createExercisesMarkup } from './templates/exercises-markup';
import { createCategoryMarkup } from './templates/categories-markup';
import { handleOpenModalClick } from './modal-exercise';
import throttle from 'lodash.throttle';
import { catsPagination } from './categ-exer-pagination';

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
let categoryName = 'Body parts';
let part = 'bodypart';
let respFilterAll = [];
let totalCategoryPages = 1;
let currentCategoryPage = 1;

catFilterList.addEventListener('click', catFilterBtnHandler);
catFilterInput.addEventListener('input', throttle(catInputHandler, 300));
catPaginationList.addEventListener('click', catsPagiBtnHandler);

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
      part = 'muscles';
      break;
    case 'Equipment':
      part = 'equipment';
      break;
    case 'Body parts':
      part = 'bodypart';
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
      btn.innerText = filterPagiBtnNum;
      filterPagiBtnNum += 1;
    })

    exercisesTitleSpan.innerHTML = '';
    catFilterInput.hidden = true;
    catsList.innerHTML = createCategoryMarkup(categoryByName);
    catsPagination(categoryName, totalCategoryPages, currentCategoryPage);
  } catch {
    err => console.log(err);
  }
}

function catsPagiBtnHandler(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const catPagiBtn = e.target;

  currentCategoryPage = catPagiBtn.innerHTML

  catPagiBtns.forEach(btn => {
    btn.classList.remove('active');
  });

  if (catPagiBtn.dataset.page === 'next' && catPagiBtn.innerText < totalCategoryPages) {
    catPagiBtns.forEach(btn => {
      const btnNum = Number(btn.innerText);
      btn.innerText = btnNum + 1;
    })
  } else if (catPagiBtn.dataset.page === 'prev' && catPagiBtn.innerText > 1) {
    catPagiBtns.forEach(btn => {
      const btnNum = Number(btn.innerText);
      btn.innerText = btnNum - 1;
    })
  } else {
    catPagiBtn.classList.add('active');
  }
  console.log('Btn Text', catPagiBtn.innerText);
  console.log('Page', currentCategoryPage);

  // catPagiBtn.innerHTML = currentCategoryPage;

  // [...catPagiBtns].find(btn => {
  //   btn.innerText === currentCategoryPage
  //   // return btn.classList.add('active');
  // }
  // );



  catsPagination(categoryName, totalCategoryPages, currentCategoryPage)
}

async function catsListBtnHandler(e) {
  try {
    const currentExercise =
      e.target.closest('.categories-item').dataset.bodyPart;
    const getExercises = await fetchExercises(part, currentExercise);
    const perPage = getExercises.perPage;
    const totalPages = getExercises.totalPages;
    catsList.innerHTML = createExercisesMarkup(getExercises.results);

    catPaginationList.classList.add('is-hidden')
    exerPaginationList.classList.remove('is-hidden')
    catFilterInput.hidden = false;
    exercisesTitleSpan.innerHTML = currentExercise;

    const exercisesList = document.querySelector('.exercises-list');
    exercisesList.addEventListener('click', exericesModalBtnsHandler);

    respFilterAll = await fetchAllExercises(
      part,
      currentExercise,
      perPage,
      totalPages
    );

  } catch {
    err => console.log('Err', err);
  }
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

function exericesModalBtnsHandler(event) {
  const nodeName = event.target.nodeName;

  if (nodeName === 'BUTTON' || nodeName === 'svg' || nodeName === 'use') {
    const exerciseId =
      event.target.closest('.exercises-item').dataset.exerciseId;

    handleOpenModalClick(event, exerciseId);
  }
}
