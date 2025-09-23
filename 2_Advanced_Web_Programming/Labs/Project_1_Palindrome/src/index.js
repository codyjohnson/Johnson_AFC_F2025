/*Author: Cody Johnson*/
/*Assignment: Lab 1*/
/*Date: 20250923*/

//Function that takes one string input, checks to see if the string given
//is a palindrome and returns true or false.
module.exports.isPalindrome = (inputString) => {

    //Checks to make sure the provided argument is a string.
    if (typeof inputString !== "string") {
        return false;
    }

    //Special case: Returns true for empty strings since they do not
    //violate the rules for being considered a palindrome.
    if (inputString === "") {
        return true;
    }

    //Takes input string, removes leading/trailing spaces, and makes the entire string
    //lower case.
    inputString = inputString.trim().toLowerCase();

    //Regex pattern to check for special characters.
    const specialCharacters = /[^a-zA-Z0-9]/;

    //New string variable that will be used when rebuilding the string value
    //without special characters.
    let newString = "";

    //For-loop that strips out special characters and internal spaces from the input string.
    for (let i = 0; i < inputString.length; i++) {
        if (!specialCharacters.test(inputString[i])) {
            newString += inputString[i];
        }
    }

    //For-loop that performs palindrome value comparison tests. Loop will
    //exit early when determined that the string is not a palindrome.
    for (let j = 0; j < newString.length / 2; j++) {
        if (newString.charAt(j) !== newString.charAt(newString.length - 1 - j)) {
            return false;
        }
    }

    //Returns true for string inputs that make it through the palindrome test for-loop without exiting.
    return true;
}