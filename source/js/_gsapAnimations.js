gsap.registerPlugin(ScrollTrigger);

const firstBlock = document.querySelector('._first-block')
const secondBlock = document.querySelector('._second-block')
const thirdBlock = document.getElementById('heading3')

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
      start: '+=500s',
      end: '+=1000s',
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
      start: '+=1000s',
      end: '+=2000s',
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
      end: '+=1000s',
    },
    opacity: 1,
  });

  gsap.to('#img2', {
    scrollTrigger: {
      trigger: '#img2',
      toggleActions: 'play reverse play reverse',
      start: '+=1200s',
      end: '+=1500s',
    },
    opacity: 1,
  });

  gsap.to('#img3', {
    scrollTrigger: {
      trigger: '#img3',
      toggleActions: 'play reverse play reverse',
      start: '+=1500s',
      end: '+=2000s',
    },
    opacity: 1,
  });

}

gsap.to('.steps', {
  scrollTrigger: {
    pin: '.steps',
    end: '+=2100s',
    markers: false,
    pinSpacing: true,
  },
});


setScrollText();
setScrollImages();


const setHeight = () => {
  document.querySelector(".steps").style.minHeight = window.innerHeight + "px"
};

let deviceWidth = window.matchMedia("(max-width: 4000px)");
if (deviceWidth.matches) {
  window.addEventListener("resize", setHeight);

  setHeight();
}
