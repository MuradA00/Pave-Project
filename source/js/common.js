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


document.querySelectorAll('.section-observe').forEach((section) => observer.observe(section))

if (document.querySelector('.header__nav-list--index')) {
  document.querySelector('.header__nav-list--index').addEventListener('click', function(e){
    if (e.target.classList.contains('header__nav-link')) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '');
      let headerHeight = document.querySelector('header').clientHeight;
      window.scrollTo({
        top: document.getElementById(id).offsetTop - headerHeight,
        behavior:"smooth"
      })
    }
  })
}



