import { fetchExerciseModalById } from './api-service/modal-exercise-api';
import { createModalExerciseMarkup } from './templates/modal-exercise-markup';
import { ModalBox } from './modal-class-box';

const openModalSelector = '[data-modal-exercise="open"]';
const closeModalSelector = '[data-modal-exercise="close"]';
const openModalExerciseBtnRef = document.querySelector(openModalSelector);

openModalExerciseBtnRef.addEventListener('click', handleOpenModalClick);

async function handleOpenModalClick() {
  const exericiseData = await fetchExerciseModalById();

  const modalBox = new ModalBox(
    createModalExerciseMarkup,
    closeModalSelector,
    exericiseData
  );

  modalBox.open();
}
