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

// Loading....{XАЛЕПА}
// document.addEventListener('DOMContentLoaded', () => {
//   const contentEl = document.querySelector('.content');
//   const navLinks = document.querySelectorAll('.header-nav-link');
//   const loadingOverlay = document.querySelector('.loading-overlay');

//   console.log(contentEl.classList.contains('header-fade-out'));

//   function showLoadingOverlay() {
//     loadingOverlay.style.opacity = '1';
//   }

//   function hideLoadingOverlay() {
//     loadingOverlay.style.opacity = '0';
//   }

//   function loadScripts(url) {
//     if (url.includes('index')) {
//     }
//   }

//   function loadPage(url) {
//     showLoadingOverlay();

//     fetch(url)
//       .then(response => response.text())
//       .then(html => {
//         const parser = new DOMParser();
//         const docActive = parser.parseFromString(html, 'text/html');
//         const newContent = docActive.querySelector('.content').innerHTML;

//         contentEl.classList.add('header-fade-out');

//         contentEl.innerHTML = newContent;
//         document.title = docActive.title;

//         setTimeout(() => {
//           contentEl.classList.remove('header-fade-out');

//           history.pushState({}, '', url);

//           hideLoadingOverlay();
//         }, 500);
//       })
//       .then(() => {
//         loadScripts(url);
//       });
//   }

//   navLinks.forEach(navLink => {
//     navLink.addEventListener('click', event => {
//       event.preventDefault();

//       const url = event.currentTarget.getAttribute('href');

//       loadPage(url);
//     });
//   });

//   loadPage(window.location.pathname);

//   window.addEventListener('popstate', () => {
//     loadPage(window.location.pathname);
//   });
// });
