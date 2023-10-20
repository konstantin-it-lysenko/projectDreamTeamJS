const burgerEl = document.querySelector('.header-burger');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.querySelector('.close-button');
const logoEl = document.getElementById('logo-link');
const navLinks = document.querySelectorAll('.mobile-menu-link');
const homeItem = document.querySelector('#home-item');
const favoritesItem = document.querySelector('#favorites-item');
let isMobileMenuOpen = false;

burgerEl.addEventListener('click', openMobileMenu);
closeBtn.addEventListener('click', closeMobileMenu);

// Функція відкриття мобільного меню
function openMobileMenu() {
  mobileMenu.style.display = 'block';
  burgerEl.style.display = 'none';
  logoEl.style.display = 'none';
  closeBtn.style.display = 'block';
  isMobileMenuOpen = true;
}

// Функція закриття мобільного меню
function closeMobileMenu() {
  mobileMenu.style.display = 'none';
  burgerEl.style.display = 'block';
  logoEl.style.display = 'block';
  closeBtn.style.display = 'none';
  isMobileMenuOpen = false;
}

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

// Слухач активної сторінки
homeItem.addEventListener('click', function () {
  if (!homeItem.classList.contains('active')) {
    homeItem.classList.add('active');
    favoritesItem.classList.remove('active');
  }
});

favoritesItem.addEventListener('click', function () {
  if (!favoritesItem.classList.contains('active')) {
    favoritesItem.classList.add('active');
    homeItem.classList.remove('active');
  }
});
