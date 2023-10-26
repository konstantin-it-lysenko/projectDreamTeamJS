import { fetchCategories } from './api-service/categories-api';
import { fetchExercises } from './api-service/exercises-api';
import { createCategoryMarkup } from './templates/categories-markup';
import { createExercisesMarkup } from './templates/exercises-markup';
import { showLoader, hideLoader } from './loader';

export async function catsPagination(
  categoryName = 'Body parts',
  totalPages,
  currentPage,
  arrOfBtns
) {
  showLoader();
  const catsList = document.querySelector('.categories-list');
  const middle = document.querySelector('button[data-page="middle"]');
  const next = document.querySelector('button[data-page="next"]');

  if (totalPages === 1) {
    middle.disabled = true;
    next.disabled = true;
  } else if (totalPages === 2) {
    next.disabled = true;
  } else {
    middle.disabled = false;
    next.disabled = false;
  }

  arrOfBtns.forEach(btn => {
    btn.classList.remove('active');
  });

  [...arrOfBtns].forEach(btn => {
    if (btn.innerHTML.trim() === String(currentPage).trim()) {
      btn.classList.add('active');
    }
  });

  try {
    const resp = await fetchCategories(categoryName, currentPage);
    catsList.innerHTML = createCategoryMarkup(resp.results);
  } catch {
    err => console.error(err);
  } finally {
    hideLoader();
  }
}

export async function exersPagination(
  categoryName,
  currentExercise,
  totalPages,
  currentPage,
  arrOfBtns
) {
  showLoader();
  const exerList = document.querySelector('.exercises-list');
  const middle = document.querySelector('button[data-exer="middle"]');
  const next = document.querySelector('button[data-exer="next"]');

  if (totalPages === 1) {
    middle.disabled = true;
    next.disabled = true;
  } else if (totalPages === 2) {
    next.disabled = true;
  } else {
    middle.disabled = false;
    next.disabled = false;
  }

  arrOfBtns.forEach(btn => {
    btn.classList.remove('active');
  });

  [...arrOfBtns].forEach(btn => {
    if (btn.innerHTML.trim() === String(currentPage).trim()) {
      btn.classList.add('active');
    }
  });

  try {
    const resp = await fetchExercises(
      categoryName,
      currentExercise,
      currentPage
    );
    exerList.innerHTML = createExercisesMarkup(resp.results);
  } catch {
    err => console.error(err);
  } finally {
    hideLoader();
  }
}
