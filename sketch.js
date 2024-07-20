function getComputedFontSize(sizeType) {
  const rootStyles = getComputedStyle(document.documentElement);
  const sizeMap = {
    'large': '--font-size-large',
    'medium': '--font-size-medium',
    'small': '--font-size-small',
    'small-mobile': '--font-size-small-mobile',
    'x-small': '--font-size-x-small',
    'button': '--font-size-button',
    'infotext': '--font-size-infotext',
    'my-div': '--font-size-mydiv'
  };

  return rootStyles.getPropertyValue(sizeMap[sizeType]).trim();
}

function clearFirst() {
  document.getElementById("inpt").innerHTML = "";
  document.getElementById("inpt2").innerHTML = "";
  input.style.fontSize = getComputedFontSize('large');
  input2.style.fontSize = getComputedFontSize('large');
}

function getFontSize() {
  let zeichenzahl = document.getElementById('inpt').innerHTML.length;
  let zeichenzahl2 = document.getElementById('inpt2').innerHTML.length;
  let actualSize = 70; // Sie können diesen Wert anpassen, wenn Sie möchten.

  if (zeichenzahl < 8) {
    input.style.fontSize = `${Math.max(actualSize - (zeichenzahl * 6), 16)}vh`; // Mindestgröße anpassen
  } else {
    input.style.fontSize = getComputedFontSize('small');
  }

  if (zeichenzahl2 < 8) {
    input2.style.fontSize = `${Math.max(actualSize - (zeichenzahl2 * 6), 16)}vh`; // Mindestgröße anpassen
  } else {
    input2.style.fontSize = getComputedFontSize('small');
  }
}

function clearBox(output) {
  location.reload();
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
  element.style.fontSize = "5vw";
  element.style.letterSpacing = 0;
  element2.style.fontSize = "5vw";
  element2.style.letterSpacing = 0;
}

const input = document.querySelector('#inpt');
const input2 = document.querySelector('#inpt2');

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
  input2.innerHTML = this.innerHTML;
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
