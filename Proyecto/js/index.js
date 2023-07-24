document
  .getElementById("boton-hamburguesa")
  .addEventListener("click", function () {
    var menu = document.getElementById("menu-hamburguesa");
    var boton = document.getElementById("boton-hamburguesa");
    var icono = document.querySelector("#boton-hamburguesa span");
    var switchDark = document.querySelector("#switch");

    menu.classList.toggle("mostrando");
    boton.classList.toggle("mostrando");
    icono.classList.toggle("rotar");
    switchDark.classList.toggle("dark");
  });
