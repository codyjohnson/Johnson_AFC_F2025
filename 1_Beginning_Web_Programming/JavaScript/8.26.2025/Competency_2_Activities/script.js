const prompt = require('prompt-sync')({ sigint: true })

// variables
//
// let num1 = "7";
// let num2 = 7;
//
// let numArr = new Array(5);
//
// console.log(num1);
// console.log(num2);
//
// let unParsed = "234test";
// let parsed = parseInt(unParsed);
// console.log(parsed);
//
// let num3 = 0;
//
// console.log(" " == 0);
// console.log("" == 0);
// console.log("0.0" == 0);
// console.log("0.1" == 0.1);
// console.log(null == undefined);
//console.log("2" + 2);
//
//*******************************************************************************************************************************
//
//Activity 1: Variable Declaration
// Write a program that:
//     Declares a variable using let
//     Assigns it a string value
//     Logs it to the console
{
    let name = "Cody"
    console.log(name);
}
//Activity 2:
// 1. Write a program that takes a user input as a string and extracts the numerical value.
// 2. Write a program that extracts a portion of a string based on user-specified start and end indexes.
// 3. Write a program that checks if a specific word exists in a sentence and returns the index where it starts.
{
    let userInput = "1234";
    console.log(userInput);
    let number = Number(userInput);
    console.log(number);
}
{
    let userInput = "abc1234acc";
    let number = parseInt(userInput.slice(3,7));
    console.log(number)
}
{
    let sentence = "Write a program that checks if a specific word exists in a sentence and returns the index where it starts.";
    let startIndex = sentence.indexOf("returns");
    console.log(startIndex);
}
//Activity 3:
//Write a program that checks if a number is even or odd.
{
    let evenNum = 8;
    let oddNum = 7;
    function evenCheck(number) {
        return number % 2 === 0;
    }

    console.log(evenCheck(evenNum));
    console.log(evenCheck(oddNum));
}
//Activity 4:
//Write a program that:
//Uses a switch statement to log a message based on a user’s favorite fruit
//Uses a ternary operator to check if the fruit is available first.
{
    let fruit = ["apple", "banana", "orange", "cherry", "grape"];
    console.log(fruit.includes("banana") ? "yes" : "no");

    let favFruit = "banana";

    switch(favFruit) {
        case fruit[0]:
            console.log(favFruit + " is your favorite fruit.");
            break;
        case fruit[1]:
            console.log(favFruit + " is your favorite fruit.");
            break;
        case fruit[2]:
            console.log(favFruit + " is your favorite fruit.");
            break;
        case fruit[3]:
            console.log(favFruit + " is your favorite fruit.");
            break;
        case fruit[4]:
            console.log(favFruit + " is your favorite fruit.");
            break;
    }
}
//Iterations, Arrays, and Objects
//ACTIVITY
// Create an array
let students = ["Alice", "Bob", "Charlie"];

// Add a new student, Diana, to the end of the array 🡺 ["Alice", "Bob", "Charlie", "Diana"]
students.push("Diana");
console.log(students);

// Remove the last student from the array 🡺 ["Alice", "Bob", "Charlie"]
students.pop();
console.log(students);

// Add a new student, Eve, to the beginning of the array 🡺 ["Eve", "Alice", "Bob", "Charlie"]
students.unshift("Eve");
console.log(students);

// Remove the first student from the array 🡺 ["Alice", "Bob", "Charlie"]
students.shift();
console.log(students);

//
//ACTIVITY
// Step 1: Start with an array of names with random casing
let students1 = ["dOnaLD", "aLICE", "BoB"];

// Step 2: Add your name to the array
students1.push("Cody");
console.log(students1);

// Step 3: Sort the array in descending order (case insensitive)
students1.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(students1);

// Step 4: Check if your name exists in the array (case insensitive)
let myName = "Cody";
let match = students1.find(a => a.toLowerCase() === myName.toLowerCase());
console.log(match);

//ACTIVITY
let person = {
    name: "Walter White",
    age: 50,
    family: ["Skylar", "Flynn", "Holly"],
    city: "Albuquerque",
    smart: true,
    associates: {
        friend: "Jesse",
        enemy: "Gus"
    },
    hobbies: "Cooking"
};
// How would you retrieve the age of the person?
console.log(person.age);

// How would you retrieve "Jesse" from the person object?
console.log(person.associates.friend);

// How would you retrieve the name of the enemy?
console.log(person.associates.enemy);

// How would you retrieve ”Holly" from the person object?
console.log(person.family[2]);

//Activity: Create a program to display the current time and day of the week.
let date = new Date();
console.log("Day: " + date.getDay() + "\nTime: " + date.getTime());

//HANDS-ON CODING CHALLENGE
// • • Write a program that:
//
// - Creates an array of dates
// - Loops through the array to print each date in a readable format
// - Adds a property to an object dynamically
const dateArr = Array();

    for (let i = 0; i < 10; i++) {
        dateArr.push(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
    }

    for (let date of dateArr) {
        console.log(`Date: ${date}]`);
        date.newProperty = "Test";
        console.log(date.newProperty);
    }

//Activity: Write a named and anonymous function to calculate the square of a number.
function squareNamed(num) {
        return num * num;
}

let squareAnon = function(num) {
        return num * num;
}

console.log(squareNamed(9));
console.log(squareAnon(9));

//Activity: Convert a multi-line function to an implied return fat arrow function.
function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

const addOneLine = (num1, num2) => {return num1 + num2};

console.log(add(9,7));
console.log(addOneLine(9,7));

//Questions:
//
//When would you use a traditional function vs. a fat arrow function?
//Traditional functions are used for more complex functions. Fat arrow functions can be used for single expression functions.

//What are the advantages of implied returns?
//Implied return functions can reduce the amount of code you need to write for simple functions.

//How do you handle multiple parameters in fat arrow functions?
//To include multiple parameters in a fat arrow function, you include the parameters in parentheses seperated by commas.

//HANDS-ON CODING CHALLENGE
//Task:
//Write a traditional function to calculate the area of a rectangle.
function rectangleArea(length, width) {
    return length * width;
}

console.log(rectangleArea(2,5));

//Convert the function to a fat arrow function.
const rectangleArea2 = (length, width) => {return length * width};

console.log(rectangleArea2(2,5));

//Use implied return to further simplify the function.
const rectangleArea3 = (length, width) => length * width;

console.log(rectangleArea3(2,5));























