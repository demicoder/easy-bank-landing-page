// DOM elements
const elements = {
  openMenu: document.querySelector('.open-menu'),
  closeMenu: document.querySelector('.close-menu')
};

// Functions
const showMenu = () => {
  openMenu.classList.add('hide');
  openMenu.classList.remove('show');

  closeMenu.classList.add('show');
  closeMenu.classList.remove('hide');
};

const hideMenu = () => {
  closeMenu.classList.remove('show');
  closeMenu.classList.add('hide');

  openMenu.classList.add('show');
  openMenu.classList.remove('hide');
};

// Delegation
elements.openMenu.addEventListener('click', showMenu);
elements.closeMenu.addEventListener('click', hideMenu);
