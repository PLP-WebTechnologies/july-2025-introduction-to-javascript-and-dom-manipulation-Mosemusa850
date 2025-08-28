//script.js

// Part 1: Mastering JavaScript Basics
// Declare variables and handle user input with conditionals
const submitBtn = document.getElementById("submitBtn");
const userNameInput = document.getElementById("userName");
const userNumberInput = document.getElementById("userNumber");
const output = document.getElementById("output");

submitBtn.addEventListener("click", () => {
  const userName = userNameInput.value.trim();
  const userNumber = Number(userNumberInput.value);

  // Conditional logic to display a message
  if (!userName || isNaN(userNumber)) {
    output.textContent = "Please enter a valid name and number.";
  } else if (userNumber > 10) {
    output.textContent = `Hi ${userName}, your number (${userNumber}) is greater than 10!`;
  } else {
    output.textContent = `Hi ${userName}, your number (${userNumber}) is 10 or less.`;
  }
});

// Part 2: JavaScript Functions - Reusable logic
// Function 1: Calculate the square of a number
function calculateSquare(num) {
  return num * num;
}

// Function 2: Format a greeting message
function formatGreeting(name, number) {
  return `Hello, ${name}! Your number squared is ${calculateSquare(number)}.`;
}

// Display square result for user input
submitBtn.addEventListener("click", () => {
  const userNumber = Number(userNumberInput.value);
  const userName = userNameInput.value.trim();
  const squareOutput = document.getElementById("squareResult");
  if (!isNaN(userNumber) && userName) {
    squareOutput.textContent = formatGreeting(userName, userNumber);
  } else {
    squareOutput.textContent = "Enter a valid number for squaring.";
  }
});

// Part 3: JavaScript Loops - Repetition
// Loop 1: Generate a list of numbers using a for loop
const listOutput = document.getElementById("listOutput");
let numberList = "";
for (let i = 1; i <= 5; i++) {
  numberList += `${i} `;
}
listOutput.textContent = `Numbers 1 to 5: ${numberList}`;

// Loop 2: Iterate over an array using forEach
const messages = ["Welcome!", "Keep coding!", "JavaScript rocks!"];
messages.forEach((msg, index) => {
  console.log(`Message ${index + 1}: ${msg}`);
});

// Part 4: Mastering the DOM
// DOM Interaction 1: Toggle background color
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("toggled");
});

// DOM Interaction 2: Add a new element dynamically
const addElementBtn = document.getElementById("addElementBtn");
const dynamicContent = document.getElementById("dynamicContent");
let elementCount = 0;
addElementBtn.addEventListener("click", () => {
  const newElement = document.createElement("p");
  newElement.textContent = `New Element ${++elementCount} added!`;
  dynamicContent.appendChild(newElement);
});

// DOM Interaction 3: Update content on click
dynamicContent.addEventListener("click", () => {
  dynamicContent.textContent = "You clicked the dynamic content area!";
});