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

const refs = {
  catsList: document.querySelector('.categories-wrapper'),
  catFilterList: document.querySelector('.cat-filter-list'),
  exercisesTitleSpan: document.querySelector('.exercises-title-span'),
  catFilterInput: document.querySelector('.cat-filter-input'),
};
const { catsList, catFilterList, exercisesTitleSpan, catFilterInput } = refs;
let categoryName = '';
let currentExercise;
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

function catFilterBtnHandler(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  categoryName = e.target.dataset.name;

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
}

function paginationBtnHandler(e) {
  const currentPage = e.target.dataset.id;

  fetchCategories(categoryName, currentPage)
    .then(resp => {
      const removeExtraCategories = resp.filter(
        ({ filter }) => filter === categoryName
      );

      catsList.innerHTML = createCategoryMarkup(removeExtraCategories);
    })
    .catch(err => console.log(err));
}
async function catsListBtnHandler(e) {
  if (e.target.nodeName === 'UL') {
    return;
  }

  currentExercise = e.target.closest('.categories-item').dataset.bodyPart;
  const getExercises = await fetchExercises(categoryName, currentExercise);

  catsList.innerHTML = createExercisesMarkup(getExercises);

  exercisesTitleSpan.innerHTML = currentExercise;
  catFilterInput.hidden = false;
//   const resp = await fetchAllExercises(categoryName, currentExercise);
}

function catInputHandler(e) {
  const filterInput = e.currentTarget.value.toLowerCase().trim('');
}
