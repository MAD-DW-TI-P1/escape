// Temporizador y barra de tiempo
const countdownElement = document.getElementById('timer');
const progressBarElement = document.getElementById('timer-bar');

let timeRemaining = 150; // 10 minutos en segundos
let countdownInterval;

function startCountdown() {
    updateCountdown(); // Actualiza el temporizador inmediatamente
    countdownInterval = setInterval(updateCountdown,  1000);
}

function updateCountdown() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    countdownElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    progressBarElement.style.width = `${(timeRemaining / 600) * 100}%`;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        endGame(false);
    } else {
        timeRemaining--;
    }
}

// Preguntas por sala
const rooms = ['Sala 1 - Firewall', 'Sala 2 - Encriptación', 'Sala 3 - Auditoría de Seguridad'];
let currentRoomIndex = 0;

const questions = [
     // Sala 1 - Firewall
     [
        {
            question: '¿Cuál es la función principal de un Firewall en ciberseguridad?',
            answer: 'Proteger la red',
            hint: 'Empieza con la letra "P"'
        },
        {
            question: '¿Qué tipo de tráfico un Firewall puede bloquear para prevenir ataques?',
            answer: 'Tráfico malicioso',
            hint: 'Contiene las letras "T", "m" y "s"'
        },
        {
            question: '¿Cuál es la regla comúnmente utilizada para permitir o denegar el acceso en un Firewall?',
            answer: 'Regla de acceso',
            hint: 'Tiene 3 palabras'
        }
    ],

    // Sala 2 - Encriptación
    [
        {
            question: '¿Qué es la encriptación en ciberseguridad?',
            answer: 'Proceso de convertir datos en código',
            hint: 'Tiene 6 palabras'
        },
        {
            question: '¿Qué tipo de clave se utiliza en la encriptación simétrica?',
            answer: 'Clave única',
            hint: 'Tiene 2 palabras'
        },
        {
            question: '¿Cuál es el algoritmo de encriptación ampliamente utilizado para proteger conexiones seguras en la web?',
            answer: 'SSL/TLS',
            hint: 'Contiene las letras "S", "L" y "T"'
        }
    ],

    // Sala 3 - Auditoría de Seguridad
    [
        {
            question: '¿Qué es la auditoría de seguridad en ciberseguridad?',
            answer: 'Evaluación de la seguridad de un sistema',
            hint: 'Tiene 5 palabras'
        },
        {
            question: '¿Cuál es el objetivo principal de una auditoría de seguridad?',
            answer: 'Identificar vulnerabilidades',
            hint: 'Empieza con la letra "I"'
        },
        {
            question: '¿Qué tipo de pruebas se realizan durante una auditoría de seguridad?',
            answer: 'Pruebas de penetración',
            hint: 'Tiene 3 palabras'
        }
    ]
    // Agrega más salas con sus respectivas preguntas según sea necesario
];


const roomTitleElement = document.getElementById('room-title');
const roomContainer = document.getElementById('room-container');
const questionContainer = document.getElementById('question-container');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const attemptCounterElement = document.getElementById('attempt-counter');
const hintContainer = document.getElementById('hint-container');
const hintButton = document.getElementById('hint-button');

let attemptsRemaining = 3;
let hintsRemaining = 2;

function showQuestion() {
    roomTitleElement.textContent = rooms[currentRoomIndex];
    const currentQuestions = questions[currentRoomIndex];
    const currentQuestion = currentQuestions[Math.floor(Math.random() * currentQuestions.length)];

    questionContainer.textContent = currentQuestion.question;
    answerInput.value = '';
    attemptCounterElement.textContent = `Intentos restantes: ${attemptsRemaining}`;
    answerInput.disabled = false;
    hintContainer.textContent = '';
    answerInput.focus();
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim(); // Elimina espacios en blanco al principio y al final

    const currentQuestions = questions[currentRoomIndex];
    const currentQuestion = currentQuestions.find(question => question.question === questionContainer.textContent);

    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        attemptsRemaining = 3;
        currentRoomIndex++;
        if (currentRoomIndex >= rooms.length) {
            endGame(true);
        } else {
            showQuestion();
        }
    } else {
        attemptsRemaining--;
        if (attemptsRemaining <= 0) {
            endGame(false);
        } else {
            attemptCounterElement.textContent = `Intentos restantes: ${attemptsRemaining}`;
            answerInput.value = '';
            answerInput.focus();
        }
    }
}

function endGame(won) {
    answerInput.disabled = true;
    submitButton.disabled = true;
    hintButton.disabled = true;

    if (won) {
        questionContainer.textContent = '¡Has escapado con éxito de todas las salas de ciberseguridad!';
    } else {
        questionContainer.textContent = 'Has fallado en escapar de las salas de ciberseguridad. ¡Mejor suerte la próxima vez!';
    }
}

function showHint() {
    if (hintsRemaining > 0) {
        const currentQuestions = questions[currentRoomIndex];
        const currentQuestion = currentQuestions.find(question => question.question === questionContainer.textContent);
        hintContainer.textContent = currentQuestion.hint;
        hintsRemaining--;
    }
}

showQuestion();

submitButton.addEventListener('click', checkAnswer);
hintButton.addEventListener('click', showHint);
window.addEventListener('DOMContentLoaded', startCountdown);
window.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    document.querySelector('.room').classList.add('active');
});
