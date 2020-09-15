// Params
let mainSliderSelector = ".main-slider",
  navSliderSelector = ".nav-slider",
  interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
  loop: false,
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
  mousewheelReleaseOnEdges: true,
  loopAdditionalSlides: 10,
  speed: 500,
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  direction: "horizontal",
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
const firstSlide = document.querySelector(".overley-1");
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

console.log(header.clientHeight);

window.addEventListener("scroll", (e) => {
  const headerHeight = header.clientHeight;

  if (window.pageYOffset > headerHeight / 2) {
    upBtn.style.opacity = "1";
    downBtn.style.opacity = "1";
  } else {
    upBtn.style.opacity = "0";
    downBtn.style.opacity = "0";
  }
});
