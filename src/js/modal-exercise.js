import { Notify } from 'notiflix';
import { fetchExerciseModalById } from './api-service/modal-exercise-api';
import {
  createModalExerciseMarkup,
  createAddToFavoritesMarkup,
  createRemoveFromFavoritesMarkup,
} from './templates/modal-exercise-markup';
import { ModalBox } from './modal-class-box';
import { onOpenClick } from './modal-form';
import { getFavoriteExercises } from './favourites';

const openModalSelector = '[data-modal-exercise="open"]';
const closeModalSelector = '[data-modal-exercise="close"]';
const openModalExerciseBtnRef = document.querySelector(openModalSelector);
const LS_FAVORITES_ID = 'favorite-exercises-list';
let favoriteIdList = JSON.parse(localStorage.getItem(LS_FAVORITES_ID)) || [];

openModalExerciseBtnRef?.addEventListener('click', handleOpenModalClick);

export async function handleOpenModalClick(
  _,
  exerciseId = '64f389465ae26083f39b17a2'
) {
  let modalBox = {};
  let exerciseData = {};
  let ratingValue = 0;

  try {
    exerciseData = await fetchExerciseModalById(exerciseId);
    modalBox = new ModalBox(
      createModalExerciseMarkup,
      closeModalSelector,
      exerciseData
    );

    modalBox.open();

    ratingValue = Math.round(exerciseData.rating);
  } catch (error) {
    Notify.failure(
      'Sorry, there are no data matching your category. Please try again.'
    );
  }

  processActiveRatingStars(ratingValue);

  const giveRatingBtnRef = document.querySelector('.js-give-rating-btn');
  const addToFavoriteBtnRef = document.querySelector(
    '.js-add-to-favorites-btn'
  );

  favoriteIdList = JSON.parse(localStorage.getItem(LS_FAVORITES_ID)) || [];

  giveRatingBtnRef.addEventListener('click', event =>
    handleGiveRatingBtnClick(event, modalBox, exerciseData._id)
  );

  addToFavoriteBtnRef.addEventListener('click', event =>
    handleAddToFavoriteBtnClick(event, exerciseData, addToFavoriteBtnRef)
  );

  createRemoveMarkupIfIncludesId(exerciseData, addToFavoriteBtnRef);
}

function handleAddToFavoriteBtnClick(
  _,
  { _id, name, burnedCalories, bodyPart, target },
  addToFavoriteBtnRef
) {
  const favoriteExercise = { _id, name, burnedCalories, bodyPart, target };

  if (favoriteIdList.some(({ _id }) => _id === favoriteExercise._id)) {
    processRemovalsFromFavorites(favoriteExercise, addToFavoriteBtnRef);
    removeLocalStorageIfEmpty();
    getFavoriteExercises();
    return;
  }

  processAddingToFavorites(favoriteExercise, addToFavoriteBtnRef);
  getFavoriteExercises();
}

function processAddingToFavorites(favoriteExercise, addToFavoriteBtnRef) {
  addToFavoriteBtnRef.innerHTML = createRemoveFromFavoritesMarkup();

  favoriteIdList.push(favoriteExercise);
  const favoriteData = JSON.stringify(favoriteIdList);

  localStorage.setItem(LS_FAVORITES_ID, favoriteData);
}

function processRemovalsFromFavorites(favoriteExercise, addToFavoriteBtnRef) {
  const currentFavoriteIndex = favoriteIdList.findIndex(
    ({ _id }) => _id === favoriteExercise._id
  );
  favoriteIdList.splice(currentFavoriteIndex, 1);

  const favoriteData = JSON.stringify(favoriteIdList);
  localStorage.setItem(LS_FAVORITES_ID, favoriteData);

  addToFavoriteBtnRef.innerHTML = createAddToFavoritesMarkup();
}

function createRemoveMarkupIfIncludesId(favoriteExercise, addToFavoriteBtnRef) {
  favoriteIdList.some(({ _id }) => _id === favoriteExercise._id) &&
    (addToFavoriteBtnRef.innerHTML = createRemoveFromFavoritesMarkup());
}

function removeLocalStorageIfEmpty() {
  !favoriteIdList.length && localStorage.removeItem(LS_FAVORITES_ID);
}

function handleGiveRatingBtnClick(_, modalBox, exerciseId) {
  modalBox.instance.close();
  onOpenClick(_, exerciseId);
}

function processActiveRatingStars(ratingValue) {
  const ratingStarsContainer = document.querySelector(
    '#modal-exercise-rating-stars'
  );

  [...ratingStarsContainer.children].forEach((ratingStar, index) => {
    index < ratingValue &&
      ratingStar.classList.add('modal-exercise-active-rating-stars');
  });
}
