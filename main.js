let reset = document.querySelector(".reset");
let numberDisplay = document.querySelector(".number");
let CounterPositive = document.querySelector(".CounterPositive");
let CounterPositiveStop = document.querySelector(".CounterPositiveStop");

let num = 0;
let intervalId = null; // Use a variable to store the interval ID

let countUp = () => {
  if (num < 420) {
    num++;
    numberDisplay.innerHTML = num;
  } else {
    clearInterval(intervalId); // Clear interval when num reaches 420
  }
};

let countDown = () => {
  if (num > 0) {
    num--;
    numberDisplay.innerHTML = num;
  } else {
    clearInterval(intervalId); // Clear interval when num reaches 0
  }
};

// counter ++
CounterPositive.addEventListener("click", () => {
  CounterPositive.classList.replace("display", "display-none");
  CounterPositiveStop.classList.replace("display-none", "display");
  clearInterval(intervalId); // Clear any existing intervals
  intervalId = setInterval(countUp, 1); // Assign new interval to intervalId
});

// counter Stop
CounterPositiveStop.addEventListener("click", () => {
  clearInterval(intervalId); // Clear the counting interval
  CounterPositiveStop.classList.replace("display", "display-none");
  CounterPositive.classList.replace("display-none", "display");
});

// counter --
reset.addEventListener("click", () => {
  clearInterval(intervalId); // Clear any existing intervals
  intervalId = setInterval(countDown, 1); // Assign new interval to intervalId
  CounterPositiveStop.classList.replace("display", "display-none");
  CounterPositive.classList.replace("display-none", "display");
});
