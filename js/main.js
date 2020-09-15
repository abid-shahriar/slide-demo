const _0x34da = [
  "querySelectorAll",
  ".nav-slider",
  ".up-arrow",
  ".swiper-pagination",
  "style",
  "length",
  "fraction",
  ".main-slider",
  ".caption",
  "controller",
  "stop",
  ".down-arrow",
  "transition",
  "autoplay",
  "control",
  "loading",
  "remove",
  "slides",
  "vertical",
  "classList",
];
(function (_0x5e23a6, _0x34dafa) {
  const _0x3ea251 = function (_0xd9b2a5) {
    while (--_0xd9b2a5) {
      _0x5e23a6["push"](_0x5e23a6["shift"]());
    }
  };
  _0x3ea251(++_0x34dafa);
})(_0x34da, 0x1ef);
const _0x3ea2 = function (_0x5e23a6, _0x34dafa) {
  _0x5e23a6 = _0x5e23a6 - 0x0;
  let _0x3ea251 = _0x34da[_0x5e23a6];
  return _0x3ea251;
};
let dirc;
window["innerWidth"] > 0x29b ? (dirc = "horizontal") : (dirc = "horizontal");
let mainSliderSelector = _0x3ea2("0xc"),
  navSliderSelector = _0x3ea2("0x6"),
  interleaveOffset = 0.5,
  mainSliderOptions = {
    loop: ![],
    touchReleaseOnEdges: !![],
    mousewheelReleaseOnEdges: !![],
    speed: 0x1f4,
    mousewheel: { releaseOnEdges: !![] },
    direction: _0x3ea2("0x3"),
    loopAdditionalSlides: 0xa,
    watchSlidesProgress: !![],
    pagination: { el: _0x3ea2("0x8"), type: _0x3ea2("0xb") },
    navigation: { nextEl: _0x3ea2("0x10"), prevEl: _0x3ea2("0x7") },
    on: {
      init: function () {
        this[_0x3ea2("0x12")]["stop"]();
      },
      imagesReady: function () {
        this["el"][_0x3ea2("0x4")][_0x3ea2("0x1")]("loading");
      },
      slideChangeTransitionEnd: function () {
        let _0xd9b2a5 = this,
          _0x572c9e = _0xd9b2a5["el"][_0x3ea2("0x5")](_0x3ea2("0xd"));
        for (
          let _0x3dbf34 = 0x0;
          _0x3dbf34 < _0x572c9e[_0x3ea2("0xa")];
          ++_0x3dbf34
        ) {
          _0x572c9e[_0x3dbf34][_0x3ea2("0x4")][_0x3ea2("0x1")]("show");
        }
      },
      touchStart: function () {
        let _0x16c1ef = this;
        for (
          let _0x127227 = 0x0;
          _0x127227 < _0x16c1ef[_0x3ea2("0x2")]["length"];
          _0x127227++
        ) {
          _0x16c1ef[_0x3ea2("0x2")][_0x127227][_0x3ea2("0x9")][
            _0x3ea2("0x11")
          ] = "";
        }
      },
    },
  },
  mainSlider = new Swiper(mainSliderSelector, mainSliderOptions),
  navSliderOptions = {
    loop: ![],
    touchReleaseOnEdges: !![],
    edgeSwipeDetection: !![],
    mousewheelReleaseOnEdges: !![],
    loopAdditionalSlides: 0xa,
    speed: 0x1f4,
    spaceBetween: 0x0,
    slidesPerView: 0x1,
    centeredSlides: !![],
    touchRatio: 0.2,
    slideToClickedSlide: !![],
    direction: dirc,
    mousewheel: { releaseOnEdges: !![] },
    on: {
      imagesReady: function () {
        this["el"][_0x3ea2("0x4")]["remove"](_0x3ea2("0x0"));
      },
      click: function () {
        mainSlider["autoplay"][_0x3ea2("0xf")]();
      },
    },
  },
  navSlider = new Swiper(navSliderSelector, navSliderOptions);
(mainSlider[_0x3ea2("0xe")][_0x3ea2("0x13")] = navSlider),
  (navSlider[_0x3ea2("0xe")][_0x3ea2("0x13")] = mainSlider);

const _0x221e = [
  ".footer",
  ".overley-1",
  "swiper-slide-active",
  "visible",
  ".overley-5",
  "querySelector",
  "style",
  "opacity",
  "screenY",
  "deltaY",
  "querySelectorAll",
  "contains",
  "swiped",
  "add",
  "forEach",
  "dir",
  "classList",
  "hide",
  "remove",
  "detail",
  "wheel",
  "changedTouches",
  ".overley-4",
  "addEventListener",
  "touchstart",
  "touchend",
  ".up-arrow",
];
(function (_0xfab7c9, _0x221e58) {
  const _0x2ed2bb = function (_0x2d5833) {
    while (--_0x2d5833) {
      _0xfab7c9["push"](_0xfab7c9["shift"]());
    }
  };
  _0x2ed2bb(++_0x221e58);
})(_0x221e, 0xa5);
const _0x2ed2 = function (_0xfab7c9, _0x221e58) {
  _0xfab7c9 = _0xfab7c9 - 0x0;
  let _0x2ed2bb = _0x221e[_0xfab7c9];
  return _0x2ed2bb;
};
const lastSlide = document[_0x2ed2("0x2")](_0x2ed2("0x1")),
  bothLastSlide = document[_0x2ed2("0x7")](_0x2ed2("0x1")),
  boforeLastSlide = document[_0x2ed2("0x2")](_0x2ed2("0x13")),
  bothBoforeLastSlide = document[_0x2ed2("0x7")](".overley-4"),
  firstSlide = document[_0x2ed2("0x2")](_0x2ed2("0x19")),
  bothFirstSlide = document[_0x2ed2("0x7")](".overley-1"),
  footer = document[_0x2ed2("0x2")](_0x2ed2("0x18")),
  main = document["querySelector"](".main"),
  header = document[_0x2ed2("0x2")](".header"),
  upBtn = document[_0x2ed2("0x2")](_0x2ed2("0x17")),
  downBtn = document[_0x2ed2("0x2")](".down-arrow");
window[_0x2ed2("0x14")]("wheel", (_0x2d5833) => {
  lastSlide[_0x2ed2("0xd")][_0x2ed2("0x8")]("swiper-slide-next") &&
    footer[_0x2ed2("0xd")][_0x2ed2("0xf")](_0x2ed2("0x0")),
    lastSlide[_0x2ed2("0xd")][_0x2ed2("0x8")](_0x2ed2("0x1a")) &&
      footer[_0x2ed2("0xd")]["add"]("visible");
}),
  window[_0x2ed2("0x14")]("wheel", (_0x5afb69) => {
    _0x5afb69["deltaY"] === 0x64 &&
      header["classList"][_0x2ed2("0xa")](_0x2ed2("0xe")),
      (_0x5afb69[_0x2ed2("0x6")] === -0x64) &
        firstSlide["classList"][_0x2ed2("0x8")](_0x2ed2("0x1a")) &&
        header["classList"][_0x2ed2("0xf")](_0x2ed2("0xe"));
  }),
  window["addEventListener"](_0x2ed2("0x11"), (_0x4df567) => {
    header[_0x2ed2("0xd")]["contains"](_0x2ed2("0xe"))
      ? ((upBtn["style"]["opacity"] = "1"),
        (downBtn["style"][_0x2ed2("0x4")] = "1"))
      : ((upBtn[_0x2ed2("0x3")][_0x2ed2("0x4")] = "0"),
        (downBtn[_0x2ed2("0x3")]["opacity"] = "0"));
  }),
  header[_0x2ed2("0x14")](_0x2ed2("0x9"), function (_0x3e6f72) {
    _0x3e6f72[_0x2ed2("0x10")][_0x2ed2("0xc")] === "up" &&
      header[_0x2ed2("0xd")][_0x2ed2("0xa")](_0x2ed2("0xe"));
  });
let firstTouchstartY = 0x0,
  firstTouchendY = 0x0;
function firstHandleGesure() {
  firstTouchendY > firstTouchstartY &&
    header[_0x2ed2("0xd")][_0x2ed2("0xf")]("hide");
}
bothFirstSlide["forEach"]((_0x5c335a) => {
  _0x5c335a[_0x2ed2("0x14")](_0x2ed2("0x15"), (_0x3e5568) => {
    firstTouchstartY = _0x3e5568[_0x2ed2("0x12")][0x0][_0x2ed2("0x5")];
  }),
    _0x5c335a["addEventListener"]("touchend", (_0x1be2da) => {
      (firstTouchendY = _0x1be2da["changedTouches"][0x0][_0x2ed2("0x5")]),
        firstHandleGesure();
    });
});
let lastTouchstartY = 0x0,
  lastTouchendY = 0x0;
function lastHandleGesure() {
  lastTouchendY < lastTouchstartY &&
    footer[_0x2ed2("0xd")][_0x2ed2("0xa")]("visible");
}
bothBoforeLastSlide["forEach"]((_0x4ea2a9) => {
  _0x4ea2a9[_0x2ed2("0x14")](_0x2ed2("0x15"), (_0x4e5ac3) => {
    lastTouchstartY = _0x4e5ac3["changedTouches"][0x0][_0x2ed2("0x5")];
  }),
    _0x4ea2a9[_0x2ed2("0x14")](_0x2ed2("0x16"), (_0x1358c3) => {
      (lastTouchendY = _0x1358c3[_0x2ed2("0x12")][0x0][_0x2ed2("0x5")]),
        lastHandleGesure();
    });
});
let bothLastTouchstartY = 0x0,
  bothLastTouchendY = 0x0;
function bothLastHandleGesure() {
  bothLastTouchendY > bothLastTouchstartY &&
    footer[_0x2ed2("0xd")][_0x2ed2("0xf")](_0x2ed2("0x0"));
}
bothLastSlide[_0x2ed2("0xb")]((_0x5f8352) => {
  _0x5f8352[_0x2ed2("0x14")]("touchstart", (_0x57e287) => {
    bothLastTouchstartY = _0x57e287[_0x2ed2("0x12")][0x0]["screenY"];
  }),
    _0x5f8352["addEventListener"](_0x2ed2("0x16"), (_0x5edccb) => {
      (bothLastTouchendY = _0x5edccb["changedTouches"][0x0][_0x2ed2("0x5")]),
        bothLastHandleGesure();
    });
});

const _0x3641 = [
  "slideTo",
  ".nav-slider\x20.swiper-slide",
  "preventDefault",
  "addEventListener",
  "touchend",
  "realIndex",
  "screenY",
  "touchstart",
  "changedTouches",
  "forEach",
];
(function (_0x4e0b9c, _0x364147) {
  const _0x5e9014 = function (_0x22625e) {
    while (--_0x22625e) {
      _0x4e0b9c["push"](_0x4e0b9c["shift"]());
    }
  };
  _0x5e9014(++_0x364147);
})(_0x3641, 0x1ac);
const _0x5e90 = function (_0x4e0b9c, _0x364147) {
  _0x4e0b9c = _0x4e0b9c - 0x0;
  let _0x5e9014 = _0x3641[_0x4e0b9c];
  return _0x5e9014;
};
const allNavSlides = document["querySelectorAll"](_0x5e90("0x3"));
let navTouchstartY = 0x0,
  navTouchendY = 0x0,
  navSlideIndex;
function allNavSlideHandler(_0x22625e) {
  if (navTouchendY < navTouchstartY) {
    if (navSlideIndex !== 0x4) navSlider["slideTo"](navSlideIndex + 0x1);
    else return;
  }
  if (navTouchendY > navTouchstartY) {
    if (navSlideIndex !== 0x0) navSlider[_0x5e90("0x2")](navSlideIndex - 0x1);
    else return;
  }
}
allNavSlides[_0x5e90("0x1")]((_0x3724bd) => {
  _0x3724bd[_0x5e90("0x5")](_0x5e90("0x9"), (_0x28a74f) => {
    (navSlideIndex = navSlider[_0x5e90("0x7")]),
      navSlideIndex !== 0x4 && _0x28a74f[_0x5e90("0x4")](),
      (navTouchstartY = _0x28a74f["changedTouches"][0x0][_0x5e90("0x8")]);
  }),
    _0x3724bd["addEventListener"](_0x5e90("0x6"), (_0x12f9c3) => {
      (navTouchendY = _0x12f9c3[_0x5e90("0x0")][0x0][_0x5e90("0x8")]),
        allNavSlideHandler(_0x12f9c3);
    });
});
