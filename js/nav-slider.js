// const navSlide1 = document.querySelector(".nav-slider .overley-1");
// const navSlide2 = document.querySelector(".nav-slider .overley-2");
// const navSlide3 = document.querySelector(".nav-slider .overley-3");
// const navSlide4 = document.querySelector(".nav-slider .overley-4");
// const navSlide5 = document.querySelector(".nav-slider .overley-5");

// // navslide-1
// let nav1TouchstartY = 0;
// let nav1TouchendY = 0;

// function nav1HandleGesure() {
//   if (nav1TouchendY < nav1TouchstartY) {
//     navSlider.slideTo(1);
//   }
//   if (nav1TouchendY > nav1TouchstartY) {
//     return;
//   }
// }

// navSlide1.addEventListener("touchstart", (e) => {
//   nav1TouchstartY = e.changedTouches[0].screenY;
// });

// navSlide1.addEventListener("touchend", (e) => {
//   nav1TouchendY = e.changedTouches[0].screenY;
//   nav1HandleGesure();
// });

// // navslide-2
// let nav2TouchstartY = 0;
// let nav2TouchendY = 0;

// function nav2HandleGesure() {
//   if (nav2TouchendY < nav2TouchstartY) {
//     navSlider.slideTo(2);
//   }
//   if (nav2TouchendY > nav2TouchstartY) {
//     navSlider.slideTo(0);
//   }
// }

// navSlide2.addEventListener("touchstart", (e) => {
//   nav2TouchstartY = e.changedTouches[0].screenY;
// });

// navSlide2.addEventListener("touchend", (e) => {
//   nav2TouchendY = e.changedTouches[0].screenY;
//   nav2HandleGesure();
// });

// // navslide-3
// let nav3TouchstartY = 0;
// let nav3TouchendY = 0;

// function nav3HandleGesure() {
//   if (nav3TouchendY < nav3TouchstartY) {
//     navSlider.slideTo(3);
//   }
//   if (nav3TouchendY > nav3TouchstartY) {
//     navSlider.slideTo(1);
//   }
// }

// navSlide3.addEventListener("touchstart", (e) => {
//   nav3TouchstartY = e.changedTouches[0].screenY;
// });

// navSlide3.addEventListener("touchend", (e) => {
//   nav3TouchendY = e.changedTouches[0].screenY;
//   nav3HandleGesure();
// });

// // navslide-4
// let nav4TouchstartY = 0;
// let nav4TouchendY = 0;

// function nav4HandleGesure() {
//   if (nav4TouchendY < nav4TouchstartY) {
//     navSlider.slideTo(4);
//   }
//   if (nav4TouchendY > nav4TouchstartY) {
//     navSlider.slideTo(2);
//   }
// }

// navSlide4.addEventListener("touchstart", (e) => {
//   nav4TouchstartY = e.changedTouches[0].screenY;
// });

// navSlide4.addEventListener("touchend", (e) => {
//   nav4TouchendY = e.changedTouches[0].screenY;
//   nav4HandleGesure();
// });

// // navslide-5
// let nav5TouchstartY = 0;
// let nav5TouchendY = 0;
// let navSlideIndex;

// function nav5HandleGesure() {
//   if (nav5TouchendY < nav5TouchstartY) {
//     return;
//   }
//   if (nav5TouchendY > nav5TouchstartY) {
//     navSlider.slideTo(3);
//   }
// }

// navSlide5.addEventListener("touchstart", (e) => {
//   //   navSlideIndex = navSlider.realIndex;
//   //   console.log(navSlideIndex);
//   nav5TouchstartY = e.changedTouches[0].screenY;
// });

// navSlide5.addEventListener("touchend", (e) => {
//   nav5TouchendY = e.changedTouches[0].screenY;
//   nav5HandleGesure();
// });

// ------------------------------------------
const allNavSlides = document.querySelectorAll(".nav-slider .swiper-slide");

let navTouchstartY = 0;
let navTouchendY = 0;
let navSlideIndex;

function allNavSlideHandler(e) {
  if (navTouchendY < navTouchstartY) {
    if (navSlideIndex !== 4) {
      //   e.preventDefault();
      navSlider.slideTo(navSlideIndex + 1);
    } else return;
  }
  if (navTouchendY > navTouchstartY) {
    if (navSlideIndex !== 0) {
      navSlider.slideTo(navSlideIndex - 1);
    } else return;
  }
}

allNavSlides.forEach((navSlide) => {
  navSlide.addEventListener("touchstart", (e) => {
    navSlideIndex = navSlider.realIndex;

    if (navSlideIndex !== 4) {
      e.preventDefault();
    }
    navTouchstartY = e.changedTouches[0].screenY;
  });

  navSlide.addEventListener("touchend", (e) => {
    navTouchendY = e.changedTouches[0].screenY;
    allNavSlideHandler(e);
  });
});
