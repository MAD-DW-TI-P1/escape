const inputLetraN = document.getElementById("letraN");
      
inputLetraN.addEventListener("change", function () {
    const valorInputN = letraN.value;
    if (valorInputN=="N"|| valorInputN=="n") {
        document.getElementById("letraN").style.backgroundColor = "green";
    } else {
        document.getElementById("letraN").style.backgroundColor = "red";
}
});

const inputLetraE = document.getElementById("letraE");

inputLetraE.addEventListener("change", function () {
    const valorInputE = inputLetraE.value;
    if (valorInputE=="E"|| valorInputE=="e") {
        document.getElementById("letraE").style.backgroundColor = "green";
    } else {
        document.getElementById("letraE").style.backgroundColor = "red";
}
});

const inputLetraK = document.getElementById("letraK");

inputLetraK.addEventListener("change", function () {
    const valorInputK = inputLetraK.value;
    if (valorInputK=="K"|| valorInputK=="k") {
        document.getElementById("letraK").style.backgroundColor = "green";
    } else {
        document.getElementById("letraK").style.backgroundColor = "red";
}
});


const inputLetraO = document.getElementById("letraO");

inputLetraO.addEventListener("change", function () {
    const valorInputO = inputLetraO.value;
    if (valorInputO=="O"|| valorInputO=="o") {
        document.getElementById("letraO").style.backgroundColor = "green";
    } else {
        document.getElementById("letraO").style.backgroundColor = "red";
}
});

const inputLetraT = document.getElementById("letraT");

inputLetraT.addEventListener("change", function () {
    const valorInputT = inputLetraT.value;
    if (valorInputT=="T"|| valorInputT=="t") {
        document.getElementById("letraT").style.backgroundColor = "green";
    } else {
        document.getElementById("letraT").style.backgroundColor = "red";
}
});       

