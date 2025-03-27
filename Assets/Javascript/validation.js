document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    registerForm.addEventListener('submit', function(e) {
        let isValid = true;

        const fullName = document.getElementById('fullName');
        if (!fullName.value.trim()) {
            fullName.parentElement.classList.add('error');
            isValid = false;
        } else {
            fullName.parentElement.classList.remove('error');
        }

        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            email.parentElement.classList.add('error');
            isValid = false;
        } else {
            email.parentElement.classList.remove('error');
        }

        // Validación de la contraseña
        if (password.value.length < 8) {
            password.parentElement.classList.add('error');
            isValid = false;
        } else {
            password.parentElement.classList.remove('error');
        }

        // Validación de la confirmación de la contraseña
        if (password.value !== confirmPassword.value) {
            confirmPassword.parentElement.classList.add('error');
            isValid = false;
        } else {
            confirmPassword.parentElement.classList.remove('error');
        }
    });

    // Limpiar los errores al escribir en los campos
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.parentElement.classList.remove('error');
        });
    });
});
