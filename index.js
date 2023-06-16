var preguntas = [
    {
        pregunta: "1. ¿Cuál es el animal que camina a 4 patas por la mañana, a 2 por la tarde y a 3 por la noche?",
        respuesta: "humano",
        tokenParte: "A"
    },
    {
        pregunta: "2. ¿Cuántos movimientos debe hacer el barquero para pasar de un lado del río al otro a un lobo, una oveja y una lechuga sin que se coman unos a otros?",
        respuesta: "8",
        tokenParte: "32"
    },
    {
        pregunta: "3. Tengo un arreglo de números y quiero obtener la suma de todos los elementos utilizando la función reduce(). ¿Puedes completar el código para lograrlo?\n\nconst numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((total, current) => total + current, 0);\nconsole.log(sum); // Imprimirá __.",
        respuesta: "15",
        tokenParte: "o"
    },
    {
        pregunta: "4. Soy una propiedad de CSS que se utiliza para alinear el contenido de un elemento en el centro horizontalmente. ¿Cuál es mi nombre?",
        respuesta: "text-align: center;",
        tokenParte: "text-align"
    },
    {
        pregunta: "5. Soy una pseudo-clase de CSS que se utiliza para seleccionar el primer elemento hijo de un elemento padre. ¿Cuál es mi nombre en español?",
        respuesta: "first-child",
        tokenParte: "primerhijo"
    },
    {
        pregunta: "6. Ponme de lado y soy todo. Córtame por la mitad y no soy nada. ¿Qué soy?",
        respuesta: "8",
        tokenParte: "8"
    },
    {
        pregunta: "7. ¿Qué número sigue esta secuencia: 1, 11, 21, 1211, 111221, 312211, ___?",
        respuesta: "13112221",
        tokenParte: "13112221"
    },
    {
        pregunta: "8. El camino que recorriste +1 punto te dará la respuesta para liberarme, junta las claves de las respuestas y verifica si el token es seguro.",
        respuesta: "+.",
        tokenParte: "+."
    }
];


var preguntasForm = document.getElementById('preguntas-form');
var preguntasContainer = document.getElementById('preguntas-container');
var enviarBtn = document.getElementById('enviar-btn');
var tokenElement = document.getElementById('token');
var currentQuestionIndex = -1;
var token = '';

function mostrarSiguientePregunta() {
    currentQuestionIndex++;

    if (currentQuestionIndex < preguntas.length) {
        var pregunta = preguntas[currentQuestionIndex];
        var div = document.createElement('div');
        div.className = 'pregunta-container';

        var label = document.createElement('label');
        label.textContent = pregunta.pregunta;

        var input = document.createElement('input');
        input.type = 'text';
        input.id = 'pregunta-' + (currentQuestionIndex + 1);
        input.className = 'respuesta';

        div.appendChild(label);
        div.appendChild(input);
        preguntasContainer.appendChild(div);
    } else {
        tokenElement.textContent = token;
        tokenElement.style.display = 'block';
    }
}

enviarBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var respuestaIngresada = document.getElementById('pregunta-' + (currentQuestionIndex + 1)).value.trim().toLowerCase();
    var pregunta = preguntas[currentQuestionIndex];

    if (respuestaIngresada === pregunta.respuesta) {
        token += pregunta.tokenParte;
        mostrarSiguientePregunta();

        var tokenParcial = pregunta.tokenParte;
        var mensajeToken = document.createElement('h3');
        mensajeToken.textContent = "Token parcial: " + tokenParcial;
        preguntasContainer.appendChild(mensajeToken);
    }
});

mostrarSiguientePregunta();