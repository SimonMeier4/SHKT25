function clearFirst() {
  document.getElementById("inpt").innerHTML = "";
  document.getElementById("inpt2").innerHTML = "";
  input.style.fontSize = "8vw";  // Angepasst für mobile Geräte
  input2.style.fontSize = "8vw"; // Angepasst für mobile Geräte
}

function getFontSize() {
  let input = document.getElementById('inpt');
  let input2 = document.getElementById('inpt2');
  let word = input.innerText;
  let zeichenzahl = word.length; // Verwenden Sie innerText für Textlänge
  let word2 = input2.innerText;
  let zeichenzahl2 = word2.length;
  
  let minSize = 5; // Minimale Schriftgröße
  let maxSize = 12; // Maximale Schriftgröße
  
  // Schriftgröße relativ zur Bildschirmbreite setzen (8% der Viewport-Breite)
  let actualSize = Math.min(window.innerWidth / 10, maxSize);
  
  if (zeichenzahl < 8) {
    input.style.fontSize = Math.max(actualSize - (zeichenzahl * 0.5), minSize) + "vw";
  } else {
    input.style.fontSize = minSize + "vw";
  }

  if (zeichenzahl2 < 8) {
    input2.style.fontSize = Math.max(actualSize - (zeichenzahl2 * 0.5), minSize) + "vw";
  } else {
    input2.style.fontSize = minSize + "vw";
  }

  console.log(word);
  console.log(word2);
  console.log(input.style.fontSize);
  console.log(input2.style.fontSize);
  console.log(zeichenzahl);
  console.log(zeichenzahl2);
}

function clearBox(output) {
  location.reload();
  // console.log(output);
  // document.getElementById("inpt").innerHTML = "";
  // document.getElementById("inpt2").innerHTML = "";
  // input.style.fontSize = "8vw"; // Angepasst für mobile Geräte
  // input2.style.fontSize = "8vw"; // Angepasst für mobile Geräte
}

var cb = document.getElementById("cb");
cb.addEventListener("click", function() {
  if (cb.innerHTML === "Orange/Blau") { 
      cb.innerHTML = "Violett/Gelb";
      document.getElementById("inpt").style.color = "#ec6608";
      document.getElementById("inpt2").style.color = "#00a2e1";
      document.getElementById("bgc").style.display = 'none';
      document.body.style.backgroundColor = "#00000000";
  } else {
      cb.innerHTML = "Orange/Blau";
      document.getElementById("inpt").style.color = "#625aa4";
      document.getElementById("inpt2").style.color = "#ffe000";
      document.getElementById("bgc").style.display = 'inline';
      document.body.style.backgroundColor = "#00000000";
  }
});

var bgc = document.getElementById("bgc");
bgc.addEventListener("click", function() {
  if (bgc.innerHTML === "Gelb") { 
      bgc.innerHTML = "Weiss";
      document.getElementById("inpt").style.color = "#625aa4";
      document.getElementById("inpt2").style.color = "#ffffff";
      document.body.style.backgroundColor = "#ffe000";
  } else {
      bgc.innerHTML = "Gelb";
      document.getElementById("inpt").style.color = "#625aa4";
      document.getElementById("inpt2").style.color = "#ffe000";
      document.body.style.backgroundColor = "#00000000";
  }
});

function on() {
  document.getElementById("info").style.display = "block";
}

function off() {
  document.getElementById("info").style.display = "none";
}

function changeStyle() {
  var element = document.getElementById("inpt");
  var element2 = document.getElementById("inpt2");
  element.style.fontSize = "5vw"; // Angepasst für mobile Geräte
  element.style.letterSpacing = 0;
  element2.style.fontSize = "5vw"; // Angepasst für mobile Geräte
  element2.style.letterSpacing = 0;
}

input = document.querySelector('#inpt');
input2 = document.querySelector('#inpt2');

settings = {
  maxLen: 40,
}

keys = {
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'delete': 46,
  'leftArrow': 37,
  'upArrow': 38,
  'rightArrow': 39,
  'downArrow': 40,
}

utils = {
  special: {},
  navigational: {},
  isSpecial(e) {
      return typeof this.special[e.keyCode] !== 'undefined';
  },
  isNavigational(e) {
      return typeof this.navigational[e.keyCode] !== 'undefined';
  }
}
utils.special[keys['shift']] = true;
utils.special[keys['ctrl']] = true;
utils.special[keys['alt']] = true;
utils.special[keys['delete']] = true;

utils.navigational[keys['upArrow']] = true;
utils.navigational[keys['downArrow']] = true;
utils.navigational[keys['leftArrow']] = true;
utils.navigational[keys['rightArrow']] = true;

input.addEventListener('keydown', function (event) {
  let len = event.target.innerText.trim().length;
  hasSelection = false;
  selection = window.getSelection();
  isSpecial = utils.isSpecial(event);
  isNavigational = utils.isNavigational(event);

  if (selection) {
      hasSelection = !!selection.toString();
  }

  if (isSpecial || isNavigational) {
      return true;
  }

  if (len >= settings.maxLen && !hasSelection) {
      event.preventDefault();
      return false;
  }
});

input.addEventListener('input', function () {
  document.getElementById('inpt2').innerHTML = this.innerHTML;
  getFontSize();
});

function randomColor() {
  var randomColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
  var randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);

  document.getElementById('inpt').style.color = randomColor1;
  document.getElementById('inpt2').style.color = randomColor2;
}

let myDiv = document.getElementById("my-div");

function isTouchDevice() {
  try {
      document.createEvent("TouchEvent");
      return true;
  } catch (e) {
      return false;
  }
}

const move = (e) => {
  try {
      var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
      var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) {}
  myDiv.style.left = x - 50 + "px";
  myDiv.style.top = y - 50 + "px";
};

document.addEventListener("mousemove", (e) => {
  move(e);
});

document.addEventListener("touchmove", (e) => {
  move(e);
});