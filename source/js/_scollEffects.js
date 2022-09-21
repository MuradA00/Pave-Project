
var blocks = document.querySelectorAll('.steps__number')
window.addEventListener('scroll', checkBoxes);

const loginImg = document.querySelector('._login-img'),
      reviewImg = document.querySelector('._review-img'),
      payImg = document.querySelector('._pay-img'),
      desktopBp = window.matchMedia(('min-width: 1051px'));

let wasBlocked = false;

      function checkBoxes() {
        var triggerBottom = window.innerHeight / 6 * 4;
        blocks.forEach(function (block) {
          var blockTop = block.getBoundingClientRect().top;

          if (blockTop < triggerBottom) {
            blocks.forEach(item => item.classList.remove('_active'))
            block.classList.add('_active');
          }
          if (blockTop == triggerBottom) {
            block.classList.remove('_active');
          }
        });
        if (blocks[0].classList.contains('_active')) {
          loginImg.classList.add('_active-img');
          reviewImg.classList.remove('_active-img')

        }
        if (blocks[1].classList.contains('_active')) {
          loginImg.classList.remove('_active-img')
          reviewImg.classList.add('_active-img');
          payImg.classList.remove('_active-img')
        }
        if (blocks[2].classList.contains('_active')) {
          loginImg.classList.remove('_active-img')
          reviewImg.classList.remove('_active-img')
          payImg.classList.add('_active-img')

        }
      }

checkBoxes();

  window.addEventListener('scroll', function() {
  const steps = document.querySelector('.steps__inner')
  let screenPos = window.innerHeight;
  let advSectionPos = steps.getBoundingClientRect().top;
  if (advSectionPos < screenPos / 15 && !wasBlocked) {
    wasBlocked = true;
    body.classList.add('--body-locked')
    setTimeout(() => body.classList.remove('--body-locked'), 2000)
  }
  })
