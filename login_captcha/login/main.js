const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const katakana = 'hduegygb7dg873h8h873783ge8g83e8g78387t832ye873ehsfgdgfjygfudgfyfgysdgfyusdgfudsgfudsygfudsgygfusdfgudsgfudsgfjdsgfjdsgyut4854754yrtg84343y8t348f43g83g4fg3g834g74238yefge7f34834t8348fg48748rg387t483487tr838tr8743t74rt763t4r73473yrgvfg474b8f7y438r874487gf83';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;
const fontSize = 16;
const columns = canvas.width / fontSize;
const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#0F0';
  context.font = fontSize + 'px monospace';

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

setInterval(draw, 10);

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
        window.location.pathname = "/escape/login_captcha/captcha/index.html"; //Cambiar por la página en cuestión
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