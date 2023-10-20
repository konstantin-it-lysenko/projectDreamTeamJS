const burgerEl = document.querySelector('.header-burger');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.querySelector('.close-button');
const logoEl = document.getElementById('logo-link');
const navLinks = document.querySelectorAll('.mobile-menu-link');
let isMobileMenuOpen = false;

console.log(closeBtn);

burgerEl.addEventListener('click', openMobileMenu);

closeBtn.addEventListener('click', closeMobileMenu);

function openMobileMenu() {
  mobileMenu.style.display = 'block';
  burgerEl.style.display = 'none';
  logoEl.style.display = 'none';
  closeBtn.style.display = 'block';
  isMobileMenuOpen = true;

  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function closeMobileMenu() {
  mobileMenu.style.display = 'none';
  burgerEl.style.display = 'block';
  logoEl.style.display = 'block';
  closeBtn.style.display = 'none';
  isMobileMenuOpen = false;

  navLinks.forEach(link => {
    link.removeEventListener('click', closeMobileMenu);
  });
}
