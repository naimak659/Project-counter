let down = document.querySelector(".reset");
let numberDisplay = document.querySelector(".number");
let up = document.querySelector(".up");
let upStop = document.querySelector(".upStop");

let num = 0;
let intervalId = null; // Use a variable to store the interval ID

let countUp = () => {
  if (num < 420) {
    num++;
    numberDisplay.innerHTML = num;
    console.log("up True");
  } else {
    console.log("up false");
    clearInterval(intervalId); // Clear interval when num reaches 420
  }
};

let countDown = () => {
  if (num > 0) {
    num--;
    numberDisplay.innerHTML = num;
    console.log("down True");
  } else {
    console.log("down false");
    clearInterval(intervalId); // Clear interval when num reaches 0
  }
};

up.addEventListener("click", () => {
  up.classList.replace("display", "display-none");
  upStop.classList.replace("display-none", "display");
  clearInterval(intervalId); // Clear any existing intervals
  intervalId = setInterval(countUp, 1); // Assign new interval to intervalId
});

upStop.addEventListener("click", () => {
  clearInterval(intervalId); // Clear the counting interval
  upStop.classList.replace("display", "display-none");
  up.classList.replace("display-none", "display");
});

down.addEventListener("click", () => {
  clearInterval(intervalId); // Clear any existing intervals
  intervalId = setInterval(countDown, 1); // Assign new interval to intervalId
  upStop.classList.replace("display", "display-none");
  up.classList.replace("display-none", "display");
});
