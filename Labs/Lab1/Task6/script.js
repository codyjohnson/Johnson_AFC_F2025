// script.js
// Name: Cody Johnson
// Task6 - Student Array Operations

// This block of code defines an array called students. The array is initialized with three objects. Each object has two attributes, name, and age.
// Name is a string value and age is a Number.
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 18 }
];

// This block of code defines an arrow function and assigned it to the constant updateStudentAge. This function takes one parameter called array.
// Since this is an arrow function, it is not hoisted and can only be called in the script post declaration. This function is used in this script to
// take our hardcoded array, prompt the user for the name of an existing student, validate that input, search the array for the student by performing
// a series of case-insensitive comparisons, and then prompting the user for a new age value. Once received, the function takes the new age input,
// validates it, updated the age of that student, and then displays the updated array in the console for the user.
const updateStudentAge = (array) => {

    // This statement displays a string for the user, collects user input, and then assigns that input to a variable called studentName.
    let studentName = prompt("Enter the student's name to update:");

    // This statement takes the provided array argument, provided name input, and searches the array iteratively performing case-insensitive comparisons
    // to find a match. Strict equality is used here, so value and type must be the same."s" is used to symbolize each element of the array and the name
    // attribute of each "s" is accessed using dot notation. The results of the search are then assigned to a variable called student.
    let student = array.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    // Guard clause used to catch an unsuccessful search of the array. If no student was found, this code block will print an error message to the console
    // and then return from the function.
    if (!student) {
        console.log("Error: Student not found.");
        return;
    }

    // Assuming the script made it this far, the array search was successful. This statement then displays a string to the user, prompts them for an age
    // value, converts the input to a Number using Number's non-default constructor, and then assigns that Number to a variable called newAge.
    let newAge = Number(prompt("Enter the new age:"));

    // Guard clause used to catch bad input received from the new age prompt. If the Number coercion failed, this statement will print an error message
    // to the user and then return from the function.
    if (Number.isNaN(newAge)) {
        console.log("Error: Age must be a number.");
        return;
    }

    // This statement accesses the age attribute of the match found on line 26 and assigns the new age value. We are able to access this value here
    // without interfacing directly with the array because a reference to our match was stored in the student variable on line 26.
    student.age = newAge;

    // This statement displays a hard-coded string and the updated array to the console seperated by a space.
    console.log("Updated students:", array);
};

// This is the call to the arrow function defined above on lines 18 - 52. The function is given the argument students. students is the hardcoded array
// that was initialized at the beginning of the script.
updateStudentAge(students);