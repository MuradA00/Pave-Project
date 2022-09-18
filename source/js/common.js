AOS.init();
const burger = document.querySelector('.burger')
const mobMenu = document.querySelector('.m-menu')
const body = document.getElementById('body')

burger.addEventListener('click', () => {
  burger.classList.toggle('_active-burger')
  if (burger.classList.contains('_active-burger')) {
    mobMenu.classList.add('--active-menu')
    body.classList.add('--body-locked')
  } else {
    mobMenu.classList.remove('--active-menu')
    body.classList.remove('--body-locked')
  }
})

const menuMobLinks = document.querySelectorAll('.menu-nav__link');

if (menuMobLinks.length > 0) {
  menuMobLinks.forEach(function (menuMobLinks) {
    menuMobLinks.addEventListener("click", function (event) {
      mobMenu.classList.remove('--active-menu');
      body.classList.remove('--body-locked')
      burger.classList.remove('_active-burger')
    });
  });
}



