document.addEventListener("DOMContentLoaded", function() {
    const emails = [
    {
    subject: "Important Account Notification",
    sender: "noreply@yourbank.com",
    body: "Dear customer, we have detected suspicious activity in your account. Click the link to verify your information.",
    isPhishing: true
    },
    // Add more emails here
    ];
    let currentEmailIndex = 0;
    const emailSubject = document.getElementById("email-subject");
    const emailSender = document.getElementById("email-sender");
    const emailBody = document.getElementById("email-body");
    const guessInput = document.getElementById("guess-input");
    const guessButton = document.getElementById("guess-button");
    const result1 = document.getElementById("result1");
    const nextButton = document.getElementById("next-button");
    // Function to display the current email
    function displayCurrentEmail() {
    const currentEmail = emails[currentEmailIndex];
    emailSubject.textContent = "Subject: " + currentEmail.subject;
    emailSender.textContent = "From: " + currentEmail.sender;
    emailBody.textContent = "Body: " + currentEmail.body;
    }
    // Function to check the player's guess
    function checkGuess() {
    const currentEmail = emails[currentEmailIndex];
    const guess = guessInput.value.toLowerCase();
    const isCorrect = (guess === "yes" && currentEmail.isPhishing) || (guess === "no" && !currentEmail.isPhishing);
    if (isCorrect) {
    result1.textContent = "Correcto! Este email es " + (currentEmail.isPhishing ? "phishing." + " La letra para continuar con el juego es 'O' " : "real.");
    } else {
    result1.textContent = "Incorrecto! Este email es " + (currentEmail.isPhishing ? "phishing." : "real");
    }
    }
    // Function to proceed to the next email
    function nextEmail() {
    currentEmailIndex++;
    if (currentEmailIndex >= emails.length) {
    // Game over
    emailSubject.textContent = "";
    emailSender.textContent = "";
    emailBody.textContent = "";
    guessInput.style.display = "none";
    guessButton.style.display = "none";
    result1.textContent = "";
    nextButton.style.display = "none";
    } else {
    // Display the next email
    displayCurrentEmail();
    guessInput.value = "";
    result1.textContent = "";
    }
    }
    // Event listener for the guess button
    guessButton.addEventListener("click", function() {
    checkGuess();
    });
    // Event listener for the next button
    //nextButton.addEventListener("click", function() {
    //nextEmail();
    //});
    // Start the game by displaying the first email
    displayCurrentEmail();
    });
