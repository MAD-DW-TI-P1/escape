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

function verificarPass2() {
  // Obtener el valor del campo de entrada
  var contraseña = document.getElementById("pass2").value;

  // Comprobar la contraseña
  if (contraseña === "casi") {
      window.location.href = "/rescue";
  } else {
    alert("Contraseña incorrecta");
  }
}










