let counter = document.querySelector(".counter");
const btn = document.querySelector(".btn");
constsket input = document.querySelector(".input");
let feedback = document.querySelector(".feedback");

let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);

setInterval(() => {
  let num = Number(counter.innerHTML);
  counter.innerHTML;
  num--;
  counter.innerHTML = num;
}, 1000);

btn.addEventListener("click", checkNum);

function checkNum() {
  let inputNum = Number(input.value);

  if (inputNum > randomNum) {
    feedback.innerHTML = "Your prediction is too high";
  } else if (randomNum > inputNum) {
    feedback.innerHTML = "Your prediction is too low";
  } else {
    feedback.innerHTML = "You win!!!";
  }
}
