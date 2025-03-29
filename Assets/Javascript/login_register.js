/* Funciones MAIN */
document.addEventListener("DOMContentLoaded", function () {
  GetFormData_Registro();
  GetUserData_Sesion();
});

/* Obtenemos los datos formulario y guardamos en el localstorage */
function GetFormData_Registro() {
  const RegisterForm = document.getElementById("registerForm");

  if (!RegisterForm) {
    return;
  }

  RegisterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const ObjDatos = {
      UserName: document.getElementById("fullName").value.trim(),
      UserEmail: document.getElementById("email").value.trim(),
      UserPassword: document.getElementById("password").value.trim(),
      UserPasswordConfirm: document
        .getElementById("confirmPassword")
        .value.trim(),
    };

    /* Validamos si la contraseña son iguales y que sean de 8 caracteres */
    if (ObjDatos.UserPassword == ObjDatos.UserPasswordConfirm) {
      if (ObjDatos.UserPassword.length >= 8) {
        /* Obtenemos los ultimos datos y guardamos */
        const Users = JSON.parse(localStorage.getItem("Users")) || [];
        /* eliminamos passwordconfirm */
        delete ObjDatos.UserPasswordConfirm;
        /* Guardamos los datos en el array */
        Users.push(ObjDatos);
        /* Guardamos los datos en el localstorage */
        localStorage.setItem("Users", JSON.stringify(Users));
        /* Enviamos notificacion */
        Swal.fire({
          title: "Datos Guardados Correctamente",
          icon: "success",
          draggable: true,
          showConfirmButton: false,
        });
        /* Limpiamos el formulario */
        RegisterForm.reset();
        /* Mandamos al login */
        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000);
      }
    }
  });
}

/* Funcion Login */
function GetUserData_Sesion() {
  const LoginForm = document.getElementById("loginForm");

  LoginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const ObjDatos = {
      UserEmail: document.getElementById("email").value.trim(),
      UserPassword: document.getElementById("password").value.trim(),
    };

    /* Buscamos el usuario */
    const UserEntity = SearchUser(ObjDatos);
    console.log("User OK " + UserEntity.Email?.UserEmail);
    console.log("User OK " + UserEntity.Password?.UserPassword);

    /* Validamos el login */
    if (
      ObjDatos.UserEmail === UserEntity.Email?.UserEmail &&
      ObjDatos.UserPassword === UserEntity.Password?.UserPassword
    ) {
      /* Guardamos la sesion */
      localStorage.setItem("sesion", JSON.stringify(ObjDatos.UserEmail));
      /* Redirigimos a aplicacion principal */
      setTimeout(() => {
        window.location.href = "/Views/home.html";
      }, 1500);
    } else {
      Swal.fire({
        title: "Datos Incorrectos",
        icon: "error",
      });
    }
  });
}

/* LocalStorage Funcitons */

function SearchUser(Obj) {
  /* Obtenemos la lista de los usuarios */
  const Users = JSON.parse(localStorage.getItem("Users")) || [];
  /* Buscamos por email y contraseña */
  ObjDatos = {
    Email: Users.find((user) => user.UserEmail === Obj.UserEmail),
    Password: Users.find((user) => user.UserPassword === Obj.UserPassword),
  };

  return ObjDatos;
}
