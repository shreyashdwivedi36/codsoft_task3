const display = document.getElementById("display");
let currentInput = "0";
let operator = "";
let previousInput = "";

function updateDisplay() {
  display.textContent = currentInput;
}

function clearCalculator() {
  currentInput = "0";
  operator = "";
  previousInput = "";
  updateDisplay();
}

function handleNumberClick(value) {
  if (currentInput === "0") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay();
}

function handleOperatorClick(value) {
  operator = value;
  previousInput = currentInput;
  currentInput = "0";
}

function calculateResult() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      break;
  }

  currentInput = result.toString();
  operator = "";
  previousInput = "";
  updateDisplay();
}

document.querySelectorAll(".number").forEach((btn) => {
  btn.addEventListener("click", () => handleNumberClick(btn.value));
});

document.querySelectorAll(".operator").forEach((btn) => {
  btn.addEventListener("click", () => handleOperatorClick(btn.value));
});

document.querySelector(".clear").addEventListener("click", clearCalculator);

document.querySelector(".equal").addEventListener("click", calculateResult);
