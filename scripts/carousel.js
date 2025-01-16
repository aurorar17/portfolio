document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".technologies-container");
  const images = Array.from(container.children);
  const containerWidth = container.offsetWidth;
  let scrollAmount = 0;

  // Crea una copia delle immagini per il loop infinito
  images.forEach((image) => {
    const clone = image.cloneNode(true);
    container.appendChild(clone); // Aggiungi le copie alla fine del contenitore
  });

  function scrollCarousel() {
    scrollAmount -= 2; // Velocità dello scorrimento, puoi regolarla
    container.style.transform = `translateX(${scrollAmount}px)`;

    // Quando la prima immagine esce completamente dallo schermo, riposiziona il carosello
    if (Math.abs(scrollAmount) >= containerWidth) {
      scrollAmount = 0; // Ripristina lo scroll
      // Ripristina la posizione in modo invisibile
      container.style.transition = "none"; // Disabilita temporaneamente la transizione
      container.style.transform = `translateX(${scrollAmount}px)`; // Riporta all'inizio

      // Riattiva la transizione per il prossimo movimento fluido
      setTimeout(() => {
        container.style.transition = "transform 0.5s ease-in-out"; // Transizione fluida
      }, 50); // La transizione riattivata dopo una breve pausa
    }
  }

  setInterval(scrollCarousel, 16); // 60 FPS (16ms per frame)
});
