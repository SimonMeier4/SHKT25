function refreshPage() {
    window.location.reload();
}

function choice(n) {
    return Math.floor(Math.random() * n);
}

var fonts = [
    { name: "SHKT25-A", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-A.woff" },
    { name: "SHKT25-Apricot", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Apricot.woff" },
    { name: "SHKT25-Balloon", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Balloon.woff" },
    { name: "SHKT25-Bauklotz", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Bauklotz.woff" },
    { name: "SHKT25-Bewegung", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Bewegung.woff" },
    { name: "SHKT25-Birne", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Birne.woff" },
    { name: "SHKT25-Bock", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Bock.woff" },
    { name: "SHKT25-Book", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Book.woff" },
    { name: "SHKT25-Brick", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Brick.woff" },
    { name: "SHKT25-Cloud", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Cloud.woff" },
    { name: "SHKT25-Circle", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Circle.woff" },
    { name: "SHKT25-Diamant-Fläche", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Diamant-Fläche.woff" },
    { name: "SHKT25-Diamant", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Diamant.woff" },
    { name: "SHKT25-Dimension-rechts", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Dimension-rechts.woff" },
    { name: "SHKT25-Dimension-links", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Dimension-links.woff" },
    { name: "SHKT25-Dots", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Dots.woff" },
    { name: "SHKT25-Ente", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Ente.woff" },
    { name: "SHKT25-Explosion", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Explosion.woff" },
    { name: "SHKT25-Extrude", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Extrude.woff" },
    { name: "SHKT25-Flower", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Flower.woff" },
    { name: "SHKT25-Fenster", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Fenster.woff" },
    { name: "SHKT25-Feuerwerk", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Feuerwerk.woff" },
    { name: "SHKT25-Frame", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Frame.woff" },
    { name: "SHKT25-Hand", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Hand.woff" },
    { name: "SHKT25-Hand-Seite", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Hand-Seite.woff" },
    { name: "SHKT25-Ghost", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Ghost.woff" },
    { name: "SHKT25-Heart", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Heart.woff" },
    { name: "SHKT25-Kontur-Doppelt-Fein", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Kontur-Doppelt-Fein.woff" },
    { name: "SHKT25-Kontur-Doppelt", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Kontur-Doppelt.woff" },
    { name: "SHKT25-Kontur-Einfach-Rough", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Kontur-Einfach-Rough.woff" },
    { name: "SHKT25-Kontur-Einfach", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Kontur-Einfach.woff" },
    { name: "SHKT25-Kontur-Fett-Gedreht", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Kontur-Fett-Gedreht.woff" },
    { name: "SHKT25-Kontur-Fett", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Kontur-Fett.woff" },
    { name: "SHKT25-Kontur-Minimal-Rough", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Kontur-Minimal-Rough.woff" },
    { name: "SHKT25-Kontur-Minimal", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Kontur-Minimal.woff" },
    { name: "SHKT25-Quadrat", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Quadrat.woff" },
    { name: "SHKT25-Raster", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Raster.woff" },
    { name: "SHKT25-Rough", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Rough.woff" },
    { name: "SHKT25-Schraffur", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Schraffur.woff" },
    { name: "SHKT25-Spiderman", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Spiderman.woff" },
    { name: "SHKT25-Sound", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Sound.woff" },
    { name: "SHKT25-Spiral", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Spiral.woff" },
    { name: "SHKT25-Splash", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Splash.woff" },
    { name: "SHKT25-Spot", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Spot.woff" },
    { name: "SHKT25-Square", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Square.woff" },
    { name: "SHKT25-Streifen", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Streifen.woff" },
    { name: "SHKT25-Sun", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Sun.woff" },
    { name: "SHKT25-Traube", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Traube.woff" },
    { name: "SHKT25-Vertikal", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Vertikal.woff" },
    { name: "SHKT25-Vinyl", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Vinyl.woff" },
    { name: "SHKT25-Vorhang", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Vorhang.woff" },
    { name: "SHKT25-Wolken", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Wolken.woff" },
    { name: "SHKT25-Wuerfel", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Wuerfel.woff" },
    { name: "SHKT25-Zaun", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Zaun.woff" }
];

// Funktion zum Hinzufügen der @font-face Regel für jede Schriftart
fonts.forEach(font => {
    const style = document.createElement('style');
    style.innerHTML = `
    @font-face {
        font-family: "${font.name}";
        font-style: normal;
        src: url('${font.url}') format('woff');
        font-weight: normal;
    }
    `;
    document.head.appendChild(style);
});

function change() {
    var output = "";

    var firstcharacter = Math.round(Math.random());
    var fontsCopy = fonts.slice();

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

    for (var i = 0; i < inputText1.length; i++) {
        var font;
        if (i % 2 == firstcharacter && fontsCopy.length > 0) {
            var auswahl = choice(fontsCopy.length);
            font = fontsCopy[auswahl];
            fontsCopy.splice(auswahl, 1);
        } else {
            font = fonts[0];
        }

        output += `<span style="font-family: '${font.name}', 'SHKT25-A'">${inputText1[i]}</span>`;
    }

    console.log(inputText1);
    console.log(output);
    document.getElementById("inpt").innerHTML = output;

    output = ""; // Reset output for the second input
    fontsCopy = fonts.slice(); // Reset fontsCopy for the second input

    for (var i = 0; i < inputText2.length; i++) {
        var font;
        if (i % 3 == firstcharacter && fontsCopy.length > 0) {
            var auswahl = choice(fontsCopy.length);
            font = fontsCopy[auswahl];
            fontsCopy.splice(auswahl, 1);
        } else {
            font = fonts[0];
        }

        output += `<span style="font-family: '${font.name}', 'SHKT25-A'">${inputText2[i]}</span>`;
    }

    console.log(inputText2);
    console.log(output);
    document.getElementById("inpt2").innerHTML = output;
}