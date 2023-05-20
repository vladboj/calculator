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

// ADD EVENT LISTENER TO THE OPERATORS AND COMPUTE THE RESULT OF EACH OPERATION
const operatorButtons = document.querySelectorAll(".operator");
let firstNum = 0,
  secondNum,
  operator,
  lastOperator;

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    operator = operatorButton.textContent;

    if (firstNum === 0) firstNum = parseInt(displayText.textContent);
    else
      firstNum = operate(
        firstNum,
        lastOperator,
        parseInt(
          displayText.textContent.slice(
            displayText.textContent.lastIndexOf(lastOperator) + 2
          )
        )
      );
    displayText.textContent += ` ${operator} `;

    lastOperator = operator;
  });
});

// ADD EVENT LISTENER TO EQUAL AND FINISH OPERATION
const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
  const displayTextArray = displayText.textContent.split(" ");
  let lastString = displayTextArray[displayTextArray.length - 1];
  if (lastString === "") lastString = lastOperator;
  const operators = ["+", "-", "*", "/"];

  if (operators.includes(lastString) || displayTextArray.length === 1) {
    alert("You entered an invalid operation!");
    return;
  }

  secondNum = parseInt(
    displayText.textContent.slice(
      displayText.textContent.lastIndexOf(operator) + 2
    )
  );
  const result = operate(firstNum, operator, secondNum);
  displayText.textContent += ` = ${result}`;
});
