import {
  burgerEl,
  closeBtn,
  openMobileMenu,
  closeMobileMenu,
} from './burger-menu.js';

import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
gsap.registerPlugin(Observer);

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
  activeNavItemIndex = 0;
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

const headerLogo = document.querySelector('.header-logo-icon');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(headerLogo);

function handleIntersection(items, observer) {
  items.forEach(item => {
    if (!item.isIntersecting) {
      return;
    }
    gsap.to(headerLogo, {
      duration: 2,
      opacity: 1,
      x: 0,
      rotationX: 360,
    });
  });
}
