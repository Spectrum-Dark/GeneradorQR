const ContenedorQR = document.getElementById("ContainerQR");
const FormQR = document.getElementById("FormQR");
const QR = new QRCode(ContenedorQR, "");

// Evento para generar el QR
document.getElementById("generateBtn").addEventListener("click", (e) => {
  e.preventDefault();

  // Verificar si ya existe un código QR generado
  if (FormQR.qrData.value.trim() !== "") {
    // Generar el código QR con el valor del formulario
    QR.makeCode(FormQR.qrData.value);

    // Esperar un poco antes de asignar el ID al img generado
    setTimeout(() => {
      const Container = document.querySelector("#ContainerQR img");
      if (Container) {
        Container.setAttribute("id", "ImageQR");
      }
    }, 500); // Esperar 500 ms para asegurarse de que la imagen se haya generado
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, ingresa los datos para generar el Código QR",
      showConfirmButton: false,
      timer: 1500, // 1500 ms de duración
    });
  }
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const canvas = document.querySelector("#ContainerQR canvas");
  // Verificar si el QR ha sido generado
  const Img = document.querySelector("#ImageQR");
  if (Img) {
    // Convertir el canvas a una imagen en formato PNG
    const image = canvas.toDataURL("image/png");

    // Crear un enlace de descarga
    const link = document.createElement("a");
    link.href = image;
    link.download = "Code-QR.png"; // Nombre del archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // Alerta si no se ha generado el código QR
    Swal.fire({
      icon: "error",
      title: "Código QR no encontrado",
      showConfirmButton: false,
      timer: 1500
    });
  }
});
