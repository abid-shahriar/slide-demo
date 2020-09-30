// variables
const footer = document.querySelector(".footer");
const main = document.querySelector(".main");
const header = document.querySelector(".header");
const upBtn = document.querySelector(".up-arrow");
const downBtn = document.querySelector(".down-arrow");
const mainSlides = document.querySelectorAll(".main-slider .swiper-slide");
const navSlides = document.querySelectorAll(".nav-slider .swiper-slide");

const bothFirstSlides = [mainSlides[0], navSlides[0]];
const bothBoforeLastSlides = [
  mainSlides[mainSlides.length - 2],
  navSlides[navSlides.length - 2],
];
const bothLastSlides = [
  mainSlides[mainSlides.length - 1],
  navSlides[navSlides.length - 1],
];

bothFirstSlides.forEach((firstSlide) => {
  firstSlide.addEventListener("wheel", (e) => {
    if (e.deltaY === -100) {
      header.classList.remove("hide");
    }
  });
});

header.addEventListener("wheel", (e) => {
  if (e.deltaY === 100) {
    header.classList.add("hide");
  }
});

window.addEventListener("wheel", (e) => {
  if (
    header.classList.contains("hide") &&
    !footer.classList.contains("visible")
  ) {
    upBtn.style.opacity = "1";
    downBtn.style.opacity = "1";
  } else {
    upBtn.style.opacity = "0";
    downBtn.style.opacity = "0";
  }
});

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

bothFirstSlides.forEach((slide) => {
  slide.addEventListener("touchstart", (e) => {
    firstTouchstartY = e.changedTouches[0].screenY;
  });

  slide.addEventListener("touchend", (e) => {
    firstTouchendY = e.changedTouches[0].screenY;
    firstHandleGesure();
  });
});

// first slide gesture End #############################

// last slide gesture start ***********************
let lastTouchstartY = 0;
let lastTouchendY = 0;

function lastHandleGesure() {
  if (lastTouchendY < lastTouchstartY) {
    footer.classList.add("visible");
  }
}

bothBoforeLastSlides.forEach((slide) => {
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

bothLastSlides.forEach((slide) => {
  slide.addEventListener("touchstart", (e) => {
    bothLastTouchstartY = e.changedTouches[0].screenY;
  });

  slide.addEventListener("touchend", (e) => {
    bothLastTouchendY = e.changedTouches[0].screenY;
    bothLastHandleGesure();
  });
});

// ---------------------------------------------------------

bothLastSlides.forEach((slide) => {
  slide.addEventListener("wheel", (e) => {
    if (e.deltaY === 100 && !footer.classList.contains("visible")) {
      footer.classList.add("visible");
    }
    if (e.deltaY === -100 && footer.classList.contains("visible")) {
      mainSlider.allowSlidePrev = false;
      navSlider.allowSlidePrev = false;
      footer.classList.remove("visible");

      setTimeout(() => {
        mainSlider.allowSlidePrev = true;
        navSlider.allowSlidePrev = true;
      }, 500);
    }
  });
});

// hide arrow when footer is visible
