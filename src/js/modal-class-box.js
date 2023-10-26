/**
 * @fileoverview ModalBox class using basicLightBox Library
 * @module ModalBox
 *
 * @param {string} markup -The modal markup
 * @param {string} closeSelector - Selector that will close modal window
 * @param {Object} [reponceData] (Optional) - Data received from the backend
 * @param {boolean} [canOpenAnotherModalByClosing] (Optional) [flag] -
 * ability to open another modal by closing current
 */

import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import { handleOpenModalClick } from './modal-exercise';

export class ModalBox {
  #closeKey = 'Escape';

  options = {
    onShow: instance => {
      instance.element().querySelector(this.closeSelector).onclick =
        instance.close;
      document.addEventListener('keydown', this.handleCloseModalKeyDownBound);
      document.body.style.overflow = 'hidden';
    },
    onClose: () => {
      document.removeEventListener(
        'keydown',
        this.handleCloseModalKeyDownBound
      );
      document.body.style.overflow = 'auto';

      this.canOpenAnotherModalByClosing &&
        handleOpenModalClick({}, this.currentId);
    },
  };

  constructor(
    markup,
    closeSelector,
    responceData,
    canOpenAnotherModalByClosing = false
  ) {
    this.markup = markup;
    this.closeSelector = closeSelector;
    this.responceData = responceData;
    this.canOpenAnotherModalByClosing = canOpenAnotherModalByClosing;
    this.currentId = '';
    this.handleCloseModalKeyDownBound = this.handleCloseModalKeyDown.bind(this);
    this.build();
  }

  build() {
    this.instance = basicLightbox.create(
      this.markup(this.responceData),
      this.options
    );
  }

  open(currentId) {
    this.currentId = currentId;
    this.instance.show();
  }

  handleCloseModalKeyDown(event) {
    if (event.code === this.#closeKey) {
      this.instance.close();
    }
  }

  get closeKey() {
    return this.#closeKey;
  }

  set closeKey(newCloseKey) {
    this.#closeKey = newCloseKey;
  }
}
