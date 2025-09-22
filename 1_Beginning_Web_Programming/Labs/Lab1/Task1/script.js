// script.js
// Name: Cody Johnson
// Lab1 - Dynamic Age Calculator

// Named function called "calculateAge". It has one parameter, "year". This function utilizes the built-in Date object and subtraction to calculate the user's age.
function calculateAge(year) {

    /* Defines a constant variable called "currentYear". A new Date object is also created and its built-in method called "getFullYear()" is used to extract
    the year attribute value from the Date object. This is important, because the year value will be used in our calculation. The value of year is then assigned to
    the "currentYear" constant.
    */
    const currentYear = new Date().getFullYear();

    /* Takes the currentYear value obtained on line 12 and subtracts the argument passed into our function, "year", from "currentYear.
    This subtraction operation results in the difference which would be the user's age. The age value is then returned from this function.
    */
    return currentYear - year;
}

// Opens up a small window, displays text to the user, then receives input from the user via the keyboard which is then stored in the constant "input".
const input = prompt("Enter your birth year (e.g., 2004):");

/* Uses the built-in "Number" class constructor to perform explicit type conversion. This type conversion changes the user String input into a number format if a numerical
   value was provided by the user. The calculated new value is then assigned to the constant "birthYear".
*/
const birthYear = Number(input);

/* Conditional check with a logical OR statement that checks if the input provided from the user was null, or if the number conversion failed due to the user entering
   a value that was not a number. The else block of code will only be entered if the input provided was not null and the number conversion was successful.
 */
if (input === null || Number.isNaN(birthYear)) {
    /* This statement prints a message to the console for the user if the input provided was null, or if the number conversion failed due to the user entering
       a value that was not a number. This message informs the user that they did not enter the required numerical value.
     */
    console.log("No valid year provided.");
} else {
    /* This else statement executes only if not caught by the if statement on line 31. Within this statement, the birthYear value is passed as an argument into the
       calculateAge function that was defined on lines 6 - 18. The function then returns a number which is assigned to the age constant.
     */
    const age = calculateAge(birthYear);

    // This statement accesses the value of the age constant, and then prints a String value along with the age value to the console for the user.
    // Both arguments gets printed together seperated by a space.
    console.log("Your age is:", age);
}