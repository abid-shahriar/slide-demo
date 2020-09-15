let dirc;

if (window.innerWidth > 667) {
  dirc = "horizontal";
} else {
  dirc = "vertical";
}

console.log(dirc);

// Params
let mainSliderSelector = ".main-slider",
  navSliderSelector = ".nav-slider",
  interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
  loop: false,
  touchReleaseOnEdges: true,
  mousewheelReleaseOnEdges: true,
  speed: 500,
  mousewheel: {
    releaseOnEdges: true,
  },
  direction: "vertical",
  loopAdditionalSlides: 10,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".down-arrow",
    prevEl: ".up-arrow",
  },
  on: {
    init: function () {
      this.autoplay.stop();
    },
    imagesReady: function () {
      this.el.classList.remove("loading");
    },
    slideChangeTransitionEnd: function () {
      let swiper = this,
        captions = swiper.el.querySelectorAll(".caption");
      for (let i = 0; i < captions.length; ++i) {
        captions[i].classList.remove("show");
      }
      // swiper.slides[swiper.activeIndex]
      //   .querySelector(".caption")
      //   .classList.add("show");
    },

    touchStart: function () {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
  },
};
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
let navSliderOptions = {
  loop: false,
  touchReleaseOnEdges: true,
  edgeSwipeDetection: true,
  mousewheelReleaseOnEdges: true,
  loopAdditionalSlides: 10,
  speed: 500,
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  direction: dirc,
  mousewheel: {
    releaseOnEdges: true,
  },
  on: {
    imagesReady: function () {
      this.el.classList.remove("loading");
    },
    click: function () {
      mainSlider.autoplay.stop();
    },
  },
};
let navSlider = new Swiper(navSliderSelector, navSliderOptions);

// Matching sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;

// footer
const lastSlide = document.querySelector(".overley-5");
const bothLastSlide = document.querySelectorAll(".overley-5");
const boforeLastSlide = document.querySelector(".overley-4");
const bothBoforeLastSlide = document.querySelectorAll(".overley-4");
const firstSlide = document.querySelector(".overley-1");
const bothFirstSlide = document.querySelectorAll(".overley-1");
const footer = document.querySelector(".footer");
const main = document.querySelector(".main");
const header = document.querySelector(".header");
const upBtn = document.querySelector(".up-arrow");
const downBtn = document.querySelector(".down-arrow");

window.addEventListener("wheel", (e) => {
  if (lastSlide.classList.contains("swiper-slide-next")) {
    footer.classList.remove("visible");
  }
  if (lastSlide.classList.contains("swiper-slide-active")) {
    footer.classList.add("visible");
  }
});

window.addEventListener("wheel", (e) => {
  if (e.deltaY === 100) {
    header.classList.add("hide");
  }

  if (
    (e.deltaY === -100) &
    firstSlide.classList.contains("swiper-slide-active")
  ) {
    header.classList.remove("hide");
  }
});

window.addEventListener("wheel", (e) => {
  if (header.classList.contains("hide")) {
    upBtn.style.opacity = "1";
    downBtn.style.opacity = "1";
  } else {
    upBtn.style.opacity = "0";
    downBtn.style.opacity = "0";
  }
});

// header.addEventListener("touchmove", (e) => {
//   header.classList.add("hide");
//   console.log(e);
// });

header.addEventListener("swiped", function (e) {
  if (e.detail.dir === "up") {
    header.classList.add("hide");
  }
});

// first slide gesture start ***********************
let firstTouchstartY = 0;
let firstTouchendY = 0;

function firstHandleGesure() {
  if (firstTouchendY > firstTouchstartY) {
    header.classList.remove("hide");
  }
}

bothFirstSlide.forEach((slide) => {
  slide.addEventListener("touchstart", (e) => {
    firstTouchstartY = e.changedTouches[0].screenY;
  });

  slide.addEventListener("touchend", (e) => {
    firstTouchendY = e.changedTouches[0].screenY;
    firstHandleGesure();
  });
});

// firstSlide.addEventListener("touchstart", (e) => {
//   firstTouchstartY = e.changedTouches[0].screenY;
// });

// firstSlide.addEventListener("touchend", (e) => {
//   firstTouchendY = e.changedTouches[0].screenY;
//   firstHandleGesure();
// });
// first slide gesture End #############################

// last slide gesture start ***********************
let lastTouchstartY = 0;
let lastTouchendY = 0;

function lastHandleGesure() {
  if (lastTouchendY < lastTouchstartY) {
    footer.classList.add("visible");
  }
  // if (lastTouchendY > lastTouchstartY) {
  //   footer.classList.remove("visible");
  // }
}

bothBoforeLastSlide.forEach((slide) => {
  slide.addEventListener("touchstart", (e) => {
    lastTouchstartY = e.changedTouches[0].screenY;
  });

  slide.addEventListener("touchend", (e) => {
    lastTouchendY = e.changedTouches[0].screenY;
    lastHandleGesure();
  });
});

// last slide gesture End #############################

let bothLastTouchstartY = 0;
let bothLastTouchendY = 0;

function bothLastHandleGesure() {
  if (bothLastTouchendY > bothLastTouchstartY) {
    footer.classList.remove("visible");
  }
}

bothLastSlide.forEach((slide) => {
  slide.addEventListener("touchstart", (e) => {
    bothLastTouchstartY = e.changedTouches[0].screenY;
  });

  slide.addEventListener("touchend", (e) => {
    bothLastTouchendY = e.changedTouches[0].screenY;
    bothLastHandleGesure();
  });
});
