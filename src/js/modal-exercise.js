import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import { fetchExerciseModalById } from './api-service/modal-exercise-api';
import { createModalExerciseMarkup } from './templates/modal-exercise-markup';

const CLOSE_KEY = 'Escape';

const openModalExerciseBtnRef = document.querySelector(
  '[data-modal-exercise="open"]'
);

openModalExerciseBtnRef.addEventListener('click', handleOpenModalClick);

async function handleOpenModalClick() {
  const exericiseData = await fetchExerciseModalById();

  const instance = basicLightbox.create(
    createModalExerciseMarkup(exericiseData),
    {
      onShow: instance => {
        instance
          .element()
          .querySelector('[data-modal-exercise="close"]').onclick =
          instance.close;
        window.addEventListener('keydown', handleCloseModalKeyDown);
      },
      onClose: instance => {
        window.removeEventListener('keydown', handleCloseModalKeyDown);
      },
    }
  );

  function handleCloseModalKeyDown(event) {
    if (event.code === CLOSE_KEY) {
      instance.close();
    }
  }

  instance.show();
}
