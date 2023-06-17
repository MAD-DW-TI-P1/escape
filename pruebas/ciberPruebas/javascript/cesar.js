function verificarRespuesta() {
    var respuesta = document.getElementById("respuesta").value.toUpperCase();
    if (respuesta == "K") {
      alert("¡Correcto! Has adivinado la letra cifrada.");
    } else {
      alert("Lo siento, esa no es la letra que hemos cifrado. Inténtelo de nuevo. :( ");
    }
  }

// Cifrar la letra K con el cifrado de César
var letra = 'K';
var cifrado = "";
cifrado = letra;