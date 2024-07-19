function refreshPage() {
    window.location.reload();
}

function choice(n) {
    return Math.floor(Math.random() * n)
}

var fontarr = [
    "font-family: SHKT25\tA",
    "font-family: SHKT25\tBauklotz",
    "font-family: SHKT25\tBirne",
    "font-family: SHKT25\tBrick",
    "font-family: SHKT25\tCloud",
    "font-family: SHKT25\tCircle",
    "font-family: SHKT25\tDiamant-Fläche",
    "font-family: SHKT25\tDiamant",
    "font-family: SHKT25\tEnte",
    "font-family: SHKT25\tExplosion",
    "font-family: SHKT25\tFlower",
    "font-family: SHKT25\tFeuerwerk",
    "font-family: SHKT25\tFrame",
    "font-family: SHKT25\tHand",
    "font-family: SHKT25\tGhost",
    "font-family: SHKT25\tHeart",
    "font-family: SHKT25\tHand",
    "font-family: SHKT25\tKontur-Einfach",
    "font-family: SHKT25\tKontur-Doppelt",
    "font-family: SHKT25\tKontur-Fett-Gedreht",
    "font-family: SHKT25\tKontur-Fett",
    "font-family: SHKT25\tOhr",
    "font-family: SHKT25\tSound",
    "font-family: SHKT25\tSpiral",
    "font-family: SHKT25\tSplash",
    "font-family: SHKT25\tSpot",
    "font-family: SHKT25\tSquare",
    "font-family: SHKT25\tStreifen",
    "font-family: SHKT25\tSun",
    "font-family: SHKT25\tUhr",
    "font-family: SHKT25\tVinyl",
    "font-family: SHKT25\tWürfel",
    "font-family: SHKT25\tZaun"
];

function change() {
    var output = "";

    var firstcharacter = Math.round(Math.random());
    var fontarrCopy = fontarr.slice();

    var input1 = document.getElementById('inpt');
    input1.textContent = input1.textContent.split('').map((v) =>
        Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()
    ).join('');

    var input2 = document.getElementById('inpt2');
    input2.textContent = input2.textContent.split('').map((v) =>
        Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()
    ).join('');

    var inputText1 = document.getElementById("inpt").innerText;
    var inputText2 = document.getElementById("inpt2").innerText;

    for (i = 0; i < inputText1.length; i++) {
        if (i % 2 == firstcharacter && fontarrCopy.length > 0) {
            auswahl = 1 + choice(fontarrCopy.length - 1)
            var schnitt = fontarrCopy[auswahl]
            fontarrCopy.splice(auswahl, 1);
        } else {
            var schnitt = fontarr[0]
        }

        output += "<span style=\"" + schnitt + "\">" + inputText1[i] + "</span>";
    }
    
    console.log(inputText1);
    console.log(output);
    document.getElementById("inpt").innerHTML = output;

    output = ""; // Reset output for the second input
    fontarrCopy = fontarr.slice(); // Reset fontarrCopy for the second input

    for (i = 0; i < inputText2.length; i++) {
        if (i % 3 == firstcharacter && fontarrCopy.length > 0) {
            auswahl = 1 + choice(fontarrCopy.length - 1)
            var schnitt = fontarrCopy[auswahl]
            fontarrCopy.splice(auswahl, 1);
        } else {
            var schnitt = fontarr[0]
        }

        output += "<span style=\"" + schnitt + "\">" + inputText2[i] + "</span>";
    }

    console.log(inputText2);
    console.log(output);
    document.getElementById("inpt2").innerHTML = output;
}
