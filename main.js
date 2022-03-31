//sound
const tick = new Audio("sounds/tick.mp3");
const tock = new Audio("sounds/tock.mp3");
const hihat = new Audio("sounds/hi-hat.mp3");
const snare = new Audio("sounds/snare-drum.mp3");
const kick = new Audio("sounds/kick-drum.mp3");
const stopBeat = document.querySelector("stop");

//counter
let counterArea = document.getElementById("counter-area");

//tick counter
let tickNum = 0;
let counterNum = 1;

//set drum-count beats
let snareBeat = document.getElementById("snare-count");
let hihatBeat = document.getElementById("hihat-count");
let kickBeat = document.getElementById("kick-count");

//check the check box for each instrument
let playKickdrum = document.getElementById("kickdrum-checkbox");
let playMetro = document.getElementById("metronome-checkbox");
let playSnare = document.getElementById("snaredrum-checkbox");
let playHiha = document.getElementById("hihat-checkbox");

// This function is called every 600ms
function update() {
  if (tickNum === 4) {
    tickNum = 0;
    counterNum = tickNum + 1;
  }
  tickNum += 1;
  checkSetBeat();
  playMetronome();
  playSnareDrum();
  playHiHat();
  playKick();

  counterArea.innerText = tickNum;
}

function playMetronome() {
  if (playMetro.checked) {
    if (tickNum < 4) {
      tick.load();
      tick.play();
    }
    // Play the 'tock' sound
    if (tickNum === 4) {
      tock.load();
      tock.play();
    }
  }
}

function playSnareDrum() {
  if (playSnare.checked) {
    if (Number(snareBeat.value) === tickNum) {
      snare.load();
      snare.play();
    }
  }
}

function playHiHat() {
  if (playHiha.checked) {
    if (Number(hihatBeat.value) === tickNum) {
      hihat.load();
      hihat.play();
    }
  }
}

function playKick() {
  if (playKickdrum.checked) {
    if (Number(kickBeat.value) === tickNum) {
      kick.load();
      kick.play();
    }
  }
}

//plays the sound on beat chosen
function checkSetBeat() {
  snareBeat = document.getElementById("snare-count");
  hihatBeat = document.getElementById("hihat-count");
  kickBeat = document.getElementById("kick-count");
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
  setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);

//make the beat stop after
stopBeat.addEventListener("click", function () {
  stopBeat.pause();
  stopBeat.currentTime = 0;
});
