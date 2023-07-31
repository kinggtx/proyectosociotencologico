let flag = false;
let Correos = [1000];
let Contraseñas = [1000];
let i = 1;

Correos[0] = "creativa.uno@gmail.com";
Contraseñas[0] = "1234";

function Login() {
  flag = false;

  let correo = document.login.correo.value;
  let password = document.login.contraseña.value;

  let email = localStorage.getItem("Correo");
  let contraseña = localStorage.getItem("Contraseña");

  if (correo === Correos[0] && password === Contraseñas[0]) {
    flag = true;
  }
  if (correo === email && password === contraseña) {
    flag = true;
  }

  if (flag === true) {
    console.log("Login EXITOSO!!!");
    window.location = "../html/index.html";
  } else {
    console.log("ERROR !!!!");
  }
}

function Register() {
  flag = false;

  let Correo = document.register.correo.value;
  let Contraseña = document.register.contraseña.value;

  flag = true;

  if (flag === true) {
    console.log("Login EXITOSO!!!");
    window.location = "../html/login.html";
    localStorage.setItem("Correo", Correo);
    localStorage.setItem("Contraseña", Contraseña);
  } else {
    console.log("ERROR !!!!");
  }
}
