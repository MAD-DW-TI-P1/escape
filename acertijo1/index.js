// BLOQUEAR CLICK DERECHO
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// BLOQUEAR TECLA F12
document.onkeydown = function (e) {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
    e.preventDefault();
    alert("¿A dónde crees que vas pillín?");
  }
};

function verificarPass() {
  // Obtener el valor del campo de entrada
  var contraseña = document.getElementById("pass").value;

  // Comprobar la contraseña
  if (contraseña === "hash") {
      window.location.href = "/esoterico";
  } else {
      alert("Prueba otra vez");
  }
}










