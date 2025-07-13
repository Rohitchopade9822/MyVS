document.addEventListener("DOMContentLoaded", () => {
  // Handle Highlights Animation (Already correct)
  const listItems = document.querySelectorAll('.highlights li');
  listItems.forEach(item => item.classList.remove('visible'));

  let liIndex = 0;
  const highlightInterval = setInterval(() => {
    if (liIndex < listItems.length) {
      listItems[liIndex].classList.add('visible');
      liIndex++;
    } else {
      clearInterval(highlightInterval);
    }
  }, 1000);

  // === Image Carousel Logic ===
  const carousel = document.querySelector(".image-carousel");
  const images = carousel.querySelectorAll(".carousel-image");
  let currentImage = 0;
  let imageInterval;

  function showNextImage() {
    images[currentImage].classList.remove("active");
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add("active");
  }

  function startCarousel() {
    imageInterval = setInterval(showNextImage, 4000); // 4s per slide
  }

  function stopCarousel() {
    clearInterval(imageInterval);
  }

  // Start carousel
  startCarousel();

  // Pause carousel on hover
  carousel.addEventListener("mouseenter", stopCarousel);
  carousel.addEventListener("mouseleave", startCarousel);
});
