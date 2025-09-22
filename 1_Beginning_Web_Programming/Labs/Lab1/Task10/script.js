// script.js
// Name: Cody Johnson
// Task10 - How Long Until Graduation

// This statement is an arrow function with no parameters. This function creates a new Date object using the default constructor and then returns the object back
// from the function. The function is stored with the constant called getToday.
const getToday = () => {
    return new Date();
};

// Calls the getToday arrow function to create and return a new Date object. The new Date object is then assigned to a constant called today.
const today = getToday();

// Line 15 creates an array containing String values for each day of the week. The array is then assigned to a constant called days. On line 16, the array is accessed with an
// index determined by the Number day value returned from the getDay function. The accessed String is then stored in the constant called weekday.
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = days[today.getDay()];

// Line 20 creates a hard-coded array containing String values for each month of the year. Line 22 extracts the Number year value using the getFullYear function. Line 23 accesses
// the month array using the numerical value returned from getMonth to get a month String. Line 25 uses the getDate function to return the calendar date for today.
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const year = today.getFullYear();
const month = months[today.getMonth()];
const day = today.getDate();

// The below is an arrow function with one parameter. This function takes the day of the month in Number format and using a combination of an if statement and a switch to determine
// the appropriate suffix to postpend onto the day of the month.
const getSuffix = (n) => {
    if ([11, 12, 13].includes(n % 100)) return "th";
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};

// This statement gathers values from each of the initialized variables and string them together in a readable format.
const formattedDate = year + ", " + month +  " " + day + getSuffix(day);

// Lines 43 and 44 print the formatted day of the week and date to the user in the console.
console.log("Today is:", weekday);
console.log("Formatted date:", formattedDate);

// Creates a new Date object using Date's non-default constructor passing in a String value representing the graduation day of the course. Lines 49 - 50 find the difference between
// today and graduation day in milliseconds. Those milliseconds are then converted to days and rounded up to the nearest integer value.
const graduationDate = new Date("2025-11-13");

const diff = graduationDate - today;
const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));

// This statement takes daysRemaining's value and concatenates it with a hard-coded String before displaying the completed message to the user in the console.
console.log("And you have " + daysRemaining + " days left in this web design program until graduation.");