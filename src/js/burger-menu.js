export const burgerEl = document.querySelector('.header-burger');
export const mobileMenu = document.getElementById('mobile-menu');
export const closeBtn = document.querySelector('.close-button');
export const logoEl = document.getElementById('logo-link');
let isMobileMenuOpen = false;

// Функція відкриття мобільного меню
export function openMobileMenu() {
  mobileMenu.style.display = 'block';
  burgerEl.style.display = 'none';
  logoEl.style.display = 'none';
  closeBtn.style.display = 'block';
  isMobileMenuOpen = true;
}

// Функція закриття мобільного меню
export function closeMobileMenu() {
  mobileMenu.style.display = 'none';
  burgerEl.style.display = 'block';
  logoEl.style.display = 'block';
  closeBtn.style.display = 'none';
  isMobileMenuOpen = false;
}
