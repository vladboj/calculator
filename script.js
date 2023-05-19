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
      console.log("ERROR! Invalid operator\n");
  }
}

// POPULATE DISPLAY WHEN YOU CLICK THE NUMBER BUTTONS
const digitButtons = document.querySelectorAll(".digit");
const displayText = document.querySelector(".display > p");

digitButtons.forEach((digitButton) => {
  digitButton.addEventListener("click", () => {
    const digit = digitButton.textContent;
    displayText.textContent += digit;
  });
});

// ADD EVENT LISTENER TO THE OPERATORS
const operatorButtons = document.querySelectorAll(".operator");
let firstNum, operator, secondNum;

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    firstNum = parseInt(displayText.textContent);
    operator = operatorButton.textContent;
    displayText.textContent += ` ${operator} `;
  });
});

// ADD EVENT LISTENER TO EQUAL AND FINISH OPERATION
const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
  secondNum = parseInt(
    displayText.textContent.slice(displayText.textContent.indexOf(operator) + 2)
  );
  const result = operate(firstNum, operator, secondNum);
  displayText.textContent += ` = ${result}`;
});
