let flag = false;
let Correos = [1000];
let Users = [1000];
let Contraseñas = [1000];
let Telefonos = [1000];
let j = 0;
let i = 1;

Correos[0] = "creativa.uno@gmail.com";
Users[0] = "Creativa Punto Uno";
Contraseñas[0] = "123456qwerty";
Telefonos[0] = "04147172580";

if (typeof Storage !== "undefined") {
  console.log("LocalStorage disponible");
} else {
  console.log("LocalStorage no soportado en este navegador");
}

function Login() {
  flag = false;
  let correo = document.login.correo.value;
  let password = document.login.contraseña.value;

  for (let j = 0; j <= Correos.length; j++) {
    console.log(Users[j], Correos[j], Telefonos[j], Contraseñas[j], j);
  }

  for (let j = 0; j <= Correos.length; j++) {
    localStorage.getItem(`Usuarios ${j}`);
    localStorage.getItem(`Correos ${j}`);
    localStorage.getItem(`Telefono ${j}`);
    localStorage.getItem(`Contraseña ${j}`);
  }

  do {
    if (correo === Correos[j] && password === Contraseñas[j]) {
      flag = true;
      break;
    }
  } while (j > Correos.length);

  if (flag === true) {
    // window.location = "../html/index.html";
    console.log("Login EXITOSO!!!");
  } else {
    console.log("ERROR !!!!");
  }
}

function Register() {
  flag = false;

  do {
    Users[i] = document.register.usuario.value;
    Correos[i] = document.register.correo.value;
    Telefonos[i] = document.register.telefono.value;
    Contraseñas[i] = document.register.contraseña.value;

    i++;
    flag = true;
  } while (flag !== true);

  if (flag === true) {
    console.log("Login EXITOSO!!!");

    for (j = 0; j < Correos.length; j++) {
      console.log(Users[j], Correos[j], Telefonos[j], Contraseñas[j], j);
      localStorage.setItem(`Usuarios ${j}`, Users[j]);
      localStorage.setItem(`Correos ${j}`, Correos[j]);
      localStorage.setItem(`Telefono ${j}`, Telefonos[j]);
      localStorage.setItem(`Contraseña ${j}`, Contraseñas[j]);
    }
  } else {
    console.log("ERROR !!!!");
  }
}
