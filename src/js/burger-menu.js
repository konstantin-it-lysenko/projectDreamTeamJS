import anime from 'animejs';

export const burgerEl = document.querySelector('.header-burger');
export const mobileMenu = document.getElementById('mobile-menu');
export const closeBtn = document.querySelector('.close-button');
export const logoEl = document.getElementById('logo-link');

let isMobileMenuOpen = false;

// Функція відкриття мобільного меню
export function openMobileMenu() {
  if (!isMobileMenuOpen) {
    mobileMenu.style.display = 'block';
    document.body.classList.add('no-scroll');
    // анімація появи мобільного меню
    anime({
      targets: mobileMenu,
      translateX: ['100%', '0%'],
      duration: 300,
      easing: 'linear',
      begin: () => {
        mobileMenu.style.transform = 'translateX(100%)';
      },
      complete: () => {
        isMobileMenuOpen = true;
      },
    });
    burgerEl.style.display = 'none';
    logoEl.style.display = 'none';
    closeBtn.style.display = 'block';
  }
}

// Функція закриття мобільного меню
export function closeMobileMenu() {
  if (isMobileMenuOpen) {
    document.body.classList.remove('no-scroll');
    // анімація закриття мобільного меню
    anime({
      targets: mobileMenu,
      translateX: '100%',
      duration: 300,
      easing: 'linear',
      begin: () => {
        mobileMenu.style.transform = 'translateX(0%)';
      },
      complete: () => {
        isMobileMenuOpen = false;
        mobileMenu.style.display = 'none';
      },
    });
    burgerEl.style.display = 'block';
    logoEl.style.display = 'block';
    closeBtn.style.display = 'none';
  }
}
