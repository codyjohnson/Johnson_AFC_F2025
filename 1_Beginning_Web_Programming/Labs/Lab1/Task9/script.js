// script.js
// Name: Cody Johnson
// Task9 - Weekday Detector

// This statement is an arrow function with no parameters that is assigned to a constant called getWeekday. This function creates a new date object, calculates the current day in
// Number format, and then accesses an array to retrieve the corresponding String value for the correct day of the week. This function then returns the String value.
const getWeekday = () => {
    
    // This statement uses Date's default constructor to create a new date object. The date object is then assigned to a constant called today.
    const today = new Date();

    // This statement uses a built-in method of the Date object to grab the Number value of the current day. Possible values are 0 - 6 representing the days of the week from
    // Sunday to Saturday.
    const dayNumber = today.getDay();

    // This statement generates a hard-coded array containing String values representing the various days of the week. This array is then assigned to the constant called days.
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // This statement uses the dayNumber value obtained from the date object on line 13 to access the array and returns the corresponding String value for the current day of the week.
    return days[dayNumber];
};

// This statement calls the arrow function defined on lines 7 - 20. It then takes the String returned from the function and displays it to the console along with a 
// hard-coded String seperated by a space.
console.log("Today is:", getWeekday());