window.addEventListener("DOMContentLoaded", (event) => {
  const slides = document.querySelectorAll(".slide");

  for (const slide of slides) {
    slide.addEventListener("click", function () {
      slideRemoveActiveClass();
      this.classList.add("active");
    });
  }

  function slideRemoveActiveClass() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
});
