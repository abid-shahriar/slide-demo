// ------------------------------------------

let navTouchstartY = 0;
let navTouchendY = 0;
let navSlideIndex;

function allNavSlideHandler(e) {
  if (navTouchendY < navTouchstartY) {
    if (navSlideIndex !== navSlides.length - 1) {
      navSlider.slideTo(navSlideIndex + 1);
    } else return;
  }
  if (navTouchendY > navTouchstartY) {
    if (navSlideIndex !== 0) {
      navSlider.slideTo(navSlideIndex - 1);
    } else return;
  }
}

navSlides.forEach((navSlide) => {
  navSlide.addEventListener("touchstart", (e) => {
    navSlideIndex = navSlider.realIndex;

    if (navSlideIndex !== navSlides.length - 1) {
      e.preventDefault();
    }
    navTouchstartY = e.changedTouches[0].screenY;
  });

  navSlide.addEventListener("touchend", (e) => {
    navTouchendY = e.changedTouches[0].screenY;
    allNavSlideHandler(e);
  });
});
