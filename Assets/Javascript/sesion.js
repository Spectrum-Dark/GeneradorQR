// Validamos la sesion
const Sesion = JSON.parse(localStorage.getItem("sesion")) || [];

if (!Sesion) {
  // Redirigimos al login si no hay sesión
  window.location.href = "/index.html";
}