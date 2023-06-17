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
const rooms = ['Firewall', 'Encriptación', 'Auditoría de Seguridad'];
let currentRoomIndex = 0;

const questions = [
     // Sala 1 - Firewall
     [
        {
            question: '¿El Firewall protege la red?',
            answer: 'Sí',
            hint: 'El firewall en terminos generales es una barrera de seguridad'
        },
        {
            question: '¿El Firewall puede bloquear tráfico malicioso?',
            answer: 'Sí',
            hint: 'El firewall en terminos generales es una barrera de seguridad'
        }
    ],

    // Sala 2 - Encriptación
    [
        {
            question: '¿El cifrado asimétrico es más seguro que el simétrico?',
            answer: 'Sí',
            hint: 'Piensa que es más seguro no enviar la contraseña'
        },
        {
            question: 'En el cifrado asimétrico tienes dos claves que juntas desencriptan el mensaje',
            answer: 'Sí',
            hint: 'Clave pública y privada'
        }
    ],

    // Sala 3 - Auditoría de Seguridad
    [
        {
            question: '¿Es recomendable tener copias de seguridad de los datos sensibles?',
            answer: 'Sí',
            hint: 'Qué pasaría si perdemos todos los datos?'
        },
        {
            question: '¿Es recomendable hacer click en enlaces de correos electrónicos de remitentes desconocidos?',
            answer: 'No',
            hint: 'Nunca sabemos qué puede haber detrás de un enlace'
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
        questionContainer.textContent = '¡Has escapado con éxito! tu URL es: /ciberpruebas/';
        window.location.href = "../ciberpruebas";
    } else {
        questionContainer.textContent = 'Has fallado. ¡Mejor suerte la próxima vez! Puedes recargar...';
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