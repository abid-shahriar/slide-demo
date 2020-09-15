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
const navSlide1 = document.querySelector(".nav-slider .overley-1");
const navSlide2 = document.querySelector(".nav-slider .overley-2");
const navSlide3 = document.querySelector(".nav-slider .overley-3");
const navSlide4 = document.querySelector(".nav-slider .overley-4");
const navSlide5 = document.querySelector(".nav-slider .overley-5");

// navslide-1
let nav1TouchstartY = 0;
let nav1TouchendY = 0;

function nav1HandleGesure() {
  if (nav1TouchendY < nav1TouchstartY) {
    navSlider.slideTo(1);
  }
  if (nav1TouchendY > nav1TouchstartY) {
    return;
  }
}

navSlide1.addEventListener("touchstart", (e) => {
  nav1TouchstartY = e.changedTouches[0].screenY;
});

navSlide1.addEventListener("touchend", (e) => {
  nav1TouchendY = e.changedTouches[0].screenY;
  nav1HandleGesure();
});

// navslide-2
let nav2TouchstartY = 0;
let nav2TouchendY = 0;

function nav2HandleGesure() {
  if (nav2TouchendY < nav2TouchstartY) {
    navSlider.slideTo(2);
  }
  if (nav2TouchendY > nav2TouchstartY) {
    navSlider.slideTo(0);
  }
}

navSlide2.addEventListener("touchstart", (e) => {
  nav2TouchstartY = e.changedTouches[0].screenY;
});

navSlide2.addEventListener("touchend", (e) => {
  nav2TouchendY = e.changedTouches[0].screenY;
  nav2HandleGesure();
});

// navslide-3
let nav3TouchstartY = 0;
let nav3TouchendY = 0;

function nav3HandleGesure() {
  if (nav3TouchendY < nav3TouchstartY) {
    navSlider.slideTo(3);
  }
  if (nav3TouchendY > nav3TouchstartY) {
    navSlider.slideTo(1);
  }
}

navSlide3.addEventListener("touchstart", (e) => {
  nav3TouchstartY = e.changedTouches[0].screenY;
});

navSlide3.addEventListener("touchend", (e) => {
  nav3TouchendY = e.changedTouches[0].screenY;
  nav3HandleGesure();
});

// navslide-4
let nav4TouchstartY = 0;
let nav4TouchendY = 0;

function nav4HandleGesure() {
  if (nav4TouchendY < nav4TouchstartY) {
    navSlider.slideTo(4);
  }
  if (nav4TouchendY > nav4TouchstartY) {
    navSlider.slideTo(2);
  }
}

navSlide4.addEventListener("touchstart", (e) => {
  nav4TouchstartY = e.changedTouches[0].screenY;
});

navSlide4.addEventListener("touchend", (e) => {
  nav4TouchendY = e.changedTouches[0].screenY;
  nav4HandleGesure();
});

// navslide-5
let nav5TouchstartY = 0;
let nav5TouchendY = 0;

function nav5HandleGesure() {
  if (nav5TouchendY < nav5TouchstartY) {
    return;
  }
  if (nav5TouchendY > nav5TouchstartY) {
    navSlider.slideTo(3);
  }
}

navSlide5.addEventListener("touchstart", (e) => {
  nav5TouchstartY = e.changedTouches[0].screenY;
});

navSlide5.addEventListener("touchend", (e) => {
  nav5TouchendY = e.changedTouches[0].screenY;
  nav5HandleGesure();
});
