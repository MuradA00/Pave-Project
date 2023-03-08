const collapseBtn = document.querySelector('.benefits__collapse'),
      hiddenRow = document.querySelector('.benefits__hidden');

function checkHiddenBlockHeight() {
  const hiddenRowHeight = document.querySelector('.benefits__row').clientHeight;
  document.body.style.setProperty(`${hiddenRowHeight}px`, '--hiddenBlockHeight');
}

checkHiddenBlockHeight();

function collaspeHiddenBlock() {
  this.classList.toggle('collapse-btn-active');
  hiddenRow.classList.toggle('expand-hidden');
}

collapseBtn.addEventListener('click', collaspeHiddenBlock);
