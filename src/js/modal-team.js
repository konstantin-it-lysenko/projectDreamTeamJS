import { createDevMarkup } from './templates/modal-team-markup';
import { developers } from '../js/templates/team-array.js';

const teamModalOpenBtn = document.querySelector('.team-btn-open');
const teamModalCloseBtn = document.querySelector('.team-btn-close');
const teamModal = document.querySelector('.team-backdrop');
const teamList = document.querySelector('.team-list');
const backdrop = document.querySelector('.team-backdrop');

teamModalOpenBtn.addEventListener('click', onOpenClick);
teamModalCloseBtn.addEventListener('click', onCloseClick);
teamList.addEventListener('click', onDevClick);
backdrop.addEventListener('click', onBackdropClick);

teamList.insertAdjacentHTML('beforeend', createDevMarkup(developers));
const devSocials = [...teamList.children];

function returnHidden() {
  devSocials.forEach(dev => {
    dev.lastElementChild.classList.remove('active-devel');
  });
}

function onDevClick(e) {
  const devClick = e.target.closest('.team-item');
  if (!devClick) {
    return;
  }
  const devSocClick = devClick.querySelector('.team-soc-list');

  const currentActiveDevSoc = document.querySelector('.active-devel');
  if (currentActiveDevSoc) {
    currentActiveDevSoc.classList.remove('active-devel');
    devSocClick.classList.add('active-devel');
  }

  // if (devSocClick.classList.contains('active-devel')) {
  //   devSocClick.classList.remove('active-devel');
  // }

  // if (currentActiveDevSoc === devSocClick) {
  //   currentActiveDevSoc.classList.remove('active-devel');
  // }

  devSocClick.classList.toggle('active-devel');
}

function onOpenClick() {
  teamModal.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscKeyPress);
}
function onCloseClick() {
  teamModal.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);

  returnHidden();
}

function onEscKeyPress(e) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = e.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseClick();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseClick();
  }
}
