document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".image-carousel");
  const images = carousel.querySelectorAll(".carousel-image");
  let current = 0;
  let intervalId;

  function showNext() {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  }

  function startCarousel() {
    intervalId = setInterval(showNext, 4000);
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  startCarousel();

  carousel.addEventListener("mouseenter", stopCarousel);
  carousel.addEventListener("mouseleave", startCarousel);
});
