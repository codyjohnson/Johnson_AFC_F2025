// script.js
// Name: Cody Johnson
// Task8 - Shopping List Operations

// The following statement creates an array of three String values and assigns the created array to a variable called shoppingList. This array serves as
// the starting shopping list for this script.
let shoppingList = ["eggs", "butter", "flour"];

// This block of code defines an arrow function that has two parameters and assigns the function to a constant called modifyItem. This function takes an array,
// a new item, and then pushes the new item on the array. Pushing onto the array means that the new item will be placed at the end of the array at index 3.
// Lastly, this function displays the adjusted array back to the user in the console.
const modifyItem = (list, newItem) => {

    // This statement performs a push operation on the array passed in as an argument. The pushed item is the second argument received by the function.
    // The new item will be placed at the end of the array.
    list.push(newItem);

    // This statement displays the updated array along with a hard-coded string to the user in the console seperated by a space.
    console.log("Updated shopping list:", list);
};

// This statement displays a String to the user, collects user input, and then stores the input to a constant called userItem.
const userItem = prompt("Enter a new item to add to the shopping list:");

// The below if statement is used to check for an empty string using the ! (not) operator. If an empty String is detected, an error message is provided to the
// user via the console.
if (!userItem) {
    console.log("Error: You must enter a valid item.");
} else {
    // If a valid String has been provided, the else clause will execute. This statement calls on modifyItem's arrow function defined on lines 12 - 20. It
    // passes in the hard-coded starter array and a validate new item to add received from the user.
    modifyItem(shoppingList, userItem);
}