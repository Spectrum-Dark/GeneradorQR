document.addEventListener("DOMContentLoaded", () => {
  MenuMovil();
  CloseSesion();
});

function CloseSesion() {
  const ButtonSesion = document.getElementById("btnsesion");
  ButtonSesion.addEventListener("click", () => {
    setTimeout(() => {
      /* eliminamos la sesion */
      localStorage.removeItem("sesion");
      /* Redireccionamos a la pagina de inicio */
      window.location.href = "/index.html";
    }, 1000);
  });
}

function MenuMovil() {
  // Menú móvil
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  mobileMenuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}
