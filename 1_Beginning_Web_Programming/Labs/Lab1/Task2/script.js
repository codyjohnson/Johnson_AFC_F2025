// script.js
// Name: Cody Johnson
// Lab2 - Simple Interest Calculator

// Names function called calculateSimpleInterest that takes three parameters, principal, rate, and time. This function takes the provided arguments, multiplies
// them all together and then divides the product by 100. The function then returns the calculated simple interest as a Number.
function calculateSimpleInterest(principal, rate, time) {
    // Mathematical formula that uses three arguments provided to the parameters of principal, rate, and time to calculate the simple interest amount.
    // The amount of simple interest is then returned as a Number.
    return (principal * rate * time) / 100;
}

// This statement is used to obtain the principal amount for use in the calculateSimpleInterest function.
// It displays a string to the user, gathers input in a prompt via the keyboard, converts input to a number, and then stores the result in constant principal.
const principal = Number(prompt("Enter the principal amount:"));

// This statement is used to obtain the rate amount for use in the calculateSimpleInterest function.
// It displays a string to the user, gathers input in a prompt via the keyboard, converts input to a number, and then stores the result in constant rate.
const rate = Number(prompt("Enter the rate of interest:"));

// This statement is used to obtain a time value for use in the calculateSimpleInterest function.
// It displays a string to the user, gathers input in a prompt via the keyboard, converts input to a number, and then stores the result in constant time.
const time = Number(prompt("Enter the time in years:"));

// In this statement, the "calculateSimpleInterest" function is called. All three gathered values are passed into the function as arguments for use in the calculation.
// The value returned from the function is then stored in a constant called interest.
const interest = calculateSimpleInterest(principal, rate, time);

// This statement accesses the value of the interest constant, and then prints a String value along with the interest value to the console for the user.
// Both arguments gets printed together to the console seperated by a space.
console.log("Your simple interest is:", interest);