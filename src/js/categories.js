import { fetchCategories } from './api-service/categories-api';
import createCategoryMarkup from './templates/categories-markup';

const refs = {
  catsList: document.querySelector('.categories-list'),
  catFilterList: document.querySelector('.cat-filter-list'),
};
const { catsList, catFilterList } = refs;

catFilterList.addEventListener('click', catFilterBtnHandler);

function catFilterBtnHandler(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const categoryName = e.target.dataset.name;

  fetchCategories()
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
fetchCategories()
  .then(resp => {
    catsList.insertAdjacentHTML('beforeend', createCategoryMarkup(resp));
    catsList.addEventListener('click', catsListBtnHandler);
  })
  .catch(err => console.log(err));
