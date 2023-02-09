var acc = document.getElementsByClassName("faq-row__visible");
const hiddenContent = document.querySelector('.faq-row__hidden')
var i;
const mobIcon = document.querySelectorAll('.mob-icon')

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("collapse");
    var panel = this.nextElementSibling;
    if (panel.style.height) {
      panel.style.height = null;
      panel.style.margin = '0px';
      panel.style.overflow = 'hidden'
    } else {
      panel.style.margin = '0px 24px 30px';
      panel.style.overflow = 'unset'
      panel.style.height = panel.scrollHeight + "px";
    }
  });
}
