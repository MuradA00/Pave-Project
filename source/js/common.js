AOS.init();

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__nav');

burger.onclick = addClassForMenu;
function addClassForMenu() {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.classList.toggle('active')
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.header__nav-link').forEach((link) =>{

        if (link.getAttribute('href').replace('#', '') == entry.target.id) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      })
    }
  });
}, {
  threshold: 0.4
});

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



