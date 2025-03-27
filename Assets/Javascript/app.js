document.addEventListener("DOMContentLoaded", () => {
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
