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


let stepsSlider = new Swiper(".steps__slider", {
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 600,
  autoplay: {
    delay: 2000
  }
  // fadeEffect: { crossFade: true },
  // effect: 'fade'
});


window.onload = function(){
  const wrapper = document.getElementById('body'),
      layerTwo = document.querySelector('.home__image');

  wrapper.addEventListener('mousemove', (e) => {
    const pageX = e.clientX,
        pageY = e.clientY;

    layerTwo.style.transform = 'translateX(-' + pageX/250 + '%) translateY(-' + pageY/250 + '%)';
  });
}
