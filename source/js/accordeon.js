const acc = document.getElementsByClassName("faq-row__item");
const icons = document.getElementsByClassName('faq-row__icon')
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("collapse");
  });
};

