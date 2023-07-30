//Register
function register() {
  let email = document.correo;
  let password = document.contrasena

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
}

function login() {
  let email = document.login.email.value;
  let password = document.login.password.value;

  let storedEmail = localStorage.getItem("email");
  let storedPassword = localStorage.getItem("password");

  if (email === storedEmail && password === storedPassword) {
    window.location = "../html/index.html";
    console.log("registro exitoso");
  } else {
    console.log("USUARIO NO REGISTRADO");
  }
}

// Login
let flag = false;

 function Login() {
   let correo = document.login.correo.value;
   let password = document.login.contrasena.value;

   const user1 = {
     email: "anthonymorag10@gmail.com",
     password: "12345678",
   };

  flag = false;
  if (correo === user1.email && password === user1.password) {
    flag = true
  }

  if (flag === true) {
    window.location = "../html/index.html";
    console.log("Login EXITOSO!!!");
   
  }
  else if (email === storedEmail && password === storedPassword) {
    window.location = "../html/index.html";
    console.log("registro exitoso");
  }
  
  else {
    console.log("ERROR !!!!");
   }
}

