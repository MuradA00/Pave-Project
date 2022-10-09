gsap.registerPlugin(ScrollTrigger);

const firstBlock = document.querySelector('._first-block')
const secondBlock = document.querySelector('._second-block')
const thirdBlock = document.getElementById('heading3'),
      imgSecond = document.querySelector('#img2'),
      imgThird = document.querySelector('#img3');

function setScrollText(){
  gsap.to('.steps__image', {
    scrollTrigger: {
      trigger: '.steps__name'
    },
    opacity: 1,
    start: '500s'
  })

  gsap.to('._first-block', {
    scrollTrigger: {
      trigger: '._first-block',
      toggleActions: 'play reverse play reverse',
      start: '0s',
      end: '+=1000s',
      onEnter() {
        firstBlock.classList.add('_active-block');
      },
      onLeave() {
        firstBlock.classList.remove('_active-block');
      },
      onEnterBack() {
        firstBlock.classList.add('_active-block');
      },
      onLeaveBack() {
        firstBlock.classList.remove('_active-block');
      }
    },
    opacity: 1,
  });

  gsap.to('._second-block', {
    scrollTrigger: {
      trigger: '._second-block',
      toggleActions: 'play reverse play reverse',
      start: '+=800s',
      end: '+=1200s',
      onEnter() {
        secondBlock.classList.add('_active-block');
      },
      onLeave() {
        secondBlock.classList.remove('_active-block');
      },
      onEnterBack() {
        secondBlock.classList.add('_active-block');
      },
      onLeaveBack() {
        secondBlock.classList.remove('_active-block');
      }
    },
    opacity: 1
  });

  gsap.to('#heading3', {
    scrollTrigger: {
      trigger: '#heading3',
      toggleActions: 'play reverse play reverse',
      start: '+=1500s',
      end: '+=3000s',
      onEnter() {
        thirdBlock.classList.add('_active-block');
      },
      onLeave() {
        thirdBlock.classList.remove('_active-block');
      },
      onEnterBack() {
        thirdBlock.classList.add('_active-block');
      },
      onLeaveBack() {
        thirdBlock.classList.remove('_active-block');
      }
    },
    opacity: 1,
    toggleClass: "_active-block"
  });

}

function setScrollImages() {

  gsap.to('#img1', {
    scrollTrigger: {
      trigger: '#img1',
      toggleActions: 'play reverse play reverse',
      start: '0s',
      end: '+=1200s',
    },
    opacity: 1,
  });

  gsap.to('#img2', {
    scrollTrigger: {
      trigger: '#img2',
      toggleActions: 'play reverse play reverse',
      start: '+=1200s',
      end: '+=2000s',
      onEnter() {
        imgSecond.classList.add('_active-img');
      },
      // onLeave() {
      //   imgSecond.classList.remove('_active-img');
      // },
      onEnterBack() {
        imgSecond.classList.add('_active-img');
      },
      onLeaveBack() {
        imgSecond.classList.remove('_active-img');
      }
    },
    opacity: 1,
  });

  gsap.to('#img3', {
    scrollTrigger: {
      trigger: '#img3',
      toggleActions: 'play reverse play reverse',
      start: '+=2000s',
      end: '+=3000s',
      onEnter() {
        imgThird.classList.add('_active-img');
      },
      onLeave() {
        imgThird.classList.remove('_active-img');
      },
      onEnterBack() {
        imgThird.classList.add('_active-img');
      },
      onLeaveBack() {
        imgThird.classList.remove('_active-img');
      }
    },
    opacity: 1,
  });

}

setScrollText();
setScrollImages();

let mobWidth = window.matchMedia('(min-width: 1050px)');

if (mobWidth.matches === true) {
  gsap.to('.steps', {
    scrollTrigger: {
      pin: '.steps',
      end: '+=3000s',
      markers: false,
      pinSpacing: true,
    },
  });
}

let headersHeight = document.querySelector('header').clientHeight + 'px'

const setHeight = () => {
  document.querySelector(".steps").style.minHeight = window.innerHeight + "px"
};

let deviceWidth = window.matchMedia("(max-width: 4000px)");
if (deviceWidth.matches) {
  window.addEventListener("resize", setHeight);
  setHeight();
}


const stepsInner = document.querySelector('.steps__inner'),
      stepsColumn = document.querySelector('.steps__column');

let stepsInnerHeight = stepsInner.clientHeight;

if (stepsInnerHeight > window.innerHeight) {
  stepsColumn.style.gridGap = '35px';
}
