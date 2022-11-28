// const { init } = require("browser-sync");

AOS.init({
  once: true
});
const burger = document.querySelector('.burger')
const mobMenu = document.querySelector('.m-menu')
const body = document.getElementById('body'),
      homeImage = document.querySelector('.home__image-wrapper');

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

window.onload = function(){
  const wrapper = document.getElementById('body'),
      layerTwo = document.querySelector('.home__image');

  wrapper.addEventListener('mousemove', (e) => {
    const pageX = e.clientX,
          pageY = e.clientY;

    layerTwo.style.transform = 'translateX(-' + pageX/250 + '%) translateY(-' + pageY/250 + '%)';
  });
}


window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  header.classList.toggle('fixed', window.scrollY > 0);
  let headerHeight = header.clientHeight;
  const homeSection = document.querySelector('.home')
  function homeSpacing() {
    homeSection.style = `margin-top: ${headerHeight}px`;
  }
  if (header.classList.contains('fixed')) {
    homeSpacing();
  } else {
    homeSection.style = 'margin-top: 0px';
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  let headersHeight = header.clientHeight;
    mobMenu.style.marginTop = `${headersHeight}px`
})

