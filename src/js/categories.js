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
import throttle from 'lodash.throttle';

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
let totalCategoryPages = 1;
let currentCategoryPage = 1;

catFilterList.addEventListener('click', catFilterBtnHandler);
catFilterInput.addEventListener('input', throttle(catInputHandler, 300));

fetchCategories()
  .then(resp => {
    totalCategoryPages = resp.totalPages;
    currentCategoryPage = resp.page;
    catsList.insertAdjacentHTML(
      'beforeend',
      createCategoryMarkup(resp.results)
    );
    catsList.addEventListener('click', catsListBtnHandler);
    const catPaginationList = document.querySelector('.cat-pagination-list');
    catPaginationList.insertAdjacentHTML(
      'beforeend',
      createPaginationBtnsMarkup()
    );

    updatePagination(
      catPaginationList,
      currentCategoryPage,
      totalCategoryPages
    );

    catPaginationList.addEventListener('click', paginationBtnHandler);
  })
  .catch(err => console.log(err));

async function catFilterBtnHandler(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  catFilterInput.value = '';
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
      totalCategoryPages = resp.totalPages;
      console.log(totalCategoryPages);
      const categoryByName = resp.results.filter(
        ({ filter }) => filter === categoryName
      );
      exercisesTitleSpan.innerHTML = '';
      catFilterInput.hidden = true;
      catsList.innerHTML = createCategoryMarkup(categoryByName);
      const catPaginationList = document.querySelector('.cat-pagination-list');
      updatePagination(
        catPaginationList,
        currentCategoryPage,
        totalCategoryPages
      );
    })
    .catch(err => console.log(err));
  try {
    const resp = await fetchCategories(categoryName);
    const categoryByName = resp.results.filter(
      ({ filter }) => filter === categoryName
    );
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
    const removeExtraCategories = resp.results.filter(
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
    respFilterAll = await fetchAllExercises(
      test,
      currentExercise,
      perPage,
      totalPages
    );

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
}

function catInputHandler() {
  let filterInput = catFilterInput.value.toLowerCase().trim('');
  const filteredExercises = respFilterAll.filter(({ name }) =>
    name.includes(filterInput)
  );
  const markupNotFound = `<span class='exer-not-found'>Sorry, there is no data matching your search query.</span>`;
  catsList.innerHTML =
    filteredExercises.length === 0
      ? markupNotFound
      : createExercisesMarkup(filteredExercises);
}

// const itemsPerPage = 10; // Количество элементов на одной странице
// let currentPage = 1; // Текущая страница
// let totalItems = 23; // Общее количество элементов

// // Вычисляем общее количество страниц
// const totalPages = Math.ceil(totalItems / itemsPerPage);

// // Создаем контейнер для пагинации
// const paginationContainer = document.getElementById('pagination-container');

function updatePagination(paginationContainer, currentPage, totalPages) {
  paginationContainer.innerHTML = ''; // Очищаем контейнер

  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i >= 1 && i <= totalPages) {
      const item = document.createElement('li');
      item.className = 'pagination-item';
      if (i === currentPage) {
        item.className += ' active';
      }
      const button = document.createElement('button');
      button.textContent = i;
      item.appendChild(button);

      if (i === currentPage && currentPage >= totalPages) {
        item.className += ' disabled';
      }

      // Добавляем обработчик клика на кнопку
      button.addEventListener('click', function () {
        if (i !== currentPage) {
          currentPage = i;
          updatePagination(paginationContainer, currentPage, totalPages);
        }
      });

      paginationContainer.appendChild(item);
    }
  }
}
