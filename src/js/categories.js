import { fetchCategories } from './api-service/categories-api';
import { fetchExercises, fetchAllExercises } from './api-service/exercises-api';
import {
  createExercisesMarkup,
  createExercisesPaginationBtnsMarkup,
} from './templates/exercises-markup';
import {
  createCategoryMarkup,
  createPaginationBtnsMarkup,
} from './templates/categories-markup';
import { handleOpenModalClick } from './modal-exercise';

const refs = {
  catsList: document.querySelector('.categories-wrapper'),
  catFilterList: document.querySelector('.cat-filter-list'),
  exercisesTitleSpan: document.querySelector('.exercises-title-span'),
  catFilterInput: document.querySelector('.cat-filter-input'),
};
const { catsList, catFilterList, exercisesTitleSpan, catFilterInput } = refs;

let categoryName = '';
let test = 'bodypart';
let respFilterAll = [];
catFilterList.addEventListener('click', catFilterBtnHandler);
catFilterInput.addEventListener('input', catInputHandler);

fetchCategories()
  .then(resp => {
    catsList.insertAdjacentHTML('beforeend', createCategoryMarkup(resp));
    catsList.addEventListener('click', catsListBtnHandler);
    const catPaginationList = document.querySelector('.cat-pagination-list');
    catPaginationList.insertAdjacentHTML(
      'beforeend',
      createPaginationBtnsMarkup()
    );
    catPaginationList.addEventListener('click', paginationBtnHandler);
  })
  .catch(err => console.log(err));

async function catFilterBtnHandler(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  categoryName = e.target.dataset.name;

  switch (categoryName) {
    case 'Muscles':
      test = 'muscles';
      break;
    case 'Equipment':
      test = 'equipment';
      break;
    case 'Body parts':
      test = 'bodypart';
      break;
  }

  fetchCategories(categoryName)
    .then(resp => {
      const categoryByName = resp.filter(
        ({ filter }) => filter === categoryName
      );
      exercisesTitleSpan.innerHTML = '';
      catFilterInput.hidden = true;
      catsList.innerHTML = createCategoryMarkup(categoryByName);
    })
    .catch(err => console.log(err));
  try {
    const resp = await fetchCategories(categoryName);
    const categoryByName = resp.filter(({ filter }) => filter === categoryName);
    exercisesTitleSpan.innerHTML = '';
    catFilterInput.hidden = true;
    catsList.innerHTML = createCategoryMarkup(categoryByName);
  } catch {
    err => console.log(err);
  }
}

async function paginationBtnHandler(e) {
  const currentPage = e.target.dataset.id;
  try {
    const resp = await fetchCategories(categoryName, currentPage);
    const removeExtraCategories = resp.filter(
      ({ filter }) => filter === categoryName
    );
    catsList.innerHTML = createCategoryMarkup(removeExtraCategories);
  } catch {
    err => console.log(err);
  }
}

async function catsListBtnHandler(e) {
  try {
    catFilterInput.hidden = false;
    const currentExercise =
      e.target.closest('.categories-item').dataset.bodyPart;
    const getExercises = await fetchExercises(test, currentExercise);
    const perPage = getExercises.perPage;
    const totalPages = getExercises.totalPages;
    catsList.innerHTML = createExercisesMarkup(getExercises.results);
    exercisesTitleSpan.innerHTML = currentExercise;
    respAll = await fetchAllExercises(
      test,
      currentExercise,
      perPage,
      totalPages
    );
    console.log(respAll);
    catFilterInput.hidden = false;

    const exericesBtns = document.querySelectorAll(
      '[data-modal-exercise="open"]'
    );

    exericesBtns.forEach(btn => {
      btn.addEventListener('click', event => {
        const exerciseId =
          event.currentTarget.closest('.exercises-item').dataset.exerciseId;

        handleOpenModalClick(event, exerciseId);
      });
    });
  } catch {
    err => console.log('Err', err);
  }
  //   const resp = await fetchAllExercises(categoryName, currentExercise);
}

function catInputHandler(e) {
  const filterInput = e.currentTarget.value.toLowerCase().trim('');
  console.log(respFilterAll);
}
