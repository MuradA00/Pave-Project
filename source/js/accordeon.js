const acc = document.getElementsByClassName("faq-row__visible");
const icons = document.getElementsByClassName('faq-row__icon')
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("collapse");
    const panel = this.nextElementSibling;
    if (panel.style.display === 'grid'){
      panel.style.display = 'none';
    } else {
      panel.style.display = 'grid';
    }
  });
};
