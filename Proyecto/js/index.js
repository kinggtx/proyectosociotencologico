document
  .getElementById("boton-hamburguesa")
  .addEventListener("click", function () {
    var menu = document.getElementById("menu-hamburguesa");
    var boton = document.getElementById("boton-hamburguesa");
    var icono = document.querySelector("#boton-hamburguesa span");

    menu.classList.toggle("mostrando");
    boton.classList.toggle("mostrando");
    icono.classList.toggle("rotar");
  });

//modo dark
const switchButton = document.getElementById("switch");
const workContainer = document.getElementById("work");

// Recuperar la preferencia del usuario del almacenamiento local
const darkMode = localStorage.getItem("darkMode");
if (darkMode === "enabled") {
  document.body.classList.add("dark-mode");
  switchButton.checked = true;
}
// Agregar un escuchador de eventos al botón de cambio
switchButton.addEventListener("change", () => {
  // Alternar las clases en los elementos body y switchButton
  document.body.classList.toggle("dark-mode");
  // Guardar la preferencia del usuario en el almacenamiento local
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.removeItem("darkMode");
  }
});