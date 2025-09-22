// script.js
// Name: Cody Johnson
// Task4 - Event Countdown with Date Object

// Named function called calculateDaysUntil that has one parameter called eventDate. This function takes an event's date as input, generates today's date, subtracts them
// and then converts the difference into days. The function then returns the number of days until the event.
function calculateDaysUntil(eventDate) {
    // Creates a new Data object using the default constructor and assigns it to the constant called today.
    const today = new Date();

    // Creates a new Date object using a non-default constructor, passing in the value of eventDate received as an argument to initialize the new object.
    // The new date object is then stored with the constant called event.
    const event = new Date(eventDate);

    // This statement takes the newly created event object initialized with our input, subtracts it by the created today object, and assigns
    // the difference to a const called diff. The value assigned to diff is the difference of time from today to the event in milliseconds.
    const diff = event - today;

    // This statement converts diff's milliseconds into days. Within the parentheses, the total number of milliseconds in a day is calculated and
    // divided into the difference in milliseconds. 1000 because there are 1000 milliseconds in a second, 60 seconds in a minute, 60 minutes in an hour,
    // and 24 hours in a day. The Math.ceil function is used to round up and return the smallest integer greater than or equal to a given number.
    // The result is stored within the days constant.
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // This statement takes the final outcome, the number of days from time of calculation until the input event, measured in days, and returns it from
    // the function.
    return days;
}

// This statement displays a message to the user, collects user input, and then stores received input in the constant eventDate.
let eventDate = prompt("Enter event date (YYYY-MM-DD):");

// This statement using a regular expression to specify the required format for our user's input. The regular expression states that the format, YYYY-MM-DD,
// must be used when the user inputs their date.
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

// This statement is a while loop. The condition for the while loop takes the specified regular expression format created on line 35, compares it against
// the users input, and keeps the user within the while loop until valid input is received. When incorrect input is given, the user also received a message
// to notify them of the invalid format.
while (!dateFormat.test(eventDate)) {
    eventDate = prompt("Invalid format. Please enter date as YYYY-MM-DD:");
}

// This statement takes the user's now validated input and passes it into the calculateDaysUntil function defined on lines 7 - 28 for precessing. The
// returned value provided by the function is then stored in the constant daysRemaining.
const daysRemaining = calculateDaysUntil(eventDate);

// This statement takes the final output received from our function, and displays it to the user via console alongside a hard-coded string
// seperated by a space.
console.log("Days until the event:", daysRemaining);