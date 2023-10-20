const teamModalOpenBtn = document.querySelector('.team-btn-open');
const teamModalCloseBtn = document.querySelector('.team-btn-close');
const teamModal = document.querySelector('.team-backdrop');

teamModalOpenBtn.addEventListener('click', onOpenClick);
teamModalCloseBtn.addEventListener('click', onCloseClick);

function onOpenClick() {
  teamModal.classList.remove('is-hidden');
}
//
function onCloseClick() {
  teamModal.classList.add('is-hidden');
}
