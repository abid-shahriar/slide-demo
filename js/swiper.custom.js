// Params
let mainSliderSelector = ".main-slider",
  navSliderSelector = ".nav-slider",
  interleaveOffset = 1;

// Main Slider
let mainSliderOptions = {
  loop: false,
  touchReleaseOnEdges: true,
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
