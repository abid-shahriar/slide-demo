header.addEventListener("DOMMouseScroll", (e) => {
  if (e.detail >= 1) {
    header.classList.add("hide");
  }
});

window.addEventListener("DOMMouseScroll", (e) => {
  if (header.classList.contains("hide")) {
    upBtn.style.opacity = "1";
    downBtn.style.opacity = "1";
  } else {
    upBtn.style.opacity = "0";
    downBtn.style.opacity = "0";
  }
});

bothFirstSlides.forEach((firstSlide) => {
  firstSlide.addEventListener("DOMMouseScroll", (e) => {
    if (e.detail <= 1) {
      header.classList.remove("hide");
    }
  });
});

bothLastSlides.forEach((slide) => {
  slide.addEventListener("DOMMouseScroll", (e) => {
    if (e.detail >= 1 && !footer.classList.contains("visible")) {
      footer.classList.add("visible");
      mainSlider.mousewheel.disable();
      navSlider.mousewheel.disable();
    }
    if (e.detail <= 1 && footer.classList.contains("visible")) {
      footer.classList.remove("visible");

      setTimeout(() => {
        mainSlider.mousewheel.enable();
        navSlider.mousewheel.enable();
      }, 500);
    }
  });
});

window.addEventListener("DOMMouseScroll", (e) => {
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
