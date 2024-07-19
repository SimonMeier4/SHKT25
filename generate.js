function refreshPage() {
    window.location.reload();
}

function choice(n) {
    return Math.floor(Math.random() * n)
}

var fonts = [
    { name: "SHKT25-A", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-A.woff" },
    { name: "SHKT25-Bauklotz", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Bauklotz.woff" },
    { name: "SHKT25-Birne", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Birne.woff" },
    { name: "SHKT25-Brick", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Brick.woff" },
    { name: "SHKT25-Cloud", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Cloud.woff" },
    { name: "SHKT25-Circle", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Circle.woff" },
    { name: "SHKT25-Diamant-Fläche", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Diamant-Fläche.woff" },
    { name: "SHKT25-Diamant", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Diamant.woff" },
    { name: "SHKT25-Ente", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Ente.woff" },
    { name: "SHKT25-Explosion", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Explosion.woff" },
    { name: "SHKT25-Flower", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Flower.woff" },
    { name: "SHKT25-Feuerwerk", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Feuerwerk.woff" },
    { name: "SHKT25-Frame", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Frame.woff" },
    { name: "SHKT25-Ghost", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Ghost.woff" },
    { name: "SHKT25-Heart", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Heart.woff" },
    { name: "SHKT25-Hand", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Hand.woff" },
    { name: "SHKT25-Kontur-Einfach", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Kontur-Einfach.woff" },
    { name: "SHKT25-Kontur-Doppelt", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Kontur-Doppelt.woff" },
    { name: "SHKT25-Kontur-Fett-Gedreht", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Kontur-Fett-Gedreht.woff" },
    { name: "SHKT25-Kontur-Fett", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Kontur-Fett.woff" },
    { name: "SHKT25-Ohr", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Ohr.woff" },
    { name: "SHKT25-Sound", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Sound.woff" },
    { name: "SHKT25-Spiral", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Spiral.woff" },
    { name: "SHKT25-Splash", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Splash.woff" },
    { name: "SHKT25-Spot", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Spot.woff" },
    { name: "SHKT25-Square", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Square.woff" },
    { name: "SHKT25-Streifen", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Streifen.woff" },
    { name: "SHKT25-Sun", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Sun.woff" },
    { name: "SHKT25-Uhr", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Uhr.woff" },
    { name: "SHKT25-Vinyl", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Vinyl.woff" },
    { name: "SHKT25-Würfel", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Würfel.woff" },
    { name: "SHKT25-Zaun", url: "https://simonmeier4.github.io/SKT_woff/SHKT25-Zaun.woff" }
  ];
  
  // Funktion zum Hinzufügen der @font-face Regel für jede Schriftart
  fonts.forEach(font => {
    const style = document.createElement('style');
    style.innerHTML = `
      @font-face {
        font-family: "${font.name}";
        src: url('${font.url}') format('woff');
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

    for (i = 0; i < inputText1.length; i++) {
        if (i % 2 == firstcharacter && fontsCopy.length > 0) {
            auswahl = 1 + choice(fontsCopy.length - 1)
            var schnitt = fontsCopy[auswahl]
            fontsCopy.splice(auswahl, 1);
        } else {
            var schnitt = fonts[0]
        }

        output += "<span style=\"" + schnitt + "\">" + inputText1[i] + "</span>";
    }
    
    console.log(inputText1);
    console.log(output);
    document.getElementById("inpt").innerHTML = output;

    output = ""; // Reset output for the second input
    fontsCopy = fonts.slice(); // Reset fontsCopy for the second input

    for (i = 0; i < inputText2.length; i++) {
        if (i % 3 == firstcharacter && fontsCopy.length > 0) {
            auswahl = 1 + choice(fontsCopy.length - 1)
            var schnitt = fontsCopy[auswahl]
            fontsCopy.splice(auswahl, 1);
        } else {
            var schnitt = fonts[0]
        }

        output += "<span style=\"" + schnitt + "\">" + inputText2[i] + "</span>";
    }

    console.log(inputText2);
    console.log(output);
    document.getElementById("inpt2").innerHTML = output;
}
