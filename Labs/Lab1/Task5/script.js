// script.js
// Name: Cody Johnson
// Task5 - Temperature Classifier

// Named function called classifyTemperature with one parameter called celsius. This function is used to receive a temperature in celsius, validate
// the input, convert the input into fahrenheit, classify the temperature based on a series of conditional checks, and then returns a string temperature
// category value.
function classifyTemperature(celsius) {
    // This statement takes the provided argument, executes the required mathematical operations to convert from celsius to fahrenheit, and then assigns
    // the calculated value to a constant called fahrenheit.
    const fahrenheit = (celsius * (9 / 5)) + 32;

    // The section of code takes the calculated value fahrenheit, and performs a number of conditional checks on the value. Any number over 100 will be hot.
    // Not including 100. Any value over 80 up to and including 100 will produce warm. Any value from 40, including 40 up to 80, including 80 will be chilly.
    // Any value below 40 will produce cold. The string is then returned from the function to where it was originally called.
    if (fahrenheit > 100) {
        return "Hot";
    } else if (fahrenheit > 80) {
        return "Warm";
    } else if (fahrenheit < 40) {
        return "Cold";
    } else {
        return "Chilly";
    }
}

// This statement displays a message to the user, collects user input, and then stores received input in a constant called input.
const input = prompt("Enter temperature in Celsius:");

// This statement takes the received input, uses the non-default Number constructor to construct a number passing our input in as an argument which,
// in other words, attempts to convert the input into a number. The converted value is then assigned to a constant called celsius.
const celsius = Number(input);

// This statement is a conditional check used to prevent bad input from being passed into the classifyTemperature function. The first if portion uses
// a method of the Number class, ".isNaN" to test to see if celsius is not a number post conversion. If the user gave bad input, following the attempted
// conversion on line 32, we would see a NaN value here. The NaN would be caught be the if statement and an error message would be displayed to the console
// followed by the end of this script.
if (Number.isNaN(celsius)) {
    console.log("Error: Please enter a valid number.");
} else {
    // If the input is a Number, execution of the script will enter the else block, and the classifyTemperature function will be called passing
    // the validated input as an argument. The result of this function, a string, is then stored in the constant called classification.
    const classification = classifyTemperature(celsius);

    // This statement prints the final output temperature category and the hard coded string seperated by a space to the console for the user.
    console.log("The temperature is:", classification);
}