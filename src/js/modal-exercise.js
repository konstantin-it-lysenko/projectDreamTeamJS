import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';
import { createModalExerciseMarkup } from './templates/modal-exercise-markup';

const CLOSE_KEY = 'Escape';

// const openModalExerciseBtnRef = document.querySelector(
//   '[data-modal-exercise="open"]'
// );

// openModalExerciseBtnRef.addEventListener('click', handleOpenModalClick);

function handleOpenModalClick() {
  const instance = basicLightbox.create(createModalExerciseMarkup(), {
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
  });

  function handleCloseModalKeyDown(event) {
    if (event.code === CLOSE_KEY) {
      instance.close();
    }
  }

  instance.show();
}
