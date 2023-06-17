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




function verificarContraseña() {
  // Obtener el valor del campo de entrada
  var contraseña = document.getElementById("contraseña").value;

  // Comprobar la contraseña
  if (contraseña === "hash") {
    return (
      open('/esoterico')
    );
  } else {
    alert("Contraseña incorrecta");
  }
}

function verificarContraseña2() {
  // Obtener el valor del campo de entrada
  var contraseña = document.getElementById("contraseña2").value;

  // Comprobar la contraseña
  if (contraseña === "casi") {
    return (
      open('../rescue_dog/index.html')
    );
  } else {
    alert("Contraseña incorrecta");
  }
}










