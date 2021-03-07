/***** VARIABLES *****/

//start and end screen
const start = document.querySelector(".start");
const end = document.querySelector(".end");

//start, guess, and restart buttons
const btnStart = document.querySelector(".btn-start");
const btnGuess = document.querySelector(".btn-guess");
const btnRestart = document.querySelector(".btn-restart");

//game screen elements
let input = document.querySelector(".input");
let feedback = document.querySelector(".feedback");
let counter = document.querySelector(".counter");
let less = document.querySelector(".less");
let more = document.querySelector(".more");

//end screen feedback
let endFeedback = document.querySelector(".end-feedback");

let counterInterval;
//game time
let numCounter;

//creating random number of the game
let randomNum;

/***** FUNCTIONS *****/

//event listeners of buttons
btnStart.addEventListener("click", startTheGame);
btnGuess.addEventListener("click", checkNum);
btnRestart.addEventListener("click", startTheGame);

function startTheGame() {
  randomNum = Math.floor(Math.random() * 100);
  numCounter = 100;
  input.value = "";
  feedback.innerHTML = "Hurry Up! You have a limited time.";
  counter.innerHTML = numCounter;
  less.innerHTML = "00 <";
  more.innerHTML = "< 99";
  start.style.visibility = "hidden";
  end.style.visibility = "hidden";
  counterInterval = setInterval(() => {
    numCounter--;
    counter.innerHTML = numCounter;
    if (numCounter <= 0) {
      feedback.innerHTML = "Time is up!!!";
      stopTheGame();
      endFeedback.innerHTML = "I trust you will achieve this time.";
    }
  }, 1000);
}

function checkNum() {
  let inputNum = Number(input.value);
  if (inputNum >= 0 && inputNum < 100) {
    if (inputNum > randomNum) {
      feedback.innerHTML = "Your prediction is too high";
      if (inputNum >= 10) {
        more.innerHTML = "< " + inputNum;
      } else {
        more.innerHTML = "< 0" + inputNum;
      }
    } else if (randomNum > inputNum) {
      feedback.innerHTML = "Your prediction is too low";
      if (inputNum >= 10) {
        less.innerHTML = inputNum + " <";
      } else {
        less.innerHTML = "0" + inputNum + " <";
      }
    } else {
      feedback.innerHTML = "You win!!!";
      stopTheGame();
      endFeedback.innerHTML = "Champion, do you want to continue?";
    }
  } else {
    feedback.innerHTML = "Out of the range. Please guess between 0 and 99";
  }
  input.value = "";
}

function stopTheGame() {
  clearInterval(counterInterval);
  setTimeout(() => {
    end.style.visibility = "visible";
  }, 1500);
}
