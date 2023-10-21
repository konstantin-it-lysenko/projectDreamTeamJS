import { fetchExerciseModalById } from './api-service/modal-exercise-api';
import {
  createModalExerciseMarkup,
  createAddToFavoritesMarkup,
  createRemoveFromFavoritesMarkup,
} from './templates/modal-exercise-markup';
import { ModalBox } from './modal-class-box';

const openModalSelector = '[data-modal-exercise="open"]';
const closeModalSelector = '[data-modal-exercise="close"]';
const openModalExerciseBtnRef = document.querySelector(openModalSelector);
const LS_FAVORITES_ID = 'favorite-id-list';
const favoriteIdList = JSON.parse(localStorage.getItem(LS_FAVORITES_ID)) || [];

openModalExerciseBtnRef.addEventListener('click', handleOpenModalClick);

async function handleOpenModalClick() {
  let modalBox = {};

  // TODO change favoriteId for dynamic ID
  const favoriteId = '64f389465ae26083f39b17a2';

  try {
    const exericiseData = await fetchExerciseModalById();
    modalBox = new ModalBox(
      createModalExerciseMarkup,
      closeModalSelector,
      exericiseData
    );

    modalBox.open();
  } catch (error) {
    console.error(
      "The weather is nice today, isn't it? But in fact, It's just an error"
    );
  }

  const giveRatingBtnRef = document.querySelector('.js-give-rating-btn');
  const addToFavoriteBtnRef = document.querySelector(
    '.js-add-to-favorites-btn'
  );

  giveRatingBtnRef.addEventListener('click', event =>
    handleGiveRatingBtnClick(event, modalBox)
  );

  // TODO remove LS_FAVORITES_ID if [] from Local Storage
  addToFavoriteBtnRef.addEventListener('click', event =>
    handleAddToFavoriteBtnClick(event, favoriteId, addToFavoriteBtnRef)
  );

  if (favoriteIdList.includes(favoriteId)) {
    addToFavoriteBtnRef.innerHTML = createRemoveFromFavoritesMarkup();
  }
}

function handleGiveRatingBtnClick(_, modalBox) {
  modalBox.instance.close();
}

function handleAddToFavoriteBtnClick(_, favoriteId, addToFavoriteBtnRef) {
  if (favoriteIdList.includes(favoriteId)) {
    processRemovalsFromFavorites(favoriteId, addToFavoriteBtnRef);
    return;
  }

  processAddingToFavorites(favoriteId, addToFavoriteBtnRef);
}

function processAddingToFavorites(favoriteId, addToFavoriteBtnRef) {
  addToFavoriteBtnRef.innerHTML = createRemoveFromFavoritesMarkup();

  favoriteIdList.push(favoriteId);
  const favoriteIdData = JSON.stringify(favoriteIdList);

  localStorage.setItem(LS_FAVORITES_ID, favoriteIdData);
}

function processRemovalsFromFavorites(favoriteId, addToFavoriteBtnRef) {
  const currentFavoriteIndex = favoriteIdList.indexOf(favoriteId);
  favoriteIdList.splice(currentFavoriteIndex, 1);

  const favoriteIdData = JSON.stringify(favoriteIdList);
  localStorage.setItem(LS_FAVORITES_ID, favoriteIdData);

  addToFavoriteBtnRef.innerHTML = createAddToFavoritesMarkup();
}
