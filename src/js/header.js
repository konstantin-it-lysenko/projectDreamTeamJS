import {
  burgerEl,
  closeBtn,
  openMobileMenu,
  closeMobileMenu,
} from './burger-menu.js';

burgerEl.addEventListener('click', openMobileMenu);
closeBtn.addEventListener('click', closeMobileMenu);

// Перевірка ширини вікна
function checkWindowWidth() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 768) {
    burgerEl.style.display = 'none';
  } else {
    burgerEl.style.display = 'block';
  }
}

checkWindowWidth();

window.addEventListener('resize', checkWindowWidth);
