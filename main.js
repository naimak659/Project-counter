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
  }
  // else {
  //   clearInterval(intervalId); // Clear interval when num reaches 420
  // }
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
  // CounterPositive.classList.replace("display", "display-none");
  // CounterPositiveStop.classList.replace("display-none", "display");
  countUp();
  // clearInterval(intervalId); // Clear any existing intervals
  // intervalId = setInterval(countUp, 1); // Assign new interval to intervalId
});

// // counter Stop
// CounterPositiveStop.addEventListener("click", () => {
//   clearInterval(intervalId); // Clear the counting interval
//   CounterPositiveStop.classList.replace("display", "display-none");
//   CounterPositive.classList.replace("display-none", "display");
// });

// counter --
reset.addEventListener("click", () => {
  // clearInterval(intervalId); // Clear any existing intervals
  // intervalId = setInterval(countDown, 1); // Assign new interval to intervalId
  // CounterPositiveStop.classList.replace("display", "display-none");
  // CounterPositive.classList.replace("display-none", "display");
  countDown();
});

//
//
let reset2 = document.querySelector(".reset2");
let numberDisplay2 = document.querySelector(".number2");
let CounterPositive2 = document.querySelector(".CounterPositive2");
let CounterPositiveStop2 = document.querySelector(".CounterPositiveStop2");

let num2 = 0;
let intervalId2 = null; // Use a variable to store the interval ID

let countUp2 = () => {
  if (num2 < 420) {
    num2++;
    numberDisplay2.innerHTML = num2;
  }
  // else {
  //   clearInterval(intervalId); // Clear interval when num reaches 420
  // }
};

let countDown2 = () => {
  if (num2 > 0) {
    num2--;
    numberDisplay2.innerHTML = num2;
  } else {
    clearInterval(intervalId2); // Clear interval when num reaches 0
  }
};

// counter ++
CounterPositive2.addEventListener("click", () => {
  // countUp();
  CounterPositive2.classList.replace("display", "display-none");
  CounterPositiveStop2.classList.replace("display-none", "display");
  clearInterval(intervalId2); // Clear any existing intervals
  intervalId2 = setInterval(countUp2, 1); // Assign new interval to intervalId
});

// counter Stop
CounterPositiveStop2.addEventListener("click", () => {
  clearInterval(intervalId2); // Clear the counting interval
  CounterPositiveStop2.classList.replace("display", "display-none");
  CounterPositive2.classList.replace("display-none", "display");
});

// counter --
reset2.addEventListener("click", () => {
  clearInterval(intervalId2); // Clear any existing intervals
  intervalId2 = setInterval(countDown2, 1); // Assign new interval to intervalId
  CounterPositiveStop2.classList.replace("display", "display-none");
  CounterPositive2.classList.replace("display-none", "display");
  // countDown();
});
