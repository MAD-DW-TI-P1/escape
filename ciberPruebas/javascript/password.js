function evaluarContraseña() {
    var contraseña = document.getElementById("contraseña").value;
    var result2 = document.getElementById("result2");

    // Definir los criterios para una contraseña segura
    var longitudMinima = 8;
    var tieneCaracteresEspeciales = /[$&+,:;=?@#|'<>.^()%!-]/.test(contraseña);
    var tieneLetrasMayusculas = /[A-Z]/.test(contraseña);
    var tieneNumeros = /\d/.test(contraseña);

    // Evaluar los criterios
    if (contraseña.length < longitudMinima) {
      result2.innerHTML = "La contraseña debe tener al menos " + longitudMinima + " caracteres.";
    } else if (!tieneCaracteresEspeciales) {
      result2.innerHTML = "La contraseña debe contener al menos un carácter especial ($&+,:;=?@#|'<>.^()%!-).";
    } else if (!tieneLetrasMayusculas) {
      result2.innerHTML = "La contraseña debe contener al menos una letra mayúscula.";
    } else if (!tieneNumeros) {
      result2.innerHTML = "La contraseña debe contener al menos un número.";
    } else {
      result2.innerHTML = "¡La contraseña es segura! Tu letra es la 'T'.";
    }
  }
  