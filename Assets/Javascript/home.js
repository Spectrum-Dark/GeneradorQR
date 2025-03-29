document.addEventListener("DOMContentLoaded", () => {
  const homeLink = document.getElementById("homeLink");
  const welcomeModal = document.getElementById("welcomeModal");
  const closeModal = document.getElementById("closeModal");

  homeLink.addEventListener("click", (event) => {
    event.preventDefault(); // Evita la acción por defecto del enlace
    welcomeModal.style.display = "flex";
  });

  closeModal.addEventListener("click", () => {
    welcomeModal.style.display = "none";
  });

  // Cierra el modal si se hace clic fuera del contenido
  window.addEventListener("click", (event) => {
    if (event.target === welcomeModal) {
      welcomeModal.style.display = "none";
    }
  });

  /* Validamos si se carga el html que muestre */
  setTimeout(() => {
    homeLink.click();
  }, 1000);
});
