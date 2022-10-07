window.addEventListener('scroll', function() {
  let scrollPosition = window.pageYOffset;
  let homeImagePosition = homeImage.clientHeight;
  console.log(homeImagePosition);
  if (scrollPosition > homeImagePosition / 1.4) {
    homeImage.style.transform = 'translateY(0)'
  } else {
    homeImage.style.transform = 'translateY(' + scrollPosition * .5 + 'px)';
  }
});
