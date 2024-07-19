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




function basic() {
    var elements = ["inpt", "inpt2"];

    elements.forEach(function(id) {
        var output = "";
        var input = document.getElementById(id).innerText;

        for (var i = 0; i < input.length; i++) {
            var schnitt = fontarr[0];
            output += "<span style=\"" + schnitt + "\">" + input[i] + "</span>";
        }

        console.log(output);
        document.getElementById(id).innerHTML = output;
    });
}

