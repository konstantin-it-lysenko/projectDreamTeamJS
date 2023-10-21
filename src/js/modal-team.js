import { createDevMarkup } from './templates/modal-team-markup';
import { developers } from '../js/templates/team-array.js';

const teamModalOpenBtn = document.querySelector('.team-btn-open');
const teamModalCloseBtn = document.querySelector('.team-btn-close');
const teamModal = document.querySelector('.team-backdrop');
const teamList = document.querySelector('.team-list');

teamModalOpenBtn.addEventListener('click', onOpenClick);
teamModalCloseBtn.addEventListener('click', onCloseClick);
teamList.addEventListener('click', onDevClick);

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
  }
  //
  devSocClick.classList.add('active-devel');
}

function onOpenClick() {
  teamModal.classList.remove('is-hidden');
}
function onCloseClick() {
  teamModal.classList.add('is-hidden');
  returnHidden();
}
