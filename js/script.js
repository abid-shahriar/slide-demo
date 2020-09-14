// Params
let mainSliderSelector = ".main-slider",
  navSliderSelector = ".nav-slider",
  interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
  loop: false,
  mousewheelReleaseOnEdges: true,
  speed: 1000,
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
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
  speed: 1000,
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
const footer = document.querySelector(".footer");

window.addEventListener("wheel", (e) => {
  if (lastSlide.classList.contains("swiper-slide-next")) {
    footer.classList.remove("visible");
  }
  if (lastSlide.classList.contains("swiper-slide-active")) {
    footer.classList.add("visible");
  }
});

// if (lastSlide.classList.contains("swiper-slide-next")) {
//   footer.classList.add("visible");
// }
