document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".technologies-container");
  const images = Array.from(container.children);
  let currentIndex = 0;

  function scrollCarousel() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    container.style.transform = `translateX(-${currentIndex * 100}px)`;
  }

  setInterval(scrollCarousel, 2000); // Cambia immagine ogni 2 secondi
});
