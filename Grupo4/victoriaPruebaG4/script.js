const loginButton = document.querySelector("#loginButton");
const passwordInput = document.querySelector("#password");
var counter = 0;

alert("¡Encuentra la contraseña! O simplemente pulsa 'entrar'.");

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

passwordInput.addEventListener("keyup", () => {
    if (passwordInput.value == "ContraseñaSuperDificil154!") {
        loginButton.style.transform = `translate(0px, 0px)`;
    }
});

loginButton.addEventListener("mouseover", () => {
    if (passwordInput.value != "ContraseñaSuperDificil154!") {
        loginButton.style.transform = `translate(${randomNumber(
            -400,
            400
        )}px, ${randomNumber(-300, 200)}px)`;
    }
});

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (passwordInput.value == "ContraseñaSuperDificil154!") {
        alert(
            "¡Bien hecho! \nRecuerda que las contraseñas deberían tener siempre mayúsculas, minúsculas, números y caracteres especiales. Y nada de poner el nombre de tu perro..."
        );
        window.location.href = "../pruebasebasG4/index.html"; //Cambiar por la página en cuestión
    } else {
        switch (counter) {
            case 0:
                alert("Casi cuela, eh...");
                counter++;
                break;
            case 1:
                alert("Deja de insistir");
                counter++;
                break;
            case 2:
                alert("Que no...");
                counter++;
                break;
            default:
                alert("Bueno, ¡pues nada! Tú sigue...");
                break;
        }
    }
});
