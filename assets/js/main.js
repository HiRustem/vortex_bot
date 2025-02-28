!(function () {
  AOS.init({
    disable: !1,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: !1,
    disableMutationObserver: !1,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 50,
    duration: 600,
    easing: "cubic-bezier(0.77, 0, 0.175, 1)",
    once: !0,
    mirror: !1,
    anchorPlacement: "top-bottom",
  });
  var e = document.querySelectorAll(".typed-animation");
  0 < e.length &&
    e.forEach((e) => {
      new Typed(e, {
        strings: JSON.parse(e.dataset.strings),
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 3e3,
        startDelay: 1e3,
        fadeOut: !0,
        loop: !0,
      });
    }),
    new VenoBox({ selector: ".video-play-btn" });
  const t = document.querySelector(".pricing-table");
  if (t) {
    e = document.querySelectorAll(".switch-wrapper input");
    const n = t.querySelectorAll(".price"),
      a = "d-none";
    e.forEach((e) => {
      e.addEventListener("input", function () {
        n.forEach((e) => {
          e.classList.add(a);
        }),
          t.querySelectorAll(".price." + e.id).forEach((e) => {
            e.classList.remove(a);
          });
      });
    });
  }
  new Swiper(".review-carousel", {
    loop: !1,
    freemode: !0,
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1e3,
    autoplay: { delay: 3e3, disableOnInteraction: !0, pauseOnMouseEnter: true },
    pagination: {
      el: ".review-carousel-container .swiper-pagination",
      type: "bullets",
      clickable: !0,
    },
    breakpoints: {
      1: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    },
  }),
    new Swiper(".review-rolling-carousel", {
      loop: !0,
      freemode: !0,
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: !1,
      allowTouchMove: !0,
      speed: 1e4,
      autoplay: { delay: 1, disableOnInteraction: !1, pauseOnMouseEnter: true },
      breakpoints: {
        1: { slidesPerView: 1.1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 2.5 },
        1200: { slidesPerView: 3 },
        1400: { slidesPerView: 3.5 },
        1600: { slidesPerView: 4 },
        1900: { slidesPerView: 4.5 },
      },
    }),
    new Swiper(".review-rolling-carousel-reversed", {
      loop: !0,
      freemode: !0,
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: !1,
      allowTouchMove: !0,
      speed: 8e3,
      autoplay: {
        delay: 1,
        reverseDirection: !0,
        disableOnInteraction: !1,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        1: { slidesPerView: 1.1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 2.5 },
        1200: { slidesPerView: 3 },
        1400: { slidesPerView: 3.5 },
        1600: { slidesPerView: 4 },
        1900: { slidesPerView: 4.5 },
      },
    });
  const o = document.querySelector("#contact-form");
  if (o) {
    const i = o.querySelector(".status");
    o.addEventListener("submit", function (e) {
      e.preventDefault();
      e = new FormData(o);
      let t = new XMLHttpRequest();
      t.open("POST", o.action),
        (t.onload = function () {
          200 === t.status
            ? (i.classList.remove("d-none"),
              i.classList.remove("alert-danger"),
              i.classList.add("alert-success"),
              (i.textContent = t.responseText),
              o.reset())
            : (i.classList.remove("d-none"),
              i.classList.remove("alert-success"),
              i.classList.add("alert-danger"),
              "" !== t.responseText
                ? (i.textContent = t.responseText)
                : (i.textContent =
                    "Oops! An error occurred and your message could not be sent.")),
            setTimeout(() => {
              i.classList.add("d-none");
            }, 6e3);
        }),
        t.send(e);
    });
  }
  var e = document.querySelector(".navbar"),
    s = document.querySelector("html");
  if (e) {
    new Headroom(e, {
      offset: { up: 100, down: 50 },
      tolerance: { up: 5, down: 0 },
      classes: {
        initial: "headroom",
        pinned: "headroom--pinned",
        unpinned: "headroom--unpinned",
        top: "headroom--top",
        notTop: "headroom--not-top",
        bottom: "headroom--bottom",
        notBottom: "headroom--not-bottom",
        frozen: "headroom--frozen",
      },
    }).init();
    var r = e.classList.contains("on-over");
    if (
      (r ||
        ((r = e.offsetHeight),
        (s.style.paddingTop = r + "px"),
        (s.style.scrollPaddingTop = r + "px")),
      window.matchMedia("(max-width: 991px)").matches)
    ) {
      const l = e.querySelector(".navbar-collapse"),
        d = e.querySelector(".navbar-toggler");
      window.addEventListener("scroll", () => {
        var e = window.scrollY;
        "true" === d.getAttribute("aria-expanded") &&
          0 < e &&
          (l.classList.remove("show"),
          d.setAttribute("aria-expanded", "false"));
      });
    }
  }
})();
