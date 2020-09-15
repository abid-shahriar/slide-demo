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

// ---------------------------------------------------------
