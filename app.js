/***** VARIABLES *****/

//start and end screen
const start = document.querySelector(".start");
const end = document.querySelector(".end");

//start, guess, and restart buttons
const btnStart = document.querySelector(".btn-start");
const btnGuess = document.querySelector(".btn-guess");
const btnRestart = document.querySelector(".btn-restart");

//game screen elements
const input = document.querySelector(".input");
let feedback = document.querySelector(".feedback");
let counter = document.querySelector(".counter");
let less = document.querySelector(".less");
let more = document.querySelector(".more");

let counterInterval;
let numCounter;

//creating random number of the game
let randomNum = Math.floor(Math.random() * 101);

//event listeners of buttons
btnStart.addEventListener("click", startTheGame);
btnGuess.addEventListener("click", checkNum);
btnRestart.addEventListener("click", startTheGame);

function startTheGame() {
  numCounter = 5;
  counter.innerHTML = numCounter;
  start.style.visibility = "hidden";
  end.style.visibility = "hidden";
  counterInterval = setInterval(() => {
    numCounter--;
    counter.innerHTML = numCounter;
    if (numCounter <= 0) {
      feedback.innerHTML = "Time is up!!!";
      stopTheGame();
    }
  }, 1000);
}

function checkNum() {
  let inputNum = Number(input.value);
  if (inputNum > randomNum) {
    feedback.innerHTML = "Your prediction is too high";
    more.innerHTML = "< " + inputNum;
    input.value = "";
  } else if (randomNum > inputNum) {
    feedback.innerHTML = "Your prediction is too low";
    less.innerHTML = inputNum + " <";
    input.value = "";
  } else {
    feedback.innerHTML = "You win!!!";
  }
}

function stopTheGame() {
  clearInterval(counterInterval);
  setTimeout(() => {
    end.style.visibility = "visible";
  }, 3000);
}
