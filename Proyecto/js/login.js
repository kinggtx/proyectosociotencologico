let flag = false;

function Login() {
  let correo = document.login.correo.value;
  let password = document.login.contraseña.value;

  const user1 = {
    email: "anthonymorag10@gmail.com",
    password: "12345678",
  };

  flag = false;
  if (correo === user1.email && password === user1.password) {
    flag = true;
  }

  if (flag === true) {
    // window.location = "../html/index.html";
    console.log("Login EXITOSO!!!");
  } else {
    console.log("ERROR !!!!");
  }
}
