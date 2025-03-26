document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginLink = document.getElementById('loginLink');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Validación del formulario
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Validar nombre completo
        const fullName = document.getElementById('fullName');
        if (!fullName.value.trim()) {
            fullName.parentElement.classList.add('error');
            isValid = false;
        } else {
            fullName.parentElement.classList.remove('error');
        }

        // Validar email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            email.parentElement.classList.add('error');
            isValid = false;
        } else {
            email.parentElement.classList.remove('error');
        }

        // Validar contraseña
        if (password.value.length < 8) {
            password.parentElement.classList.add('error');
            isValid = false;
        } else {
            password.parentElement.classList.remove('error');
        }

        // Validar confirmación de contraseña
        if (password.value !== confirmPassword.value) {
            confirmPassword.parentElement.classList.add('error');
            isValid = false;
        } else {
            confirmPassword.parentElement.classList.remove('error');
        }

        // Si todo es válido
        if (isValid) {
            alert('¡Registro exitoso! Redirigiendo a la página de login...');
            // Redirigir después de 1 segundo (para que se vea el mensaje)
            setTimeout(function() {
                window.location.href = "login.html"; // Asegúrate que este archivo existe
            }, 1000);
            registerForm.reset();
        }
    });

    // Limpiar errores al escribir
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.parentElement.classList.remove('error');
        });
    });

    // Enlace para login
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = "login.html"; // Misma redirección
    });
});