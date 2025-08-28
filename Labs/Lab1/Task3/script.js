// script.js
// Name: Cody Johnson
// Task3 - Favorite Color Selector

// Program initialization step that creates a starting array of colors stored as String values. The created array is then stored with the variable "colors".
let colors = ["red", "blue", "green"];

// Named function called "addColor(colorArray)". This function has one parameter and expects an array.
// The function is used to modify the starting array and display the new array to the user.
function addColor(colorArray) {
    // Displays text to the user, receives input form the user via the keyboard and stores the received input in a constant called newColor.
    const newColor = prompt("Enter a color to add:");

    // A built-in function called "unshift" is accessed from the colorArray parameter. Unshift is used to prepend a value into an array.
    // Passed into the unshift method is the value of newColor that was obtained on line 12 from the user. The value of newColor will be prepended into the array.
    // In other words, newColor will now be at index 0, and the pre-existing three values will all be shifted down to the right. The length of the array will now be four.
    colorArray.unshift(newColor);

    // This statement accesses the value of colorArray, and then prints a String value along with the value of colorArray to the console for the user.
    // Both arguments gets printed together seperated by a space.
    console.log("Updated colors:", colorArray);
}

// This statement calls the function called "addColor(colors)" that was defined on lines 10 - 22. As an argument, colors is passed in. "colors" was the starter array
// that was created on line 6.
addColor(colors);