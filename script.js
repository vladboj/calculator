function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//////////////////////////////////

function operate(firstNum, operator, secondNum) {
  switch (operator) {
    case "+":
      return add(firstNum, secondNum);
    case "-":
      return subtract(firstNum, secondNum);
    case "*":
      return multiply(firstNum, secondNum);
    case "/":
      return divide(firstNum, secondNum);
    default:
      console.log("ERROR! Operator invalid\n");
  }
}

let firstNum, operator, secondNum;

// POPULATE DISPLAY WHEN YOU CLICK THE NUMBER BUTTONS
const digitButtons = document.querySelectorAll(".digit");
const displayText = document.querySelector(".display > p");

digitButtons.forEach((digitButton) => {
  digitButton.addEventListener("click", () => {
    const digit = digitButton.textContent;
    displayText.textContent += digit;
  });
});
