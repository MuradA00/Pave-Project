var blocks = document.querySelectorAll('.steps__slider-item');
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
  var triggerBottom = window.innerHeight / 6 * 3;
  blocks.forEach(function (block) {
    var blockTop = block.getBoundingClientRect().top;

    if (blockTop < triggerBottom) {
      blocks.forEach(item => item.classList.remove('_activeStep'))
      block.classList.add('_activeStep');
    }
    if (blockTop == triggerBottom) {
      block.classList.remove('_activeStep');
    }
  });
}
