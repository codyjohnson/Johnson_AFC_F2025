// script.js
// Name: Cody Johnson
// Task7 - Grade Classification

// This block of code is the defining of an arrow function with one parameter, grade that is assigned to the constant called classifyGrade. This function
// uses a laddered ternary operator approach to classify provided numerical grades into a letter grade category. The letter grade is implicitly returned
// from the function.
const classifyGrade = (grade) =>
    // The below segment of code is a laddered sequence of ternary operators used to convert Number grades into a String value representing the letter grade.
    // In parentheses are the conditional checks, the String values following their respective parentheses are the results of conditions evaluated to be true.
    // Anything after the colon is what is executed next if the evaluation is false. Higher grades are caught as true towards the beginning. Lower grades
    // bubble down to the bottom of the conditional checks. The function definition completes on line 17 and implicitly returns the appropriate letter grade.
    (grade >= 90) ? "A" :
        (grade >= 80) ? "B" :
            (grade >= 70) ? "C" :
                (grade >= 60) ? "D" :
                    "F";

// This statement displays a String to the user, collects user input, and then stores the input in a constant called input.
const input = prompt("Enter a grade (0-100):");

// This statement uses Number's non-default constructor to perform coercion on the input attempting to turn it into a Number. The result is stored in
// a constant called grade.
const grade = Number(input);

// This if statement is used to catch failed Number conversations. If bad input was received, this if statement will evaluate to true and an error message
// will be displayed to the user via the console.
if (Number.isNaN(grade)) {
    console.log("Error: Please enter a valid number.");
} else {
    // If the Number conversion was successful, the else statement will execute. On line 32, the validated input is passed into the arrow function called
    // classifyGrade defined on lines 8 - 17. The results of the function are stored in a constant called classification. On line 34, the final results
    // and a hard-coded String are displayed to the user via the console seperated by a space.
    const classification = classifyGrade(grade);
    console.log("The grade classification is:", classification);
}