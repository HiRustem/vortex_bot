document.addEventListener("DOMContentLoaded", function () {
  var scrollTexts = document.querySelectorAll(".scroll-text");

  window.addEventListener("scroll", function () {
    scrollTexts.forEach(function (scrollText) {
      var scrollPosition = window.scrollY;
      var elementPosition = scrollText.offsetTop;

      if (scrollPosition >= elementPosition - window.innerHeight / 2) {
        scrollText.classList.add("sc-active");
      }
    });
  });
});
