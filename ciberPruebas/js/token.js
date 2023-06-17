const inputLetraN = document.getElementById("letra5");
      
inputLetraN.addEventListener("change", function () {
    const valorInputN = inputLetraN.value;
    if (valorInputN=="N"|| valorInputN=="n") {
        document.getElementById("letra5").style.backgroundColor = "green";
    } else {
        document.getElementById("letra5").style.backgroundColor = "red";
}
});

const inputLetraE = document.getElementById("letra4");

inputLetraE.addEventListener("change", function () {
    const valorInputE = inputLetraE.value;
    if (valorInputE=="E"|| valorInputE=="e") {
        document.getElementById("letra4").style.backgroundColor = "green";
    } else {
        document.getElementById("letra4").style.backgroundColor = "red";
}
});

const inputLetraK = document.getElementById("letra3");

inputLetraK.addEventListener("change", function () {
    const valorInputK = inputLetraK.value;
    if (valorInputK=="K"|| valorInputK=="k") {
        document.getElementById("letra3").style.backgroundColor = "green";
    } else {
        document.getElementById("letra3").style.backgroundColor = "red";
}
});


const inputLetraO = document.getElementById("letra2");

inputLetraO.addEventListener("change", function () {
    const valorInputO = inputLetraO.value;
    if (valorInputO=="O"|| valorInputO=="o") {
        document.getElementById("letra2").style.backgroundColor = "green";
    } else {
        document.getElementById("letra2").style.backgroundColor = "red";
}
});

const inputLetraT = document.getElementById("letra1");

inputLetraT.addEventListener("change", function () {
    const valorInputT = inputLetraT.value;
    if (valorInputT=="T"|| valorInputT=="t") {
        document.getElementById("letra1").style.backgroundColor = "green";
    } else {
        document.getElementById("letra1").style.backgroundColor = "red";
}
});       


function verificarTodosElementosVerdes() {
  const elementos = ["letra1", "letra2", "letra3", "letra4", "letra5"];
  for (let i = 0; i < elementos.length; i++) {
    const elemento = document.getElementById(elementos[i]);
    if (elemento.style.backgroundColor !== "green") {
      return false;
    }
  }
  return true;
}
// Añadir la URL de la siguiente página
function mostrarMensaje() {
  if (verificarTodosElementosVerdes()) {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Genial, has consegido pasar todas las CIBER PRUEBAS." + " El siguiente enlace es: '/homatrix'." ;
  } else {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "No todos los elementos son verdes";
  }
}

const btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", mostrarMensaje);
