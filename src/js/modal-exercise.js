import { fetchExerciseModalById } from './api-service/modal-exercise-api';
import { createModalExerciseMarkup } from './templates/modal-exercise-markup';
import { ModalBox } from './modal-class-box';

const openModalSelector = '[data-modal-exercise="open"]';
const closeModalSelector = '[data-modal-exercise="close"]';
const openModalExerciseBtnRef = document.querySelector(openModalSelector);
const LS_FAVORITE_ID = 'favorite-id-list';
const favoriteIdList = [];

openModalExerciseBtnRef.addEventListener('click', handleOpenModalClick);

async function handleOpenModalClick() {
  try {
    const exericiseData = await fetchExerciseModalById();
    const modalBox = new ModalBox(
      createModalExerciseMarkup,
      closeModalSelector,
      exericiseData
    );

    modalBox.open();

    const giveRatingBtnRef = document.querySelector('.js-give-rating-btn');
    const addToFavoriteBtnRef = document.querySelector(
      '.js-add-to-favorites-btn'
    );

    giveRatingBtnRef.addEventListener('click', event =>
      handleGiveRatingBtnClick(event, modalBox)
    );

    addToFavoriteBtnRef.addEventListener('click', event =>
      handleAddToFavoriteBtnClick(event, favoriteIdList)
    );
  } catch (error) {
    console.error(
      "The weather is nice today, isn't it? But in fact, It's just an error"
    );
  }
}

function handleGiveRatingBtnClick(_, modalBox) {
  modalBox.instance.close();
}

function handleAddToFavoriteBtnClick(_, favoriteIdData) {}
