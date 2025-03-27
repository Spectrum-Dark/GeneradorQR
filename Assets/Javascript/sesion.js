/* Validamos la sesion */
const Sesion = JSON.parse(localStorage.getItem("sesion")) || false;
if (!Sesion) {
  /* Redirigimos al login */
  window.location.href = "/index.html";
}