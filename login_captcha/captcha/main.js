const imagenesCorrectas = ["imagen1", "imagen3", "imagen7"];

// Función para generar el grid de imágenes aleatorias
function generarGrid() {
  const imageGrid = document.getElementById("imageGrid");

  // Array con los IDs de todas las imágenes disponibles
  const imagenesDisponibles = [
    "imagen1",
    "imagen2",
    "imagen3",
    "imagen4",
    "imagen5",
    "imagen6",
    "imagen7",
    "imagen8",
    "imagen9"
  ];

  // Barajar el array de imágenes disponibles
  const imagenesAleatorias = shuffleArray(imagenesDisponibles);

  // Generar el HTML para el grid de imágenes
  let gridHTML = "";
  for (let i = 0; i < imagenesAleatorias.length; i++) {
    gridHTML += `<img id="${imagenesAleatorias[i]}" src="ruta-imagenes/${imagenesAleatorias[i]}.jpeg" alt="Imagen ${i+1}" onclick="seleccionarImagen(event)">`;
  }

  // Agregar el HTML al contenedor del grid
  imageGrid.innerHTML = gridHTML;
}

// Función para mezclar aleatoriamente un array 
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Función para manejar la selección de imágenes
function seleccionarImagen(event) {
  const imagenSeleccionada = event.target;
  imagenSeleccionada.classList.toggle("selected");

  // Habilitar o deshabilitar el botón de verificar según la cantidad de imágenes seleccionadas
  const verifyBtn = document.getElementById("verifyBtn");
  const imagenesSeleccionadas = document.getElementsByClassName("selected");
  verifyBtn.disabled = (imagenesSeleccionadas.length === 0);
}

// Función para verificar las imágenes seleccionadas
function verificarSeleccion() {
  const imagenesSeleccionadas = Array.from(document.getElementsByClassName("selected")).map(img => img.id);

  // Comprobar si las imágenes seleccionadas son las correctas
  const sonCorrectas = imagenesSeleccionadas.every(img => imagenesCorrectas.includes(img));

  if (sonCorrectas && imagenesSeleccionadas.length === imagenesCorrectas.length) {
    alert("¡Captcha aprobado! Eres humano.");
    window.location.href = "https://github.com/";
  } else {
    alert("Captcha no aprobado. Por favor, inténtalo de nuevo.");
  }
}

// Generar el grid inicial
generarGrid();

// Agregar evento de clic al botón de verificación
const verifyBtn = document.getElementById("verifyBtn");
verifyBtn.addEventListener("click", verificarSeleccion);
verifyBtn.disabled = true;

// Función para refrescar la página
function refrescarPagina() {
    location.reload();
  }
  
// Agregar evento de clic al botón de refrescar
  const refreshBtn = document.getElementById("refreshBtn");
  refreshBtn.addEventListener("click", refrescarPagina);
  

  
//Matrix
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

