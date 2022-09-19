const acc = document.getElementsByClassName("faq-row__item");
const icons = document.getElementsByClassName('faq-row__icon')
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("collapse");
    // const panel = this.nextElementSibling;
    // if (panel.style.display === 'grid'){
    //   panel.classList.add('_ADADASD')
    // } else {
    //   panel.classList.remove('_ADADASD')
    // }
  });
};

