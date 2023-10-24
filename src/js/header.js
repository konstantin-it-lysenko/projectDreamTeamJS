import {
  burgerEl,
  closeBtn,
  openMobileMenu,
  closeMobileMenu,
} from './burger-menu.js';

const navItems = document.querySelectorAll('.header-nav-item');
let activeNavItemIndex = sessionStorage.getItem('activeNavItemIndex'); //активна сторінка

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
if (activeNavItemIndex === null) {
  activeNavItemIndex = 0; // Наприклад, встановіть активною першу сторінку.
}
// console.log(activeNavItemIndex);

if (activeNavItemIndex !== null) {
  navItems[activeNavItemIndex].classList.add('active');
}
// console.log(navItems[activeNavItemIndex]);

navItems.forEach(function (nav, index) {
  const navLink = nav.querySelector('.header-nav-link');
  // console.log(navLink);
  navLink.addEventListener('click', function (event) {
    navItems.forEach(function (navItem) {
      navItem.classList.remove('active');
    });

    nav.classList.add('active');

    sessionStorage.setItem('activeNavItemIndex', index);
  });
});
