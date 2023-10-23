import { createDevMarkup } from './templates/modal-team-markup';
import { developers } from '../js/templates/team-array.js';

const teamModalOpenBtn = document.querySelector('.team-btn-open');
const teamModalCloseBtn = document.querySelector('.team-btn-close');
const teamList = document.querySelector('.team-list');
const backdrop = document.querySelector('.team-backdrop');

teamModalOpenBtn.addEventListener('click', onOpenClick);
teamModalCloseBtn.addEventListener('click', onCloseClick);
teamList.addEventListener('click', onDevClick);
backdrop.addEventListener('click', onBackdropClick);

teamList.insertAdjacentHTML('beforeend', createDevMarkup(developers));
const devSocials = [...teamList.children];
console.log(devSocials);

// ! функції відкриття-закриття модалки і скидання стилів девів
function onOpenClick() {
  backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscKeyPress);
  document.body.style.overflow = 'hidden';
}

function onCloseClick() {
  backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.style.overflow = 'auto';

  returnHidden();
}

function returnHidden() {
  devSocials.forEach(dev => {
    dev.lastElementChild.classList.remove('active-devel');
    dev.firstElementChild.classList.remove('arrow-up');
  });
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

// ! інші функції

// function onDevClick(e) {
//   const devClick = e.target.closest('.team-item');
//   if (!devClick) {
//     return;
//   }
//   const devSocClick = devClick.querySelector('.team-soc-list');
// const moreIcon = devClick.querySelector('.more-icon');

// const currentActiveDevSoc = document.querySelector('.active-devel');
// if (currentActiveDevSoc) {
//   currentActiveDevSoc.classList.remove('active-devel');

//   devSocClick.classList.add('active-devel');
// }

// const currentMoreArrow = document.querySelector('.arrow-up');
// if (currentMoreArrow) {
//   currentMoreArrow.classList.remove('arrow-up');
//   moreIcon.classList.add('arrow-up');
// }

// moreIcon.classList.add('arrow-up');
//   devSocClick.classList.add('active-devel');
// }

function onDevClick(e) {
  const devClick = e.target.closest('.team-item');
  if (!devClick) {
    return;
  }

  const activeSoc = devClick.lastElementChild;
  const moreIcon = devClick.querySelector('.more-icon');
  const currentMoreArrow = document.querySelector('.arrow-up');
  const currentActiveDeveloper = document.querySelector('.active-devel');

  console.log(devClick.firstElementChild);
  if (currentActiveDeveloper) {
    currentActiveDeveloper.classList.remove('active-devel');
    // devClick.classList.add('active-devel');
  }

  moreIcon.classList.add('arrow-up');

  devClick.classList.add('active-devel');
  if (activeSoc.style.maxHeight) {
    activeSoc.style.maxHeight = null;
    devClick.firstElementChild.classList.remove('arrow-up');
  } else {
    activeSoc.style.maxHeight = activeSoc.scrollHeight + 'px';
    moreIcon.classList.add('arrow-up');
  }
}
