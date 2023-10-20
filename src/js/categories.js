import { fetchCategories } from './api-service/categories-api';
import { createCategoryMarkup, createPaginationBtnsMarkup } from './templates/categories-markup';

const refs = {
  catsList: document.querySelector('.categories-list'),
  catFilterList: document.querySelector('.cat-filter-list'),
  catPaginationList: document.querySelector('.cat-pagination-list'),
};
const { catsList, catFilterList, catPaginationList } = refs;
let categoryName = '';

catFilterList.addEventListener('click', catFilterBtnHandler);

fetchCategories()
  .then(resp => {
    catsList.insertAdjacentHTML('beforeend', createCategoryMarkup(resp));
    catsList.addEventListener('click', catsListBtnHandler);
    catPaginationList.insertAdjacentHTML('beforeend', createPaginationBtnsMarkup());
    catPaginationList.addEventListener('click', paginationBtnHandler)

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

      catsList.innerHTML = createCategoryMarkup(categoryByName);
    })
    .catch(err => console.log(err));
}

function catsListBtnHandler(e) {
  if (e.target.nodeName === 'UL') {
    return;
  }


}

function paginationBtnHandler(e) {
  const currentPage = e.target.dataset.id;

  fetchCategories(categoryName, currentPage).then(resp => {

    const removeExtraCategories = resp.filter(
      ({ filter }) => filter === categoryName)

    catsList.innerHTML = createCategoryMarkup(removeExtraCategories);
  }).catch(err => console.log(err))
}