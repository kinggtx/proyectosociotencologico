var flag = false;
var Correos = [1000];
var Contraseñas = [1000];
var j = 0;
var i = 1;

Correos[0] = "creativa.uno@gmail.com";
Contraseñas[0] = "123456qwerty";
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
    console.log(Correos[j],Contraseñas[j], j);
  }

  for (let j = 0; j <= Correos.length; j++) {
    localStorage.getItem(`Correos ${j}`);
    localStorage.getItem(`Contraseña ${j}`);
  }


  if (flag === true) {
    window.location = "../html/index.html";
    console.log("Login EXITOSO!!!");
  } else {
    console.log("ERROR !!!!");
  }
}
function Register() {
  flag = false;
  if (flag === true) {
    console.log("Login EXITOSO!!!");
    for (j = 0; j < Correos.length; j++) {
      console.log(Correos[j], Contraseñas[j], j);
      localStorage.setItem(`Correos ${j}`, Correos[j]);
      localStorage.setItem(`Contraseña ${j}`, Contraseñas[j]);
    }
    window.location = "../html/login.html";
  } else {
    console.log("ERROR !!!!");
  }
}
