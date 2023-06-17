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
    alert("¡Captcha aprobado! Sigues siendo humano.");
    window.location.href = "../qr";
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