// DOM elements
document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    hamburgerMenu: document.querySelector('.header__mobile-menu'),
    mainHeader: document.querySelector('.header'),
    nav: document.querySelector('.header__nav')
  };

  elements.hamburgerMenu.addEventListener('click', () => {
    elements.hamburgerMenu.classList.toggle('header__mobile-menu--active');
    elements.nav.classList.toggle('header__nav--active');
  });
});
