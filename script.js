// Pseudocode for age calculator
// 1. Get the user's birth year and current year as input.
// 2. Calculate the age by subtracting the birth year from the current year.
// 3. Display the calculated age to the user.

function calculateAge() {
    const birthYearInput = document.getElementById("birth-year");
    const currentYearInput = document.getElementById("current-year");
    const resultElement = document.getElementById("result");
  
    const birthYear = parseInt(birthYearInput.value);
    const currentYear = parseInt(currentYearInput.value);
  
    // Input validation
    if (isNaN(birthYear) || isNaN(currentYear)) {
      resultElement.textContent = "Please enter valid birth year and current year.";
      return;
    }
  
    const age = currentYear - birthYear;
    resultElement.textContent = `Your age is ${age} years old.`;
  }
  