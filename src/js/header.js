import {
  burgerEl,
  closeBtn,
  openMobileMenu,
  closeMobileMenu,
} from './burger-menu.js';

const navItems = document.querySelectorAll('.header-nav-item');
const activeNavItemIndex = localStorage.getItem('activeNavItemIndex'); //активна сторінка

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

// перевірка яка сторінка активна
if (activeNavItemIndex !== null) {
  navItems[activeNavItemIndex].classList.add('active');
}

navItems.forEach(function (nav, index) {
  const navLink = nav.querySelector('.header-nav-link');

  navLink.addEventListener('click', function (event) {
    navItems.forEach(function (navItem) {
      navItem.classList.remove('active');
    });

    nav.classList.add('active');

    localStorage.setItem('activeNavItemIndex', index);
  });
});
